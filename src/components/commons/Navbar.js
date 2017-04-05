/**
 * @author Pratish Shrestha <pratishshrestha@lftechnology.com>
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routeConstants from '../../constants/routeConstants';

import reactLogo from '../../../public/images/react-logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to={routeConstants.HOME}>
              <img src={reactLogo}/>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to={routeConstants.GUIDES}>Guides</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
