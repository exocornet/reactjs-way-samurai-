import React, { Component } from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Tehno />
    </div>
  );
}

const Tehno = () => {
  return (
    <div className="App">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <div className="Header">
      <ul>
        <li>12</li>
        <li>23</li>
        <li>14</li>
        <li>25</li>
      </ul>
    </div>
  );
}

export default App;
