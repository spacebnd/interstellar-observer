export interface PeopleInSpaceState {
  people: Astronaut[] | null
  totalNumber: number | null
}

export interface PeopleInSpaceResponse {
  readonly people: Astronaut[]
  readonly message: string
  readonly number: number
}

interface Astronaut {
  readonly craft: string
  readonly name: string
}
