/*
 * File: NotesPage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:37:50 am
 * Last Modified: Thursday, September 9th 2021, 7:28:17 am
 * Copyright © 2021 AMDE Agência
 */

import React from 'react';
import notes from '../assets/data';
import ListItem from '../components/ListItem';

function NotesPage() {
  return (
    <>
      {notes.map((note, index) => (
        <ListItem note={note} key={index} />
      ))}
    </>
  );
}

export default NotesPage;
