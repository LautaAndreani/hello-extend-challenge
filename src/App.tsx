import { useEffect, useState } from 'react'

import { api } from './api/api'
import Favorites from './components/Favorites'

import Gallery from './components/Gallery'
import Input from './components/Input'

function App() {
  const [breeds, setBreeds] = useState<string[] | undefined>([])
  const [input, setInput] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input) return
    const breeds = await api.getBreedByName(input.toLowerCase())

    return setBreeds(breeds?.message)
  }

  function handleFavorites(breed: string) {
    if (favorites.includes(breed)) return setFavorites((prev) => prev.filter((breedFavorite) => breedFavorite !== breed))
    return setFavorites([...favorites, breed])
  }

  useEffect(() => {
    const getFavoritesStorage = JSON.parse(localStorage.getItem('favorites') as string)
    if (getFavoritesStorage) setFavorites(getFavoritesStorage)
  }, [])

  useEffect(() => {
    if (favorites.length) return localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return (
    <div className='w-full xl:w-3/4 w- m-auto min-h-screen py-10 px-4 lg:px-20'>
      <div className='flex justify-between w-full items-center'>
        <h1 className='text-3xl font-bold'>Dog Breeds</h1>
        <p className='text-red text-3xl'>♥</p>
      </div>
      <Input handleSubmit={handleSubmit} setInput={setInput} />
      {breeds?.length ? (
        <Gallery breeds={breeds} handleFavorites={handleFavorites} favorites={favorites} />
      ) : (
        <p className='text-center mt-4'>Search breeds 🐶</p>
      )}
      <hr className='mt-2' />
      {favorites.length ? (
        <Favorites favorites={favorites} handleFavorites={handleFavorites} />
      ) : (
        <p className='text-center mt-4'>Here you can see your favorites 💗</p>
      )}
    </div>
  )
}

export default App
