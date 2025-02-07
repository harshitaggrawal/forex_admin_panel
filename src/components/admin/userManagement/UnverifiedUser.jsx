import React, { useState } from "react";

const UnverifiedUser = () => {
    const userData = [
        { id: 1, date: "2024-02-06", name: "John Doe", reference: "Ref123" },
        { id: 2, date: "2024-02-06", name: "Alice Smith", reference: "Ref456" },
        { id: 3, date: "2024-02-06", name: "Bob Johnson", reference: "Ref789" },
        { id: 4, date: "2024-02-06", name: "Eve Adams", reference: "Ref101" },
        { id: 5, date: "2024-02-06", name: "Charlie Brown", reference: "Ref202" },
        { id: 6, date: "2024-02-06", name: "David Lee", reference: "Ref303" },
        { id: 7, date: "2024-02-06", name: "Sophia Miller", reference: "Ref404" },
        { id: 8, date: "2024-02-06", name: "Olivia Wilson", reference: "Ref505" },
        { id: 9, date: "2024-02-06", name: "Michael Scott", reference: "Ref606" },
        { id: 10, date: "2024-02-06", name: "Jessica White", reference: "Ref707" },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mx-4">
            <h2 className="text-xl font-semibold mb-4">Unverified Users</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border p-2">Unverified Date</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Reference</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="border p-2 border-gray-300">{user.date}</td>
                                <td className="border p-2 border-gray-300">{user.name}</td>
                                <td className="border p-2 border-gray-300">{user.reference}</td>
                                <td className="border p-2 border-gray-300">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded">
                                        Verified
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UnverifiedUser;
