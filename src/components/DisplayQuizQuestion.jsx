import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DisplayQuizQuestion({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);

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
    setShowResult(true);

    // Add score if correct
    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    // Move to next question after a delay
    setTimeout(() => {
      setSelectedOption(null);
      setShowResult(false);
      setCurrentIndex((prev) => prev + 1);
    }, 1500);
  };

  const getScorePercentage = () => Math.round((score / data.length) * 100);

  const getScoreEmoji = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "🏆";
    if (percentage >= 80) return "🎉";
    if (percentage >= 70) return "👏";
    if (percentage >= 60) return "👍";
    return "💪";
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "Outstanding Performance!";
    if (percentage >= 80) return "Excellent Work!";
    if (percentage >= 70) return "Great Job!";
    if (percentage >= 60) return "Good Effort!";
    return "Keep Learning!";
  };

  if (currentIndex >= data.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 sm:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl mb-4">{getScoreEmoji()}</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
              <p className="text-green-100 text-sm sm:text-base">{getScoreMessage()}</p>
            </div>
            
            <div className="p-6 sm:p-8 text-center">
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
                  {score} / {data.length}
                </div>
                <div className="text-lg sm:text-xl text-gray-600 mb-4">
                  {getScorePercentage()}% Correct
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 mb-6">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 sm:h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${getScorePercentage()}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className=" space-y-3 sm:space-y-4">
                <Link to="/generate">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 sm:py-4 px-6 rounded-xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  <span className="mr-2">🔄</span>
                  Try Another Quiz
                </button> 
                </Link>
                </div>

                <div className=" space-y-3 sm:space-y-4">
                <Link to="/" className="mt-4">
                <button className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 sm:py-4 px-6 rounded-xl text-base sm:text-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl transform hover:scale-105">
                  Home
                </button> 
                </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-6 sm:py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 sm:p-6">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <span className="text-xl sm:text-2xl">🎯</span>
                <div>
                  <div className="text-lg sm:text-xl font-bold">
                    Question {currentIndex + 1} of {data.length}
                  </div>
                  <div className="text-purple-100 text-sm sm:text-base">
                    Current Score: {score}/{currentIndex}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-bold">
                  {Math.round(((currentIndex + 1) / data.length) * 100)}%
                </div>
                <div className="text-purple-100 text-xs sm:text-sm">Progress</div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="w-full bg-purple-400 bg-opacity-30 rounded-full h-2 sm:h-3">
                <div 
                  className="bg-white h-2 sm:h-3 rounded-full transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ?
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-relaxed">
                    {currentQuestion.question}
                  </h2>
                </div>
              </div>
              
              {currentQuestion.category && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-100 text-blue-800 font-medium">
                  <span className="mr-1">📚</span>
                  {currentQuestion.category}
                </div>
              )}
            </div>

            <div className="space-y-3 sm:space-y-4">
              {shuffledOptions.map((option, idx) => {
                const optionLabels = ['A', 'B', 'C', 'D'];
                const isSelected = selectedOption === option;
                const isCorrect = option === currentQuestion.correctAnswer;
                const isIncorrect = isSelected && !isCorrect;
                
                let buttonClasses = "w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-300 transform ";
                
                if (showResult && isCorrect) {
                  buttonClasses += "border-green-500 bg-green-50 text-green-800 scale-105 shadow-lg";
                } else if (showResult && isIncorrect) {
                  buttonClasses += "border-red-500 bg-red-50 text-red-800 scale-95";
                } else if (showResult) {
                  buttonClasses += "border-gray-200 bg-gray-50 text-gray-500";
                } else {
                  buttonClasses += "border-gray-200 bg-gray-50 hover:border-purple-300 hover:bg-purple-50 hover:shadow-md hover:scale-102 active:scale-98";
                }

                return (
                  <button
                    key={idx}
                    className={buttonClasses}
                    onClick={() => handleOptionClick(option)}
                    disabled={selectedOption !== null}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showResult && isCorrect 
                          ? 'bg-green-500 text-white' 
                          : showResult && isIncorrect
                          ? 'bg-red-500 text-white'
                          : showResult
                          ? 'bg-gray-300 text-gray-600'
                          : 'bg-purple-100 text-purple-600'
                      }`}>
                        {showResult && isCorrect ? '✓' : showResult && isIncorrect ? '✗' : optionLabels[idx]}
                      </div>
                      <span className="text-sm sm:text-base font-medium leading-relaxed">
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-xl bg-blue-50 border border-blue-200">
                <div className="flex items-center space-x-3">
                  <span className="text-xl sm:text-2xl">
                    {selectedOption === currentQuestion.correctAnswer ? '🎉' : '💡'}
                  </span>
                  <div>
                    <div className="font-semibold text-blue-800 text-sm sm:text-base">
                      {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : 'Not quite right'}
                    </div>
                    <div className="text-blue-700 text-xs sm:text-sm">
                      {selectedOption === currentQuestion.correctAnswer 
                        ? 'Great job! Moving to the next question...' 
                        : `The correct answer was: ${currentQuestion.correctAnswer}`}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayQuizQuestion;