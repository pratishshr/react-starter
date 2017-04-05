import React, { Component } from 'react';

import errorHandler from '../../utils/errorHandler';
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

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      let response = await githubService.fetchContributers();
      this.setState({
        isLoading: false,
        contributers: response.data
      });
    } catch (e) {
      this.setState({ isLoading: false });
      errorHandler(e);
    }
  }

  render() {
    return (
      <div className="contributer-wrapper">
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
