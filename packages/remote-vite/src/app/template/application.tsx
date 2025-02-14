import { useState } from 'react'
import { SuperButton } from '../../entities/super-button/SuperButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Remote App</h1>
      <div>
        <SuperButton />
      </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
