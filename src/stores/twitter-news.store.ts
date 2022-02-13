import { defineStore } from 'pinia'

export const useStore = defineStore('twitter-news', {
  state: () => ({}),
  getters: {},
  actions: {
    async reloadTwitterWidget(parentElement?: HTMLElement): Promise<void> {
      await window.twttr.widgets.load(parentElement ? parentElement : null)
    },
  },
})
