import { useState } from 'react';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';

function Inventory(){

   

    const [isTab , setTab ] = useState(true);



    function handleTab(){
        setTab(p => !p);
    }

    return (
        <div className='w-full p-2 bg-gray-50'>
                <h1 className='font-bold text-3xl'>Inventory</h1>
                <p>Manage your categories and products</p>
              <div className='flex justify-between w-60 my-4'>
                    <button 
                    onClick={handleTab}
                    className={`${isTab ? 'border-b-3 w-30 font-bold border-amber-500 p-2 text-amber-600' :'p-2 text-black'} `}>Product</button>
                    <button 
                    onClick={handleTab}
                    className={`${isTab ? 'p-2 text-black' : 'border-b-3 w-30 border-amber-500 p-2 text-amber-600 font-bold'} `}>Category</button>
              </div>
             {
                isTab ? <AddProduct /> : <AddCategory/>
             }
        </div>
    )
}

export default Inventory;