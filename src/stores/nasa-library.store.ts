import { defineStore } from 'pinia'
import { NasaLibraryState } from '@/types/nasa-library.types'
import nasaLibraryApi from '@/api/nasa-library.api'

export const useNasaLibraryStore = defineStore('nasaLibrary', {
  state: () =>
    ({
      collection: null,
    } as NasaLibraryState),
  getters: {},
  actions: {
    async getSearchResultsCollection(query: string): Promise<void> {
      const [error, data] = await nasaLibraryApi.fetchSearchResultsCollection(query)
      if (error) {
        console.error(error)
      } else {
        this.collection = data
      }
    },
  },
})
