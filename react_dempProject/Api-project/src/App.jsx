import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {

  const [users,setUsers] = useState([]);

  async function fetchApi(){
      const response = await axios.get('https://683ae32143bb370a86740c46.mockapi.io/Ass');
      // const data = await response.json();
      setUsers(response.data);
  }

  return (
    <>
        <button onClick={fetchApi}>Fetch Data </button>
        {
          users.map((items,idx) => (
              <div className="outer-container" key={idx}>
                <img src={items.avatar}></img>
                <div className="inner-container">
                    <span>{items.id}</span>
                    <h3>{items.name}</h3>
                    <h5>{items.Aa}</h5>
                </div>
              </div>
          ))
        }
    </>
  )
}

export default App
