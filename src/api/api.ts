export type Breed = {
  message: string[]
  status: string
}

export const api = {
  getBreedByName: async (breed: string): Promise<Breed | undefined> => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
    if (!response.ok) return

    const data = await response.json()
    return data
  },
}
