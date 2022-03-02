import { defineStore } from 'pinia'
import { NasaEPICState } from '@/types/nasa-epic.types'
import nasaEPICApi from '@/api/nasa-epic.api'

export const useNasaEPICStore = defineStore('nasaEPIC', {
  state: () =>
    ({
      lastDatePhotos: null,
      selectedDatePhotos: null,
    } as NasaEPICState),
  getters: {},
  actions: {
    async getEarthPolychromaticCameraPhotos(date?: string): Promise<void> {
      const [error, data] = await nasaEPICApi.fetchEarthPolychromaticCameraPhotos(date)
      if (error) {
        console.error(error)
      } else {
        if (date) {
          this.selectedDatePhotos = data
        } else {
          this.lastDatePhotos = data
        }
      }
    },
  },
})
