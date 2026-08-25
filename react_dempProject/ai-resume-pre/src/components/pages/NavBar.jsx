

function NavBar(){
    return (
        <div   className='h-12 flex border-b-[1px] border-gray-200 w-full p-1 justify-between items-center '>
            <div>
                <p className='font-semibold'>Resume<span className='font-semibold text-purple-500'> AI</span></p>
            </div>
            
            <div  className='flex justify-between items-center w-100 '>
                <p className='font-semibold text-[12px] cursor-pointer'>Home</p>
                <p className='font-semibold text-[12px] cursor-pointer'>How It Works</p>
                <p className='font-semibold text-[12px] cursor-pointer'>Featurs</p>
                <p className='font-semibold text-[12px] cursor-pointer'>Pricing</p>
                <p className='font-semibold text-[12px] cursor-pointer'>About Us</p>
            </div>                  
            <div className='w-65 flex justify-between'>
                         <button className='w-30 h-8 border-gray-200 border-[1px] rounded-[5px] font-semibold text-[10px] poin cursor-pointer'>Login</button>
                    <button className='w-30 h-8 bg-purple-700 rounded-[5px] font-semibold text-[10px] text-white cursor-pointer'>Get Started Free</button>
            </div>
        </div>
    )
}

export default NavBar;