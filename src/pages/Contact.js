import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael Shliselberg via email @ mishliselberg@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch with me, the icons below should give you my email/socials:</p>
      </div>
      <ContactIcons size="4x" />
    </article>
  </Main>
);

export default Contact;
