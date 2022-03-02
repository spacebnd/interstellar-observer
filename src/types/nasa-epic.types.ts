import { XYZCoordinate } from '@/types/common.types'

export interface NasaEPICState {
  lastDatePhotos: EPICPhoto[] | null
  selectedDatePhotos: EPICPhoto[] | null
}

export interface EPICPhoto {
  readonly identifier: string
  readonly caption: string
  readonly image: string
  readonly version: string
  readonly centroid_coordinates: EPICCentroidCoordinates
  readonly dscovr_j2000_position: XYZCoordinate
  readonly lunar_j2000_position: XYZCoordinate
  readonly sun_j2000_position: XYZCoordinate
  readonly attitude_quaternions: EPICAttitudeQuaternions
  readonly date: string
  readonly coords: EPICCoords
}

interface EPICCoords {
  readonly centroid_coordinates: XYZCoordinate
  readonly dscovr_j2000_position: XYZCoordinate
  readonly lunar_j2000_position: XYZCoordinate
  readonly sun_j2000_position: XYZCoordinate
  readonly attitude_quaternions: EPICAttitudeQuaternions
}

interface EPICCentroidCoordinates {
  readonly lat: number
  readonly lon: number
}

interface EPICAttitudeQuaternions {
  readonly q0: number
  readonly q1: number
  readonly q2: number
  readonly q3: number
}
