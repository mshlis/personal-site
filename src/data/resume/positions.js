const positions = [
  {
    company: 'Amazon.com; Alexa org',
    position: 'Software Developer Engineer II (L5)',
    link: 'https://amazon.com',
    daterange: 'Summer 2020 - Summer 2021',
    points: [
      'Designed data pipelines and service architectures while articulating them to peers and managers in open forum reviews',
      'Led project to rewrite an open source BI tool to handle Red/Critical data in a secure and scalable fashion',
      'Worked with customers to determine and build dashboarding functionalities that would save them dev time',
      'Developed and maintained internal services needed for research scientists to efficiently access and query Alexa data',
    ],
    projects: [],
  },
  {
    company: 'Systems & Technology Research',
    position: 'Machine Learning Researcher',
    link: 'https://www.str.us/',
    daterange: 'Spring 2018 - Summer 2020',
    points: [],
    projects: [
      {
        name: 'Group Dynamics',
        points: [
          'Designed a language model to classify stubbornness and suspiciousness from dialogue',
          'Wrote a context dependent text-generator using both MLE and adversarial training regimes',
          'Developed an RNN with a GPT2 backbone that works on threads and dynamically learns author embeddings',
          'Presented research results to government stakeholders at DARPA',
        ],
      },
      {
        name: 'Physically Realizable Attacks',
        points: [
          'Developed a pipeline to perform Expectation-of-Transformation (EoT) attack experiments in a variety of domains',
          'Demonstrated that Black Box settings can still work in an EoT setup that is physically realizable',
          'Created internal tool to perform feature and model visualizations that helped understand experiment results',
          'Fooled both state-of-the-art Object Detectors and Classifiers with physical attacks',
        ],
      },
      {
        name: 'Middle East Event Detection',
        points: [
          'Applied computer vision techniques to learn representations of geolocations based on recorded event data',
          'Used both probabilistic and neural NLP techniques to draw and extract relevant information from tweets',
          'Implemented Graph based deep learning approaches to handle non-uniform quantization of positions',
          'Presented research results to government stakeholders at IARPA',
        ],
      },
    ],
  },
];

export default positions;
