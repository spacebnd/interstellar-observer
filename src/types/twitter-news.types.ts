export interface TwitterWidget {
  events: {
    bind: () => void
    unbind: () => void
    trigger: () => void
  }
  init: boolean
  ready: () => void
  widgets: {
    createDMButton: () => void
    createFollowButton: () => void
    createGridFromCollection: () => void
    createHashtagButton: () => void
    createMentionButton: () => void
    createMoment: () => void
    createPeriscopeOnAirButton: () => void
    createShareButton: () => void
    createTimeline: () => void
    createTweet: () => void
    createTweetEmbed: () => void
    createVideo: () => void
    load: (container?: HTMLElement | null) => void
  }
}
