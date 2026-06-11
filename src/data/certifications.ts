// All certification data lives here. Adding a cert = adding an entry to this array.

export interface Certification {
  name: string;
  organization: string;
  /** Date earned, or expected timeframe for in-progress certs */
  date: string;
  status: 'earned' | 'in-progress';
  /** Official verification link (Credly, Accredible, Coursera, ...) — opens in new tab */
  verificationUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Google Cybersecurity Professional Certificate V2',
    organization: 'Coursera',
    date: 'September 2025',
    status: 'earned',
    verificationUrl: '#', // [PLACEHOLDER] verification link
  },
  {
    name: 'Splunk Core Certified Power User',
    organization: 'Splunk',
    date: '[TBD]', // [PLACEHOLDER] date earned
    status: 'earned',
    verificationUrl: '#', // [PLACEHOLDER] verification link
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    organization: 'Microsoft',
    date: 'Pursuing',
    status: 'in-progress',
  },
  {
    name: 'CompTIA A+',
    organization: 'CompTIA',
    date: 'Pursuing',
    status: 'in-progress',
  },
];
