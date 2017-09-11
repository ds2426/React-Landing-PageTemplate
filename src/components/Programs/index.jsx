/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from '../Button/index.jsx';
import ProgramTile from '../ProgramTile/index.jsx';

const Programs = (props) => (
  <main>
    <div className="programs">
      <h1 className="program-page-title">Weight Loss</h1>
      <h2 className="program-page-text">Welcome to the center of it all. The Fitness
             Shop presents you with hundreds of workout programs designed to guide your
             weight loss journey.
      </h2>
      <section>
        <div className="programs">
          {props.programs.map((item) => {
            return <ProgramTile image={item.image} text={item.text} title={item.title} item={item} />;
          })
          }
        </div>
      </section>
      <Button text="View More" />
    </div>
  </main>
  );

export default Programs;

Programs.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  programs: PropTypes.array,
};
