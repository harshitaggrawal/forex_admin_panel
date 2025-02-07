import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Quizes = () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      quizName: "React Basics",
      moduleName: "React Introduction",
      questions: 10,
      passingScore: 70,
    },
    {
      id: 2,
      quizName: "JavaScript Fundamentals",
      moduleName: "JS Basics",
      questions: 15,
      passingScore: 75,
    },
    {
      id: 3,
      quizName: "CSS Grid & Flexbox",
      moduleName: "Advanced CSS",
      questions: 8,
      passingScore: 60,
    },
  ]);

  const handleDelete = (id) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };
const navigate = useNavigate();
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mx-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Quizzes</h2>
        <button onClick={()=>{navigate('/admin/quizzes/add-quiz')}} className="bg-gray-600 text-white px-4 py-2 rounded-xl hover:bg-gray-700">
          Add New Quiz
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border">Quiz Name</th>
              <th className="p-3 border">Module Name</th>
              <th className="p-3 border">No. of Questions</th>
              <th className="p-3 border">Passing Score</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz.id} className="text-center border border-gray-300 ">
                <td className="p-3 border border-gray-300">{quiz.quizName}</td>
                <td className="p-3 border border-gray-300">{quiz.moduleName}</td>
                <td className="p-3 border border-gray-300">{quiz.questions}</td>
                <td className="p-3 border border-gray-300">{quiz.passingScore}%</td>
                <td className="p-3 border border-gray-300">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(quiz.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
            {quizzes.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No quizzes available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quizes;
