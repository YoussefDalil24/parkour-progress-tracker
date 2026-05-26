import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Skills from './pages/Skills'
import Workouts from './pages/Workouts'
import ProgressLog from './pages/ProgressLog'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app">
      <div className="hero">
        <h1>Parkour Progress Tracker</h1>
        <p>Track your skills, workouts, and progress like an athlete.</p>

        <div className="nav-buttons">
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('skills')}>Skills</button>
          <button onClick={() => setCurrentPage('workouts')}>Workouts</button>
          <button onClick={() => setCurrentPage('progress')}>Progress Log</button>
        </div>

        <div className="page-content">
          {currentPage === 'home' && <Home />}
          {currentPage === 'skills' && <Skills />}
          {currentPage === 'workouts' && <Workouts />}
          {currentPage === 'progress' && <ProgressLog />}
        </div>
      </div>
    </div>
  )
}

export default App