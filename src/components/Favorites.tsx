import Gallery from './Gallery'

type Props = {
  favorites: string[]
  handleFavorites: (breed: string) => void
}

function Favorites({ favorites, handleFavorites }: Props) {
  return (
    <div className='mt-2'>
      <div className='flex items-center gap-2'>
        <p className='text-2xl text-red'>♥</p>
        <h2 className='font-bold text-black text-2xl'>Favorites</h2>
      </div>
      <Gallery breeds={favorites} handleFavorites={handleFavorites} favorites={favorites} />
    </div>
  )
}

export default Favorites
