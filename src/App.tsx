import { useState } from 'react'

import { api } from './api/api'

import Gallery from './components/Gallery'
import Input from './components/Input'

function App() {
  const [breeds, setBreeds] = useState<string[] | undefined>()

  let timeout: any
  async function handleChange(breed: string) {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      try {
        const breeds = await api.getBreedByName(breed)
        return setBreeds(breeds.message)
      } catch (error) {
        if (error instanceof Error) return console.error(error.message)
      }
    }, 500)
  }

  return (
    <div className='w-full xl:w-1/2 m-auto min-h-screen py-10 px-4 lg:px-20'>
      <div className='flex justify-between w-full items-center'>
        <h1 className='text-3xl font-bold'>Dog Breeds</h1>
        <p className='text-red text-3xl'>♥</p>
      </div>
      <Input handleChange={handleChange} />
      <Gallery breeds={breeds} />
    </div>
  )
}

export default App
