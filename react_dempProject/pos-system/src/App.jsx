import { useState , useEffect} from 'react'
import { Routes , Route } from 'react-router-dom';
import './App.css'
import SideBar from './components/SideBar.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import Tables from './components/pages/Tables.jsx';
import Orders from '../src/components/pages/Orders.jsx';
import Inventory from './components/pages/Inventory/Inventory.jsx';
import Booking from './components/pages/Booking.jsx';

function App() {
   
  //  const [products, addProducts ] = useState(() => {
  //     const allProducts = localStorage.getItem('myProducts')
  //     return (allProducts) ? JSON.parse(allProducts) : [];
  //  });

  //  useEffect(() => {
  //     localStorage.setItem('myProducts',JSON.stringify(products))
  //  },[products])




  return (
    <>
            <div className='w-full min-h-screen flex'>
         
             <SideBar/>
             <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/tables' element={<Tables />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/inventory' element={<Inventory />} />
                <Route path='/booking' element={<Booking />} />  
             </Routes>
          </div>
    </>
  )
}

export default App
