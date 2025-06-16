import './App.css'
import HomePage from './pages/HomePage'
import QuizDisplayPage from './pages/QuizDisplayPage'
import QuizGenerationPage from './pages/QuizGenerationPage'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizDisplayPage />} />
      <Route path="/generate" element={<QuizGenerationPage />} />
    </Routes>
  )
}

export default App
