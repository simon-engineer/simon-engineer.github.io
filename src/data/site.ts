// Central place for your identity + links. Edit these and the whole site
// updates.
export const site = {
  name: 'Simon (Haibao) Wu',
  role: 'Mechanical Engineer',
  // One or two sentences for the homepage hero / page descriptions.
  tagline:
    'Mechanical engineer and innovator advancing clean combustion and alternative fuel technologies through DOE-funded research and development.',
  location: 'Oakbrook Terrace, IL',
  // Public contact email. Swap for a professional address if you prefer
  // (e.g. swu@wminternational-engineering.com). Phone is intentionally omitted
  // from the public site.
  email: 'simonwu158@gmail.com',
  social: {
    github: 'https://github.com/simon-engineer',
    linkedin: 'https://www.linkedin.com/in/simon-w-b00218a5/',
    twitter: '',
  },
};

// Areas of expertise — shown on the homepage.
export const expertise: string[] = [
  'Fuel system development for diesel, jet fuel, and alternative fuels (dimethyl ether & propane)',
  'Embedded controls and data acquisition — engine ECUs and high-speed real-time feedback systems',
  'Mechanical design, control electronics, unit testing, and system integration',
  'Advanced manufacturing (CNC), prototyping, and performance validation',
];

// Education — shown on the homepage.
export const education = [
  {
    school: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    degree: 'Master of Engineering, Mechanical and Aerospace Engineering',
    year: '2020',
  },
  {
    school: 'University of California, Davis',
    location: 'Davis, CA',
    degree:
      'Bachelor of Science, Mechanical Engineering (Minor in Technology Management)',
    year: '2018',
  },
];

// Current and past roles — shown on the homepage.
export const experience = [
  {
    org: 'WM International Engineering LLC',
    location: 'Darien, IL',
    title: 'Senior Engineer (2024–Present), Product Engineer (2020–2024)',
    period: '2018–Present',
    summary:
      'Development and integration of mechanical and electrical hardware, embedded software, control models, and user interfaces to meet application needs.',
  },
  {
    org: 'Illinois Institute of Technology — Advanced Engine Control Laboratory',
    location: 'Chicago, IL',
    title: 'Research Associate',
    period: '2023–Present',
    summary:
      'Engine control strategy development for alternative fuels, controls and instrumentation integration, and engine testing and data analysis.',
  },
];
