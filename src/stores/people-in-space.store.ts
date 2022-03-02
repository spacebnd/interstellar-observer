import { defineStore } from 'pinia'
import { PeopleInSpaceState } from '@/types/people-in-space.types'
import peopleInSpaceApi from '@/api/people-in-space.api'

export const usePeopleInSpaceStore = defineStore('peopleInSpace', {
  state: () =>
    ({
      people: null,
      totalNumber: null,
    } as PeopleInSpaceState),
  getters: {},
  actions: {
    async getPeopleInSpace(): Promise<void> {
      const [error, data] = await peopleInSpaceApi.fetchPeopleInSpace()
      if (error) {
        console.error(error)
      } else {
        this.people = data ? data.people : null
        this.totalNumber = data ? data.number : null
      }
    },
  },
})
