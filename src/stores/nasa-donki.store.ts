import { defineStore } from 'pinia'
import { NasaDONKIState } from '@/types/nasa-donki.types'
import nasaDONKIApi from '@/api/nasa-donki.api'

export const useNasaDONKIStore = defineStore('nasaDONKI', {
  state: () =>
    ({
      messages: null,
    } as NasaDONKIState),
  getters: {},
  actions: {
    async getSpaceWeatherMessages(): Promise<void> {
      const [error, data] = await nasaDONKIApi.fetchSpaceWeatherMessages()
      if (error) {
        console.error(error)
      } else {
        this.messages = data
      }
    },
  },
})
