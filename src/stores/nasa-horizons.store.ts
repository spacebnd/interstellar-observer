import { defineStore } from 'pinia'
import { NasaHorizonsState } from '@/types/nasa-horizons.types'
import nasaHorizonsApi from '@/api/nasa-horizons.api'

export const useHorizonsStore = defineStore('nasaHorizons', {
  state: () =>
    ({
      data: null,
    } as NasaHorizonsState),
  getters: {},
  actions: {
    async getHorizonsData(): Promise<void> {
      const [error, data] = await nasaHorizonsApi.fetchHorizonsData()
      if (error) {
        console.error(error)
      } else {
        this.data = data
      }
    },
  },
})
