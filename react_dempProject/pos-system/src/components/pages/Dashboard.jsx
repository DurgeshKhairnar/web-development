import Search from '../Search.jsx';
import { useItems } from '../../context/contextCartItems.js';
import { useState , useEffect } from 'react'; 
import AddProductPop from '../DashBoard_Components/AddProductPop.jsx';

function Dashboard(){

   const { cartItemsList , addItems , addQuantity , removeQuantity , products , addProducts } = useItems();

  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
      return setDisplayItems(products)
  },[products])

   
    const [ categoryNumber , setCategoryNumber] = useState(0)

    const [addPop , setPop] = useState(false);
 
    
 
    const category = [
      {
        categoryName:'All',
        isAdd:false
      },
      {
        categoryName:'Breakfast',
        isAdd:false
      },
      {
        categoryName:'MainCours',
        isAdd:false
      },
      {
        categoryName:'Soup',
        isAdd:false
      }
    ]



function handleFilterCatgory(idx) {

  const selectedCategory = category[idx].categoryName;

  setCategoryNumber(idx);

  if (selectedCategory === "All") {
    setDisplayItems(products);
    return;
  }

  const filteredItems = products.filter(
    (itm) => itm.category === selectedCategory
  );

  setDisplayItems(filteredItems);
}

function increment(idx){
    console.log(idx)
     addQuantity(idx)
    // setDisplayItems(prv => prv.map(itm => itm.id == idx ? {...itm,count:itm.count+1}:itm))
}


function decrement(idx){
  removeQuantity(idx)
}

function handleRemove(idx){
       const removePoduct = products.filter((items) => items.id !== idx)
       addProducts(removePoduct)
       console.log('is Tab')
}


    return(
        <div className='flex flex-col min-h-screen w-full bg-gray-100 p-2 relative'>
            <Search/>
            <div className='p-1 mt-1 mb-2 w-full flex flex-wrap items-center justify-start'>
                {
                    category.map((cate,idx) =>(
                        <button
                        key={idx}  
                        onClick={() =>handleFilterCatgory(idx)}
                        className={`p-2 rounded-2xl w-25 flex items-center m-1 justify-center  shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:bg-green-200 ${categoryNumber === idx ? 'bg-green-400 text-white':'bg-white'}`}>{cate.categoryName}</button>
                    ))
                }
                <div className='w-10 h-10 p-0.5 flex items-center justify-center  bg-white rounded-full shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:bg-green-200 text-xl cursor-pointer'>+</div>
            </div>
            <div className='w-full flex flex-wrap  '>
                    {
                        displayItems.map((itm,idx) =>{
                          const isCart = cartItemsList.find(item => item.id === itm.id);
                          return (
                              <div key={idx} className='m-1 w-40 h-55  rounded-[8px] flex-col flex items-start justify-evenly p-2 border-2
                              border-gray-300 bg-white shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:border-green-500  hover:border-2 relative'>
                                <button onClick={() => handleRemove(itm.id)}><i className="ri-delete-bin-6-line top-1 right-1.5  absolute"></i></button>
                                  <img src={itm.image} className='object-contain rounded-2xl h-25 mx-auto '/>
                                  <p className='font-bold flex-wrap text-[15px]'>{itm.title}</p>
                                  <p className='font-semibold flex-wrap text-green-400 text-[13px]'>{itm.price}</p>
                                { isCart ? (<div className={`w-full p-1 rounded-2xl font-semibold bg-green-200 cursor-pointe flex justify-between items-center`}>
                                    <button className='p-1 bg-green-400 text-white rounded-2xl w-10'
                                    onClick={() => increment(itm.id)}
                                    >+</button>
                                    {cartItemsList.find(item => item.id === itm.id).count ?? 1}
                                    <button className='p-1 bg-green-400 text-white rounded-2xl w-10'
                                    onClick={() => decrement(itm.id)}
                                    >-</button>
                                  </div> ) : (<button className={`border-none   w-full p-2 rounded-2xl font-semibold bg-green-200 cursor-pointer active:bg-green-600 active:text-white`}
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
            className='absolute w-12 h-12 flex justify-center items-center bg-white rounded-full border-2 border-gray-200 text-2xl shadow-2xl right-10 bottom-10 cursor-pointer hover:border-green-500 '>
                    +
            </button>
            {(addPop) ? <AddProductPop onClose={() =>   setPop(prev => !prev)} /> : <></>} 
        </div>
    );
}


export default Dashboard;

