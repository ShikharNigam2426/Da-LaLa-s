import React from 'react'
import Navbar from './Component/Navbar'
import Caraousel from './Component/Caraousel'
import TopCategories from './Component/TopCategories'
import './Component/fonts.css'
import ExclusiveDeals from './Component/ExclusiveDeals'
import Footer from './Component/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './Component/MenuPage/Menu'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className='pt-serif-regular'>
            <Navbar />
            <Caraousel />
            <TopCategories />
            <ExclusiveDeals />
            <Footer />
          </div>
          }>
        </Route>

        <Route path='/Menu' element = {
          <div>
            <Navbar />
            <Menu />
          </div>
        }>

        </Route>
      </Routes>
    </Router>
  )
}

export default App