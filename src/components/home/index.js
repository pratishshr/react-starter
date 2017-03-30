import React, { Component } from 'react';

import '../../../public/images/favicon.ico';
import reactLogo from '../../../public/images/react-logo.png';

import ContributerList from './ContributerList';
import GithubButtons from '../commons/GithubButtons';

const USER_NAME = 'pratishshr';
const REPO_NAME = 'react-starter';

class Home extends Component {

  render() {
    return (
      <div className="section">
        <div className="logo-container">
          <img src={reactLogo} alt="react-logo"/>
          <h1>React Starter</h1>
          <span className="icon-icon-tickets"/>
        </div>
        <GithubButtons user={USER_NAME} repo={REPO_NAME}/>
        <ContributerList/>
      </div>
    );
  }

}

export default Home;
