export interface NasaAPODState {
  lastImage: APODImage | null
}

export interface APODImage {
  readonly copyright: string
  readonly date: string
  readonly explanation: string
  readonly hdurl: string
  readonly media_type: string
  readonly service_version: string
  readonly title: string
  readonly url: string
}
