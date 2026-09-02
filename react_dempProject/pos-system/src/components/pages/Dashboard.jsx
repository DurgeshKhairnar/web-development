import Search from '../Search.jsx';
import { useItems } from '../../context/contextCartItems.js';
import { useState } from 'react'; 

function Dashboard(){

  const allItems = [
  {
    id:1,
    image: "https://i.pinimg.com/1200x/0d/6a/53/0d6a5368d68572456e17f166a6eee7c7.jpg",
    title: "Pizza",
    category:'Burger',
    price: 299.00,
    count:0,
  },
  {
    id:2,
    image: "https://i.pinimg.com/1200x/aa/f3/aa/aaf3aa4e15769c860aff8b2a22edfc78.jpg",
    title: "Burger",
    category:'Soup',
    price: 199.00,
    count:0,
  },
  {
    id:3,
    image: "https://i.pinimg.com/1200x/fc/c2/55/fcc2555f7387cd9f32568f32581baabc.jpg",
    title: "Pasta",
    category:'Breakfast',
    price: 249.00,
    count:0,
  },
  {
    id:4,
    image: "https://i.pinimg.com/1200x/a3/b2/53/a3b253b0f12519ef8ac1a6be6b6a8bb8.jpg",
    title: "French Fries",
    category:'Breakfast',
    price: 129.00,
    count:0, 
  },
  {
    id:5,
    image: "https://i.pinimg.com/1200x/28/2c/e1/282ce184b10314c72aab511146f3a7f9.jpg",
    title: "Sandwich",
    category:'Soup',
    price: 159.00,
    count:0, 
  }
  ];

    const { cartItemsList , addItems , addQuantity , removeQuantity } = useItems();

    const [ categoryNumber , setCategoryNumber] = useState(0)
 
    const [items] = useState(allItems);
    const [displayItems, setDisplayItems] = useState(allItems);
 
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
    setDisplayItems(items);
    return;
  }

  const filteredItems = items.filter(
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

    return(
        <div className='flex flex-col min-h-screen w-full bg-gray-100 p-2'>
            <Search/>
            <div className='p-2 mt-2 mb-2 w-full flex flex-wrap justify-evenly'>
                {
                    category.map((cate,idx) =>(
                        <button
                        key={idx}  
                        onClick={() =>handleFilterCatgory(idx)}
                        className={`p-2 rounded-2xl w-40 flex items-center justify-center  shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:bg-green-200 ${categoryNumber === idx ? 'bg-green-400 text-white':'bg-white'}`}>{cate.categoryName}</button>
                    ))
                }
            </div>
            <div className='w-full flex flex-wrap '>
                    {
                        displayItems.map((itm,idx) =>{
                          const isCart = cartItemsList.find(item => item.id === itm.id);
                          return (
                              <div key={idx} className='m-1 w-40 h-55  rounded-[8px] flex-col flex items-start justify-evenly p-2 border-2
                              border-gray-300 bg-white shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:border-green-500  hover:border-2'>
                                  <img src={itm.image} className='object-contain rounded-2xl h-25 mx-auto'/>
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
        </div>
    );
}


export default Dashboard;

