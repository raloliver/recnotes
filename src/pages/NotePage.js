/*
 * File: NotePage.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:55:00 am
 * Last Modified: Thursday, September 9th 2021, 7:29:43 am
 * Copyright © 2021 AMDE Agência
 */

import React from 'react';
import notes from '../assets/data';

const NotePage = ({match}) => {
  const noteId = Number(match.params.id);
  const note = notes.find((note) => note.id === noteId);

  return <div className="item">{note?.body}</div>;
};

export default NotePage;
