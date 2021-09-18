/*
 * File: NotePage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:55:00 am
 * Last Modified: Saturday, September 18th 2021, 8:17:30 am
 * Copyright © 2021 AMDE Agência
 */

import Reac, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';

const NotePage = ({match}) => {
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

  return (
    <>
      <header>
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </header>
      <textarea value={note?.body}></textarea>
    </>
  );
};

export default NotePage;
