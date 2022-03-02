export interface NasaDONKIState {
  messages: DONKIMessage[] | null
}

export interface DONKIMessage {
  readonly messageType: DONKIMessageType
  readonly messageID: string
  readonly messageURL: string
  readonly messageIssueTime: string
  readonly messageBody: string
}

type DONKIMessageType =
  | 'Report'
  | 'CME' // Coronal Mass Ejection
  | 'GST' // Geomagnetic Storm
  | 'IPS' // Interplanetary Shock
  | 'FLR' // Solar Flare
  | 'SEP' // Solar Energetic Particle
  | 'MPC' // Magnetopause Crossing
  | 'RBE' // Radiation Belt Enhancement
  | 'HSS' // Hight Speed Stream
