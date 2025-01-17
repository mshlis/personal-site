import React from 'react';
import { Link } from 'react-router-dom';

// import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const createHeaderButton = (l, key) => (l.path ? (
  <Link to={l.path} key={key}>{l.label}</Link>) : (
    <a href={l.download} download={l.download}>
      {l.label}
    </a>)
);

const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        createHeaderButton(l, l.label)
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            {/* <Link to={l.path}>{l.label}</Link> */}
            {createHeaderButton(l, undefined)}
          </li>
        ))}
      </ul>
    </nav>
    {/* <Hamburger /> */}
  </header>
);

export default Navigation;
