import { useState } from 'react'
import './App.css'
import System from './System'

function App() {
  const [input, setInput] = useState('')
  const [systems, setSystems] = useState<string[]>([])

  const addSystem = () => {
    if (!input.trim()) return

    setSystems(prev => [...prev, input])
    setInput('')
  }

  return (
    <>
      <h1 className="font-black text-[30px]">systems.fyi</h1>
      <div className="flex flex-row space-x-5 justify-center mt-5">
        <form>
          <input
            type="text"
            className="outline-1 rounded-md p-2"
            placeholder="New Habit"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
        <button className="outline-1 rounded-md p-2" onClick={addSystem}>
          add habit
        </button>
      </div>
      <div>
        {systems.map((name, index) => (
          <System key={index} name={name} />
        ))}
      </div>
    </>
  )
}

export default App
