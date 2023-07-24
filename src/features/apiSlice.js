import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080"
  }),
  endpoints: builder => ({
    addProduct: builder.mutation({
      query: data => ({
        url: `/products`,
        method: "POST",
        body: data
      })
    })
  })
});

export const { useAddProductMutation } = apiSlice;
