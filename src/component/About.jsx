import React, { useContext } from 'react'
// import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  const a= useContext(noteContext)
  return (
    <div style={{height:"30rem",width:"100%"}}>
      <div className="container my-4" style={{height:"85%",width:"100%",backgroundColor:"black",color:"white",padding: "4rem"}}>
      This is a website where an indiviual can create their account make notes for itself which can veiwed by them only whenever they want as their is fully  secure with password authentication.
      This app is made By Umang Gupta.
      </div>
    </div>
  )
}

export default About
