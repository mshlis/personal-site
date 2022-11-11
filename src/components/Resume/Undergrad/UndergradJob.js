import React from 'react';
import PropTypes from 'prop-types';

const UndergradJob = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h3>{data.title}</h3>
      <p className="daterange">{`${data.type} - ${data.year}`}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

UndergradJob.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    advisor: PropTypes.string,
    year: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default UndergradJob;
