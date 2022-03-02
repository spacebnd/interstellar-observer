import { defineStore } from 'pinia'
import { SpaceflightNewsArticleType, SpaceflightNewsState } from '@/types/spaceflight-news.types'
import spaceflightNewsApi from '@/api/spaceflight-news.api'

export const useSpaceflightNewsStore = defineStore('spaceFlightNews', {
  state: () =>
    ({
      articles: null,
      blogs: null,
      reports: null,
    } as SpaceflightNewsState),
  getters: {},
  actions: {
    async getSpaceflightNewsArticles(type: SpaceflightNewsArticleType): Promise<void> {
      const [error, data] = await spaceflightNewsApi.fetchSpaceflightNewsArticles(type)
      if (error) {
        console.error(error)
      } else {
        this[type] = data
      }
    },
    async getSpaceflightNewsReports(titleContains?: string): Promise<void> {
      const [error, data] = await spaceflightNewsApi.fetchSpaceflightNewsReports(titleContains)
      if (error) {
        console.error(error)
      } else {
        this.reports = data
      }
    },
  },
})
