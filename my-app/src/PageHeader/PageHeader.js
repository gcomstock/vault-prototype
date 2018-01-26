import React, { Component } from 'react';
import './PageHeader.css';
import PropTypes from 'prop-types';

class PageHeader extends Component {
  render() {
    return (
      <div className="PageHeader">
        <h1 className="PageHeader__title">Active Folder Name</h1>
      </div>
    )
  }
}

PageHeader.propTypes = {
  pageType: PropTypes.string.isRequired
};

export default PageHeader;