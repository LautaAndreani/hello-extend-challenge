type Props = {
  breeds: string[] | undefined
  favorites: string[]
  handleFavorites: (breed: string) => void
}

function Gallery({ breeds, handleFavorites, favorites }: Props) {
  return (
    <div className='mt-2 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-4 gap-10'>
      {breeds?.map((breed) => {
        return (
          <div className={`container relative transition`} key={breed}>
            <img
              src={breed}
              className='min-h-[300px] max-h-[300px] min-w-[160px]  object-cover w-full rounded-md hover:scale-105 transition'
              alt='breed image'
            />
            <button
              className={`outline-none absolute 'text-gray-200' bottom-0 right-3 text-3xl drop-shadow-xl ${
                favorites?.includes(breed) ? 'text-red' : 'text-gray-100'
              }`}
              onClick={() => handleFavorites(breed)}
            >
              ♥
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
