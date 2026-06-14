import { useEffect, useState } from 'react'

function Skills() {
  const [skills, setSkills] = useState(() => {
  const savedSkills = localStorage.getItem('skills')

  if (savedSkills) {
    return JSON.parse(savedSkills)
  }

  return [
    { name: 'Precision Jump', status: 'Learning' },
    { name: 'Kong Vault', status: 'Improving' },
    { name: 'Wall Run', status: 'Mastered' }
  ]
})

  const [newSkill, setNewSkill] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)
  const [editValue, setEditValue] = useState('')
  const [category, setCategory] = useState('Vault')
  const [categoryFilter, setCategoryFilter] = useState('All')
  useEffect(() => {
  localStorage.setItem('skills', JSON.stringify(skills))
}, [skills])

  const addSkill = () => {
    if (newSkill.trim() === '') return

    setSkills([
  ...skills,
  {
    name: newSkill,
    status: 'Learning',
    category: category
  }
])
    setNewSkill('')
  }

    const deleteSkill = (index) => {
    const updatedSkills = skills.filter((_, skillIndex) => skillIndex !== index)
    setSkills(updatedSkills)
  }

  const saveEdit = (index) => {
  if (editValue.trim() === '') return

  const updatedSkills = [...skills]

  updatedSkills[index].name = editValue

  setSkills(updatedSkills)

  setEditingIndex(null)
  setEditValue('')
}

const totalSkills = skills.length

const masteredSkills = skills.filter(
  (skill) => skill.status === 'Mastered'
).length

const improvingSkills = skills.filter(
  (skill) => skill.status === 'Improving'
).length

const learningSkills = skills.filter(
  (skill) => skill.status === 'Learning'
).length
  return (
    <div>
      <h2>Skills Page</h2>
      <div className="skills-stats">
  <div className="mini-stat">
    <h4>Total</h4>
    <p>{totalSkills}</p>
  </div>

  <div className="mini-stat">
    <h4>Mastered</h4>
    <p>{masteredSkills}</p>
  </div>

  <div className="mini-stat">
    <h4>Improving</h4>
    <p>{improvingSkills}</p>
  </div>

  <div className="mini-stat">
    <h4>Learning</h4>
    <p>{learningSkills}</p>
  </div>
</div>
      <p className="subtitle">
  Organize your parkour skills by category, status, and progress.
</p>

<div className="skills-banner">
  <div>
    <h3>Train with purpose</h3>
    <p>Track every vault, wall run, flip, and precision jump.</p>
  </div>

  <div className="banner-icon">🏃‍♂️</div>
</div>

      <input
  type="text"
  placeholder="Search skills..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    marginTop: '20px',
    padding: '10px',
    width: '100%',
    borderRadius: '10px',
    border: '1px solid #d1d5db'
  }}
/>
<select
  value={categoryFilter}
  onChange={(e) => setCategoryFilter(e.target.value)}
  style={{
    marginTop: '10px',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #d1d5db'
  }}
>
  <option>All</option>
  <option>Vault</option>
  <option>Flip</option>
  <option>Wall</option>
  <option>Precision</option>
  <option>Balance</option>
</select>

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
        <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option>Vault</option>
  <option>Flip</option>
  <option>Wall</option>
  <option>Precision</option>
  <option>Balance</option>
</select>

        <button onClick={addSkill} style={{ marginLeft: '10px' }}>
          Add
        </button>
      </div>

      <div style={{ marginTop: '25px' }}>
        {skills
  .filter((skill) => {
  const matchesSearch = skill.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase())

  const matchesCategory =
    categoryFilter === 'All' ||
    skill.category === categoryFilter

  return matchesSearch && matchesCategory
})
  .map((skill, index) => (
          <div key={index} className="skill-card">
            <>
  {editingIndex === index ? (
    <input
      value={editValue}
      onChange={(e) => setEditValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          saveEdit(index)
        }
      }}
    />
  ) : (
    <div>
  <strong>{skill.name}</strong>
  <div className="category-badge">
  {skill.category || 'Uncategorized'}
</div>
</div>
  )}
</>
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
  className={`skill-status ${skill.status.toLowerCase()}`}
>
  <option>Learning</option>
  <option>Improving</option>
  <option>Mastered</option>
</select>
            <button
                className="edit-btn"
onClick={() => {
    setEditingIndex(index)
    setEditValue(skill.name)
  }}
>
  ✏️
</button>
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