import { useState } from 'react'

function Skills() {
  const [skills, setSkills] = useState([
    { name: 'Precision Jump', status: 'Learning' },
    { name: 'Kong Vault', status: 'Improving' },
    { name: 'Wall Run', status: 'Mastered' }
  ])

  const [newSkill, setNewSkill] = useState('')

  const addSkill = () => {
    if (newSkill.trim() === '') return

    setSkills([...skills, { name: newSkill, status: 'Learning' }])
    setNewSkill('')
  }

  const deleteSkill = (index) => {
    const updatedSkills = skills.filter((_, skillIndex) => skillIndex !== index)
    setSkills(updatedSkills)
  }

  return (
    <div>
      <h2>Skills Page</h2>

      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Add a new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addSkill()
            }
          }}
        />

        <button onClick={addSkill} style={{ marginLeft: '10px' }}>
          Add
        </button>
      </div>

      <div style={{ marginTop: '25px' }}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span>{skill.name}</span>
            <select
  value={skill.status}
  onChange={(e) => {
    const updatedSkills = skills.map((item, skillIndex) => {
      if (skillIndex === index) {
        return { ...item, status: e.target.value }
      }

      return item
    })

    setSkills(updatedSkills)
  }}
  className="skill-status"
>
  <option>Learning</option>
  <option>Improving</option>
  <option>Mastered</option>
</select>
            <button className="delete-btn" onClick={() => deleteSkill(index)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills