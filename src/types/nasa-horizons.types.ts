export interface NasaHorizonsState {
  data: HorizonsData | null
}

export interface HorizonsData {
  readonly signature: {
    readonly source: string
    readonly version: string
  }
  readonly result: string
}
