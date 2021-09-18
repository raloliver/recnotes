/*
 * File: NotesPage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:37:50 am
 * Last Modified: Saturday, September 18th 2021, 8:11:50 am
 * Copyright © 2021 AMDE Agência
 */

import Reac, {useState, useEffect} from 'react';
import ListItem from '../components/ListItem';

function NotesPage() {
  // the value of useState, represents the initial state
  const [notes, setNotes] = useState([]);

  // this will be fire only on the first load
  useEffect(() => {
    getNotes();
    // return () => {
    //   cleanup;
    // };
  }, []);

  const getNotes = async () => {
    const notesService = await fetch('http://localhost:8081/notes');
    const notes = await notesService.json();

    setNotes(notes);
  };

  return (
    <>
      <header>
        <h2 className="title">&#9782; Notes</h2>
        <p className="count">{notes.length}</p>
      </header>
      <div className="list">
        {notes.map((note, index) => (
          <ListItem note={note} key={index} />
        ))}
      </div>
    </>
  );
}

export default NotesPage;
