import { defineStore } from 'pinia'
import { SolarSystemBody, SolarSystemDataState } from '@/types/solar-system-data.types'
import solarSystemDataApi from '@/api/solar-system-data.api'

export const useSolarSystemDataStore = defineStore('solarSystemData', {
  state: () =>
    ({
      bodies: null,
    } as SolarSystemDataState),
  getters: {
    getBody: (state) => {
      return (bodyId: string) => state.bodies?.find((body) => body.id === bodyId) as SolarSystemBody
    },
  },
  actions: {
    async getSolarSystemBodies(): Promise<void> {
      const [error, data] = await solarSystemDataApi.fetchSolarSystemBodies()
      if (error) {
        console.error(error)
      } else {
        this.bodies = data ? data.bodies : null
      }
    },
  },
})
