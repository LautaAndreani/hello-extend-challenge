type Props = {
  handleChange: (breed: string) => void
}
function Input({ handleChange }: Props) {
  return (
    <form className='flex justify-between w-full mt-10'>
      <input
        type='text'
        placeholder='Type a breed'
        className='w-full bg-gray-100 px-1 rounded-md outline-none'
        autoFocus
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type='submit' className='flex items-center gap-2 bg-brand py-2 px-4 rounded-md text-white min-w-[6rem]'>
        <img src='/public/search-icon.svg' alt='search icon' className='w-4' />
        Search
      </button>
    </form>
  )
}

export default Input
