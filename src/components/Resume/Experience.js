import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data }) => (
  <div className="industry">
    <div className="link-to" id="industry" />
    <div className="title">
      <h2>INDUSTRY</h2>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    })),
  })),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
