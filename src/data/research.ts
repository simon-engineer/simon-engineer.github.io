export interface Publication {
  title: string;
  authors?: string;
  venue: string;
  year: string;
  /** Link to the paper (publisher page). */
  url?: string;
}

export interface Patent {
  title: string;
  number: string;
  date: string;
  /** Optional link to the patent (e.g. Google Patents). */
  url?: string;
  /** Optional snapshot image (path under /public), e.g. the patent cover. */
  image?: string;
}

export interface Program {
  award: string;
  title: string;
}

// Peer-reviewed publications, newest first.
const SAE = (id: string) =>
  `https://www.sae.org/publications/technical-papers/content/${id}/`;

export const publications: Publication[] = [
  {
    title:
      'Effect of Liquidized-Gas Fluid Properties in a High-Pressure Fuel Pump',
    authors: 'De Ojeda, W. and Wu, S.',
    venue: 'SAE Technical Paper 2026-01-0273',
    year: '2026',
    url: SAE('2026-01-0273'),
  },
  {
    title: 'Optimization of CI Engine Operation with DME on an FTP Cycle',
    authors: 'De Ojeda, W., Wu, S., Harrison, C., Hall, C. et al.',
    venue: 'SAE Technical Paper 2025-01-0394',
    year: '2025',
    url: SAE('2025-01-0394'),
  },
  {
    title: 'Design of a High-Pressure Fuel System for Use with Dimethyl Ether',
    authors: 'De Ojeda, W. and Wu, S.',
    venue: 'SAE Technical Paper 2025-01-8441',
    year: '2025',
    url: SAE('2025-01-8441'),
  },
  {
    title:
      'DME-to-Propane Mixture Effects on a Light-Duty Compression Ignition Engine',
    authors:
      'De Ojeda, W., Wu, S.H., Hall, C., Ankobea-Ansah, K., Hassan, H.A., Harrison, C.',
    venue: 'SAE Technical Paper 2025-01-8415',
    year: '2025',
    url: SAE('2025-01-8415'),
  },
  {
    title:
      'Light-Duty Engine Performance Characteristics with Dimethyl Ether and Propane',
    authors: 'De Ojeda, W., Wu, S., Ankobea-Ansah, K., Hassan, H. et al.',
    venue: 'SAE Technical Paper 2024-01-2126',
    year: '2024',
    url: SAE('2024-01-2126'),
  },
  {
    title:
      'Experimental Investigation of the Effect of Air-Handling and DME-Propane Blends on the Performance and Emissions of a 4-Cylinder CI Engine',
    authors: 'Hassan, H.A., Ankobea-Ansah, K., De Ojeda, W., Wu, S.H. & Hall, C.',
    venue: 'ASME 2024 ICE Forward Conference, San Antonio, TX',
    year: '2024',
    url: 'https://asmedigitalcollection.asme.org/ICEF/proceedings-abstract/ICEF2024/88520/V001T02A019/1210164',
  },
  {
    title:
      'High-Speed Data Acquisition for Real-Time Feedback in a Light-Duty Engine Combustion-Mode Switching Application',
    authors: 'De Ojeda, W. and Wu, S.',
    venue: 'SAE Technical Paper 2023-01-0732',
    year: '2023',
    url: SAE('2023-01-0732'),
  },
  {
    title:
      'Development of a High-Pressure Fuel Injection System for Use with Propane-DME Mixtures',
    authors: 'De Ojeda, W. and Wu, S.',
    venue: 'SAE Technical Paper 2023-01-0403',
    year: '2023',
    url: SAE('2023-01-0403'),
  },
];

// Patents.
export const patents: Patent[] = [
  {
    title: 'High-Pressure Fuel Pump for Use with DME and Other Liquefied Gases',
    number: 'US-20250382933-A1',
    date: 'Dec 18, 2025',
    url: 'https://patents.google.com/patent/US20250382933A1/en',
    image: '/patents/us-20250382933-a1.jpg',
  },
  {
    title:
      'High-Pressure Fuel Pump with Configuration to Mitigate Cavitation',
    number: 'US 10/014,685',
    date: 'Jan 9, 2025',
  },
  {
    title:
      'Zero-Leakage Isolation Valve for Use with DME and Other Liquefied Gases',
    number: 'US 18/825,866',
    date: 'Sep 5, 2024',
  },
];

// U.S. Department of Energy funded programs (contributing member).
export const programs: Program[] = [
  {
    award: 'DE-EE0009878',
    title:
      'High-Pressure Fast-Response Direct Injection System for Liquefied Gas Fuels in Light-Duty Engines',
  },
  {
    award: 'DE-EE0009879',
    title:
      'High-Efficiency Mixing-Controlled Compression Ignition Combustion of Propane-DME Blends',
  },
  {
    award: 'DE-EE0011174',
    title: 'Development and Demonstration of a Medium-Duty Off-Road DME Engine',
  },
  {
    award: 'DE-EE0011743',
    title:
      'High-Efficiency, Ultra-Clean Dimethyl Ether Medium-Duty Non-Road Engine',
  },
];
