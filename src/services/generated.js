import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GraphQLClient } from 'graphql-request'
import {BaseUrl} from '../api/api'


export const client = new GraphQLClient(BaseUrl)

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({})
})