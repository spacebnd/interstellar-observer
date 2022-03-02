import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { APODImage } from '@/types/nasa-apod.types'

const configDefaults: AxiosRequestConfig = {
  // NASA Astronomy Picture of the Day
  url: 'https://api.nasa.gov/planetary/apod',
  method: 'get',
  params: {
    api_key: process.env.VUE_APP_NASA_API_KEY,
  },
}

export default {
  fetchAstronomyPictureOfTheDay(): ApiResponse<APODImage> {
    const config = { ...configDefaults }

    return makeAxiosRequest(config)
  },
}
