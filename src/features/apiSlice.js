import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080"
  }),
  tagTypes: ["all", "singleProduct"],
  endpoints: builder => ({
    addProduct: builder.mutation({
      query: data => ({
        url: `/products`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["all"]
    }),
    getAllProducts: builder.query({
      query: () => `/products`,
      providesTags: ["all"]
    }),
    deleteProduct: builder.mutation({
      query: id => ({
        url: `/products/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["all", "singleProduct"]
    }),
    getSingleProduct: builder.query({
      query: id => `/products/${id}`,
      providesTags:["singleProduct"]
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["all", "singleProduct"]
    })
  })
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation
} = apiSlice;
