/*
 * File: NotesPage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:37:50 am
 * Last Modified: Thursday, September 23rd 2021, 1:58:39 pm
 * Copyright © 2021 AMDE Agência
 */

import React, {useState, useEffect} from 'react';
import AddButton from '../components/AddButton';
import ListItem from '../components/ListItem';

function NotesPage() {
  // the value of useState, represents the initial state
  const [notes, setNotes] = useState([]);

  // this will be fire only on the first load
  useEffect(() => {
    getNotes();
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
      <AddButton />
    </>
  );
}

export default NotesPage;
