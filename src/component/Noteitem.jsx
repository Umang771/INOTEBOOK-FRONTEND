import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
  const {note, editClick} = props
    
  const context = useContext(noteContext)
  const { deleteNote } = context;

  const deleteClick=()=>{
      deleteNote(note._id)
  }
  
  const edit2Click=()=>{
    // console.log(note)
    editClick(note);
  }

  if(note.title.length>15){
    note.title=note.title.slice(0,18);
    note.title=note.title.concat("...");
  }
    
  return (
    <div className="col-md-3 my-3 container" >
       <div className="card" >
  <div className="card-body"  >
    <h5 className="card-title d-flex" style={{overflow:"hidden"}}>{note.title} </h5>
    <i className="fa-solid fa-trash mx-3" onClick={deleteClick}></i>
    <i className="fa-solid fa-file-pen" onClick={edit2Click}></i>
    <p className="card-text" >{note.description}</p>
  </div>
</div>
    </div>
  )
}

export default Noteitem
