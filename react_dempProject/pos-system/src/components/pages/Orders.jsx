import Search from '../Search.jsx';
import { useItems } from '../../context/contextCartItems.js';

function Orders(){

      const {orderList , setOrderList , setItemsList } = useItems();

    return(
        <div className='flex flex-col justify-start items-start min-h-screen bg-gray-100 w-full p-2'>
            <Search />
            <h1 className='my-1 font-bold'>Orders</h1>
            <div className='flex'>
                 {
                orderList.map((items,index) => (
                    <div key={index} className='w-70  bg-white p-3 flex 
                    flex-col justify-around rounded-[5px] m-1 border-2 border-gray-200'>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>OrderId : <span className='font-bold'>{items.orderId}</span></p>
                            <p className='font-semibold mb-2'>T14</p>
                        </div>

                        {
                            items.itemList?.map((items,index) => (
                                
                                <div key={index} className='flex flex-col'>
                                    <div className='flex  justify-between '>
                                        <p className='text-gray-500'>{items.title}</p>
                                        <p>{items.count}</p>
                                    </div>
                                </div>       
                            
                            ))
                        }
                        <div className='flex justify-between my-2'>
                            <h1 className='font-bold'>Total Amount</h1>
                            <h2 className='font-bold'>{items.itemList?.reduce((total,itm) => (total += itm.price * itm.count),0)}</h2>
                        </div>
                        <button 
                        // onClick={addOrderList}
                        className='h-10 w-full border-2 border-green-500 text-green-500 font-bold rounded-[5px] mt-2 cursor-pointer'>Proceed</button>
                    </div>
                        
                    ))
                }
            </div>
        </div>
    );
}


export default Orders;