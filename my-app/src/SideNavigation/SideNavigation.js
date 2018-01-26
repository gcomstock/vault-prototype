import React, { Component } from 'react';
import './SideNavigation.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    const sideNavigationClasses = classNames({
      'SideNavigation': true,
      'SideNavigation--collapsed' : this.state.collapsed
    });

    return (
      <div className={sideNavigationClasses}>
        <div className="SideNavigation__toggle" onClick={this.toggleNav}></div>
      </div>
    )
  }
}

export default SideNavigation;