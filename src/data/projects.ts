export interface Project {
  title: string;
  description: string;
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
    title: 'This Website',
    description:
      'My personal site, built with Astro and deployed to GitHub Pages via GitHub Actions. Static, fast, and zero-maintenance.',
    tags: ['Astro', 'TypeScript', 'GitHub Pages'],
    year: '2026',
    links: [
      {
        label: 'Source',
        href: 'https://github.com/simon-engineer/simon-engineer.github.io',
      },
    ],
  },
  {
    title: 'Example Project',
    description:
      'Replace this with a real project. Describe what it does, the problem it solves, and your role. Keep it to two or three sentences.',
    tags: ['Tag', 'Another tag'],
    year: '2025',
    links: [
      { label: 'GitHub', href: 'https://github.com/simon-engineer' },
      { label: 'Demo', href: '#' },
    ],
  },
];
