import cartReducer, {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "./slice";
import { CartState } from "../types/Cart";

const mockProduct = {
  id: 1,
  name: "Test Product",
  description: "This is a test product",
  price: {
    main: 19,
    fractional: 99,
  },
};

describe("cart reducer", () => {
  it("should return the initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual({
      items: [],
    });
  });

  it("should handle adding a new item to cart", () => {
    const initialState: CartState = { items: [] };
    const newState = cartReducer(initialState, addToCart(mockProduct));

    expect(newState.items.length).toBe(1);
    expect(newState.items[0].product).toEqual(mockProduct);
    expect(newState.items[0].quantity).toBe(1);
  });

  it("should handle adding an existing item to cart", () => {
    const initialState: CartState = {
      items: [{ product: mockProduct, quantity: 1 }],
    };
    const newState = cartReducer(initialState, addToCart(mockProduct));

    expect(newState.items.length).toBe(1);
    expect(newState.items[0].quantity).toBe(2);
  });

  it("should handle removing an item from cart", () => {
    const initialState: CartState = {
      items: [{ product: mockProduct, quantity: 2 }],
    };
    const newState = cartReducer(initialState, removeFromCart(mockProduct.id));

    expect(newState.items.length).toBe(0);
  });

  it("should handle incrementing item quantity", () => {
    const initialState: CartState = {
      items: [{ product: mockProduct, quantity: 1 }],
    };
    const newState = cartReducer(
      initialState,
      incrementQuantity(mockProduct.id),
    );

    expect(newState.items[0].quantity).toBe(2);
  });

  it("should handle decrementing item quantity when quantity > 1", () => {
    const initialState: CartState = {
      items: [{ product: mockProduct, quantity: 2 }],
    };
    const newState = cartReducer(
      initialState,
      decrementQuantity(mockProduct.id),
    );

    expect(newState.items[0].quantity).toBe(1);
  });

  it("should handle decrementing item quantity when quantity = 1", () => {
    const initialState: CartState = {
      items: [{ product: mockProduct, quantity: 1 }],
    };
    const newState = cartReducer(
      initialState,
      decrementQuantity(mockProduct.id),
    );

    expect(newState.items.length).toBe(0);
  });

  it("should handle clearing the cart", () => {
    const initialState: CartState = {
      items: [
        { product: mockProduct, quantity: 2 },
        {
          product: { ...mockProduct, id: 2, name: "Another Product" },
          quantity: 1,
        },
      ],
    };
    const newState = cartReducer(initialState, clearCart());

    expect(newState.items.length).toBe(0);
  });
});
