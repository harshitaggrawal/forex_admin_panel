import React from 'react'
import Login from '../src/components/admin/Login'
import Dashboard from '../src/components/admin/Dashboard'
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from '../src/components/HomePage';

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
      <Route path="/" element={<HomePage />}></Route>
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Login />} /> 
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
  )
}

export default Admin
