import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  return (
    <div className="main">
      <div className="container">
        <div className="inner-container-1">
          <input
            type="text"
            placeholder="password"
            readOnly
          />
          <button>copy</button>
        </div>
        <div className="inner-container-2">
          <input type="range" min="0" max="100" value={length}
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <span>Length {length}</span>
          <label>
            <input type="checkbox" />
            Number
          </label>
           <label>
            <input type="checkbox" />
            Character
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
