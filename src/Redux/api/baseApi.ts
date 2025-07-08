import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["product"],
    endpoints: (builder) => ({
        allProducts: builder.query({
            query: () => "/products",
            providesTags: ["product"]
        }),

        singleProduct: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ["product"]
        })
    })
})


export const { useAllProductsQuery } = baseApi