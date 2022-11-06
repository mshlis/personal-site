import React from 'react';
// import { Link } from 'react-router-dom';
import references from '../../data/resume/references';

const References = () => (
  <div className="references" id="references">
    <div className="title">
      <h2>References</h2>
    </div>
    {references.map((ref) => (ref))}
  </div>
);

export default References;
