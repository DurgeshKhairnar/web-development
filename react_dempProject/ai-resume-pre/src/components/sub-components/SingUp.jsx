import { useState } from "react";
import { useResume } from '../../context/useResume';

function SingUp({ onClose }) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

     const {isLogin, setIsLogin } =  useResume();

    async function handleLogin(e){
        e.preventDefault();

        console.log("userName:", userName);
        console.log("Password:", password);

    const response = await fetch('http://localhost:3000/auth/userRegister',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            'userName':userName,
            'password':password
        })
    })
             console.log("status code =",response.status)        
    //  if(response.status == 201 || response.status == 200){
    //         setIsLogin(true)
    // }
}

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            {/* Popup */}
            <div className="bg-white w-[400px] rounded-xl p-6 shadow-xl">

                {/* Header */}
                <div className="flex justify-between items-center mb-5">

                    <h2 className="text-xl font-semibold">
                        Sing Up
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-500 text-xl cursor-pointer"
                    >
                        ✕
                    </button>

                </div>

                {/* Form */}
                <form onSubmit={handleLogin}>

                    <div className="mb-4">

                        <label className="block text-sm font-medium mb-1">
                            User Name
                        </label>

                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter your User Name"
                            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-purple-500"
                            required
                        />

                    </div>

                    <div className="mb-5">

                        <label className="block text-sm font-medium mb-1">
                           Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-purple-500"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md cursor-pointer hover:bg-purple-700"
                       
                    >
                        Sing Up
                    </button>

                </form>

            </div>

        </div>
    );
}

export default SingUp;