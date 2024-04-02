import { useState } from "react";
import NoteContext from "./notes/NoteContext";

const NoteState = (props) => {
  const host = "https://inotebook-backend-c3zu.onrender.com"

  const getallnotes = async () => {
    // Api call
    const response = await fetch(`${host}/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    })
    const json = await response.json();
    setNotes(json);
  }

  const [notes, setNotes] = useState("");

  const addNote = async (title, description, tag) => {
    // api call for addnote to addnote endpoint in backend
    const response = await fetch(`${host}/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note1 = await response.json();
    setNotes(notes.concat(note1))
    // calling getnotes function to re-render the updated notes from database on frontend
    //getallnotes();
  }

  const editNote = async (id, title, description, tag) => {
    // api call
    console.log(id, title, description, tag)
    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    getallnotes();
    const json = await response.json();
    // console.log(json)
    // console.log(id, title, description, tag);
    // for (let index = 0; index < notes.length; index++) {
    //   const element = notes[index];
    //   if (element._id === id) {
    //     element.title = title;
    //     element.description = description;
    //     element.tag = tag;
    //   }
    // }

  }

  const deleteNote = async (id) => {
    // api call
    const response = await fetch(`${host}/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    // calling getnotes function to re-render the updated notes from database on frontend
    getallnotes();
    const json = await response.json();
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getallnotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;