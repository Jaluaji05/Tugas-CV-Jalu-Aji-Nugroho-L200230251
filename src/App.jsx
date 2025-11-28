import React from 'react'
import data from './data/dataMahasiswa.json'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experiences from './components/Experiences'

export default function App(){
  const { profile, skills, experiences } = data
  return (
    <div className="container">

      <main>
        <Profile profile={profile} />
        <Skills skills={skills} />
        <Experiences experiences={experiences} />
      </main>

      <footer className="footer">© {new Date().getFullYear()} {profile.full_name} • NIM: {profile.nim}</footer>
    </div>
  )
}