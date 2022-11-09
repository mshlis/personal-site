import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

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
        <Link to="/about"> about me</Link>, about <Link to="/about">my experience</Link>, or check out my
        <Link to="/about"> blog posts</Link>. You can also download my <Link to="/about">Resume</Link> or
        {' '}look at my <Link to="/contact">Contact Information</Link> in case you want to reach me.
      </p>
    </article>
  </Main>
);

export default Index;
