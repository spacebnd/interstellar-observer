export interface NasaLibraryState {
  collection: ResultSearchCollection | null
}

export interface ResultSearchCollection {
  readonly version: string
  readonly href: string
  readonly items: ResultSearchItem[]
  readonly metadata: {
    readonly total_hits: number
  }
  readonly links: ResultSearchCollectionLink[]
}

interface ResultSearchItem {
  readonly href: string
  readonly data: ResultSearchItemData[]
  readonly links: ResultSearchItemLink[]
}

interface ResultSearchItemData {
  readonly center: string
  readonly title: string
  readonly nasa_id: string
  readonly media_type: string
  readonly keywords: string[]
  readonly date_created: string
  readonly description: string
  readonly description_508: string
  readonly secondary_creator: string
  readonly photographer: string
  readonly location: string
}

interface ResultSearchItemLink {
  readonly rel: string
  readonly href: string
  readonly render?: string
}

interface ResultSearchCollectionLink {
  readonly rel: string
  readonly prompt: string
  readonly href: string
}
