import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  { name: "Arts & Literature", image: "/images/science.jpg" },
  { name: "Film & TV", image: "/images/history.jpg" },
  { name: "Food & Drink", image: "/images/geography.jpg" },
  { name: "General Knowledge", image: "/images/music.jpg" },
  { name: "Geography", image: "/images/sports.jpg" },
  { name: "History", image: "/images/film.jpg" },
  { name: "Science", image: "/images/literature.jpg" },
  { name: "Society & Culture", image: "/images/food.jpg" },
  { name: "Sport & Leisure", image: "/images/art.jpg" },
];

function QuizHomePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero Section */}
        <header className="px-4 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="text-4xl sm:text-5xl lg:text-6xl">🎯</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Ultimate Trivia
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Quiz Challenge
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Test your knowledge across diverse topics and challenge yourself with engaging questions
            </p>
          </div>
        </header>

        {/* CTA Section */}
        <section className="px-4 pb-8 sm:pb-12">
          <div className="text-center">
            <Link
              to="/generate"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-purple-700 hover:to-blue-700 active:scale-95"
            >
              <span className="mr-2">🚀</span>
              Start Your Quiz Adventure
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-4 pb-8 sm:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                <span className="mr-2">📚</span>
                Choose Your Category
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Select from our carefully curated topics or dive into a random challenge
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="h-40 sm:h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center group-hover:text-purple-600 transition-colors duration-200">
                      {cat.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
                  <span className="mr-2">💡</span>
                  How It Works
                </h2>
                <p className="text-yellow-100 text-center text-sm sm:text-base">
                  Getting started is simple and fun
                </p>
              </div>
              <div className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Choose Your Path</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Select a specific category or dive into a random quiz for variety</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Answer Questions</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Tackle 10 carefully crafted questions designed to challenge and educate</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Track Progress</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Monitor your score in real-time and see detailed results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge & Improve</h4>
                      <p className="text-gray-600 text-sm sm:text-base">Share with friends and continuously expand your knowledge base</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default QuizHomePage;