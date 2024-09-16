import {  useState } from 'react'
// @ts-ignore
import { SuperButton, counter } from '@train/remote-vite/main'
import { useUnit } from 'effector-react'

function App() {
  const {counting } = useUnit({
    counting: counter.$data,
  })
  console.log(counting)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Host Vite App</h1>
      <SuperButton />
      <div className="bg-orange-900 w-24">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
 