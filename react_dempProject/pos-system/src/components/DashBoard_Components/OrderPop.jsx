import { useItems } from '../../context/contextCartItems.js';

function OrderPop(props){

    function totalAmountFun(){
        return props.orderList?.reduce((total,itm) => (total += itm.price * itm.count),0)
    }
    let totalCount =  totalAmountFun();

    const {orderList , setOrderList , setItemsList } = useItems();

    console.log(orderList)

    function addOrderList(){
         const orderId = Date.now();
         const newList = {orderId:orderId,itemList:props.orderList,totalAmount:totalCount}
        setOrderList(prev => [...prev,newList])
        setItemsList([])
        props.onClose()
    }

    return (
         <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
                <div className='w-100  bg-white p-3 flex flex-col justify-around rounded-[5px]'>
                        <div className='w-full flex items-end justify-between'>
                            <p></p>
                            <button className='cursor-pointer' onClick={props.onClose}>X</button>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-semibold'>OrderId : <span className='font-bold'>{Date.now()}</span></p>
                            <p className='font-semibold mb-2'>T14</p>
                        </div>

                        {
                            props.orderList?.map((items,index) => (
                                
                                <div key={index}>
                                    <div className='flex justify-between '>
                                        <p className='text-gray-500'>{items.title}</p>
                                        <p>{items.count}</p>
                                    </div>
                                </div>       
                            
                            ))
                        }
                        <div className='flex justify-between my-2'>
                            <h1 className='font-bold'>Total Amount</h1>
                            <h2 className='font-bold'>{props.orderList?.reduce((total,itm) => (total += itm.price * itm.count),0)}</h2>
                        </div>
                        <button 
                        onClick={addOrderList}
                        className='h-10 w-full border-2 border-green-500 text-green-500 font-bold rounded-[5px] mt-2 cursor-pointer'>Proceed</button>
                </div>
          </div>
    )
}


export default OrderPop; 