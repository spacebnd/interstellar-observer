import { defineStore } from 'pinia'
import { ISSState } from '@/types/iss.types'
import issApi from '@/api/iss.api'

export const useISSStore = defineStore('iss', {
  state: () =>
    ({
      iss: null,
    } as ISSState),
  getters: {},
  actions: {
    async getIss(): Promise<void> {
      const response = await issApi.fetchIss()
      if (response instanceof Error) {
        console.error(response)
      } else if (!response) {
        console.error('ISS data currently is not available')
      } else {
        this.iss = response
      }
    },
  },
})
