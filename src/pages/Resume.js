import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Industry',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Experience"
    description="Michael S. Eperience"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Experience</Link></h2>
          <div className="link-container">
            {sections.map((sec, index) => (
              <a href={`#${sec.toLowerCase()}`}><b>{sec.toUpperCase()}</b>{index === sections.length - 1 ? '' : ' - '}</a>
            ))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <br />
      <Experience data={positions} />
      <br />
      <Skills skills={skills} categories={categories} />
      <br />
      <Courses data={courses} />
      <br />
      <References />

    </article>
  </Main>
);

export default Resume;
