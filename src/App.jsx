import { useState } from 'react'
import './App.css'
import { BrowserRouter as   Router ,Route, Routes } from 'react-router-dom'
import Homepage from './homepage'
import Navbar from './components/navbar'
function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/'  element={<Homepage></Homepage>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
