/*
 * File: ListItem.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:47:06 am
 * Last Modified: Thursday, September 30th 2021, 5:11:43 am
 * Copyright © 2021 AMDE Agência
 */

import React from 'react';
import {Link} from 'react-router-dom';

const TITLE_LENGTH = 45;

/**
 * Get content after the title and remove title from preview at list.
 *
 * @param {*} note
 * @return {*}
 */
const getContent = (note) => {
  const title = getTitle(note);
  let content = note.body.replaceAll('\n', '');
  content = content.replaceAll(title, '');

  if (content.length > TITLE_LENGTH) {
    return content.slice(0, TITLE_LENGTH) + '...';
  } else {
    return content;
  }
};

const getTime = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

/**
 * Split by new lines and just get the first line
 * Split will make a list of each line and will only put on the first line by index zero
 *
 * @param {*} note
 * @return {*}
 */
const getTitle = (note) => {
  const title = note.body.split('\n')[0];

  if (title.length > TITLE_LENGTH) {
    return title.slice(0, TITLE_LENGTH);
  }

  return title;
};

const ListItem = ({note}) => {
  return (
    <Link to={`/${note.id}`}>
      <div className="list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note)}</span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
