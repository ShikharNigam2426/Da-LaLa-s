import React from 'react'
import Navbar from './Component/Navbar'
import Caraousel from './Component/Caraousel'
import TopCategories from './Component/TopCategories'
import './Component/fonts.css'
import ExclusiveDeals from './Component/ExclusiveDeals'
import Footer from './Component/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './Component/MenuPage/Menu'
import Blog from './Component/BlogPage/Blog'
import Contact from './Component/ContactPage/Contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className='ubuntu-bold'>
            <Navbar />
            <Caraousel />
            <TopCategories />
            <ExclusiveDeals />
            <Footer />
          </div>
        }>
        </Route>

        <Route path='/Menu' element={
          <div className='ubuntu-bold' style={{'overflow-x': 'hidden'}}>
            <Navbar />
            <Menu />
          </div>
        }>
        </Route>
        
        <Route path='/Contact' element={
          <div className='ubuntu-bold'>
            <Navbar />
            <Contact />
          </div>
        }></Route>

        <Route path='/Blog' element={
          <div className='ubuntu-bold'>
            <Navbar />
            <Blog />
          </div>
        }></Route>
        <Route path='/Delivery' element={
          <div className='ubuntu-bold'>
            <Navbar />
            <Menu />
          </div>
        }></Route>
      </Routes>
    </Router>
  )
}

export default App