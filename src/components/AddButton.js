/*
 * File: AddButton.js
 * Project: recnotes
 * Created: Thursday, September 23rd 2021, 1:40:12 pm
 * Last Modified: Thursday, September 23rd 2021, 1:53:16 pm
 * Copyright © 2021 AMDE Agência
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as AddIcon} from '../assets/add.svg';

const AddButton = () => {
  return (
    <Link to="/note/0" className="floating-button">
      <AddIcon />
    </Link>
  );
};

export default AddButton;
