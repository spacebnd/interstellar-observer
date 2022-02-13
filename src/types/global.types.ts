import { TwitterWidget } from '@/types/twitter-news.types'

declare global {
  interface Window {
    twttr: TwitterWidget
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $twttr: TwitterWidget
  }
}
