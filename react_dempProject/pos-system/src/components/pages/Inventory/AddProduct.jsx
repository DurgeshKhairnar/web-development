import { useState } from 'react';
import { postProducts , getProducts } from '../../../API/product.js';
import { useDispatch , useSelector } from 'react-redux';
import { addItems ,getProduct } from '../../../redux/slicer/itemsSlicer.js';


function AddProduct(){

    const dispatch = useDispatch();

     const [ productValues , addValues ] = useState({
            productImage:'',
            productName:'',
            categoryName:'',
            price:'',
        })

       function handleValues(e){
             const { name , value } = e.target;
             addValues(prev => ({...prev,[name]:value}));
         }   
     
      async   function handleSubmit(e){
             e.preventDefault();
     
             if(!productValues.productImage || !productValues.productName
                 || !productValues.categoryName || !productValues.price
             ){
                 alert('Plz all values')
                 return;
             }

             const products = {
                 productImage:productValues.productImage,
                 productName:productValues.productName,
                 categoryName:productValues.categoryName,
                 price:productValues.price
             }

            const product = await postProducts(products);
            console.log(`product == ${product.data.productName}`);
             console.log(`product message == ${product.message}`);
            dispatch(addItems(product.data));
     
             addValues({
                 productImage: '',
                 productName: '',
                 categoryName: '',
                 price: ''
             })
         }   

    return (
        <div className='flex justify-evenly'>
                    <form onSubmit={handleSubmit} className=' flex flex-col justify-evenly w-90  p-1 border border-gray-300 rounded-[5px] bg-white'>
                      <div>
                              <h1 className='font-bold ml-1'>Add New Product</h1>
                              <p className='text-[10px] font-semibold text-gray-400'>Add new product to your Inventory</p>
                      </div>
                       <div className='m-1'>
                         <p className='text-[14px] font-semibold'>Product Image</p>
                         <input 
                         name="productImage"
                         value={productValues.productImage}
                         onChange={handleValues}
                         className='border-2 border-gray-400 rounded-[3px] p-1 focus:border-orange-500 focus:outline-none w-full' placeholder='Paste Your Image Address' />
                    </div>
                    <div className='m-1'>
                         <p className='text-[14px] font-semibold'>Product Category</p>
                         {/* <input className='border-2 border-gray-400 rounded-[3px] p-1 focus:border-orange-500 focus:outline-none w-full' placeholder='Enter Your Product Name' /> */}
                          
                         <select 
                         name='categoryName'
                         value={productValues.categoryName}
                         onChange={handleValues}
                         className='w-full h-8 p-1 rounded-[3px] border-2 border-gray-400 focus:border-orange-500 focus:outline-none'>
                            <option value=''>Select Category</option>
                            <option value='Breakfast'>Breakfast</option>
                            <option value='Main Course'>MainCours</option>
                         </select>
                    </div>
                     <div className='m-1'>
                         <p className='text-[14px] font-semibold'>Product Name</p>
                         <input 
                         name='productName'
                         value={productValues.productName}
                         onChange={handleValues}
                         className='border-2 border-gray-400 rounded-[3px] p-1 focus:border-orange-500 focus:outline-none w-full' placeholder='Enter Your Product Name' />
                    </div>
                     <div className='m-1'>
                         <p className='text-[14px] font-semibold'>Product Price</p>
                         <input 
                         name='price'
                         value={productValues.price}
                         onChange={handleValues}
                         className='border-2 border-gray-400 rounded-[3px] p-1 focus:border-orange-500 focus:outline-none w-full' placeholder='Enter Your Product Price' />
                    </div>
                      <button 
                    type='submit'
                    className='w-full h-10 bg-orange-500 p-1 text-white font-semibold rounded-[5px] mt-1 active:bg-orange-700'>
                        Add Product
                    </button>
                    </form>
                     <div className=' flex flex-col  w-110 h-50 p-1 border border-gray-300 rounded-[5px] bg-white'>
                        <h1 className='font-bold ml-1'>Product List</h1>
                        
                    </div>
              </div>
    )
}

export default AddProduct;