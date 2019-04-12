import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './todopage/Title'
import Todo from './todopage/Todo'
import Login from './Login'
import { HashRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hideOrShow: false
    }
    console.log('inside the constructor');
  }

  componentDidMount() {
    console.log('Component just mounted')
  }

  render() {
    console.log('Rendering my component')
    const {hideOrShow} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {hideOrShow && <Login />}
          <button style={{background: 'darkBlue'}} onClick={() => this.setState({hideOrShow: !hideOrShow})}>Hide or Show</button>
          
          {/* <Title />
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
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
