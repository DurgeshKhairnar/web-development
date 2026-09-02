import { useItems } from '../context/contextCartItems.js';
import { useState } from 'react';
import  OrderPop from '../components/DashBoard_Components/OrderPop.jsx';
import empty_orders from '../assets/empty_orders.png';

function Carts(){

    const { cartItemsList} = useItems();

    const [isOrderPop , setOrderpPop] = useState(false);

    function emptyListIcon(){
        return (
            <div className='flex p-1 flex-col items-center justify-center bg-gray-100 rounded-full h-70'>
                    <img src={empty_orders} alt='img' className='object-contain h-30 w-30'/>
                    <p className='font-bold text-gray-500 mt-1'>Empty Order List</p>
            </div>
        )
    }
    
    return (
         <div className={`min-h-screen w-120 p-2 flex flex-col ${(cartItemsList.length > 0) ? 'items-start' :'items-center'} justify-between bg-white`}>
           <div className='w-full'>
                <p className='font-semibold text-[20px]'>Invoice</p>
                
                <div className='w-full p-2 h-100'>
                    {
                       (cartItemsList.length > 0) ? (cartItemsList.map((itm,idx) => (
                            <div key={idx}
                            className='w-full h-20 bg-gray-100 rounded-[5px] flex p-1 m-1 '
                            >
                            <img src={itm.image} alt='img' className='rounded-[5px] object-contain' />
                            <div className='m-1 flex flex-col justify-evenly w-full bg-white p-1 rounded-[5px]'>
                                <p className='font-bold flex-wrap text-[14px]'>{itm.title}</p>
                                <div className='flex justify-between'>
                                    <p className='font-bold text-green-400 text-[13px]'>{itm.price}</p>
                                    <p className='font-bold text-black text-[13px]'>X</p>
                                    <p className='font-bold text-black text-[13px]'>{itm.count}</p>
                                    <p className='font-bold text-black text-[13px]'>{itm.price * itm.count}</p>
                                </div>
                            </div>   
                            </div> 
                        ))) : (emptyListIcon())
                    }
                </div>
           </div>
          <div className='flex w-full h-25 flex-col justify-between'>
            <div className='w-full h-13 flex justify-between p-1 items-center'>
                   <div className='p-1 bg-gray-200 w-23 flex items-center justify-center rounded-xl font-semibold'>Cash</div>
                   <p className='p-1 bg-gray-200 w-23 flex items-center justify-center rounded-xl font-semibold'>Card</p>
                   <p className='p-1 bg-gray-200 w-23 flex items-center justify-center rounded-xl font-semibold'>QR Code</p>
            </div>
            <button 
            onClick={()=> setOrderpPop(prev => !prev)}
            className=' mx-2  h-10 w-full bg-green-500 text-white font-bold rounded-[7px] 
            '>Total : {cartItemsList.reduce((total,item) => ( total += item.count * item.price),0)}</button>
          </div>
          {(isOrderPop) ? <OrderPop onClose={() => setOrderpPop(prev => !prev)} orderList={cartItemsList}/> : <></> } 
        </div>
    );
}

export default Carts;