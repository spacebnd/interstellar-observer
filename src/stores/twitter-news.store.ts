import { defineStore } from 'pinia'
import { TwitterNewsState } from '@/types/twitter-news.types'

export const useTwitterNewsStore = defineStore('twitterNews', {
  state: () =>
    ({
      widgetsStatus: null,
    } as TwitterNewsState),
  getters: {},
  actions: {
    loadTwitterWidgets() {
      const twitterWidgetsScript = document.createElement('script')
      twitterWidgetsScript.async = true
      twitterWidgetsScript.src = 'https://platform.twitter.com/widgets.js'
      twitterWidgetsScript.onload = () => {
        this.widgetsStatus = 'loaded'
      }
      twitterWidgetsScript.onerror = () => {
        this.widgetsStatus = 'error'
      }
      document.head.appendChild(twitterWidgetsScript)
    },
    async reloadTwitterWidget(parentElement?: HTMLElement): Promise<void> {
      await window.twttr.widgets.load(parentElement ? parentElement : null)
    },
  },
})
