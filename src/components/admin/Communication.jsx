import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
const Communication = () => {
  return (
    <div className="flex">
    <Sidebar activeTab={"Communication"}/>
    <div className="flex-1 bg-gray-200 min-h-screen lg:ml-[250px]">
      <Topbar />
      <div>
      Communication
      Communication
    </div>
    </div>
  </div>
    
  )
}

export default Communication
