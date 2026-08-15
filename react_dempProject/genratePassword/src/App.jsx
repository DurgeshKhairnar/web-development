import { useState, useCallback ,useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numAllowed,setNubAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword] = useState("");

  const passwordRef = useRef(null)

  let passwordGernrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789";
    let chara = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if(numAllowed) str += num;
    if(charAllowed) str += chara;

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
       pass += str.charAt(char)
    }
      setPassword(pass)
  }, [length, numAllowed, charAllowed,setPassword]);

    useEffect(() => {
        passwordGernrator()
    }, [length, numAllowed, charAllowed]);


    const copyPassword = () => {
      navigator.clipboard.writeText(passwordRef.current.value)
    }
  return (
    <div className="main">
      <div className="container">
        <div className="inner-container-1">
          <input
            type="text"
            placeholder="password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button 
          onClick={copyPassword}
          >copy</button>
        </div>
        <div className="inner-container-2">
          <input type="range" min="8" max="100" value={length}
          onChange={(e)=>{
            setLength(Number(e.target.value))
          }}
          />
          <span>Length {length}</span>
          <label>
            <input type="checkbox"
            onChange={
              () => setNubAllowed((prev) => !prev) 
            }
            />
            Number
          </label>
           <label>
            <input type="checkbox" 
             onChange={
              () => setCharAllowed((prev) => !prev) 
            }
            />
            Character
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
