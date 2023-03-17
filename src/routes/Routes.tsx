import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../pages/Function/Login/Login'
import All from '../pages/Function/All/All'
import Profile from '../pages/Function/Profile/Profile'
import Register from '../pages/Function/Register/Register'

function RoutesComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default RoutesComponent
