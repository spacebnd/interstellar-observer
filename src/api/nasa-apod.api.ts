import { AxiosRequestConfig } from 'axios'
import { makeAxiosRequest, ApiResponse } from '@/api/axios'
import { APOD } from '@/stores/nasa-apod.store'

const configDefaults: AxiosRequestConfig = {
  url: 'https://api.nasa.gov/planetary/apod',
  params: {
    api_key: process.env.VUE_APP_NASA_API_KEY,
  },
}

export default {
  fetchAstronomyPictureOfTheDay(): ApiResponse<APOD> {
    return makeAxiosRequest({
      ...configDefaults,
      method: 'get',
    })
  },
}
