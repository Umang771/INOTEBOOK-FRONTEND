import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import Editnote from './Editnote';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Notes = () => {
  let navigate = useNavigate();
  const context = useContext(noteContext)
  const { notes, getallnotes } = context
  useEffect(() => {
    if(localStorage.getItem('token')){
      getallnotes();
    }
    else
      navigate('/Login')

    // eslint-disable-next-line 
  }, []);

  const [addbtn, setAddbtn] = useState(false)
  const [editbtn, setEditbtn] = useState(false)

  const clicktoadd = () => {
    setAddbtn(true);
  }
  const [noteEdit, setNoteEdit] = useState("")

  const editClick = (note) => {
    setNoteEdit(note);
    setEditbtn(true);
    setAddbtn(false);
  }

  return (
    <>
      <button onClick={clicktoadd}>Add Note</button>
      {addbtn && <Addnote setAddbtn={setAddbtn} />}

      <div className='row my-3'>
        <h2>Your Notes</h2>
        {console.log(notes)}
        {editbtn && <Editnote note={noteEdit} setEditbtn={setEditbtn} />}
        {notes && notes.map((note) => {
          return <Noteitem key={note._id} note={note} editClick={editClick} />;
        })}
      </div>
    </>
  )
}

export default Notes
