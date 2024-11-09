import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/Landing'
import Login from './components/login';
import Signup from './components/signup';
import UserDashboard from './pages/user/app'

import AdminDashboard from './pages/admin/app2'
import Request from './pages/user/request'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/userdashboard' element={<UserDashboard />} />

      
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/request' element={<Request />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App