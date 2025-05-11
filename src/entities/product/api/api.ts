import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "@entities/product/types/Product";

import mockProducts from "../../../assets/products.json";

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
  }),
});

// Export hooks for usage in components
export const { useGetProductsQuery } = api;
