/* eslint react/prop-types: 0 */
import React from 'react';
import Header from './Header';

const Landing = () => (
  <div>
    <Header />
    <h2 className="title">Welcome to Cosmos DB</h2>
    <h2 className="second-title">A world class database!</h2>
  </div>
);

export default Landing