import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "@entities/product/types/Product";

// Import the mock data
import mockProducts from "../../../assets/products.json";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/", // This will be replaced with real API URL later
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      // For now, we'll use a queryFn that returns the mock data
      queryFn: () => {
        // Simulate network delay
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: mockProducts as Product[] });
          }, 500);
        });
      },
      // When switching to real API, replace the above with:
      // query: () => 'products',
    }),
    getProductById: builder.query<Product, number>({
      // For now, we'll use a queryFn that returns a product from mock data
      queryFn: (id) => {
        const product = mockProducts.find(
          (p: Product) => p.id === id,
        ) as Product;

        // Simulate network delay
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (product) {
              resolve({ data: product });
            } else {
              reject({ error: { status: 404, data: "Product not found" } });
            }
          }, 500);
        });
      },
      // When switching to real API, replace the above with:
      // query: (id) => `products/${id}`,
    }),
  }),
});

// Export hooks for usage in components
export const { useGetProductsQuery, useGetProductByIdQuery } = api;
