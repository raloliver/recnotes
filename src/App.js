/*
 * File: App.js
 * Project: recnotes
 * Created: Thursday, September 9th 2021, 6:13:39 am
 * Last Modified: Thursday, September 9th 2021, 6:34:46 am
 * Copyright © 2021 AMDE Agência
 */

import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
