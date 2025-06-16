import React, { useState, useEffect } from "react";

function DisplayQuizQuestion({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const currentQuestion = data[currentIndex];

  // Shuffle options (correct + incorrect)
  useEffect(() => {
    if (currentQuestion) {
      const options = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer];
      setShuffledOptions(options.sort(() => Math.random() - 0.5));
    }
  }, [currentIndex, currentQuestion]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    // Add score if correct
    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    // Move to next question after a delay
    setTimeout(() => {
      setSelectedOption(null);
      setCurrentIndex((prev) => prev + 1);
    }, 300);
  };

  if (currentIndex >= data.length) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">Quiz Complete!</h2>
        <p>Your Score: {score} / {data.length}</p>
      </div>
    );
  }

  return (
    <>
    <div className="p-4 text-center">
        <p>Your Score: {score} / {data.length}</p>
      </div>
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Question {currentIndex + 1}</h2>
      <p className="mb-6">{currentQuestion.question}</p>
      <div className="grid gap-3">
        {shuffledOptions.map((option, idx) => (
          <button
            key={idx}
            className={`p-2 rounded border text-left
              ${selectedOption === option
                ? option === currentQuestion.correctAnswer
                  ? "bg-green-300"
                  : "bg-red-300"
                : "bg-gray-100 hover:bg-gray-200"}`}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
    </>
  );
}

export default DisplayQuizQuestion;
