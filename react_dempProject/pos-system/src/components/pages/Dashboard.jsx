import Search from '../Search.jsx';
import { useItems } from '../../context/contextCartItems.js';
import { useState } from 'react'; 

function Dashboard(){

    const { cartItemsList , addItems , removeItem } = useItems();

     const [ categoryNumber , setCategoryNumber] = useState(0)

    const [itemNumber , setItemNumber] = useState(0);

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

    const items = [
  {
    image: "https://i.pinimg.com/1200x/0d/6a/53/0d6a5368d68572456e17f166a6eee7c7.jpg",
    title: "Pizza",
    price: 299.00
  },
  {
    image: "https://i.pinimg.com/1200x/aa/f3/aa/aaf3aa4e15769c860aff8b2a22edfc78.jpg",
    title: "Burger",
    price: 199.00
  },
  {
    image: "https://i.pinimg.com/1200x/fc/c2/55/fcc2555f7387cd9f32568f32581baabc.jpg",
    title: "Pasta",
    price: 249.00
  },
  {
    image: "https://i.pinimg.com/1200x/a3/b2/53/a3b253b0f12519ef8ac1a6be6b6a8bb8.jpg",
    title: "French Fries",
    price: 129.00
  },
  {
    image: "https://i.pinimg.com/1200x/28/2c/e1/282ce184b10314c72aab511146f3a7f9.jpg",
    title: "Sandwich",
    price: 159.00
  }
];

  // function handleFilterCatgory(id){
  //   categorys.fo
  // }

    return(
        <div className='flex flex-col min-h-screen w-full bg-gray-100 p-2'>
            <Search/>
            <div className='p-2 mt-2 mb-2 w-full flex justify-evenly'>
                {
                    category.map((cate,idx) =>(
                        <button 
                        onClick={() => handleFilterCatgory(idx)}
                        key={idx} className={`p-2 rounded-2xl w-40 flex items-center justify-center bg-white shadow-[0_0px_7px_rgba(0,0,0,0.15)] hover:bg-green-200`}>{cate.categoryName}</button>
                    ))
                }
            </div>
            <div className='min-h-screen w-full flex'>
                    {
                        items.map((itm,idx) =>(
                        <div key={idx} className='m-1 w-40 h-55  rounded-2xl flex-col flex items-start justify-evenly p-2 bg-white shadow-[0_0px_7px_rgba(0,0,0,0.15)]'>
                            <img src={itm.image} className='object-contain rounded-2xl h-25 mx-auto'/>
                            <p className='font-bold flex-wrap text-[15px]'>{itm.title}</p>
                            <p className='font-semibold flex-wrap text-green-400 text-[13px]'>{itm.price}</p>
                            <button className={`border-none   w-full p-2 rounded-2xl font-semibold bg-green-200 cursor-pointer active:bg-green-600 active:text-white`}
                            onClick={() => {
                                addItems({id:Date.now(),title:itm.title,image:itm.image,price:itm.price})
                                // setItemNumber(idx);
                  
                            }}
                            >ADD to Dish</button>
                        </div>
                        ))
                    }
            </div>
        </div>
    );
}


export default Dashboard;

