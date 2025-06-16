import React, { useState,useEffect } from "react";
import Button from "./Button";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());

function GenerateQuizForm() {
    const { data, error } = useSWR("https://the-trivia-api.com/api/categories", fetcher);

    const [category, setCategory] = useState("sport");
    const [difficulty, setDifficulty] = useState("easy");
    const [amount, setAmount] = useState(10);
    const [type, setType] = useState("multiple");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = `https://the-trivia-api.com/api/questions?categories=${category}&limit=${amount}&difficulty=${difficulty}&type=${type}`;
        // console.log("Generated API Query:", query);

        // Navigate to /quiz with query as state
        navigate("/quiz", {
            state: {
                apiUrl: query
            }
        });
    };

    useEffect(() => {
        if (data && !Object.values(data).flat().includes(category)) {
            const firstGroup = Object.values(data)[0];
            if (firstGroup && firstGroup.length > 0) {
                setCategory(firstGroup[0]);
            }
        }
    }, [data]);

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8 max-w-md mx-auto text-center shadow-lg">
                    <div className="text-4xl mb-4">⚠️</div>
                    <h3 className="text-xl font-semibold text-red-800 mb-2">Connection Error</h3>
                    <p className="text-red-600">Failed to load quiz categories. Please check your connection and try again.</p>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md mx-auto text-center shadow-lg border border-gray-100">
                    <div className="animate-spin text-4xl mb-4">🔄</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Loading Categories</h3>
                    <p className="text-gray-600">Preparing your quiz options...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 sm:py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12">
                        <span className="text-4xl sm:text-5xl">🎯</span>
                    
                    <h1 className=" inline text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        {' '}Customize Your 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            {' '}Quiz Experience
                        </span>
                    </h1>
                    
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
                            <span className="mr-2">⚙️</span>
                            Quiz Configuration
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                        {/* Category Selection */}
                        <div className="space-y-3">
            <label className="flex items-center text-base sm:text-lg font-semibold text-gray-800">
                <span className="mr-2">📚</span>
                Select Category
            </label>
            <div className="relative">
                <select 
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl text-sm sm:text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 appearance-none bg-white cursor-pointer hover:border-gray-400"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option value="">Choose a category...</option>
                    {Object.entries(data).map(([group, subcategories]) =>
                        subcategories.map((subcategory) => (
                            <option key={subcategory} value={subcategory}>
                                {subcategory} ({group})
                            </option>
                        ))
                    )}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>

                        {/* Difficulty Selection */}
                        <div className="space-y-3">
                            <label className="flex items-center text-base sm:text-lg font-semibold text-gray-800">
                                <span className="mr-2">🎚️</span>
                                Difficulty Level
                            </label>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                {[
                                    { value: "easy", label: "Easy", emoji: "😊", color: "green" },
                                    { value: "medium", label: "Medium", emoji: "🤔", color: "yellow" },
                                    { value: "hard", label: "Hard", emoji: "😤", color: "red" }
                                ].map((option) => (
                                    <label key={option.value} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="difficulty"
                                            value={option.value}
                                            checked={difficulty === option.value}
                                            onChange={(e) => setDifficulty(e.target.value)}
                                            className="sr-only"
                                        />
                                        <div className={`text-center p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 ${
                                            difficulty === option.value
                                                ? `border-${option.color}-500 bg-${option.color}-50`
                                                : 'border-gray-200 hover:border-gray-400'
                                        }`}>
                                            <div className="text-lg sm:text-xl mb-1">{option.emoji}</div>
                                            <div className="text-xs sm:text-sm font-medium text-gray-700">{option.label}</div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Number of Questions */}
                        <div className="space-y-3">
                            <label className="flex items-center text-base sm:text-lg font-semibold text-gray-800">
                                <span className="mr-2">🔢</span>
                                Number of Questions
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    min="1"
                                    max="50"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl text-sm sm:text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                                    placeholder="Enter number (1-50)"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <span className="text-gray-400 text-sm">questions</span>
                                </div>
                            </div>
                        </div>

                        {/* Question Type */}
                        <div className="space-y-3">
                            <label className="flex items-center text-base sm:text-lg font-semibold text-gray-800">
                                <span className="mr-2">❓</span>
                                Question Format
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { value: "multiple", label: "Multiple Choice", desc: "4 answer options" },
                                    // { value: "boolean", label: "True or False", desc: "2 answer options" }
                                ].map((option) => (
                                    <label key={option.value} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="type"
                                            value={option.value}
                                            checked={type === option.value}
                                            onChange={(e) => setType(e.target.value)}
                                            className="sr-only"
                                        />
                                        <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                            type === option.value
                                                ? 'border-purple-500 bg-purple-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}>
                                            <div className="font-medium text-gray-800 mb-1">{option.label}</div>
                                            <div className="text-xs sm:text-sm text-gray-600">{option.desc}</div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 px-6 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-purple-700 hover:to-blue-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!category}
                            >
                                <span className="mr-2">🚀</span>
                                {category ? 'Generate My Quiz' : 'Select a Category First'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Info Section */}
                <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <div className="text-center">
                        <div className="text-2xl mb-3">💡</div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tip</h3>
                        <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                            Start with easy difficulty if you are new to a topic, or challenge yourself with hard mode for topics you know well. The sweet spot for most users is 10-15 questions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenerateQuizForm;