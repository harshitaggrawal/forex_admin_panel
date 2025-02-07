import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { FaFastBackward } from "react-icons/fa";
const AddModule = () => {
    const navigate = useNavigate();
    const [moduleName, setModuleName] = useState("");
    const [moduleDescription, setModuleDescription] = useState("");
    const [sections, setSections] = useState([{ title: "", image: "", preview: "", description: "" }]);

    const addSection = () => {
        setSections([...sections, { title: "", image: "", preview: "", description: "" }]);
    };

    const deleteSection = (index) => {
        setSections(sections.filter((_, i) => i !== index));
    };

    const handleImageUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newSections = [...sections];
                newSections[index].image = file;
                newSections[index].preview = reader.result;
                setSections(newSections);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Module Data:", { moduleName, moduleDescription, sections });
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
                    <h2 className="text-2xl font-bold mb-4">Add New Module</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block font-medium">Module Name</label>
                            <input
                                type="text"
                                value={moduleName}
                                onChange={(e) => setModuleName(e.target.value)}
                                className="w-full px-3 py-2 border rounded mt-1 bg-gray-600 text-white"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium">Short Description</label>
                            <textarea
                                value={moduleDescription}
                                onChange={(e) => setModuleDescription(e.target.value)}
                                className="w-full px-3 py-2 border rounded mt-1 bg-gray-600 text-white"
                                required
                            />
                        </div>

                        {sections.map((section, index) => (
                            <div key={index} className="border p-4 mb-4 rounded flex  gap-4 bg-gray-600">
                                <div className="w-40 h-48 border rounded overflow-hidden flex justify-center items-center bg-gray-500 relative">
                                    {section.preview ? (
                                        <img src={section.preview} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-gray-300">Image</span>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e, index)}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="mb-2">
                                        <label className="block font-medium">Title</label>
                                        <input
                                            type="text"
                                            value={section.title}
                                            onChange={(e) => {
                                                const newSections = [...sections];
                                                newSections[index].title = e.target.value;
                                                setSections(newSections);
                                            }}
                                            className="w-full px-3 py-2 border rounded mt-1 bg-gray-500 text-white"
                                            required
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label className="block font-medium">Description</label>
                                        <textarea
                                            value={section.description}
                                            onChange={(e) => {
                                                const newSections = [...sections];
                                                newSections[index].description = e.target.value;
                                                setSections(newSections);
                                            }}
                                            className="w-full px-3 py-2 border rounded mt-1 bg-gray-500 text-white"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => deleteSection(index)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                                    >
                                        Delete Section
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addSection}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all mb-4"
                        >
                            + Add More Section
                        </button>

                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all ml-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddModule;
