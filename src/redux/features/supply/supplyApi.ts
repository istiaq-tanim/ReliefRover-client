import { baseApi } from "../../api/baseApi";

export const supplyApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            createSupply: build.mutation({
                  query: (data) => ({
                        url: "/create-supply",
                        method: "POST",
                        body: data
                  }),
                  invalidatesTags: ["Supplies"]

            }),
            getSupply: build.query({
                  query: () => "/get-supply",
                  providesTags: ["Supplies"]
            }),
            getSingleSupply: build.query({
                  query: (id) => `/get-single-supply/${id}`,
                  providesTags: (result, error, arg) => [
                        "Supplies",
                        { type: "Supply", id: arg },
                  ]
            }),
            updateSupply: build.mutation({
                  query: ({ id, item }) => ({
                        url: `update-supply/${id}`,
                        method: "PUT",
                        body: item
                  }),
                  invalidatesTags: (result, error, arg) => [
                        "Supplies",
                        { type: "Supply", id: arg.id },
                  ]
            }),
            deleteSupply: build.mutation({
                  query: (id) => ({
                        url: `/delete-supply/${id}`,
                        method: "DELETE"
                  }),
                  invalidatesTags: ["Supplies"]
            })


      })
})

export const { useCreateSupplyMutation, useGetSupplyQuery, useDeleteSupplyMutation, useGetSingleSupplyQuery, useUpdateSupplyMutation } = supplyApi