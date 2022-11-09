import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const resume = `${process.env.PUBLIC_URL}/Resume_Michael_Shliselberg_11_8_22.pdf`;

const Index = () => (
  <Main
    description={'Michael Shliselberg\'s personal website. PhD student researching ways to use AI to detect and combat Mis/Dis-information campaigns'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Michael Shliselberg&apos;s Personal Site</Link></h2>
          {/* <p>
            Stat
          </p> */}
        </div>
      </header>
      <p> I plan to use this site as a digital resume and outlet of sorts. Please feel free to read
        <Link to="/about"> about me</Link>, about <Link to="/resume">my experience</Link>, or check out my
        <Link to="/projects"> blog posts</Link>. You can also download my
        <a href={resume} download={resume}> Resume</a> or
        {' '}look at my <Link to="/contact">Contact Information</Link> in case you want to reach me.
      </p>
    </article>
  </Main>
);

export default Index;
