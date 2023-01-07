import Gallery from './components/Gallery'
import Input from './components/Input'

function App() {
  return (
    <div className='w-1/2 m-auto min-h-screen py-10 px-20'>
      <div className='flex justify-between w-full items-center'>
        <h1 className='text-3xl font-bold'>Dog Breeds</h1>
        <p className='text-red text-3xl'>♥</p>
      </div>
      <Input />
      <Gallery />
    </div>
  )
}

export default App
