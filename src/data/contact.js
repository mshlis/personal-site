import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// import { IconName } from '@fortawesome/fontawesome-common-types';
// import { faInnosoft } from '@fortawesome/free-brands-svg-icons';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
import { faLink } from '@fortawesome/fontawesome-free-solid';
// to add other icons.

const data = [
  {
    link: 'https://github.com/mshlis',
    label: 'Github',
    icon: faGithub,
  },
  // {
  //   link: 'https://facebook.com/md',
  //   label: 'Facebook',
  //   icon: faFacebookF,
  // },
  // {
  //   link: 'https://www.instagram.com/dangelosaurus/',
  //   label: 'Instagram',
  //   icon: faInstagram,
  // },
  {
    link: 'https://www.linkedin.com/in/michael-shliselberg/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  // {
  //   link: 'https://twitter.com/dangelosaurus',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: 'mailto:mishliselberg@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://ai.stackexchange.com/users/25496/mshlis',
    label: 'ai.SE',
    icon: faLink,
  },
];

export default data;
