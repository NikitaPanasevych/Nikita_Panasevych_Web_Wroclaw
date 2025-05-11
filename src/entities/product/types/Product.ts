export interface Product {
  id: number;
  name: string;
  price: Price;
}

export interface Price {
  main: number;
  fractional: number;
}
