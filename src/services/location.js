import {  createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query'
import { BaseUrl } from '../api/api'


export const STORE_LIST = `
  query GetStoresList($lat: Float,$long : Float) {
    StoresList(lat: $lat, long: $long) {
      name
      id
      shop_url
      image
      logo
      delivery_duration
      open_time
    }
  }
`
export const LocationService = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: BaseUrl,
  }),
  endpoints: build => ({
    StoreList: build.query({
      query: variables => ({ document: STORE_LIST, variables }),
    }),
  }),
});

export const { useStoreListQuery } = LocationService
