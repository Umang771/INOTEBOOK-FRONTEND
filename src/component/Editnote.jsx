import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NoteContext';

const Editnote = (props) => {
  // destructuring editnote from Context 
  const context = useContext(noteContext)
  const { editNote } = context;

  // destructuring setEditnote(Function),note from props that was sent from notes.js
  const { note, setEditbtn } = props

  const [notes, setNotes] = useState(note);

  // function to handle click on save notes button
  const handleClick = (e) => {
    e.preventDefault();
    console.log(notes)
    editNote(notes._id,notes.title, notes.description, notes.tag)
    setEditbtn(false)

  }

  const onChange = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"><h2>Title</h2></label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="title" value={notes.title} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3 height-25">
          <label htmlFor="description" className="form-label w-50"><h3>Description</h3></label>
          <input type="text" className="form-control w-50 h-25" name="description" id="description" value={notes.description} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label"><h2>Tag</h2></label>
          <input type="text" className="form-control" id="tag" name="tag" aria-describedby="tag" value={notes.tag} onChange={onChange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary" >Save Note</button>
      </form>
    </div>
  )
}

export default Editnote
