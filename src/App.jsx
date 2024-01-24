import { useState } from 'react'
import './App.css'
import { BrowserRouter as   Router ,Route, Routes } from 'react-router-dom'
import Homepage from './homepage'
import Navbar from './components/navbar'
import Admindashboard from './admindashboard'
import Footer from './components/footer'
import Productview from './productview'
import Productpages from './productspage'
import Signup from './signup'
import Signin from './signin'
function App() {

  return (
    <>
      <Router>
       
        <Routes>
          <Route path='/'  element={<Homepage></Homepage>} />
          <Route path='/admindashboard' element={<Admindashboard></Admindashboard>} />
          <Route path='/productview' element={<Productpages></Productpages>} />
          <Route path='/signup' element={<Signup></Signup>} />
          <Route path='/signin' element={<Signin></Signin>} />
        </Routes>
       
      </Router>
    </>
  )
}

export default App
