import React, { useState } from "react";

const NewUser = () => {
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
        { id: 11, date: "2024-02-06", name: "William Turner", reference: "Ref808" },
        { id: 12, date: "2024-02-06", name: "Emma Harris", reference: "Ref909" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const totalPages = Math.ceil(userData.length / usersPerPage);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mx-4">
            <h2 className="text-xl font-semibold mb-4">User List</h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border p-2">Registration Date</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Reference</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <tr key={user.id} className="border-b">
                                <td className="border p-2 border-gray-300">{user.date}</td>
                                <td className="border p-2 border-gray-300">{user.name}</td>
                                <td className="border p-2 border-gray-300">{user.reference}</td>
                                <td className="border p-2 border-gray-300">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                                        Verified
                                    </button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                                        Not Verified
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {userData.length > usersPerPage && (
                <div className="mt-4 flex justify-center items-center space-x-2">
                    <button
                        className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                    >
                        First
                    </button>
                    <button
                        className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="px-3 py-1 bg-gray-200 rounded">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                    <button
                        className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        Last
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewUser;
