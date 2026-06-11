// Organizations & community memberships.

export interface Organization {
  name: string;
  role: string;
  description: string;
  url?: string;
}

export const organizations: Organization[] = [
  {
    name: '(ISC)²',
    role: 'Member',
    description:
      'International nonprofit focused on cybersecurity certifications and community.',
    url: 'https://www.isc2.org',
  },
  {
    name: 'ISACA',
    role: 'Member',
    description:
      'Global association for IT governance, audit, risk, and cybersecurity professionals.',
    url: 'https://www.isaca.org',
  },
  {
    name: 'OSIRIS Lab — NYU Tandon School of Engineering',
    role: '[Role/involvement TBD]',
    description: 'On-campus cybersecurity research lab.',
    url: 'https://osiris.cyber.nyu.edu',
  },
  {
    name: 'Horological Society of New York',
    role: 'Member',
    description:
      'One of the oldest watch collector and horological education organizations in the US.',
    url: 'https://hs-ny.org',
  },
  {
    name: 'GS9 Watch Club',
    role: 'Member',
    description: '[Brief description TBD]',
  },
];
