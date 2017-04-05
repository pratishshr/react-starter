import 'prismjs/themes/prism.css';
import React, { Component } from 'react';

import Routes from './routes';
import Sidebar from './Sidebar';

class Guides extends Component {

  render() {
    return (
      <div id="wrapper" className="toggled">
        <Sidebar/>
        <Routes/>
      </div>
    );
  }

}

export default Guides;
