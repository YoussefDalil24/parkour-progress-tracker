function Home({ totalSkills, totalWorkouts, averageRating }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p className="subtitle">Track. Train. Improve.</p>
      <div className="quote-box">
        “Hard work pays off.”
         </div>

      <div className="dashboard-grid">
        <div className="stat-card">
          <h3>Total Skills</h3>
          <p>{totalSkills}</p>
        </div>

        <div className="stat-card">
          <h3>Total Workouts</h3>
          <p>{totalWorkouts}</p>
        </div>

        <div className="stat-card">
          <h3>Average Rating</h3>
          <p>{averageRating}/10</p>
        </div>
      </div>
    </div>
  )
}

export default Home