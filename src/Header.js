/* eslint react/prop-types: 0 */
import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/cosmosdb.png';

const baseUrl = process.env.PUBLIC_URL;

class Header extends React.Component {
  
  linkToUse () {
    return <Link className="login" to={`${baseUrl}/login`}>Login</Link>;
  }

  render () {
    const LinkToUse = this.linkToUse;
    return (
      <header>
        <div className="header-div">
          <img alt="logo" className="logo" src={logo} />
          <h1 className="cosmos-name">Cosmos DB</h1>
        </div>
        <LinkToUse />
      </header>
    );
  }
}

export default Header