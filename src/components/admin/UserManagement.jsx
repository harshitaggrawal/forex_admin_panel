import React, { useState } from 'react'
import UnverifiedUser from './userManagement/UnverifiedUser';
import VerifiedUser from './userManagement/VerifiedUser';
import NewUser from './userManagement/NewUser';
import Topbar from './Topbar'
import Sidebar from './Sidebar'
const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("newUser");
  const renderContent = () => {
    switch (activeTab) {
      case "newUser":
        return <NewUser />;
      case "verifiedUser":
        return <VerifiedUser />;
      case "unverifiedUser":
        return <UnverifiedUser />
      default:
        return <NewUser />;
    }
  };
  return (

    <div className="flex">
      <Sidebar activeTab={"User Management"} />
      <div className="flex-1 bg-gray-200 min-h-screen lg:ml-[250px]">
        <Topbar />
        <div>
          <div className="button-tabs flex justify-end w-full p-8 text-white">
            <div className="flex justify-center rounded-full items-center bg-gray-700 w-[350px] cursor-pointer">
              <button onClick={() => setActiveTab('newUser')} className={`${activeTab === 'newUser' && 'bg-blue-500'} cursor-pointer rounded-tl-full rounded-bl-full basis-1/3 px-2 py-1 text-lg font-bold`}>New User</button>
              <button onClick={() => setActiveTab('verifiedUser')} className={`${activeTab === 'verifiedUser' && 'bg-blue-500'} cursor-pointer  basis-1/3 px-2 py-1 text-lg font-bold`}>Verified</button>
              <button onClick={() => setActiveTab('unverifiedUser')} className={`${activeTab === 'unverifiedUser' && 'bg-blue-500'} cursor-pointer rounded-tr-full rounded-br-full basis-1/3 px-2 py-1 text-lg font-bold`}>Unverified</button>
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>

  )
}

export default UserManagement
