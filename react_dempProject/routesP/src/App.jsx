import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card';
import ToggleButton from './components/ToggleButton';
import {ThemeContext, ThemeContextProvider,useTheme} from './context/usecontext';


function App() {
  const [themeMode , setTheme] = useState("dark");

  function darkTheme(){
    return setTheme("dark");
  }

   function lightTheme(){
    return setTheme("light");
  }

  useEffect(() => {
    let htmlMode = document.querySelector('html').classList;
    htmlMode.remove("dark","light")
    htmlMode.add(themeMode)
  },[themeMode])

  return (
    <ThemeContextProvider value={{themeMode , darkTheme, lightTheme}}>
         <div className="min-h-screen  bg-gray-100 dark:bg-gray-900">

        <ToggleButton />

        <Card />

      </div>
    </ThemeContextProvider>
  )
}

export default App


  // {/* <Navbar/>
  //    <Routes>
  //       <Route path="/" element={<Home />}/>
  //       <Route path="about" element={<About />}/>
  //       <Route path="contact" element={<Contact />}/>
  //    </Routes> */}
