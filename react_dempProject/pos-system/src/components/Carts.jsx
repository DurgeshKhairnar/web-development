import { useItems } from '../context/contextCartItems.js';

function Carts(){
    
    const { cartItemsList , removeItem } = useItems();

    console.log(` in cart ${cartItemsList.length}`)

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
  },
];
    
    return (
         <div className='min-h-screen w-120 p-2 flex flex-col items-center bg-white relative'>
            <p className='font-semibold text-[20px]'>Invoice</p>
            <div className='w-full p-2 h-100'>
                {
                    items.map((itm,idx) => (
                        <div key={itm.id}
                        className='w-full h-20 bg-gray-100 rounded-[5px] flex p-1 '
                        >
                        <img src={itm.image} alt='img' className='rounded-[5px] object-contain' />
                        <div className='m-1 flex flex-col justify-evenly w-full bg-white p-1 rounded-[5px]'>
                            <p className='font-bold flex-wrap text-[14px]'>{itm.title}</p>
                            <p className='font-bold text-green-400 text-[13px]'>{itm.price}</p>
                        </div>   
                        </div> 
                    ))
                }
            </div>
          <button className=' mx-2 absolute h-10 w-full bg-green-500 text-white font-bold rounded-[7px] bottom-24'>Total</button>
        </div>
    );
}

export default Carts;