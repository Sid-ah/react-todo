  import React, { Component } from 'react';
  import './App.css';
  import Login from './Login'
  import Landing from './Landing'
  import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
  import Protected from './Protected'
  import {firebaseAuth} from './utils/auth'

  const baseUrl = process.env.PUBLIC_URL; 
  const fourOhFour = <h1>404 We are out, so should you be!</h1>
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {       
        authenticated: false
      }
      this.privateRoute = this.privateRoute.bind (this);
      this.authStateChanged = this.authStateChanged.bind (this);
      this.loginRoute = this.loginRoute.bind (this);
      console.log('inside the constructor');
    }

    componentDidMount () {
      console.log('Component just mounted')
      this.removeListener = firebaseAuth ().onAuthStateChanged (
        this.authStateChanged
      );
    }
    authStateChanged (user) {
      if (user) {
        const {uid} = firebaseAuth ().currentUser;
        console.log(uid)
        if (uid) {
          console.log('about to set isAuthenticated to true')
          this.setState ({authenticated: true});
        } else {
          firebaseAuth ().signOut ();
          this.setState ({authenticated: false});
       }
      } else {
        firebaseAuth ().signOut ();
        this.setState ({authenticated: false});
      }
    }
    privateRoute({component: Component, authenticated, ...rest}) {
      return (
        <Route
          {...rest}
          render={props =>
            authenticated === true
              ? <Component {...props} />
              : <Redirect to={`${baseUrl}/login`} />}
        />
      );
    }
    loginRoute({component: Component, authenticated, ...rest}) {
      console.log (`this.state.authenticated ${this.state.authenticated}`);
      return (
        <Route
          {...rest}
          render={props =>
            authenticated === true
              ? <Redirect to={`${baseUrl}/protected`} />
              : <Component {...props} />}
        />
      );
    }

    render() {
      console.log('Rendering my component')
      const PrivateRoute = this.privateRoute;
      const LoginRoute = this.loginRoute;
      const {authenticated} = this.state
      return (
        <BrowserRouter>
          <div className="app">
            <Switch>
              <PrivateRoute path={`${baseUrl}/protected`} authenticated={authenticated} component={Protected} />
              <LoginRoute path={`${baseUrl}/login`} authenticated={authenticated} component={Login} />
              <Route exact path={`${baseUrl}/`} component={Landing} />
              <Route component={fourOhFour} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }

  export default App;
