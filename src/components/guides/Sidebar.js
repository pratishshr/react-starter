import '../../../public/css/sidebar.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routeConstants from '../../constants/routeConstants';

class Sidebar extends Component {

  render() {
    return (
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <Link to={routeConstants.HOME}>
                React Starter
              </Link>
            </li>
            <li>
              <Link to={routeConstants.ERROR_HANDLING}>Error Handling</Link>
            </li>
          </ul>
        </div>
    );
  }

}

export default Sidebar;
