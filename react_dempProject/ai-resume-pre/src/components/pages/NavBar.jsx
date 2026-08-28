import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from "react";
import LoginPopup from '../sub-components/LoginPoP.jsx'
import SingUp from '../sub-components/SingUp.jsx';
import { useResume } from '../../context/useResume.jsx';

function NavBar(){
     let navigate = useNavigate();

        const [showLogin, setShowLogin] = useState(false);
        const [showSingUp, setSingUp] = useState(false);

       const {isLogin, setIsLogin } =  useResume();

        function logOut(){
            return (
                <>
                    <button onClick={handlelogOut} className='cursor:pointer w-30 h-9 rounded-[5px] bg-purple-500 text-white font-bold '>
                        Log Out
                    </button>
                </>
            )
        }

        const handlelogOut = async() =>{
            try{
                    const response = await fetch('http://localhost:3000/auth/logOut',
                         {
                                method: "GET",
                                credentials: "include"
                        }
                     )
                    const data = await response.json();
                    console.log('response satus code',response.status)
                    if(response.ok){
                        setIsLogin(false)
                    }
            }catch (e){
                    console.log(`log out error ${e}`)
            }
        }

    return (
        <div   className='h-12 flex border-b-[1px] border-gray-200 w-full p-1 justify-between items-center mx-auto  max-w-[1000px] w-full p-4 '>
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
                        {!isLogin ? (<>
                             <button className='w-30 h-8 border-gray-200 border-[1px] rounded-[5px] font-semibold text-[10px] poin cursor-pointer'
                        onClick={() => {
                             setShowLogin(true)
                        }}
                         >Login</button>
                                <button className='w-30 h-8 bg-purple-700 rounded-[5px] font-semibold text-[10px] text-white cursor-pointer'
                                onClick={() =>  setSingUp(true)}
                    >Get Started Free</button>
                        </>) : (logOut())}
            </div>
             {showLogin && (
                <LoginPopup
                    onClose={() => setShowLogin(false)}
                />
            )}
             {showSingUp && (
                <SingUp
                    onClose={() => setSingUp(false)}
                />
            )}
        </div>
    )
}

export default NavBar;