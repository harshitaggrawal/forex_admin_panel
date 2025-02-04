import React from 'react'
import Login from '../components/admin/Login'
import Dashboard from '../components/admin/Dashboard'
import { Routes, Route, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <Outlet /> 
    </div>
  );
};
const Admin = () => {
  return (
    <Routes>
     
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Login />} /> 
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
  )
}

export default Admin
