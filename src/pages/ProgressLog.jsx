import { useEffect, useState } from 'react'

function ProgressLog() {
  const [logs, setLogs] = useState(() => {
  const savedLogs = localStorage.getItem('logs')

  if (savedLogs) {
    return JSON.parse(savedLogs)
  }

  return []
})
  const [skill, setSkill] = useState('')
  const [notes, setNotes] = useState('')
  const [rating, setRating] = useState(5)
useEffect(() => {
  localStorage.setItem('logs', JSON.stringify(logs))
}, [logs])
  const addLog = () => {
    if (skill.trim() === '') return

    const newLog = {
      skill,
      notes,
      rating
    }

    setLogs([...logs, newLog])

    setSkill('')
    setNotes('')
    setRating(5)
  }

  const deleteLog = (index) => {
    const updatedLogs = logs.filter((_, logIndex) => logIndex !== index)
    setLogs(updatedLogs)
  }

  return (
    <div>
      <h2>Progress Log</h2>

      <div className="form-row">
        <input
          type="text"
          placeholder="Skill practiced"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />

        <input
          type="text"
          placeholder="Training notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>

        <button onClick={addLog}>Add</button>
      </div>

      <div style={{ marginTop: '25px' }}>
        {logs.map((log, index) => (
          <div key={index} className="skill-card">
            <div>
              <strong>{log.skill}</strong>
              <p>{log.notes}</p>
            </div>

            <span className="skill-status">
              {log.rating}/10
            </span>

            <button className="delete-btn" onClick={() => deleteLog(index)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressLog