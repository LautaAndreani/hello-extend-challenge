type Props = {
  breeds: string[] | undefined
}

function Gallery({ breeds }: Props) {
  if (breeds?.length) {
    return (
      <div className='mt-2 grid md:grid-cols-3 grid-cols-1 grid-rows-4 gap-10'>
        {breeds.map((breed) => {
          return (
            <div className='container relative' key={breed}>
              <img
                src={breed}
                className='min-h-[250px] max-h-[250px] min-w-[160px] object-cover w-full rounded-md hover:scale-105 transition'
                alt='breed image'
              />
              <button className='outline-none absolute bottom-0 right-3 text-gray-200 text-3xl drop-shadow-xl'>♥</button>
            </div>
          )
        })}
      </div>
    )
  }
  return <p className='text-center mt-4'>Search breeds 🐶</p>
}

export default Gallery
