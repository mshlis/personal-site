const undergrad = [
  {
    type: 'Independant Study',
    title: 'Single Cell RNA Sequencing Analysis',
    advisor: 'Professor Patrick Flaherty',
    points: [
      'Participated in an Independent Study to use Hierarchical Poisson Factorization to learn latent embedding of cells',
      'Used clustering techniques to classify the weakly labeled data. Simulated in splatter, we evaluated these methods',
    ],
    year: 'Spring 2018',
  },
  {
    type: 'REU',
    title: 'Deep Learning for Hyperspectral Data Processing Research',
    advisor: 'Professor Marco Duarte',
    points: [
      'Participated in an Research Experience for Undergraduates (REU), learning and implementing Deep Learning algorithms in the fields of Computer Vision and Hyperspectral data processing using frameworks such as Tensorflow, Keras, and Caffe',
      'Studied effects of transfer learning on source and targets to try to analyze what allowed for best results',
    ],
    year: 'Summer 2017',
  },
  {
    type: 'REU',
    title: 'Numerical Eigensolver FEAST Research',
    advisor: 'Professor Eric Polizzi',
    points: [
      'Participated in an REU working with the FEAST algorithm, a reduced system Eigensolver',
      'Learned new numerical iterative and direct techniques in solving eigenvalue problems',
      'Developed applications for the FEAST user to “tune” a specific interval and get a density of states for the eigenvalues',
    ],
    year: 'Summer 2016',
  },
  {
    type: 'REU',
    title: 'Hardware Verification and Logic Debugging Research',
    advisor: 'Professor Maciej Ciesielski',
    points: [
      'Participated in an REU doing hardware verification and logic debugging of arithmetic circuits',
      'Transformed Boolean equations into pseudo-algebraic equations to analyze potentially bugged circuits',
      'Brainstormed new ideas to find the origin of Boolean 0-equivalent residuals',
    ],
    year: 'Summer 2015',
  },
  {
    type: 'Project',
    title: 'Text Detoxifier',
    points: [
      'Finds all versions of “f***” and replaces it with a word that is less explicit but retains sentences original meaning',
      'Programmed different models such as a Bag of Words approach, Multiclass Logistic Regression, clustering based off feature vectors, and a skip-gram with different length spans',
      'Annotated scraped data, and used simple active learning approach to maximize annotations impacts',
    ],
    year: 'Fall 2017',
  },
  {
    type: 'Project',
    title: 'Carvana Car-Masking Competition',
    points: [
      'Participated in competition for creating a pixel mask determining where a car is in a picture',
      'Used models that combined concepts from Inception-Resnet and U-nets',
      'Pretrained on errors from previous model to transfer features on structured components not found in basic training',
    ],
    year: 'Summer 2017',
  },
  {
    type: 'Project',
    title: 'Base Run Application',
    points: [
      'Developed an application in which users locally play a capture the flag type game using their mobile geolocations.',
      'Implemented the backend server side in C++ utilizing RPC’s to communicate with the java client',
      'Described deadlines and requirements for team as Development lead',
    ],
    year: 'Fall 2016',
  },
];
export default undergrad;
