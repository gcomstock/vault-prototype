import React, { Component } from 'react';
import './FolderListItem.css';
import PropTypes from 'prop-types';

class FolderListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <div className="FolderListItem">

      </div>
    )
  }
}

FolderListItem.propTypes = {
  folderName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default FolderListItem;