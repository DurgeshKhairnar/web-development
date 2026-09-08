import restro_bg_image from '../../assets/restro_bg_image.jpg';
import hot_food from '../../assets/hot_food.png';


function Login(){
    return (
        <div className='flex h-screen'>
            <div className='w-[50%] h-screen relative'>
                <img className='w-full h-full object-cover lean' src={restro_bg_image} alt='restro_bg_image' />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                <img className='absolute top-10 left-20 h-23' src={hot_food} alt='img'/>
                <h1 className='absolute top-35 left-10 text-white text-4xl font-bold'>Restro<span className='text-amber-500'>Pos</span></h1>
                <h5 className='absolute top-44 left-10 text-gray-300'>Smart Restaurant Management</h5>
                  <h1 className='absolute text-[45px] top-55 left-10 text-white text-4xl font-bold'>Welcome<span className='text-amber-500'>Back!</span></h1>
                   <h5 className='absolute top-70 left-10 text-gray-200'>Sign in to Restro account and manage your <br/> resturant with ease.</h5>
                   <p className='absolute top-90 left-10  w-30 text-white flex justify-between items-center text-xs'><i className="ri-list-ordered text-amber-500 text-[20px] font-bold"></i>Manage Orders</p>

                    <p className='absolute top-100 left-10  w-24 text-white flex justify-between items-center text-xs'><i className="ri-phone-find-line text-amber-500 text-[20px] font-bold"></i>Track Table</p>

                    <p className='absolute top-110 left-10  w-25 text-white flex justify-between items-center text-xs'><i className="ri-file-chart-line text-amber-500 text-[20px] font-bold"></i>View Report</p>

                    <p className='absolute top-120 left-10  w-35 text-white flex justify-between items-center text-xs'><i className="ri-bar-chart-line text-amber-500 text-[20px] font-bold"></i>Grow Your Business</p>
            </div>
            <div className='w-[50%] h-screen flex flex-col items-start justify-evenly px-10'>
                    <div>
                        <h1 className='text-4xl font-bold'>Login to Restro</h1>
                        <h5 className='text-gray-500 font-semibold'>
                            Enter your credentials to access your account
                        </h5>
                    </div>
                    <div>
                        <p className='font-semibold'>Email Address</p>
                        <div className='flex items-center focus-within:border-amber-500 border-2 border-gray-200 p-1 w-120 h-10'>
                            <i className="ri-mail-line"></i>
                            <input className='w-full h-full p-2 outline-none ' type='email' placeholder='Enter Your Email' />
                        </div>
                    </div>
                     <div>
                        <p className='font-semibold'>Password</p>
                         <div className='flex items-center border-2 focus-within:border-amber-500 border-gray-200 p-1 w-120 h-10'>
                            <i className="ri-lock-line"></i>
                            <input className='w-full h-full p-2 outline-none ' type='password' placeholder='Enter Your Password' />
                        </div>
                    </div>
                 <div className='flex items-center justify-between w-120'>
                    <h1></h1>
                    <p className='text-amber-500'>Forget password?</p>
                 </div>
                 <div className='w-120 h-13 bg-amber-500 rounded-[5px] flex justify-center items-center'>
                    <p className='text-white font-semibold'>Login</p>
                 </div>
                 <div className='flex items-center justify-center w-120'> 
                    <p className='text-gray-500 text-sm'>or continue with</p>
                 </div>
                 <div>
                         <div className='w-120 h-12 border-gray-200 border rounded-[5px] flex justify-center items-center'>
                                <p className='font-semibold'>Continue with Gmail</p>
                         </div>
                 </div>
            </div>
        </div>
    )
}

export default Login;