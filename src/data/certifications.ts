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
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    organization: 'Microsoft',
    date: 'June 2026',
    status: 'earned',
    verificationUrl:
      'https://learn.microsoft.com/en-us/users/rathgeberj/credentials/db952693378886d9?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    name: 'Splunk Core Certified Power User',
    organization: 'Splunk',
    date: 'June 2026 · Expires June 2029',
    status: 'earned',
    verificationUrl:
      'https://www.credly.com/badges/ee135882-7966-42b3-8fb0-d0353a271166/public_url',
  },
  {
    name: 'Data Science Bootcamp',
    organization: 'NYU Tandon School of Engineering',
    date: 'May 2026',
    status: 'earned',
    verificationUrl:
      'https://credentials.engineering.nyu.edu/d4e13ef7-f8f2-4fe5-94e8-3500bae8979c#acc.1qRisBY7',
  },
  {
    name: 'Google Cybersecurity Professional Certificate V2',
    organization: 'Coursera',
    date: 'September 2025',
    status: 'earned',
    verificationUrl:
      'https://www.credly.com/badges/0ee8084b-0de1-4a93-9fc5-4058427b7bf9/linked_in_profile',
  },
  {
    name: 'CompTIA A+',
    organization: 'CompTIA',
    date: 'Pursuing',
    status: 'in-progress',
  },
];
