import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
const DemoTrading = () => {
  return (
    <div className="flex">
    <Sidebar activeTab={"Demo Trading"}/>
    <div className="flex-1 bg-gray-200 min-h-screen lg:ml-[250px]">
      <Topbar />
      <div>
      DemoTrading
      DemoTrading
    </div>
    </div>
  </div>
    
  )
}

export default DemoTrading
