function Input() {
  return (
    <form className='flex justify-between w-full mt-10'>
      <input type='text' placeholder='Type a breed' className='w-full bg-gray-100 px-1 rounded-md outline-none' autoFocus />
      <button type='submit' className='flex gap-2 bg-brand py-2 px-4 rounded-md text-white'>
        <img src='/public/search-icon.svg' alt='search icon' />
        Search
      </button>
    </form>
  )
}

export default Input
