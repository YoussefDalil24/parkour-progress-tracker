import { useEffect, useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Skills from './pages/Skills'
import Workouts from './pages/Workouts'
import ProgressLog from './pages/ProgressLog'
 ``
function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [stats, setStats] = useState({
  totalSkills: 0,
  totalWorkouts: 0,
  averageRating: 0
})

useEffect(() => {
  const savedSkills = JSON.parse(localStorage.getItem('skills')) || []
  const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || []
  const savedLogs = JSON.parse(localStorage.getItem('logs')) || []

  const totalRatings = savedLogs.reduce((sum, log) => {
    return sum + Number(log.rating)
  }, 0)

  const averageRating =
    savedLogs.length > 0 ? Math.round(totalRatings / savedLogs.length) : 0

  setStats({
    totalSkills: savedSkills.length,
    totalWorkouts: savedWorkouts.length,
    averageRating: averageRating
  })
}, [currentPage])

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
          {currentPage === 'home' && (
            <Home
              totalSkills={stats.totalSkills}
              totalWorkouts={stats.totalWorkouts}
              averageRating={stats.averageRating}
            />
            )}
          {currentPage === 'skills' && <Skills />}
          {currentPage === 'workouts' && <Workouts />}
          {currentPage === 'progress' && <ProgressLog />}
        </div>
      </div>
    </div>
  )
}

export default App