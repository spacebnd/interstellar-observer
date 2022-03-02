import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { DONKIMessage } from '@/types/nasa-donki.types'

const configDefaults: AxiosRequestConfig = {
  // NASA Space Weather Database Of Notifications, Knowledge, Information
  url: 'https://api.nasa.gov/DONKI/notifications',
  method: 'get',
  params: {
    api_key: process.env.VUE_APP_NASA_API_KEY,
  },
}

export default {
  fetchSpaceWeatherMessages(): ApiResponse<DONKIMessage[]> {
    const config = { ...configDefaults }

    return makeAxiosRequest(config)
  },
}
