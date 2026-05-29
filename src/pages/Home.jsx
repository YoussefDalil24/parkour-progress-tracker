function Home({ totalSkills, totalWorkouts, averageRating }) {
  return (
    <div>
      <section className="landing-hero">
        <div>
          <p className="eyebrow">Parkour Training App</p>
          <h2>Train smarter. Track better.</h2>
          <p>
            Build your parkour skills, organize workouts, and measure your
            progress every day.
          </p>
          <button className="hero-btn">Start Training</button>
        </div>

        <div className="phone-preview">
          <div className="phone-header"></div>
          <h3>Today&apos;s Training</h3>
          <p>Vault Practice</p>
          <p>Wall Run</p>
          <p>Precision Jump</p>
        </div>
      </section>

      <div className="quote-box">“Hard work pays off.”</div>

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