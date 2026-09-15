import Search from '../Search.jsx';
import { useItems } from '../../context/contextCartItems.js';
import { useState , useEffect } from 'react'; 
import AddProductPop from '../DashBoard_Components/AddProductPop.jsx';
import Category from '../Category.jsx';
import  { useSelector , useDispatch } from 'react-redux';
function Dashboard(){

    const items = useSelector(state => state.items.items)
    const dispatch = useDispatch();



  useEffect(() => {
     
  },[])


    const [addPop , setPop] = useState(false);
 


function increment(idx){
    console.log(idx)
     addQuantity(idx)
    // setDisplayItems(prv => prv.map(itm => itm.id == idx ? {...itm,count:itm.count+1}:itm))
}


function decrement(idx){
  removeQuantity(idx)
}



    return(
        <div className='flex flex-col min-h-screen w-full bg-gray-100 p-2 relative'>
            <Search/>
            <Category />
            <div className='w-full flex flex-wrap  '>
                    {
                        items?.map((itm,idx) =>{
                        //   const isCart = cartItemsList.find(item => item.id === itm.id);
                          return (
                              <div key={idx} className='m-1 w-40 h-55  rounded-[8px] flex-col flex items-start justify-evenly p-2 border-2
                              border-gray-300 bg-white shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:border-amber-500  hover:border-2 relative'>
                                <button><i className="ri-delete-bin-6-line top-1 right-1.5  absolute"></i></button>
                                  <img src={itm.image} className='object-contain rounded-2xl h-25 mx-auto '/>
                                  <p className='font-bold flex-wrap text-[15px]'>{itm.title}</p>
                                  <p className='font-semibold flex-wrap text-amber-400 text-[13px]'>{itm.price}</p>
                                { false ? (<div className={`w-full p-1 rounded-2xl font-semibold bg-amber-200 cursor-pointe flex justify-between items-center`}>
                                    <button className='p-1 bg-amber-400 text-white rounded-2xl w-10'
                                    onClick={() => increment(itm.id)}
                                    >+</button>
                                   
                                    <button className='p-1 bg-amber-400 text-white rounded-2xl w-10'
                                    onClick={() => decrement(itm.id)}
                                    >-</button>
                                  </div> ) : (<button className={`border-none   w-full p-2 rounded-2xl font-semibold bg-amber-200 cursor-pointer active:bg-amber-600 active:text-white`}
                                  onClick={() => {
                                      addItems(itm)
                        
                                  }}
                                  >ADD to Dish</button>)}
                              </div>
                          )
                       })
                    }
            </div>
            <button 
              onClick={() => (setPop(prev => !prev))}
            className='absolute w-12 h-12 flex justify-center items-center bg-white rounded-full border-2 border-gray-200 text-2xl shadow-2xl right-10 bottom-10 cursor-pointer hover:border-amber-500 '>
                    +
            </button>
            {(addPop) ? <AddProductPop onClose={() =>   setPop(prev => !prev)} /> : <></>} 
        </div>
    );
}


export default Dashboard;

