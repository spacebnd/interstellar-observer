export interface TwitterWidget {
  readonly events: {
    readonly bind: () => void
    readonly unbind: () => void
    readonly trigger: () => void
  }
  readonly init: boolean
  readonly ready: () => void
  readonly widgets: {
    readonly createDMButton: () => void
    readonly createFollowButton: () => void
    readonly createGridFromCollection: () => void
    readonly createHashtagButton: () => void
    readonly createMentionButton: () => void
    readonly createMoment: () => void
    readonly createPeriscopeOnAirButton: () => void
    readonly createShareButton: () => void
    readonly createTimeline: () => void
    readonly createTweet: () => void
    readonly createTweetEmbed: () => void
    readonly createVideo: () => void
    readonly load: (container?: HTMLElement | null) => void
  }
}
