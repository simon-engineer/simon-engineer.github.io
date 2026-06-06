// Skill keywords shown as icon chips under the homepage hero.
// `icon` is the inner SVG markup (paths/lines), wrapped by a shared <svg> in
// the page. Icons are from the Lucide set (ISC licensed), inlined so there's
// no runtime dependency. To add a skill, append an entry with any inline SVG.
export interface Skill {
  label: string;
  icon: string;
}

export const skills: Skill[] = [
  {
    label: 'Fuel Systems',
    icon: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C8 11.1 7 13 7 15a7 7 0 0 0 7 7z"/>',
  },
  {
    label: 'Controls',
    icon: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  },
  {
    label: 'Mechanical Design',
    icon: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
  },
  {
    label: 'Fabrication',
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  },
  {
    label: 'CNC Machining',
    icon: '<path d="M12 2l8.66 5v10L12 22l-8.66-5V7z"/><circle cx="12" cy="12" r="3"/>',
  },
  {
    label: 'Firmware & Software',
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  },
  {
    label: 'System Design',
    icon: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  },
  {
    label: 'Integration & Unit Tests',
    icon: '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  },
  {
    label: 'Data Acquisition',
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  },
  {
    label: 'Embedded Systems',
    icon: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
  },
  {
    label: 'Website Development',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  },
];
