import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { SolarSystemDataResponse } from '@/types/solar-system-data.types'

const configDefaults: AxiosRequestConfig = {
  // The Solar System OpenData
  url: 'https://api.le-systeme-solaire.net/rest/bodies/',
  method: 'get',
  params: {},
}

export default {
  fetchSolarSystemBodies(): ApiResponse<SolarSystemDataResponse> {
    const config = { ...configDefaults }

    return makeAxiosRequest(config)
  },
}
