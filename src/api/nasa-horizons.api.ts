import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { HorizonsData } from '@/types/nasa-horizons.types'

const configDefaults: AxiosRequestConfig = {
  // NASA Horizons System
  url: 'https://ssd.jpl.nasa.gov/api/horizons.api',
  method: 'get',
  params: {},
}

export default {
  fetchHorizonsData(): ApiResponse<HorizonsData> {
    const config = { ...configDefaults }

    return makeAxiosRequest(config)
  },
}
