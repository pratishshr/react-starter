import React, { PropTypes } from 'react';

const ContributerItem = ({ profileUrl, imageUrl }) => {

  return (
    <div className="contributer-item">
      <a href={profileUrl} target="_blank">
        <img src={imageUrl} alt="contributer avatar"/>
      </a>
    </div>
  );

};

ContributerItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired
};

export default ContributerItem;
