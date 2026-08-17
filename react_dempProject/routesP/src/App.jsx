import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'


function App() {
  return (
    <>
            <div className="w-50 h-auto bg-white rounded-xl flex justify-start  flex-col p-2 relative ">
                  <p className="absolute bg-indigo-600">
                    <i className="fa-light fa-circle-xmark"></i>
                  </p>
                  <img className="object-cover overflow-hidden px-1 h-45 w-45 " src="https://imgs.search.brave.com/wWMzlSZgO--UgPzovfukMrTWjNfuv_yPqvz03ZL2kuU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/NDM0LzAwNC9zbWFs/bC9mcmVzaGx5LWJh/a2VkLXBpenphLXdp/dGgtYS1wZXJmZWN0/bHktY3V0LXNsaWNl/LXBuZy5wbmc" />
                  <div className="flex justify-between "> <p className="font-medium ">Onion Pizz</p>
                  <p className="text-green-800 font-bold">120.00</p>
                  </div>
                  <p className="text-[12px] text-gray-400">i am boy and 2nd stan my name is durgesh lkairnar dhoashdadnk</p>
                  <div className="flex justify-between pt-2 "> <p className="text-green-800 font-bold">5.0</p>
                  <button className="font-bold w-30 h-7  bg-green-800 text-white rounded-[6px] active:bg-blue-700">Add</button>
                  </div>
            </div>
    </>
  )
}

export default App


  // {/* <Navbar/>
  //    <Routes>
  //       <Route path="/" element={<Home />}/>
  //       <Route path="about" element={<About />}/>
  //       <Route path="contact" element={<Contact />}/>
  //    </Routes> */}
