import { useState } from 'react';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';

function Inventory(){

   

    const [isTab , setTab ] = useState('Product');



    function handleTab(tab){
        setTab(tab);
    }

    return (
        <div className='w-full p-2 bg-gray-50'>
                <h1 className='font-bold text-3xl'>Inventory</h1>
                <p>Manage your categories and products</p>
              <div className='flex justify-between w-60 my-4'>
                    <button 
                    onClick={() => {
                        handleTab('Product');
                    }}
                    className={`${(isTab === 'Product') ? 'border-b-3 w-30 font-bold border-amber-500 p-2 text-amber-600' :'p-2 text-black'} `}>Product</button>
                    <button 
                    onClick={() => {
                        handleTab('Category');
                    }}
                    className={`${(isTab === 'Category') ?'border-b-3 w-30 font-bold border-amber-500 p-2 text-amber-600' :'p-2 text-black'} `}>Category</button>
              </div>
              {(isTab === 'Product') && <AddProduct />}
              {(isTab === 'Category') && <AddCategory/>}
             {/* {
                isTab ? <AddProduct /> : <AddCategory/>
             } */}
        </div>
    )
}

export default Inventory;