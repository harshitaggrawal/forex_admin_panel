import React, { useState } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import DashboardPanel from './DashboardPanel';
import LearningContent from './LearningContent';
import UserManagement from './UserManagement';
import DemoTrading from './DemoTrading';
import AnalyticsReporting from './AnalyticsReporting';
import Communication from './Communication';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardPanel />;
      case "Learning Content":
        return <LearningContent />;
      case "User Management":
        return <UserManagement />;
      case "Demo Trading":
        return <DemoTrading />;
      case "Analytics and Reporting":
        return <AnalyticsReporting />;
      case "Communication":
        return <Communication />;
      default:
        return <DashboardPanel />;
    }
  };

  return (
    <div className="flex">
      <Sidebar activeTab={""}/>
      <div className="flex-1 bg-gray-200 min-h-screen lg:ml-[250px]">
        <Topbar />
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
