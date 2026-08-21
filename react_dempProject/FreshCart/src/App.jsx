import { useState } from 'react'
import Nav from './components/Nav-bar/Nav.js'
import './App.css'
import './components/Nav-bar/Nav.css';
import './components/banners/hero-banner/HomeBanner.css'
import './components/categorys/category.css'
import './components/banners/discont-banner/discountBanner.css'
import './components/popular_products/popularProduct.css'
import './components/review/review_container.css'
import './components/footer/footer.css'
import HomeBanner from './components/banners/hero-banner/HomeBanner.js';
import Category from './components/categorys/Category.jsx';
import DiscountBanner from './components/banners/discont-banner/DiscountBanner.jsx';
import Product_discount from './components/popular_products/Product_discount.jsx';
import Review_container from './components/review/Review_container.jsx';
import Footer from './components/footer/Footer.jsx';
import { Routes , Route} from 'react-router-dom'



function Home(){
  return (
  
         <div className="parent">

                     
                      <HomeBanner />
                      <Category />
                      <DiscountBanner />
                      <Product_discount/> 
                      <Review_container/>
                      <Footer />
          </div>

  )
}


function App() {
  return (
    <>   
                 <Nav />
                <Routes>
                
                      <Route path='/' element={<Home/>}  />
                      <Route path='/footer' element={<Footer />}  />
                      <Route path='/products' element={<Product_discount/>}  />
                </Routes>
    </>
  )
}

export default App
