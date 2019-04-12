/* eslint react/prop-types: 0 */
import React from 'react';

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
    console.log(`email is ${email} and password is ${password}`)
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
