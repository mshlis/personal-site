import React from 'react';
import PropTypes from 'prop-types';

import UndergradJob from './Undergrad/UndergradJob';

const Undergrad = ({ data }) => (
  <div className="industry">
    <div className="link-to" id="undergrad" />
    <div className="title">
      <h2>UNDERGRAD</h2>
    </div>
    {data.map((job) => (
      <UndergradJob
        data={job}
        key={job.title}
      />
    ))}
  </div>
);

Undergrad.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    advisor: PropTypes.string,
    year: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  })),
};

Undergrad.defaultProps = {
  data: [],
};

export default Undergrad;
