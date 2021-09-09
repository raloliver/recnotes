/*
 * File: ListItem.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:47:06 am
 * Last Modified: Thursday, September 9th 2021, 7:30:13 am
 * Copyright © 2021 AMDE Agência
 */

import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = ({note}) => {
  return (
    <Link to={`/${note.id}`}>
      <div className="list-item">
        <h3>{note.body}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
