import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import data from '../../data/contact';

const ContactIcons = ({ size }) => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} size={size} />
        </a>
      </li>
    ))}
  </ul>
);

ContactIcons.propTypes = {
  size: PropTypes.string,
};

ContactIcons.defaultProps = {
  size: '1x',
};

export default ContactIcons;
