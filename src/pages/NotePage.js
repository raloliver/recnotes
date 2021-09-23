/*
 * File: NotePage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:55:00 am
 * Last Modified: Thursday, September 23rd 2021, 1:26:18 pm
 * Copyright © 2021 AMDE Agência
 */

import Reac, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

const NotePage = ({match, history}) => {
  const noteId = Number(match.params.id);
  const [note, setNote] = useState(null);

  //every change we wanna load new data
  useEffect(() => {
    getNote();
  }, [noteId]);

  const getNote = async () => {
    const noteService = await fetch(`http://localhost:8081/notes/${noteId}`);
    const note = await noteService.json();

    setNote(note);
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
  const onBackList = () => {
    if (noteId !== 0 && !note.body) {
      deleteNote();
    } else if (noteId !== 0) {
      updateNote();
    }
    history.push('/');
  };

  return (
    <>
      <header>
        <h3>
          <Link to="/">
            <ArrowLeft onClick={onBackList} />
          </Link>
        </h3>
        <button onClick={deleteNote}>DELETE</button>
      </header>
      <textarea
        onChange={(event) => {
          setNote({...note, body: event.target.value});
        }}
        value={note?.body}
      ></textarea>
    </>
  );
};

export default NotePage;
