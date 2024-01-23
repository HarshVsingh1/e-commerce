import { useState } from 'react'
import './App.css'
import { BrowserRouter as   Router ,Route, Routes } from 'react-router-dom'
import Homepage from './homepage'
import Navbar from './components/navbar'
import Admindashboard from './admindashboard'
import Footer from './components/footer'
import Productview from './productview'
import Productpages from './productspage'
function App() {

  return (
    <>
      <Router>
       
        <Routes>
          <Route path='/'  element={<Homepage></Homepage>} />
          <Route path='/admindashboard' element={<Admindashboard></Admindashboard>} />
          <Route path='/productview' element={<Productpages></Productpages>} />
        </Routes>
       
      </Router>
    </>
  )
}

export default App
