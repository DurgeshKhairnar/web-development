import { useState } from 'react';
import toast , { Toaster } from 'react-hot-toast';

function Signup(){

     const [userName , setUserName] = useState('');
     const [password , setPassword] = useState('');

     const [isLoading , setLoading] = useState('Sign up')

      function handleSubmit(e){
        e.preventDefault();
        console.log(userName);
        console.log(password)
        Signin();
    }

      async function Signin(){
        setLoading('Loading...')
        try{
             const response = await fetch('http://localhost:3000/api/registerUser',
            {
                method:'POST',
                credentials: "include",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({userName:userName , password:password})
            }
                    
                );
                const jsonRespons = await response.json();
                // console.log(`response = ${jsonRespons.message}`);
                if(response.ok){
                    console.log(jsonRespons);
                    toast.success('Sign up  Successfully')
                    setUserName('');
                    setPassword('');
                }else{
                         toast.error(`Error ${jsonRespons.message} `)
                }
        }catch (e){
            console.log('error:',e.message);
            toast.error(`Error ${e.message} `)      
        }finally {
            setLoading('Sign up')
        }
    }

    return (
         <>
            <Toaster/>
             <form onSubmit={handleSubmit} className='p-1 h-60 flex flex-col justify-evenly'>
                    <div>
                            <p className='font-semibold'>Email Address</p>
                            <div className='flex items-center focus-within:border-amber-500 border-2 border-gray-200  p-1 w-120 h-10'>
                                <i className="ri-mail-line"></i>
                                <input 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className='w-full h-full p-2 outline-none ' type='text' placeholder='Enter Your Email' />
                            </div>
                     </div>
                     <div>
                                <p className='font-semibold'>Password</p>
                                <div className='flex items-center border-2 focus-within:border-amber-500 border-gray-200 p-1 w-120 h-10'>
                                    <i className="ri-lock-line"></i>
                                    <input 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full h-full p-2 outline-none ' type='text' placeholder='Enter Your Password' />
                                </div>
                     </div>
                      
                        <button type='submit' className='w-120 h-13 bg-amber-500 rounded-[5px] flex justify-center items-center cursor-pointer'>
                            <p className='text-white font-semibold'>{isLoading}</p>
                        </button>
             </form>
         </>
    )
}

export default Signup;