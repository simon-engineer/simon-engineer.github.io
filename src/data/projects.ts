export interface Project {
  title: string;
  description: string;
  /** Optional single image (path under /public), shown as a banner on the card. */
  image?: string;
  /**
   * Optional multiple images (paths under /public). When more than one is
   * given, the card shows a swipeable carousel with arrows and dots.
   * Takes precedence over `image`.
   */
  images?: string[];
  /** Bullet-point accomplishments, shown as a list on the card. */
  highlights?: string[];
  tags: string[];
  /** Optional links shown as buttons on the card. */
  links?: { label: string; href: string }[];
  /** Optional year or date range, shown in the corner of the card. */
  year?: string;
}

// Add a project by appending an object here — the Projects page renders
// each one automatically.
export const projects: Project[] = [
  {
    title: 'High-Pressure Fuel Supply System for Liquefied Gas Fuels',
    images: [
      '/projects/fuel-supply-system/01.png',
      '/projects/fuel-supply-system/02.jpg',
    ],
    description:
      'Direct-injection fuel supply for liquefied gas fuels such as dimethyl ether (DME) and propane, developed under DOE-funded programs.',
    highlights: [
      'Designed and fabricated a performance bench to evaluate fuel supply components',
      'Modeled and implemented angular-position metering techniques for the high-pressure fuel pump',
      'Automated actuator outputs to support fuel delivery across the low- to high-pressure sequence',
    ],
    tags: ['Fuel Systems', 'DME', 'Propane', 'Mechanical Design', 'Controls'],
    year: '2020–Present',
  },
  {
    title: 'Micro Combined-Heat-and-Power (CHP) Control Unit',
    images: [
      '/projects/chp-control-unit/01.png',
      '/projects/chp-control-unit/02.png',
    ],
    description:
      'Integration of the control unit for a micro combined-heat-and-power system, coordinating generation, energy storage, and thermal management.',
    highlights: [
      'Programmed a PLC controller to monitor system state and control generators and power electronics',
      'Developed a strategy to manage LiFePO₄ battery state of charge, generator output, and heat dissipation',
      'Built a touchscreen human-machine interface (HMI) and data-logging sequence',
    ],
    tags: ['PLC', 'Power Electronics', 'Energy Storage', 'HMI'],
    year: '2020–Present',
  },
  {
    title: 'High-Speed Data Acquisition System',
    images: [
      '/projects/data-acquisition/01.png',
      '/projects/data-acquisition/02.jpg',
    ],
    description:
      'Real-time, high-speed DAQ platform for in-field engine testing and combustion-mode feedback.',
    highlights: [
      'Integrated a high-speed DAQ and processor with a custom printed-circuit board and firmware',
      'Implemented application-specific data-analysis algorithms to support in-field testing',
      'Designed TCP packet and CAN bus interfaces to stream data',
    ],
    tags: ['DAQ', 'Embedded', 'PCB', 'CAN Bus', 'Firmware'],
    year: '2020–Present',
  },
  {
    title: 'Aviation Engine Fuel System Validation',
    images: [
      '/projects/aviation-fuel-system/01.jpg',
      '/projects/aviation-fuel-system/02.jpg',
      '/projects/aviation-fuel-system/03.jpg',
    ],
    description:
      'Performance validation of an aviation engine fuel system, characterizing governor behavior and controller stability.',
    highlights: [
      "Designed fixtures and an in-house digital controller to analyze the fuel governor's mechanical linkage behavior",
      'Evaluated control stability of commercial and prototyped analog PID controllers',
      'Provided data-driven feedback to the design iterations of the fuel system',
    ],
    tags: ['Aviation', 'PID Control', 'Test Engineering', 'Validation'],
    year: '2020–Present',
  },
  {
    title: 'Development and Demonstration of a Medium-Duty Off-Road DME Engine',
    images: [
      '/projects/md-offroad-dme-engine/01.jpg',
      '/projects/md-offroad-dme-engine/02.jpg',
    ],
    description:
      'DOE-funded program (DE-EE0011174) to develop and demonstrate a medium-duty, off-road engine running on dimethyl ether (DME), targeting high efficiency and ultra-low emissions for non-road applications.',
    tags: ['DME', 'Medium-Duty', 'Off-Road', 'Engine Demonstration', 'DOE'],
    year: '2023–Present',
  },
  {
    title:
      'High-Pressure Fast-Response Direct Injection System for Light-Duty Engines',
    images: [
      '/projects/ld-direct-injection/01.jpg',
      '/projects/ld-direct-injection/02.jpg',
      '/projects/ld-direct-injection/03.jpg',
      '/projects/ld-direct-injection/04.jpg',
    ],
    description:
      'DOE-funded program (DE-EE0009878) developing a high-pressure, fast-response direct injection system for liquefied gas fuels in light-duty engines, enabling high-efficiency, low-emission combustion of fuels such as DME and propane.',
    tags: ['Direct Injection', 'Liquefied Gas', 'Light-Duty', 'DME', 'DOE'],
    year: '2020–Present',
  },
];
