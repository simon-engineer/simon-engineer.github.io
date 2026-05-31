export interface Project {
  title: string;
  description: string;
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
];
