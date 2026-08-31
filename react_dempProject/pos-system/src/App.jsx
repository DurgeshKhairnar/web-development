import { useState } from 'react'
import { Routes , Route } from 'react-router-dom';
import './App.css'
import SideBar from './components/SideBar.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import Tables from './components/pages/Tables.jsx';
import Orders from './components/pages/Orders.jsx';
import Carts from './components/Carts.jsx';
import { CartItemsProvider } from './context/contextCartItems.js';


function App() {
   const [cartItemsList , setItemsList] = useState([]);

   function addItems(item){
      if(!item) return;
      const myItemList = [item,...cartItemsList]
      setItemsList(myItemList)
   }

   function removeItem(ind){
     const removeList =  cartItemsList.filter((_,index) => index !== id );
      setItemsList(removeList)
   }

  return (
    <>
          <div className='w-full min-h-screen flex'>
            <CartItemsProvider value={{cartItemsList,addItems,removeItem}}>
             <SideBar/>
             <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/tables' element={<Tables />} />
                <Route path='/orders' element={<Orders />} />
             </Routes>
             <Carts/>
            </CartItemsProvider> 
          </div>
    </>
  )
}

export default App
