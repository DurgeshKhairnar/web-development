import Search from '../Search.jsx';
import { useState } from 'react';

function Tables(){



    return(
        <div className='flex flex-col justify-start items-start min-h-screen w-full bg-gray-50 p-2'>
               <Search />
            <h1 className='mt-1 font-bold'>Tables</h1>
            <div className='flex'>
                <div className='w-40 h-40  bg-white border-2 border-gray-200 rounded-2xl flex flex-col items-center justify-center m-1'>
                    <div className='bg-gray-200 h-2 w-15 rounded-xl'></div>
                        <div className='flex items-center justify-center'>
                          <div className='bg-gray-200 h-15 w-2 rounded-xl'></div>
                          <div className='bg-gray-200 h-20 w-20 rounded-xl m-1'></div>
                          <div className='bg-gray-200 h-15 w-2 rounded-xl'></div>
                        </div>
                    <div className='bg-gray-200 h-2 w-15 rounded-xl'></div>          
                </div> 
            </div>
        </div>
    );
}


export default Tables;



//  <div className='w-40 h-40  bg-white border-2 border-gray-200 rounded-2xl flex flex-col items-center justify-center m-1'>
//                    <div className='flex'>
//                          <div className='bg-gray-200 h-2 w-7 rounded-xl m-1'></div>
//                          <div className='bg-gray-200 h-2 w-7 rounded-xl'></div> 
//                    </div>
//                         <div className='flex items-center justify-center'>
//                           <div className='bg-gray-200 h-15 w-2 rounded-xl'></div>
//                           <div className='bg-gray-200 h-20 w-20 rounded-xl m-1'></div>
//                           <div className='bg-gray-200 h-15 w-2 rounded-xl'></div>
//                         </div>
//                     <div className='flex'>
//                          <div className='bg-gray-200 h-2 w-7 rounded-xl m-1'></div>
//                          <div className='bg-gray-200 h-2 w-7 rounded-xl'></div> 
//                    </div>         
//                 </div>