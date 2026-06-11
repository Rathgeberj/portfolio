// All work experience data lives here, most recent first.

export interface ExperienceEntry {
  title: string;
  organization: string;
  dateRange: string;
  location: string;
  status: 'current' | 'past';
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'IT Infrastructure Intern',
    organization: '[Company Name TBD]',
    dateRange: 'June 2026 – Present',
    location: 'New York, NY',
    status: 'current',
    bullets: [
      'Auditing Microsoft 365 platforms and IAM environments using custom scripts',
      'Developing workflow to assess safety and security of third-party MCP servers',
      'Writing PowerShell and Python scripts to automate helpdesk operations and improve visibility',
      '[More details to be added]',
    ],
  },
  {
    title: 'IT/Cybersecurity Instructor',
    organization: "I'Raise Girls & Boys International",
    dateRange: 'April 2025 – Present',
    location: 'New York, NY',
    status: 'current',
    bullets: [
      'Design engaging lessons and technical workshops on IT & Cybersecurity fundamentals',
      'Tailor instruction to diverse learning styles',
      'Collaborate with staff to support student success',
    ],
  },
  {
    title: 'Head of R&D',
    organization: 'New York University, General Engineering Department',
    dateRange: '2021 – 2024',
    location: 'New York, NY',
    status: 'past',
    bullets: [
      'Administered technical workshops and provided implementation & security guidance',
      'Ensured alignment with broader security architecture standards within a lab environment',
      'Identified opportunities to automate remediation of recurring security issues',
      'Coordinated with internal departments and third-party vendors',
    ],
  },
  {
    title: 'Research Intern',
    organization: 'PROOF Collective (Divergence)',
    dateRange: 'July – August 2023',
    location: 'Remote',
    status: 'past',
    bullets: [
      'Researched and evaluated capabilities of circom for zero-knowledge proofing on a blockchain',
      'Implemented simple elliptic curve–based verification on the Ethereum blockchain',
    ],
  },
];
