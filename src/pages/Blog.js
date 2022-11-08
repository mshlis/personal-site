import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import rehypeMathjax from 'rehype-mathjax';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

import raw from 'raw.macro';
import PropTypes from 'prop-types';

import Main from '../layouts/Main';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;
const config = {
  loader: { load: ['[tex]/html'] },
  tex: {
    packages: { '[+]': ['html'] },
    inlineMath: [
      ['$', '$'],
    ],
  },
  startup: {
    typeset: false,
  },
};

const Blog = (props) => {
  const markdownMap = {
    '2019-10-06-ANNagram': raw('../data/blog/2019-10-06-ANNagram.md'),
    '2019-10-14-ILSampling': raw('../data/blog/2019-10-14-ILSampling.md'),
    '2019-10-21-FocalGradLoss': raw('../data/blog/2019-10-21-FocalGradLoss.md'),
    '2019-10-21-HackUmassMentor': raw('../data/blog/2019-10-21-HackUmassMentor.md'),
    '2019-11-02-SuperMasks': raw('../data/blog/2019-11-02-SuperMasks.md'),
    '2019-11-25-CubicStep': raw('../data/blog/2019-11-25-CubicStep.md'),
  };
  const markdown = markdownMap[props.match.params.postname];
  return (
    <Main
      title="Blog Posts"
      description="Fun little posts"
    >
      <article className="post markdown" id="about">
        <MathJaxContext version={3} config={config}>
          <ReactMarkdown
            source={markdown}
            plugins={[remarkParse, remarkMath, rehypeMathjax]}
            renderers={{
              Link: LinkRenderer,
              math: ({ value }) => <MathJax>{value}</MathJax>,
              inlineMath: ({ value }) => <MathJax inline>{`$${value}$`}</MathJax>,
            }}
            escapeHtml={false}
          />
        </MathJaxContext>
      </article>
    </Main>
  );
};

Blog.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Blog;
