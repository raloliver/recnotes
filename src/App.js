/*
 * File: App.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:13:39 am
 * Last Modified: Thursday, September 9th 2021, 7:30:22 am
 * Copyright © 2021 AMDE Agência
 */

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route component={NotesPage} path="/" exact />
        <Route component={NotePage} path="/:id" />
      </div>
    </Router>
  );
}

export default App;
