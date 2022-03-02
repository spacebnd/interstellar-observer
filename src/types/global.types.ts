import { TwitterWidget } from '@/types/twitter-news.types'

declare global {
  interface Window {
    readonly twttr: TwitterWidget
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly $twttr: TwitterWidget
  }
}
