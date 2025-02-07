import React, {useState} from 'react'
import Modules from './learning/Modules';
import Quizes from './learning/Quizes';
import Topbar from './Topbar'
import Sidebar from './Sidebar'
const LearningContent = () => {
    const [activeTab, setActiveTab] = useState("modules");
  const renderContent = () => {
    switch (activeTab) {
      case "modules":
        return <Modules />;
      case "quizes":
        return <Quizes />;
      default:
        return <Modules />;
    }
  };
    return (
      <div className="flex">
      <Sidebar activeTab={"Learning Content"}/>
      <div className="flex-1 bg-gray-200 min-h-screen lg:ml-[250px]">
        <Topbar />
        <div>
           <div className="button-tabs flex justify-end w-full p-8 text-white">
            <div className="flex justify-center rounded-full items-center bg-gray-700 w-[250px] cursor-pointer">
                <button onClick={()=>setActiveTab('modules')} className={`${activeTab==='modules' && 'bg-blue-500'} rounded-tl-full rounded-bl-full basis-1/2 px-4 py-2 text-lg md:text-xl font-bold`}>Modules</button>
                <button onClick={()=>setActiveTab('quizes')} className={`${activeTab==='quizes' && 'bg-blue-500'} rounded-tr-full rounded-br-full basis-1/2 px-4 py-2 text-lg md:text-xl font-bold`}>Quizes</button>
                </div>
           </div>

           {renderContent()}
        </div>
      </div>
    </div>
       
    )
}

export default LearningContent
