/*
 * File: NotePage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:55:00 am
 * Last Modified: Thursday, September 23rd 2021, 2:05:42 pm
 * Copyright © 2021 AMDE Agência
 */

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowLeftIcon} from '../assets/arrow-left.svg';

const NotePage = ({match, history}) => {
  const noteId = Number(match.params.id);
  const [note, setNote] = useState(null);

  //every change we wanna load new data
  useEffect(() => {
    getNote();
  }, [noteId]);

  const addNote = async () => {
    await fetch(`http://localhost:8081/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...note, updated: new Date()}),
    });
  };

  const getNote = async () => {
    if (noteId) {
      const noteService = await fetch(`http://localhost:8081/notes/${noteId}`);
      const note = await noteService.json();
      setNote(note);
    }
  };

  const updateNote = async () => {
    await fetch(`http://localhost:8081/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...note, updated: new Date()}),
    });
  };

  const deleteNote = async () => {
    await fetch(`http://localhost:8081/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });

    history.push('/');
  };

  /**
   * Redirect user to the homepage when clicks on back button
   * Delete note when is empty
   */
  const saveNote = () => {
    if (noteId && !note?.body) {
      deleteNote();
    } else if (noteId) {
      updateNote();
    } else if (!noteId && note) {
      addNote();
    }
    history.push('/');
  };

  return (
    <>
      <header>
        <h3>
          <Link to="/">
            <ArrowLeftIcon onClick={saveNote} />
          </Link>
        </h3>
        {noteId ? (
          <button onClick={deleteNote}>DELETE</button>
        ) : (
          <button onClick={saveNote}>DONE</button>
        )}
      </header>
      <textarea
        autoFocus
        onChange={(event) => {
          setNote({...note, body: event.target.value});
        }}
        value={note?.body}
      ></textarea>
    </>
  );
};

export default NotePage;
