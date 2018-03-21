import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <a>Home</a>
        <a>About</a>
        <a>Profile</a>
        <a>Write</a>
      </div>
    );
  }
}

export default Nav;