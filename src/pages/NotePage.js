/*
 * File: NotePage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:55:00 am
 * Last Modified: Thursday, September 16th 2021, 5:17:08 am
 * Copyright © 2021 AMDE Agência
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';
import notes from '../assets/data';

const NotePage = ({match}) => {
  const noteId = Number(match.params.id);
  const note = notes.find((note) => note.id === noteId);

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
