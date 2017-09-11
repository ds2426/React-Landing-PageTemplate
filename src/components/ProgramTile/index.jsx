import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

const ProgramTile = (props) => (
/**
* Loads the program page content of the app
*/
  <div className="program">
    <img alt={props.title} src={props.image} />
    <p className="program-title">{props.title}</p>
    <p className="program-text">{props.text}</p>
  </div>
);

export default ProgramTile;
ProgramTile.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};
