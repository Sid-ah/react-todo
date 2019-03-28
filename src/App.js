import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './todopage/Title'
import Todo from './todopage/Todo'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('inside the constructor');
  }

  componentDidMount() {
    console.log('Component just mounted')
  }



  render() {
    console.log('Rendering my component')
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Todo />
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
        </header>
      </div>
    );
  }
}

export default App;
