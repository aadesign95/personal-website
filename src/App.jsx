import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center '>
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
    </div>
  )
}

export default App
