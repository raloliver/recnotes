/*
 * File: NotesPage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:37:50 am
 * Last Modified: Thursday, September 16th 2021, 5:11:25 am
 * Copyright © 2021 AMDE Agência
 */

import React from 'react';
import notes from '../assets/data';
import ListItem from '../components/ListItem';

function NotesPage() {
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
