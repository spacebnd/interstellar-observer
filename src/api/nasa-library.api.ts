import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { ResultSearchCollection } from '@/types/nasa-library.types'

const configDefaults: AxiosRequestConfig = {
  // NASA Image and Video Library
  url: 'https://images-api.nasa.gov/search',
  method: 'get',
  params: {},
}

export default {
  fetchSearchResultsCollection(query: string): ApiResponse<ResultSearchCollection> {
    const config = { ...configDefaults }
    config.params.q = query

    return makeAxiosRequest(config)
  },
}
