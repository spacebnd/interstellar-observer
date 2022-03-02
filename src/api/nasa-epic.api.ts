import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { EPICPhoto } from '@/types/nasa-epic.types'

const configDefaults: AxiosRequestConfig = {
  // NASA Earth Polychromatic Imaging MarsRoverCamera
  url: 'https://api.nasa.gov/EPIC/api/natural',
  method: 'get',
  params: {
    api_key: process.env.VUE_APP_NASA_API_KEY,
  },
}

export default {
  fetchEarthPolychromaticCameraPhotos(date?: string): ApiResponse<EPICPhoto[]> {
    const config = { ...configDefaults }
    if (date) config.url += `/date/${date}`

    return makeAxiosRequest(config)
  },
}
