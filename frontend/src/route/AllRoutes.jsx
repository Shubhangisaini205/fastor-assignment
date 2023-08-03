import React from 'react'
import { Routes, Route } from "react-router-dom"
import OTPVerification from '../pages/OTPVerification'
import HomePage from '../pages/HomePage'
import SinglePage from '../pages/SinglePage'
import Login from '../pages/Login'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/otp' element={<OTPVerification />} />
      <Route path='/restaurant' element={<HomePage />} />
      <Route path='/restaurant/:id' element={<SinglePage />} />
    </Routes>
  )
}

export default AllRoutes