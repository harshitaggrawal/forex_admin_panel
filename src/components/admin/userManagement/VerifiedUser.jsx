import React, { useState } from "react";

const VerifiedUser = () => {
    const verifiedUsers = [
        { id: 1, date: "2024-02-06", name: "John Doe", reference: "Ref123" },
        { id: 2, date: "2024-02-06", name: "Alice Smith", reference: "Ref456" },
        { id: 3, date: "2024-02-06", name: "Bob Johnson", reference: "Ref789" },
        { id: 4, date: "2024-02-06", name: "Eve Adams", reference: "Ref101" },
        { id: 5, date: "2024-02-06", name: "Charlie Brown", reference: "Ref202" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const totalPages = Math.ceil(verifiedUsers.length / usersPerPage);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = verifiedUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mx-4">
            <h2 className="text-xl font-semibold mb-4">Verified Users</h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border p-2">Verified Date</th>
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
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                                        Unverified
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {verifiedUsers.length > usersPerPage && (
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

export default VerifiedUser;
