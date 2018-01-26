import React, { Component } from 'react';
import './FolderList.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button'
import FolderListItem from '../FolderListItem/FolderListItem'

class FolderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <div className="FolderList">
        <div className="FolderList__header">
          <div className="FolderList__header__count">
            1-4 of 30
          </div>
          <div className="FolderList__header__toggle">
            <Button styleClass="Button--clear"/>
          </div>
        </div>
        <FolderListItem isSelected={false} folderName="Harambe2"/>
      </div>
    )
  }
}

FolderList.propTypes = {
  pageType: PropTypes.string.isRequired
};

export default FolderList;