import { defineStore } from 'pinia'
import { MarsRoverName, NasaMarsRoverState } from '@/types/nasa-mars-rover.types'
import nasaMarsRoverApi from '@/api/nasa-mars-rover.api'

export const useNasaMarsRoverStore = defineStore('nasaMarsRover', {
  state: () =>
    ({
      rovers: [],
      photos: [],
    } as NasaMarsRoverState),
  getters: {},
  actions: {
    async getMarsRovers(): Promise<void> {
      const [error, data] = await nasaMarsRoverApi.fetchMarsRovers()
      if (error) {
        console.error(error)
      } else {
        this.rovers = data
      }
    },
    async getMarsRoverPhotos(rover: MarsRoverName, date: string): Promise<void> {
      const [error, data] = await nasaMarsRoverApi.fetchMarsRoverPhotos(rover, date)
      if (error) {
        console.error(error)
      } else {
        this.photos = data
      }
    },
  },
})
