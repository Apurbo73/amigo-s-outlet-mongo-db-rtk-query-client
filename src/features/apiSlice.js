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
      providesTags: ["singleProduct"]
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["all", "singleProduct"]
    }),
    //add to cart:
    addToCart: builder.mutation({
      query: data => ({
        url: `/cart`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["cartProducts"]
    }),
    // get all products added to cart:
    getCartList: builder.query({
      query: () => `/cart`,
      providesTags: ["cartProducts"]
    }),
    //remove from cart:
    removeFromCart: builder.mutation({
      query: id => ({
        url: `/cart/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["cartProducts"]
    })
  })
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useAddToCartMutation,
  useGetCartListQuery,
  useRemoveFromCartMutation
} = apiSlice;
