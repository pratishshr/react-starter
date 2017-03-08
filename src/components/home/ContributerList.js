import React, { Component } from 'react';

import * as githubService from '../../services/githubService';

import Spinner from '../commons/Spinner';
import ContributerItem from './ContributerItem';

class ContributerList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      contributers: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    githubService.fetchContributers().then(response => {
      this.setState({
        isLoading: false,
        contributers: response.data
      });
    });
  }

  render() {
    return (
      <div className="hawa">
        <h2>Contributers</h2>
        <div className="contributer-list">
          {!this.state.isLoading ?
            this.state.contributers.map(contributer =>
              <ContributerItem
                key={contributer.id}
                profileUrl={contributer.html_url}
                imageUrl={contributer.avatar_url}
              />
            ) : <Spinner/>
          }
        </div>
      </div>
    );
  }
}

export default ContributerList;
