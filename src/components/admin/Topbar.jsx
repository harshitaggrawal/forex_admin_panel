import React from 'react';
import profile from '../../assets/profile.png'
const Topbar = () => {
  return (
    <div className='bg-gray-900 text-white w-full px-[6%] py-4 h-auto'>
      <div className="flex justify-end gap-6 items-center">


        <div className='hidden sm:block'>
          <input
            type="search"
            name="search"
            placeholder="Search here..."
            className="bg-gray-700 text-white px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-gray-500 w-60"
          />
        </div>


        <div className="flex items-center gap-4  px-2 rounded-full pr-4">
          <div>
            <h1 className="text-sm font-semibold">John Doe</h1>
            <p className="text-xs text-gray-300">Web Developer</p>
          </div>

          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />

        </div>

      </div>
    </div>
  );
};

export default Topbar;
