import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/Landing'
import Login from './components/login';
import Signup from './components/signup';
import UserDashboard from './pages/user/app'
import InventoryTable from './pages/inventory/inventory';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/userdashboard' element={<UserDashboard />} />
        <Route path='/inventory' element={<InventoryTable />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App