import React from 'react'

function SkillItem({ s }){
  return (
    <div className="skill-item">
      <div className="skill-name">{s.name}</div>
      <div className="skill-meta">{s.level} • {s.years_of_experience ?? '-'} yrs</div>
    </div>
  )
}

export default function Skills({ skills }){
  return (
    <section id="skills" className="card">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(s => <SkillItem key={s.id} s={s} />)}
      </div>
    </section>
  )
}