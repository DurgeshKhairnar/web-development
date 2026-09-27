import Search from '../Search.jsx';
import { useDispatch , useSelector } from 'react-redux';
import { useState , useEffect} from 'react';
import Table from '../Table.jsx';

    function Tables(){

        const tables = useSelector(state => state.tables.table);

        const [customerInfo , setCustomerInfo] = useState({
            name:'',
            phoneNumber:'',
            date:'',
            time:'',
            gest:'',
            tableNo:''
        })

        const handleChange = (e) => {
            const { name , value } = e.target;

            setCustomerInfo((prev) => ({
                ...prev,
                [name] : value
            }));
        }

        function handleSubmit(e){
            e.preventDefault();
            console.log(customerInfo)
        }

        return(
            <div className='flex flex-col justify-start items-start min-h-screen w-full bg-gray-50 p-2'>
                <Search />
                <h1 className='mt-1 font-bold text-2xl'>Tables Booking</h1>
                <p className='text-gray-500 text-[13px]'>Reserv your table and enjoy a great dining experience!</p>
              <div className='flex w-full mt-3 justify-evenly'>
                 <form onSubmit={handleSubmit} className=' px-2 h-110 w-100 bg-white border flex flex-col border-gray-200 p-2 justify-evenly'>
                    <div className='flex flex-col m-1'>
                        <label className='font-bold'>Name</label>
                        <input
                        name='name'
                        value={customerInfo.name} 
                        onChange={handleChange}
                        className='h-8 border border-gray-400 focus:border-2 focus:border-amber-500 focus:outline-none p-1'placeholder='Enter your name' />
                    </div>
                     <div className='flex flex-col m-1'>
                        <label className='font-bold'>Phone Number</label>
                        <input 
                        name='phoneNumber'
                        value={customerInfo.phoneNumber}
                        onChange={handleChange}
                        className='h-8 border border-gray-400 focus:border-2 focus:border-amber-500 focus:outline-none p-1'placeholder='Enter your phone number' />
                    </div>
                     <div className='flex justify-between'>
                     <div className='flex flex-col m-1 w-full'>
                        <label className='font-bold'>Date</label>
                        <input
                        name='date'
                        value={customerInfo.date}
                        onChange={handleChange}
                        type='date'
                        className='h-8 border border-gray-400 focus:border-2 focus:border-amber-500 focus:outline-none p-1'placeholder='select date' />
                    </div>
                     <div className='flex flex-col m-1 w-full'>
                        <label className='font-bold'>Time</label>
                        <input
                        name='time'
                        value={customerInfo.time}
                        onChange={handleChange}
                        type='time'
                        className='h-8 border border-gray-400 focus:border-2 focus:border-amber-500 focus:outline-none p-1'placeholder='select date' />
                    </div>
                     </div>
                     <div className='flex flex-col m-1'>
                        <label className='font-bold'>Number of People</label>
                        <input 
                        name='gest'
                        value={customerInfo.gest}
                        onChange={handleChange}
                        className='h-8 border border-gray-400 focus:border-2 focus:border-amber-500 focus:outline-none p-1'placeholder='Number of Person' />
                    </div>
                     <div className='flex flex-col m-1'>
                        <label className='font-bold'>Table Preference</label>
                        <input 
                        name='tableNo'
                        value={customerInfo.tableNo}
                        onChange={handleChange}
                        className='h-8 border border-gray-400 focus:border-2 focus:border-amber-500 focus:outline-none p-1'placeholder='Number of Person' />
                    </div>
                       <button 
                       type='submit'
                       className='bg-amber-500 text-white font-bold h-10 p-2 cursor-pointer'>
                        Book Table
                        </button>
                   </form>
                   <div className=' bg-white w-100 border-gray-200 p-2 border'>
                    <h1>Available Tables</h1>
                    <div className='flex'>
                    {
                        tables?.map((items,index) => (
                        <div key={index}>
                             <Table tableNo={items.tableNo} />
                                </div>
                            ))
                    }
                    </div>
                   </div>
                </div>
            </div>
        );
    }


export default Tables;

  {/* <div className='flex flex-wrap my-2'>
                {
                    tables?.map((items,index) => (
                        <div key={index}>
                             <Table tableNo={items.tableNo} />
                        </div>
                    ))
                }
                  </div>   */}


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



