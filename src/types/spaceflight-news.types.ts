export interface SpaceflightNewsState {
  articles: SpaceflightNewsArticle[] | null
  blogs: SpaceflightNewsArticle[] | null
  reports: SpaceflightNewsReport[] | null
}

export interface SpaceflightNewsArticle {
  readonly id: number
  readonly featured?: boolean
  readonly title: string
  readonly url: string
  readonly imageUrl: string
  readonly newsSite: string
  readonly summary: string
  readonly publishedAt: string
  readonly launches: SpaceflightEvent[]
  readonly events: SpaceflightEvent[]
}

export type SpaceflightNewsArticleType = 'articles' | 'blogs'

export interface SpaceflightNewsReport {
  readonly id: number
  readonly title: string
  readonly url: string
  readonly imageUrl: string
  readonly newsSite: string
  readonly summary: string
  readonly publishedAt: string
}

interface SpaceflightEvent {
  readonly id: string
  readonly provider: string
}
