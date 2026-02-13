import { useState } from 'react'
import './App.css'
import System from './System'

function App() {
  const [input, setInput] = useState('')

  const addSystem = () => {
    if (!input.trim()) return

    localStorage.setItem(input, JSON.stringify([]))
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
            onSubmit={(e) => e.preventDefault()}
            value={input}
          />
        </form>
        <button className="outline-1 rounded-md p-2" onClick={() => {
          addSystem()
          localStorage[input] = JSON.stringify([])
        }}>
          add habit
        </button>
      </div>
      <div>
        {Object.keys(localStorage).map((system, index) => (
          <System name={system} key={index}/>
        ))}
      </div>
    </>
  )
}

export default App
