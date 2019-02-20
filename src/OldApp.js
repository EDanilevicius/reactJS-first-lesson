import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import goraster from './app/goraster.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h2>First React Lesson</h2>
          <img src={goraster} className="hamster_image"></img>
          <button onClick={() => alert("My button is working")}>
          Click here!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
