import React, { useContext } from 'react'
// import { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
import { Link } from 'react-router-dom'
import { Center } from '@chakra-ui/react'

const ContactUs = () => {
  return (
    <div style={{ height: "30rem", width: "100%", }}>
      <div className="container my-4" style={{ height: "85%", width: "100%", backgroundColor: "black", color: "white", padding: "1rem", textAlign: "Center" }}>
        <h1><u>CONTACT US</u></h1>
        <div className="container mx-10 my-4" style={{ textAlign: "Center" }}>
          <div className="container my-2">
            <Link className="fa-brands fa-instagram fa-lg" aria-hidden="true" style={{ color: "orange" }} to="https://www.instagram.com/umang7636/?next=%2F"></Link>
            <Link style={{ margin: "1rem" }} to="https://www.instagram.com/umang7636/?next=%2F">Instagram</Link>
          </div>
          <div className="container my-2">
            <Link className="fa fa-linkedin" aria-hidden="true" style={{ color: "blue" }} to="https://www.linkedin.com/in/umang-gupta-360b0b258/"></Link>
            <Link style={{ margin: "1rem" }} to="https://www.linkedin.com/in/umang-gupta-360b0b258/">Linkedin</Link>
          </div>
          <div className="container my-2">
            <Link className="fa-brands fa-github fa-lg" aria-hidden="true" style={{ color: "white" }} to="https://github.com/Umang771"></Link>
            <Link style={{ margin: "1rem" }} to="https://github.com/Umang771">Github</Link>
          </div>
          <div className="container my-2 mx-1">
            <i className="fa fa-phone" aria-hidden="true" style={{ color: "white" }}></i>
            <i style={{ margin: "0.5rem" }}>7003702778</i>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ContactUs
