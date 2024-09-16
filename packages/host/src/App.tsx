import { useState } from 'react'
import './App.css'
// @ts-ignore
  import { SuperButton } from '@train/remote-vite/main'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Host Vite App</h1>
      <SuperButton />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
 