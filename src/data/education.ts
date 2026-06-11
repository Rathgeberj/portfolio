// All education data lives here, most recent first.

export interface EducationEntry {
  degree: string;
  institution: string;
  /** Short initials shown in the logo placeholder badge */
  initials: string;
  dateRange: string;
  status: 'in-progress' | 'completed';
  notes?: string[];
}

export const education: EducationEntry[] = [
  {
    degree: 'M.S. Cybersecurity',
    institution: 'New York University, Tandon School of Engineering',
    initials: 'NYU',
    dateRange: '2026 – 2027 (Expected)',
    status: 'in-progress',
    notes: ['[PLACEHOLDER] Relevant coursework, honors, or notes'],
  },
  {
    degree: 'B.S. Computer Science, Minor: Mathematics',
    institution: 'New York University, Tandon School of Engineering',
    initials: 'NYU',
    dateRange: '2020 – 2024',
    status: 'completed',
    notes: ['[PLACEHOLDER] Relevant coursework, honors, or notes'],
  },
];
