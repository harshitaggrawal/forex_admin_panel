import React from 'react'
import { FaChartLine } from "react-icons/fa";
const DashboardPanel = () => {
    return (
        <div className='w-full px-[6%] py-4'>

            <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-start gap-8'>
                <div className="bg-white p-6 rounded-lg shadow-xl basis-full md:basis-[48%]">
                    <h3 className="text-xl font-semibold text-black mb-4">Activity Summary</h3>
                    <div className="flex items-center justify-start gap-4">
                        <p className="text-gray-700">New User Today</p>
                        <p className="text-xl font-bold text-green-500">+5</p>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <p className="text-gray-700">Checked Scheduled</p>
                        <p className="text-xl font-bold text-blue-500">+3</p>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <p className="text-gray-700">Messages Received</p>
                        <p className="text-xl font-bold text-purple-500">+7</p>
                    </div>
                </div>

                {/* Performance Analytics */}
                <div className="bg-white p-6 rounded-lg shadow-xl basis-full md:basis-[48%]">
                    <h3 className="text-xl font-semibold text-black mb-4">Performance Analytics</h3>
                    <div className="flex items-center">
                        <FaChartLine className="text-gray-500 text-3xl mr-4" />
                        <div>
                            <p className="text-gray-700">Overall Performance</p>
                            <p className="text-3xl font-semibold text-blue-500">87%</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardPanel
