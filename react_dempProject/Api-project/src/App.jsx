import { useState , useEffect } from 'react'
import axios from "axios";
import './App.css'

function App() {



  const [users,setUsers] = useState([]);
  const [currentPage , setCurrentPage] = useState(1)

    useEffect(() => {
      fetchApi();
  },[])

  const PAGE = 10;
  const totalPage = Math.ceil(users.length / PAGE);
  const start = currentPage * PAGE;
  const end = start - PAGE;

  console.log(`start = ${start}`)
  console.log(`end ${end}`)

  async function fetchApi(){
      const response = await axios.get('https://683ae32143bb370a86740c46.mockapi.io/Ass');
      // const data = await response.json();
      setUsers(response.data);
      console.log(response.data)
  }


    
  return (!users) ? (<><h1>Data is Loading...</h1></>) :(
    <>
        <div className='w-[1200px] mx-auto min-h-screen border border-red flex flex-col items-center justify-center'>
             <div className='h-10 w-30 flex'>{[...Array(totalPage)].map((n,idx) => (<button
             onClick={() => {
                setCurrentPage(idx + 1)
             }}
             key={idx} className='p-1 border m-1 cursor-pointer'>{idx + 1}</button>))}</div>     
              <div className='flex flex-wrap items-center justify-center w-200'>
        
                  {
                    
                    users.slice(end,start).map((items,idx) => (
                      <div className='w-30 h-30 border p-1 m-1 flex flex-col items-center justify-center' key={idx}>
                            <p>{items.id}</p>
                            <img className='w-20 h-20' src={items.avatar} alt={items.name} />
                      </div>
                    ))
                  }
              </div>
        </div>
    </>
  )
}

export default App
