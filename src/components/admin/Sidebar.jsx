import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiUserCommunityFill, RiMenu2Fill } from "react-icons/ri";
import { SiSololearn, SiGoogleanalytics } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { CgComment } from "react-icons/cg";
import { X } from "lucide-react";

const Sidebar = ({ activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isMd = window.innerWidth >= 1024;
      setIsMediumScreen(isMd);
      setIsOpen(isMd);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [activeTab]);

  const menuItems = [
    { name: "Dashboard", icon: <LuLayoutDashboard size={20} />, path: "/admin/dashboard" },
    { name: "User Management", icon: <RiUserCommunityFill size={20} />, path: "/admin/user-management" },
    { name: "Learning Content", icon: <SiSololearn size={20} />, path: "/admin/learning-module" },
    { name: "Demo Trading", icon: <VscGraph size={20} />, path: "/admin/demo-trading" },
    { name: "Analytics and Reporting", icon: <SiGoogleanalytics size={20} />, path: "/admin/anaytics-report" },
    { name: "Communication", icon: <CgComment size={20} />, path: "/admin/communication" },
  ];

  return (
    <div className="relative">
      {!isMediumScreen && (
        <button
          className="absolute top-4 left-4 text-white z-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <div className="bg-gray-700 p-2 text-white rounded"><RiMenu2Fill size={24} /></div>}
        </button>
      )}
      <div
        className={`bg-gray-900 border-r border-white pt-16 lg:pt-4 text-white min-h-screen fixed 
                    ${isOpen ? "w-[250px] transition-all duration-300 ease-in-out" : "hidden transition-all duration-300 ease-in-out"} lg:w-[250px] lg:block 
                    overflow-hidden p-4`}
      >
        <ul className="w-full space-y-2">
          {menuItems.map((item) => (
            <li key={item.name} className="w-full">
              <Link
                to={item.path}
                
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out w-full 
                            ${activeTab === item.name ? "bg-gray-700 text-white" : "hover:bg-gray-800"}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
