import React, { useState } from "react";
import Button from "./Button";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

const fetcher = (url) => fetch(url).then((res) => res.json());

function GenerateQuizForm() {
    const { data, error } = useSWR("https://the-trivia-api.com/api/categories", fetcher);

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [amount, setAmount] = useState(10);
    const [type, setType] = useState("multiple");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = `https://the-trivia-api.com/api/questions?categories=${category}&limit=${amount}&difficulty=${difficulty}&type=${type}`;
        console.log("Generated API Query:", query);

        // Navigate to /quiz with query as state
        navigate("/quiz", {
            state: {
                apiUrl: query
            }
        });
    };

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Generate Quiz</h2>

            <label className="block mb-2">
                <span className="block mb-1">Select Category</span>
                <select className="mb-4 p-2 border rounded w-full" onChange={(e) => setCategory(e.target.value)}>
                    {Object.entries(data).map(([group, subcategories]) =>
                        subcategories.map((subcategory) => (
                            <option key={subcategory} value={subcategory}>
                                {subcategory} ({group})
                            </option>
                        ))
                    )}
                </select>
            </label>

            <label className="block mb-2">
                <span className="block mb-1">Difficulty</span>
                <select className="mb-4 p-2 border rounded w-full" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>

            <label className="block mb-2">
                <span className="block mb-1">Number of Questions</span>
                <input
                    type="number"
                    min="1"
                    max="50"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mb-4 p-2 border rounded w-full"
                />
            </label>

            <label className="block mb-2">
                <span className="block mb-1">Question Type</span>
                <select className="mb-4 p-2 border rounded w-full" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True/False</option>
                </select>
            </label>

            {/* Remove Link. Let the button handle navigation */}
            <Button text="Generate" onClickHandler={handleSubmit} />
        </form>
    );
}

export default GenerateQuizForm;
