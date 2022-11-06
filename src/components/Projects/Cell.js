import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const Cell = ({ data }) => {
  const imgObj = data.link ? (
    <a href={data.link} className="image">
      <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
    </a>
  ) : (
    <Link to={`/posts/${data.handle}`} className="image">
      <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} height="500px" />
    </Link>
  );
  return (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      {imgObj}
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    handle: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
