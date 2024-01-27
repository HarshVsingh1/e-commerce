import { useState } from 'react'
import './App.css'
import { BrowserRouter as   Router ,Route, Routes } from 'react-router-dom'
import Homepage from './homepage'
import Admindashboard from './admindashboard'
import Productpages from './productspage'
import Signup from './signup'
import Signin from './signin'
import Singleproductview from './singleproduct'
import Categoryproductpages from './categoryproductpage'
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
          <Route path='/product/:productId' element={<Singleproductview></Singleproductview>} />
          <Route path='/product/category/:category' element={<Categoryproductpages></Categoryproductpages>} />
        </Routes>
       
      </Router>
    </>
  )
}

export default App
