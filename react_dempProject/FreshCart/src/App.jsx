import { useState } from 'react'
import Nav from './components/Nav-bar/Nav.js'
import './App.css'
import './components/Nav-bar/Nav.css';
import './components/banners/hero-banner/HomeBanner.css'
import './components/categorys/category.css'
import './components/banners/discont-banner/discountBanner.css'
import HomeBanner from './components/banners/hero-banner/HomeBanner.js';
import Category from './components/categorys/Category.jsx';
import DiscountBanner from './components/banners/discont-banner/DiscountBanner.jsx'



function App() {

  return (
      <div className="parent">
            <Nav />
            <HomeBanner />
            <Category />
            <DiscountBanner />
      </div>
  )
}

export default App
