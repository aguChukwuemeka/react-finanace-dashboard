import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse } from "../interfaces";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products"],
  endpoints: (builder) => ({
    getKpis: builder.query<Array<GetKpisResponse>, void>({
      query: () => "api/kpi",
      providesTags: ["Kpis"],
    }),
    getProducts: builder.query<Array<GetProductsResponse>, void>({
    query: () => "api/products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery } = api;

// http:localhost:1337/vite/api/kpis
// function removeSpaces(url: string) {
//   return encodeURIComponent(decodeURIComponent(url).replace(/\s+/g, ""));
// } 