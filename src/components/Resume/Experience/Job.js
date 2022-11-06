import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h3><a href={data.link}>{data.company}</a> - {data.position}</h3>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
    {data.projects.map((proj) => (
      <div className="key-proj">
        <h4>KEY PROJECT: {proj.name}</h4>
        {proj.points.map((ppoint) => (
          <li key={ppoint}>{ppoint}</li>
        ))}
        <br />
      </div>
    ))}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    })),
  }).isRequired,
};

export default Job;
