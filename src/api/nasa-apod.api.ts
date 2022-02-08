import { AxiosRequestConfig } from 'axios'
import { makeAxiosRequest, ApiResponse } from '@/api/axios'

interface APOD {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

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
