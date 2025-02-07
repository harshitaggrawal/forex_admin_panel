import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
const AnalyticsReporting = () => {
  return (
    <div className="flex">
    <Sidebar activeTab={"Analytics and Reporting"}/>
    <div className="flex-1 bg-gray-200 min-h-screen lg:ml-[250px]">
      <Topbar />
      <div>
      AnalyticsReporting
      AnalyticsReporting
    </div>
    </div>
  </div>
   
  )
}

export default AnalyticsReporting
