export interface ISSState {
  iss: Satellite | null
}

export interface SatelliteShort {
  readonly name: string
  readonly id: number
}

export interface Satellite {
  readonly name: string
  readonly id: number
  readonly latitude: number
  readonly longitude: number
  readonly altitude: number
  readonly velocity: number
  readonly visibility: string
  readonly footprint: number
  readonly timestamp: number
  readonly daynum: number
  readonly solar_lat: number
  readonly solar_lon: number
  readonly units: string
}
