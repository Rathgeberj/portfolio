// All work experience data lives here, most recent first.

/** One position within a multi-role company entry (a promotion progression). */
export interface ExperienceRole {
  title: string;
  dateRange: string;
  bullets: string[];
}

export interface ExperienceEntry {
  /** Single-role entries: the job title. Omit for multi-role company entries. */
  title?: string;
  organization: string;
  dateRange: string;
  location: string;
  status: 'current' | 'past';
  /** Single-role entries: the bullets. Omit when using `roles`. */
  bullets?: string[];
  /**
   * Multi-role company entry: stacked roles rendered on a shared timeline,
   * most recent first (e.g. internal promotions at one organization).
   */
  roles?: ExperienceRole[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'IT Infrastructure Intern',
    organization: 'Harvard Management Company',
    dateRange: 'May 2026 – Present',
    location: 'Boston, MA',
    status: 'current',
    bullets: [
      'Auditing enterprise-wide Microsoft 365 and identity environments with a focus on groups, permissions, licenses, guest access, and inactive accounts to improve onboarding and offboarding workflows',
      'Writing PowerShell, Microsoft Graph, PnP PowerShell, and Active Directory scripts to map users, groups, permissions, and relationships across AD, Entra ID, Intune, Teams, SharePoint, Azure Files, and Exchange',
      'Developing audit reporting, proposed group models, and naming conventions to improve standardization, visibility, and maintainability across Microsoft infrastructure services',
      'Collaborating with the Principal Security Architect to build an MCP assessment toolkit that scores third-party MCP servers and identifies security risks before enterprise AI integration',
      'Analyzed Windows minidump crash data using WinDbg, Python, and automation scripts to aggregate trends, identify faulting modules, and surface common system-level failure patterns',
    ],
  },
  {
    title: 'IT/Cybersecurity Instructor',
    organization: "I'RAISE Girls & Boys International Corporation",
    dateRange: 'April 2025 – November 2025',
    location: 'New York, NY',
    status: 'past',
    bullets: [
      'Designed and delivered original IT and cybersecurity lessons for public school students in the Bronx, teaching classes of approximately 20 students during the school day',
      'Created interactive demos and exercises on social engineering, phishing, password security, brute-force attacks, Python, and notable real-world cyber incidents',
      'Collaborated with school faculty while introducing middle and high school students to cybersecurity concepts, digital safety, and technology career pathways',
    ],
  },
  {
    organization: 'NYU Tandon School of Engineering',
    dateRange: '2021 – 2024',
    location: 'Brooklyn, NY',
    status: 'past',
    roles: [
      {
        title: 'Head of R&D',
        dateRange: 'May 2023 – May 2024',
        bullets: [
          'Co-owned R&D operations for the General Engineering program, leading curriculum updates, lab development, technical documentation, and TA training for 100+ Lab TAs',
          'Led overhaul of the Revit architecture project and launched an end-of-semester showcase/competition featuring approximately 20 cross-disciplinary design projects',
          'Managed technical program logistics, including TA training schedules, lab staffing coordination, and student placement across robotics, architecture, and rapid prototyping project tracks',
          'Reviewed open-ended prototyping project applications, advised students on feasibility and technical pivots, and supported execution across embedded systems, CAD, and fabrication workflows',
          'Conducted behavioral and technical interviews for incoming Deputy Heads of R&D to help select and train future program leadership',
        ],
      },
      {
        title: 'Deputy Head of R&D',
        dateRange: 'December 2022 – May 2023',
        bullets: [
          'Co-led training and supervision for approximately 100 Lab TAs, preparing staff to teach weekly engineering labs and support students in open lab',
          'Partnered with professors and Head TAs to develop curriculum updates, test lab changes, and write technical lab manuals and documentation',
          'Served as roaming lead TA across three concurrent lab sections, supporting TAs and troubleshooting student project issues across hardware, software, and fabrication workflows',
        ],
      },
      {
        title: 'Lab TA',
        dateRange: 'August 2021 – December 2022',
        bullets: [
          'Led weekly engineering lab sections of approximately 15 students alongside another TA, teaching technical concepts across robotics, rapid prototyping, architecture, and design disciplines',
          'Mentored semester-long student design projects involving Arduino, Raspberry Pi, Python, robotics, CAD, 3D printing, laser cutting, and electrical prototyping',
          'Supported open lab makerspace sessions for 30–40 students, troubleshooting hardware, software, circuitry, and fabrication issues during project development',
        ],
      },
    ],
  },
  {
    title: 'Research Intern',
    organization: 'divergence',
    dateRange: 'July – August 2023',
    location: 'Remote',
    status: 'past',
    bullets: [
      'Researched and evaluated capabilities of circom for zero-knowledge proofing on a blockchain',
      'Implemented simple elliptic curve–based verification on the Ethereum blockchain',
    ],
  },
  {
    title: 'Mathematics Tutor',
    organization: 'Garden City High School',
    dateRange: 'September 2018 – June 2020',
    location: 'Garden City, NY',
    status: 'past',
    bullets: [
      'Provided one-on-one tutoring to high school students in Algebra I, Algebra II, Geometry, and Precalculus, reinforcing concepts through personalized problem-solving support',
    ],
  },
];
