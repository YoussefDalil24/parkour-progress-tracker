import { useEffect, useState } from 'react'

function Workouts() {
 const [workouts, setWorkouts] = useState(() => {
  const savedWorkouts = localStorage.getItem('workouts')

  if (savedWorkouts) {
    return JSON.parse(savedWorkouts)
  }

  return [
    { name: 'Vault Practice', duration: 30, difficulty: 'Medium' },
    { name: 'Precision Jump Training', duration: 20, difficulty: 'Easy' }
  ]
})

  const [workoutName, setWorkoutName] = useState('')
  const [duration, setDuration] = useState('')
  const [difficulty, setDifficulty] = useState('Easy')
  useEffect(() => {
  localStorage.setItem('workouts', JSON.stringify(workouts))
}, [workouts])

  const addWorkout = () => {
    if (workoutName.trim() === '' || duration.trim() === '') return

    const newWorkout = {
      name: workoutName,
      duration: duration,
      difficulty: difficulty
    }

    setWorkouts([...workouts, newWorkout])
    setWorkoutName('')
    setDuration('')
    setDifficulty('Easy')
  }

  const deleteWorkout = (index) => {
    const updatedWorkouts = workouts.filter(
      (_, workoutIndex) => workoutIndex !== index
    )

    setWorkouts(updatedWorkouts)
  }

  return (
    <div>
      <h2>Workouts Page</h2>

      <p className="subtitle">
  Plan training sessions and track difficulty.
</p>

<div className="workout-banner">
  <div>
    <h3>Build your training routine</h3>
    <p>Organize vault drills, strength work, conditioning, and technique sessions.</p>
  </div>

  <div className="banner-icon">💪</div>
</div>

      <div className="form-row">
        <input
          type="text"
          placeholder="Workout name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minutes"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button onClick={addWorkout}>Add</button>
      </div>

      <div style={{ marginTop: '25px' }}>
  {workouts.length === 0 ? (
    <p className="empty-message">
      No workouts yet. Add your first training session.
    </p>
  ) : (
    workouts.map((workout, index) => (
      <div key={index} className="skill-card">
        <span>{workout.name}</span>
        <span>{workout.duration} min</span>
        <span className="skill-status">{workout.difficulty}</span>

        <button
          className="delete-btn"
          onClick={() => deleteWorkout(index)}
        >
          ×
        </button>
      </div>
    ))
  )}
</div>
    </div>
  )
}

export default Workouts