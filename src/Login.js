/* eslint react/prop-types: 0 */
import React from 'react';
import {firebaseAuth} from './utils/auth';

const baseUrl = process.env.PUBLIC_URL;

class Login extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind (this);    
  }

  handleLogin () {
    const {email, password} = this.state;
    this.setState ({logging_in: true, login_error: null});
    firebaseAuth ()
      .signInWithEmailAndPassword (email, password)
      .then (() => {
        console.log('I am logged in!')
        //this.props.history.push (`${baseUrl}/protected`)
      })
      .catch (err => {
        alert (`error logging in: ${err}`);
        this.setState ({
          logging_in: false,
          login_error: 'Incorrect email or password',
        });
      });
  }

  render () {
    return (
      <div className="landing">
        <h1>let's store data!</h1>
        <input
          className="custom-input"
          type="text"
          onChange={e => this.setState({email: e.target.value})}
          placeholder="email"
        />
        <br /><br />
        <input
          className="custom-input"
          type="password"
          onChange={e => this.setState({password: e.target.value})}
          placeholder="password"
        />
        <br /><br />
        <button className="login" onClick={this.handleLogin}>Log in</button>
      </div>
    );
  }
}

export default Login;
