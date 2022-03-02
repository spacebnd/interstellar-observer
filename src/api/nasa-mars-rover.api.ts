import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { MarsRover, MarsRoverName, MarsRoverPhoto } from '@/types/nasa-mars-rover.types'

const configDefaults: AxiosRequestConfig = {
  // NASA Mars MarsRover Photos
  url: 'https://api.nasa.gov/mars-photos/api/v1',
  method: 'get',
  params: {
    api_key: process.env.VUE_APP_NASA_API_KEY,
  },
}

export default {
  fetchMarsRovers(): ApiResponse<MarsRover[]> {
    const config = { ...configDefaults }
    config.url += '/rovers'

    return makeAxiosRequest(config)
  },
  fetchMarsRoverPhotos(rover: MarsRoverName, date: string): ApiResponse<MarsRoverPhoto[]> {
    const config = { ...configDefaults }
    config.url += `/rovers/${rover}/photos`
    config.params.earth_date = date

    return makeAxiosRequest(config)
  },
}
