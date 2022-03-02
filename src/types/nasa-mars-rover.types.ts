export interface NasaMarsRoverState {
  rovers: MarsRover[] | null
  photos: MarsRoverPhoto[] | null
}

export interface MarsRoverPhoto {
  readonly id: number
  readonly sol: number
  readonly camera: MarsRoverCamera
  readonly img_src: string
  readonly earth_date: string
  readonly rover: {
    readonly id: number
    readonly name: string
    readonly landing_date: string
    readonly launch_date: string
    readonly status: string
  }
}

export interface MarsRover {
  readonly id: number
  readonly name: MarsRoverName
  readonly landing_date: string
  readonly launch_date: string
  readonly status: string
  readonly max_sol: number
  readonly max_date: string
  readonly total_photos: number
  readonly cameras: MarsRoverCamera[]
}

interface MarsRoverCamera {
  readonly id: number
  readonly name: string
  readonly rover_id: number
  readonly full_name: string
}

export type MarsRoverName = 'curiosity' | 'spirit' | 'opportunity' | 'perseverance'
