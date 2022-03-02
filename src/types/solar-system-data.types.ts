export interface SolarSystemDataState {
  bodies: SolarSystemBody[] | null
}

export interface SolarSystemDataResponse {
  readonly bodies: SolarSystemBody[]
}

export interface SolarSystemBody {
  readonly id: string
  readonly name: string
  readonly englishName: string
  readonly isPlanet: boolean
  readonly moons: SolarSystemBodyMoon[]
  readonly semimajorAxis: number
  readonly perihelion: number
  readonly aphelion: number
  readonly eccentricity: number
  readonly inclination: number
  readonly mass: {
    readonly massValue: number
    readonly massExponent: number
  }
  readonly vol: {
    readonly volValue: number
    readonly volExponent: number
  }
  readonly density: number
  readonly gravity: number
  readonly escape: number
  readonly meanRadius: number
  readonly equaRadius: number
  readonly polarRadius: number
  readonly flattening: number
  readonly dimension: string
  readonly sideralOrbit: number
  readonly sideralRotation: number
  readonly aroundPlanet: {
    readonly planet: string
    readonly rel: string
  }
  readonly discoveredBy: string
  readonly discoveryDate: string
  readonly alternativeName: string
  readonly axialTilt: number
  readonly avgTemp: number
  readonly mainAnomaly: number
  readonly argPeriapsis: number
  readonly longAscNode: number
  readonly bodyType: SolarSystemBodyType
  readonly rel: string
}

interface SolarSystemBodyMoon {
  readonly moon: string
  readonly rel: string
}

type SolarSystemBodyType = 'Star' | 'Planet' | 'Dwarf Planet' | 'Asteroid' | 'Comet' | 'Moon'
