import { defineStore } from 'pinia'

export const useTwitterNewsStore = defineStore('twitterNews', {
  state: () => ({}),
  getters: {},
  actions: {
    async reloadTwitterWidget(parentElement?: HTMLElement): Promise<void> {
      await window.twttr.widgets.load(parentElement ? parentElement : null)
    },
  },
})
