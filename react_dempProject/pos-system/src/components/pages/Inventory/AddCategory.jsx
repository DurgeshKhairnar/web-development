import { useSelector , useDispatch } from 'react-redux';
import { addCategory , getCategory  } from '../../.././redux/slicer/categorySlicer.js';
import { useEffect , useState } from 'react';
import { postCategory , fetchCategory } from '../../../API/category.js';

function AddCategory(){

    const [categoryName , setCategoryName ] = useState('');

    const category = useSelector(state => state.categorys.category);
    const dispatch = useDispatch()

    useEffect(() => {
        async function loadData(){
            try{
                   const categoryData = await fetchCategory();
                   console.log(categoryData)
                    dispatch(getCategory(categoryData));
            }catch (e){
                console.log(`useEff ${e.message}`)
            }
        }
        loadData();
    },[dispatch]);

    async function addCategoryData(){
        try{
                const data = await postCategory(categoryName);
                dispatch(addCategory(data));
                setCategoryName('')
        }catch(e){
                console.log(`addCategoryData ${e.message}`)
        }
    }


    return (
         <div className='flex justify-evenly'>
                    <div className=' flex flex-col justify-evenly w-90 h-50 p-1 border border-gray-300 rounded-[5px] bg-white'>
                       <div>
                             <h1 className='font-bold ml-1'>Add New Category</h1>
                             <p className='text-[10px] font-semibold text-gray-400'>create a new  food category for your menu</p>
                       </div>
                        <div>
                            <p className='font-bold m-1 text-[12px]'>Category Name</p>
                            <input 
                             value={categoryName}
                             onChange={(e) => setCategoryName(e.target.value)}
                            className='w-full h-10 border-2 border-gray-200 focus:outline-none focus:border-amber-500   placeholder:p-2'
                            type='text' placeholder='Enter category name'  />
                        </div>
                        <button 
                        onClick={addCategoryData}
                        className='w-full h-10 bg-amber-500 mt-1 text-[13px] text-white font-semibold cursor-pointer'> + Add Category</button>
                    </div>
                     <div className=' flex flex-col  w-110 h-50 p-1 border border-gray-300 rounded-[5px] bg-white'>
                        <h1 className='font-bold ml-1'>Category List</h1>
                        <div>
                            {
                                category?.map((category , index) => (<h1 key={category._id}>{category.categoryName}</h1>))
                            }
                        </div>
                    </div>
              </div>
    )
}

export default AddCategory;