import { defineStore } from 'pinia'
import nasaAPODApi from '@/api/nasa-apod.api'
import { NasaAPODState } from '@/types/nasa-apod.types'

export const useStore = defineStore('nasaAPOD', {
  state: () =>
    ({
      pictureData: null,
    } as NasaAPODState),
  getters: {},
  actions: {
    async getAstronomyPictureOfTheDay(): Promise<void> {
      const [error, data] = await nasaAPODApi.fetchAstronomyPictureOfTheDay()
      if (error) {
        console.error(error)
      } else {
        this.pictureData = data
      }
    },
  },
})
