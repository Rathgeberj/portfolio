// All education data lives here, most recent first.
// Each entry has its own coursework page at /education/[slug].

export interface Course {
  /** Course code, e.g. "CS-UY 3923" */
  code: string;
  name: string;
}

export interface EducationEntry {
  /** URL slug for the coursework page at /education/[slug] */
  slug: string;
  degree: string;
  /** Rendered as a smaller subheading under the degree (e.g. a minor or track) */
  minor?: string;
  /** Optional expansion shown under `minor` on the coursework detail page only */
  minorNote?: string;
  institution: string;
  /** Short initials shown in the logo placeholder badge */
  initials: string;
  dateRange: string;
  status: 'in-progress' | 'completed';
  notes?: string[];
  /** Relevant courses, listed on the degree's coursework page */
  courses?: Course[];
}

export const education: EducationEntry[] = [
  {
    slug: 'ms-cybersecurity',
    degree: 'M.S. Cybersecurity',
    institution: 'New York University, Tandon School of Engineering',
    initials: 'NYU',
    dateRange: '2026 – 2028 (Expected)',
    status: 'in-progress',
    minor: 'Cyber Operations & Defense Tracks',
    minorNote:
      'Cyber Operations (CAE-CO) & Cyber Defense (CAE-CD) tracks recognized by the National Centers of Academic Excellence in Cybersecurity (NCAE-C).',
    courses: [
      { code: 'CS-GY 6573', name: 'Penetration Testing & Vulnerability Analysis' },
      { code: 'CS-GY 6083', name: 'Database Systems' },
    ],
  },
  {
    slug: 'bs-computer-science',
    degree: 'B.S. Computer Science',
    minor: 'Minor: Mathematics',
    institution: 'New York University, Tandon School of Engineering',
    initials: 'NYU',
    dateRange: '2020 – 2024',
    status: 'completed',
    courses: [
      { code: 'CS-UY 4783', name: 'Applied Cryptography' },
      { code: 'CS-UY 4563', name: 'Machine Learning' },
      { code: 'CS-UY 4613', name: 'Artificial Intelligence' },
      { code: 'CS-UY 3224', name: 'Operating Systems' },
      { code: 'CS-UY 4793', name: 'Computer Networking' },
      { code: 'CS-UY 3933', name: 'Network Security' },
      { code: 'CS-UY 3923', name: 'Computer Security' },
      { code: 'CS-UY 2413', name: 'Design & Analysis of Algorithms' },
      { code: 'CS-UY 2214', name: 'Computer Architecture' },
      { code: 'CS-UY 3943', name: 'Blockchain & Distributed Ledger Technology' },
      { code: 'CS-UY 3943', name: 'Data Mining' },
      { code: 'CS-UY 4513', name: 'Software Engineering' },
      { code: 'CS-UY 1134', name: 'Data Structures & Algorithms' },
      { code: 'CS-UY 2124', name: 'Object-Oriented Programming' },
      { code: 'MA-UY 2034', name: 'Linear Algebra & Differential Equations' },
      { code: 'MA-UY 2114', name: 'Multi-Dimensional Calculus' },
      { code: 'MA-UY 2314', name: 'Discrete Mathematics' },
      { code: 'MA-UY 2224', name: 'Data Analysis' },
      { code: 'MA-UY 1424', name: 'Integral Calculus' },
      { code: 'MA-UY 1324', name: 'Differential Calculus' },
      { code: 'PH-UY 1013', name: 'Mechanics' },
      { code: 'STS-UY 2144', name: 'Ethics & Technology' },
      { code: 'DS-UA 111', name: 'Data Science' },
    ],
  },
];
