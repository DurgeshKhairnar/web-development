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

   const [orderList , setOrderList] = useState([]);


  function addItems(item) {
    console.log(item.id)
  if (!item) return;

  setItemsList(prev => {

    const alreadyExists = prev.find(
      itm => itm.id === item.id
    );

    if (alreadyExists) {
      return prev;
    }

  return [
      ...prev,
      {
        ...item,
        count: 1
      }
    ];
  });
}

    function addQuantity(idx){
      console.log(idx)
       setItemsList(prev =>
        prev.map(itm =>
          itm.id === idx
            ? {
                ...itm,
                count: itm.count + 1
              }
            : itm
        )
     );
    }

     function removeQuantity(idx){
      console.log(idx)
       setItemsList(prev =>
        prev.map(itm =>
          itm.id === idx &&  itm.count > 0
            ? {
                ...itm,
                count: itm.count - 1
              }
            : itm
        )
     );
     if( cartItemsList.find((itm) => itm.id === idx).count == 1){
        removeItem(idx)
     }
    }

   function removeItem(id){
     const removeList =  cartItemsList.filter((item) => item.id !== id );
      setItemsList(removeList)
   }

  return (
    <>
          <div className='w-full min-h-screen flex'>
            <CartItemsProvider value={{cartItemsList,addItems,removeItem,addQuantity,removeQuantity,setItemsList,
              orderList , setOrderList
            }}>
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
