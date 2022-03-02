import { defineStore } from 'pinia'
import { NasaAPODState } from '@/types/nasa-apod.types'
import nasaAPODApi from '@/api/nasa-apod.api'

export const useNasaAPODStore = defineStore('nasaAPOD', {
  state: () =>
    ({
      lastImage: null,
    } as NasaAPODState),
  getters: {},
  actions: {
    async getAstronomyPictureOfTheDay(): Promise<void> {
      const [error, data] = await nasaAPODApi.fetchAstronomyPictureOfTheDay()
      if (error) {
        console.error(error)
      } else {
        this.lastImage = data
      }
    },
  },
})
