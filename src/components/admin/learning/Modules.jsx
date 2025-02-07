import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Modules = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState([
    { id: 1, name: "Module 1", description: "Introduction to React" },
    { id: 2, name: "Module 2", description: "React Components and Props" },
    { id: 3, name: "Module 3", description: "State Management in React" },
  ]);

  const handleEdit = (id) => {
    console.log("Edit Module:", id);
  };

  const handleDelete = (id) => {
    setModules(modules.filter((module) => module.id !== id));
  };

  const handleAddQuiz = (id) => {
    console.log("Check Quizzes for Module:", id);
  };

  const handleAddModule = () => {
    navigate('/admin/learning/add-module');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mx-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Modules</h2>
        <button
          onClick={handleAddModule}
          className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-700 transition-all"
        >
          Add New Module
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border">Module Name</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module) => (
              <tr key={module.id} className="text-center border border-gray-300">
                <td className="p-3 border border-gray-300">{module.name}</td>
                <td className="p-3 border border-gray-300">{module.description}</td>
                <td className="p-3 border border-gray-300 flex justify-center gap-2">
                  <button
                    onClick={() => handleAddQuiz(module.id)}
                    className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-all"
                  >
                    Check Quizzes
                  </button>
                  <button
                    onClick={() => handleEdit(module.id)}
                    className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-all"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(module.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-all"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
            {modules.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No modules available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modules;
