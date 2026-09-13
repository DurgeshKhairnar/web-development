import  { useState , useEffect } from 'react';
import CategoryPop from './CategoryPop';
import { useItems } from '../context/contextCartItems.js';

function Category(){

       const [ categoryNumber , setCategoryNumber] = useState(0)

       const [isShow , setShow] = useState(false);

      const { category , setCategory } = useItems();



    return (
         <div className='p-1 mt-1 mb-2 w-full flex flex-wrap items-center justify-start'>
                {
                    category.map((cate,idx) =>(
                        <button
                        key={cate._id}  
                        onClick={() =>setCategoryNumber(idx)}
                        className={`p-2 rounded-2xl w-30 flex items-center m-1 justify-center  shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:bg-amber-200 ${categoryNumber === idx ? 'bg-amber-400 text-white':'bg-white'}`}>{cate.categoryName.charAt(0).toUpperCase() + cate.categoryName.slice(1).toLowerCase()}</button>
                    ))
                }
                <button 
                onClick={() => setShow((p) => !p)}
                className='w-10 h-10 p-0.5 flex items-center justify-center  bg-white rounded-full shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:bg-amber-200 text-xl cursor-pointer'>+</button>
                {
                  (isShow) ? (<CategoryPop onClose={() =>setShow((p) => !p)}/>) :(<></>)
                }
            </div>
    )
}

export default Category;