export type Breed = {
  message: string[]
  status: string
}

export const api = {
  getBreedByName: async (breed: string): Promise<Breed> => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
    const data = await response.json()

    return data
  },
}
