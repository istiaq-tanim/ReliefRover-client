import { baseApi } from "../../api/baseApi";

export const reliefGoodsApi = baseApi.injectEndpoints({
      endpoints: (build) => ({
            getGoods: build.query({
                  query: () => "/get-goods"
            }),
            getGoodDetails: build.query({
                  query: (id) => `/get-goods-detail/${id}`
            }),

      })
})

export const { useGetGoodsQuery, useGetGoodDetailsQuery } = reliefGoodsApi


