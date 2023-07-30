import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <h1 className='font-bold text-lg'>Todo-App</h1>
        <p>GitHub Starter pack</p>
      </div>
    </>
  )
}

export default App
