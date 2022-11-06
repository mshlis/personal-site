// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'JS/TS',
    category: ['Languages', 'Frontend'],
  },
  {
    title: 'React',
    category: ['Frontend', 'Frameworks'],
  },
  {
    title: 'React Native',
    category: ['Frontend', 'Frameworks'],
  },
  {
    title: 'Bash',
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Java/Kotlin',
    category: ['Backend'],
  },
  {
    title: 'MongoDB',
    category: ['Databases'],
  },
  {
    title: 'ElasticSearch',
    category: ['Databases', 'AWS'],
  },
  {
    title: 'SQL',
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Redis',
    category: ['Databases', 'AWS'],
  },
  {
    title: 'EC2',
    category: ['AWS', 'Compute'],
  },
  {
    title: 'DynamoDB',
    category: ['Databases', 'AWS'],
  },
  {
    title: 'Amplify',
    category: ['Backend', 'AWS'],
  },
  {
    title: 'Glue',
    category: ['Tools', 'AWS'],
  },
  {
    title: 'CloudFormation',
    category: ['Tools', 'AWS'],
  },
  {
    title: 'SNS',
    category: ['Tools', 'AWS'],
  },
  {
    title: 'SQS',
    category: ['Tools', 'AWS'],
  },
  {
    title: 'AppSync',
    category: ['Tools', 'AWS', 'Backend'],
  },
  {
    title: 'Route 53',
    category: ['AWS'],
  },
  {
    title: 'AWS API Gateway',
    category: ['AWS', 'Backend'],
  },
  {
    title: 'SageMaker',
    category: ['Machine Learning', 'AWS'],
  },
  {
    title: 'Secrets Manager',
    category: ['AWS'],
  },
  {
    title: 'Redshift',
    category: ['Databases', 'AWS'],
  },
  {
    title: 'RDS',
    category: ['Databases', 'AWS'],
  },
  {
    title: 'S3',
    category: ['Databases', 'AWS'],
  },
  {
    title: 'Flask',
    category: ['Frameworks', 'Backend'],
  },
  {
    title: 'Git',
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    category: ['Tools', 'Compute', 'Backend'],
  },
  {
    title: 'ECS + Fargate',
    category: ['Tools', 'AWS', 'Compute', 'Backend'],
  },
  {
    title: 'AWS Lambda',
    category: ['AWS', 'Compute'],
  },
  {
    title: 'AWS CDK',
    category: ['AWS', 'Tools'],
  },
  {
    title: 'Docker',
    category: ['Tools'],
  },
  {
    title: 'Tensorflow 1/2 + Keras',
    category: ['Frameworks', 'Machine Learning'],
  },
  {
    title: 'PyTorch',
    category: ['Frameworks', 'Machine Learning'],
  },
  {
    title: 'HTML + CSS',
    category: ['Languages', 'Frontend'],
  },
  {
    title: 'Python',
    category: ['Languages', 'Backend'],
  },
  {
    title: 'C++',
    category: ['Languages'],
  },
  {
    title: 'RLlib',
    category: ['Frameworks'],
  },
  {
    title: 'Julia',
    category: ['Languages'],
  },
  {
    title: 'Fortran 90/95',
    category: ['Languages'],
  },
  {
    title: 'C',
    category: ['Languages'],
  },
  {
    title: 'Scheme',
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    category: ['Languages'],
  },
  {
    title: 'R',
    category: ['Languages'],
  },
  {
    title: 'Neo4j',
    category: ['Databases'],
  },
  {
    title: 'Neptune',
    category: ['Databases', 'AWS'],
  },
  {
    title: 'Spark',
    category: ['Frameworks'],
  },
  {
    title: 'Computer Vision',
    category: ['Machine Learning'],
  },
  {
    title: 'Natural Language Processing',
    category: ['Machine Learning'],
  },
  {
    title: 'Reinforcement Learning',
    category: ['Machine Learning'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
