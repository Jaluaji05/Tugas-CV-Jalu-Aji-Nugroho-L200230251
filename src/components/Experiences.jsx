import React from 'react'

function ExperienceCard({ e }){
  const end = e.is_current ? 'Sekarang' : (e.end_date ?? '')
  return (
    <article className="exp-card">
      <h3>{e.title}</h3>
      <p className="muted">{e.organization} • {e.start_date} — {end}</p>
      <p>{e.description}</p>
      {e.technologies && <p className="muted">Tech: {e.technologies.join(', ')}</p>}
    </article>
  )
}

export default function Experiences({ experiences }){
  return (
    <section id="experiences" className="card">
      <h2>Experiences</h2>
      <div className="experiences-list">
        {experiences.map(e => <ExperienceCard key={e.id} e={e} />)}
      </div>
    </section>
  )
}