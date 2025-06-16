import './App.css'
import HomePage from './pages/HomePage'
import QuizDisplayPage from './pages/QuizDisplayPage'
import QuizGenerationPage from './pages/QuizGenerationPage'
import AboutPage from './pages/AboutPage'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizDisplayPage />} />
      <Route path="/generate" element={<QuizGenerationPage />} />
      <Route path="about" element={<AboutPage/>} />
    </Routes>
  )
}

export default App
