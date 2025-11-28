import React from 'react'

export default function Profile({ profile }) {
  return (
    <section id="profile" className="card">
      <div className="profile-grid">
        <img src={profile.photo_url} alt={profile.full_name} className="avatar" />
        <div>
          <h1>{profile.full_name}</h1>
          <p className="muted">{profile.nim} • {profile.prodi} • Angkatan {profile.angkatan}</p>
          <p className="headline">{profile.headline}</p>
          <p>{profile.short_bio}</p>
          <p className="muted">{profile.location} • <a href={profile.portfolio_url} target="_blank" rel="noreferrer">Portfolio</a></p>
        </div>
      </div>
    </section>
  )
}