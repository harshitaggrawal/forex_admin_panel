import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { FaFastBackward } from "react-icons/fa";

const AddQuiz = () => {
    const navigate = useNavigate();
    const [quizName, setQuizName] = useState("");
    const [description, setDescription] = useState("");
    const [moduleName, setModuleName] = useState("");
    const [numQuestions, setNumQuestions] = useState(5);
    const [passingMarks, setPassingMarks] = useState(10);
    const [questions, setQuestions] = useState([]);

    const handleNumQuestionsChange = (value) => {
        setNumQuestions(value);
        setQuestions(Array.from({ length: value }, () => ({
            question: "",
            options: ["", "", "", ""],
            correctAnswer: ""
        })));
    };

    const handleQuestionChange = (index, field, value) => {
        const newQuestions = [...questions];
        if (field === "options") {
            newQuestions[index].options[value.optionIndex] = value.text;
        } else {
            newQuestions[index][field] = value;
        }
        setQuestions(newQuestions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ quizName, description, moduleName, numQuestions, passingMarks, questions });
        navigate(-1);
    };

    return (
        <div className="flex bg-gray-900 text-gray-200 min-h-screen">
            <Sidebar activeTab={"Learning Content"} />
            <div className="flex-1 bg-gray-800 min-h-screen lg:ml-[250px]">
                <Topbar />
                <div className="max-w-4xl mx-auto my-8 p-6 bg-gray-700 shadow-md rounded-lg relative">

                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-4 cursor-pointer flex gap-4 items-center right-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition-all"
                    >
                        <FaFastBackward />  <p>Back</p>
                    </button>
                    <h2 className="text-2xl font-bold mb-4">Add New Quiz</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block font-medium">Quiz Name</label>
                            <input type="text" value={quizName} onChange={(e) => setQuizName(e.target.value)} className="w-full px-3 py-2 border rounded mt-1 bg-gray-600 text-white" required />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded mt-1 bg-gray-600 text-white" required />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Module Name</label>
                            <select value={moduleName} onChange={(e) => setModuleName(e.target.value)} className="w-full px-3 py-2 border rounded mt-1 bg-gray-600 text-white" required>
                                <option value="">Select Module</option>
                                <option value="Module 1">Module 1</option>
                                <option value="Module 2">Module 2</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Number of Questions</label>
                            <select value={numQuestions} onChange={(e) => handleNumQuestionsChange(Number(e.target.value))} className="w-full px-3 py-2 border rounded mt-1 bg-gray-600 text-white">
                                {[5, 10, 15, 20].map(num => <option key={num} value={num}>{num}</option>)}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Passing Marks (%)</label>
                            <select value={passingMarks} onChange={(e) => setPassingMarks(Number(e.target.value))} className="w-full px-3 py-2 border rounded mt-1 bg-gray-600 text-white">
                                {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(percent => <option key={percent} value={percent}>{percent}%</option>)}
                            </select>
                        </div>

                        {questions.map((q, index) => (
                            <div key={index} className="mb-4 p-4 border rounded bg-gray-600">
                                <label className="block font-medium">Question {index + 1}</label>
                                <input type="text" value={q.question} onChange={(e) => handleQuestionChange(index, "question", e.target.value)} className="w-full px-3 py-2 border rounded mt-1 bg-gray-500 text-white" required />
                                <label className="block font-medium mt-2">Options</label>
                                {q.options.map((option, optionIndex) => (
                                    <input key={optionIndex} type="text" value={option} onChange={(e) => handleQuestionChange(index, "options", { optionIndex, text: e.target.value })} className="w-full px-3 py-2 border rounded mt-1 bg-gray-500 text-white" required />
                                ))}
                                <label className="block font-medium mt-2">Correct Answer</label>
                                <input type="text" value={q.correctAnswer} onChange={(e) => handleQuestionChange(index, "correctAnswer", e.target.value)} className="w-full px-3 py-2 border rounded mt-1 bg-gray-500 text-white" required />
                            </div>
                        ))}

                        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQuiz;
