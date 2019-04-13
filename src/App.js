import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Header from './Header'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {       
    }
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
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/login" component={Login} />         
          </Switch>
        </HashRouter>
        </header>
      </div>
    );
  }
}

export default App;
