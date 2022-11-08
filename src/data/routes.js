const { PUBLIC_URL } = process.env;

const routes = [
  {
    index: true,
    label: 'Michael E. Shliselberg',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Experience',
    path: '/resume',
  },
  {
    label: 'Blog Posts / Side Projects',
    path: '/projects',
  },
  {
    label: 'Resume',
    download: `${PUBLIC_URL}/Resume_Michael_Shliselberg_11_8_22.pdf`,
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
