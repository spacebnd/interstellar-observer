import { AxiosRequestConfig } from 'axios'
import { ApiResponse, makeAxiosRequest } from '@/api/axios'
import { Satellite, SatelliteShort } from '@/types/iss.types'

const configDefaults: AxiosRequestConfig = {
  // Where the International Space Station at
  url: 'https://api.wheretheiss.at/v1/satellites',
  method: 'get',
  params: {},
}

export default {
  fetchSatellites(): ApiResponse<SatelliteShort[]> {
    const config = { ...configDefaults }

    return makeAxiosRequest(config)
  },
  fetchSatellite(satelliteId: number): ApiResponse<Satellite> {
    const config = { ...configDefaults }
    config.url += `/${satelliteId}`

    return makeAxiosRequest(config)
  },
  async fetchIss(): Promise<Satellite | Error | undefined> {
    const [satellitesError, satellites] = await this.fetchSatellites()
    if (satellitesError) {
      return satellitesError
    } else if (satellites) {
      const issShortInfo = satellites.find((item: SatelliteShort) => item.name === 'iss')
      if (issShortInfo) {
        const [issError, iss] = await this.fetchSatellite(issShortInfo.id)
        if (issError) {
          return issError
        } else if (iss) {
          return iss
        }
      }
    }
  },
}
