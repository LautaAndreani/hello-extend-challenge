type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setInput: React.Dispatch<React.SetStateAction<string>>
}
function Input({ handleSubmit, setInput }: Props) {
  return (
    <form className='flex flex-wrap gap-2 sm:flex-nowrap justify-between w-full mt-10' onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        placeholder='Type a breed'
        className='w-full bg-gray-100 sm:px-1 py-2 rounded-md outline-none'
        autoFocus
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        className='flex min-w-full justify-center items-center gap-2 bg-brand py-2 px-4 rounded-md text-white sm:min-w-[6rem] hover:bg-hover transition'
      >
        <img src='/search-icon.svg' alt='search icon' className='w-4' />
        Search
      </button>
    </form>
  )
}

export default Input
