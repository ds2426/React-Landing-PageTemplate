import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = (props) => (
  <button className="Button">{props.text}</button>
);

export default Button;
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
