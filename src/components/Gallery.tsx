function Gallery() {
  const dogs = Array.from({ length: 10 })
  return (
    <div className='mt-2 grid grid-cols-3 grid-rows-4 gap-4'>
      {dogs.map((dog) => {
        return (
          <div className='container relative'>
            <img src='https://via.placeholder.com/250' alt='' />
            <button className='outline-none absolute bottom-0 right-3 text-gray-200 text-3xl'>♥</button>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
