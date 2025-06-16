
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  { name: "Science", image: "/images/science.jpg" },
  { name: "History", image: "/images/history.jpg" },
  { name: "Geography", image: "/images/geography.jpg" },
  { name: "Music", image: "/images/music.jpg" },
  { name: "Sports", image: "/images/sports.jpg" },
  { name: "Film & TV", image: "/images/film.jpg" },
];

function QuizHomePage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 p-6">
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-3 drop-shadow-lg">🎯 Ultimate Trivia Quiz</h1>
        <p className="text-xl text-gray-700">Test your brain across fun and challenging topics!</p>
      </header>

      <section className="text-center mb-12">
        <Link
          to="/generate"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-xl shadow-lg hover:from-indigo-500 hover:to-blue-600 transition"
        >
          Start Quiz
        </Link>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">📚 Choose a Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              to={`/quiz/category/${cat.name.toLowerCase().replace(/\s/g, '-')}`}
              key={index}
              className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition bg-white"
            >
              <img src={cat.image} alt={cat.name} className="h-48 w-full object-cover" />
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 text-center">
                <h3 className="text-2xl font-semibold text-purple-800">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-yellow-100 p-8 rounded-xl max-w-4xl mx-auto shadow-md">
        <h2 className="text-2xl font-bold text-yellow-800 mb-3 text-center">💡 How It Works</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Select a category or start a random quiz.</li>
          <li>Answer 10 fun and challenging questions.</li>
          <li>Track your score instantly.</li>
          <li>Challenge friends and improve your knowledge!</li>
        </ul>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default QuizHomePage;