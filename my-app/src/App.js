import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
     <header className='header'>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt=""/>
     </header>
      <nav className='nav'>
        <a href="">Profile</a>
        <a href="">Massages</a>
        <a href="">News</a>
        <a href="">Music</a>
        <a href="">Setings</a>
      </nav>
      <div className='content'>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" alt=""/>

        Main content

        ava + discription

        my posts

        new post

        post 1

        post 2
      </div>
    </div>
  );
}



export default App;
