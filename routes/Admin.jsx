import React from 'react'
import Login from '../src/components/admin/Login'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../src/components/HomePage';
import AddModule from '../src/components/admin/learning/AddModule';
import UserManagement from '../src/components/admin/UserManagement';
import LearningContent from '../src/components/admin/LearningContent';
import AnalyticsReporting from '../src/components/admin/AnalyticsReporting';
import DemoTrading from '../src/components/admin/DemoTrading';
import Communication from '../src/components/admin/Communication';
import DashboardPanel from '../src/components/admin/DashboardPanel';
import AddQuiz from '../src/components/admin/learning/AddQuiz';


const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      
      <Route path="/admin" element={<Login />} />

      <Route path="/admin/dashboard" element={<DashboardPanel />} />
      <Route path="/admin/user-management" element={<UserManagement />} />
      <Route path="/admin/learning-module" element={<LearningContent />} />
      <Route path="/admin/anaytics-report" element={<AnalyticsReporting />} />
      <Route path="/admin/communication" element={<Communication />} />
      <Route path="/admin/demo-trading" element={<DemoTrading />} />
      <Route path="admin/learning/add-module" element={<AddModule />} />
      <Route path="admin/quizzes/add-quiz" element={<AddQuiz />} />
    </Routes>
  )
}

export default Admin
