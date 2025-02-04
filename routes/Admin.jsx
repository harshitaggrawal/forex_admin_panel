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
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Admin
