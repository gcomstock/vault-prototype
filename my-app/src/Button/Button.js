import React, { Component } from 'react';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <div className={`Button ${this.props.styleClass}`}>
        EXPAND ALL
      </div>
    )
  }
}

Button.propTypes = {
  styleClass: PropTypes.string
};

export default Button;