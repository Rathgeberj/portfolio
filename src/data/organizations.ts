// Organizations & community memberships.

export interface Organization {
  name: string;
  role: string;
  description: string;
  url?: string;
  /** Official membership verification link — opens in new tab */
  verificationUrl?: string;
}

export const organizations: Organization[] = [
  {
    name: '(ISC)² — NYC & NJ Chapters',
    role: 'Member',
    description:
      'International nonprofit behind the CISSP and other leading security certifications, with local chapters offering networking and continuing education.',
    url: 'https://www.isc2.org',
  },
  {
    name: 'ISACA',
    role: 'Member',
    description:
      'Global association for IT governance, audit, risk, and security professionals, known for the CISA, CISM, and CRISC certifications.',
    url: 'https://www.isaca.org',
  },
  {
    name: 'OSIRIS Lab — NYU Tandon',
    role: 'Lab Member',
    description:
      'Offensive Security, Incident Response, and Internet Security laboratory is a student-run cybersecurity research lab where students analyze and understand how attackers take advantage of real systems.',
    url: 'https://osiris.cyber.nyu.edu',
    verificationUrl:
      'https://osiris.cyber.nyu.edu/verify?id=osiris-2026-25459&name=Jeffrey%20Rathgeber',
  },
  {
    name: 'Horological Society of New York',
    role: 'Member',
    description:
      'One of the oldest horological education organizations in the US. Hosts monthly lectures from top industry professionals, watchmaking classes, and a members’ library of watchmaking and history books.',
    url: 'https://hs-ny.org',
  },
  {
    name: 'GS9 Club',
    role: 'Member',
    description:
      'A community for watch enthusiasts and dedicated Grand Seiko fans, bringing collectors together through events and classes centered on the brand and the craft.',
    url: 'https://grandseikogs9club.com/',
  },
];
