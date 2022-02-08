import { defineStore } from 'pinia'
import nasaAPODApi from '@/api/nasa-apod.api'

export type NasaAPODState = {
  pictureData: APOD | null
}

export interface APOD {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

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
