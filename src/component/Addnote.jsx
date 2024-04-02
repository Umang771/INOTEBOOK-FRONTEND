import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NoteContext';

const Addnote = (props) => {
  const context = useContext(noteContext)
  const { addNote } = context;

  const { setAddbtn } = props

  const [note, setNote] = useState({ title: "", description: "", tag: "personal" });

  const handleClick = (e) => {
    e.preventDefault();
    setAddbtn(false)
    addNote(note.title, note.description, note.tag)
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"><h2>Title</h2></label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="title" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3" >
          <label htmlFor="description" className="form-label "><h3>Description</h3></label>
          <input   type="text" className="form-control  h-500" name="description" id="description" onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label"><h2>Tag</h2></label>
          <input type="text" className="form-control" id="tag" name="tag" aria-describedby="tag" onChange={onChange} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary" >Add Note</button>
      </form>
    </div>
  )
}

export default Addnote
