// Contact details — rendered as a terminal output block on /contact
// and reused for quick links elsewhere.

export interface ContactItem {
  label: string;
  value: string;
  url?: string;
}

export const contact: ContactItem[] = [
  {
    label: 'email',
    value: 'jeffreyrathgeberjr@gmail.com',
    url: 'mailto:jeffreyrathgeberjr@gmail.com',
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/rathgeberj',
    url: 'https://www.linkedin.com/in/rathgeberj/',
  },
  {
    label: 'github',
    value: 'github.com/rathgeberj',
    url: 'https://github.com/rathgeberj',
  },
  {
    label: 'site',
    value: 'rathgeberj.dev',
    url: 'https://rathgeberj.dev',
  },
  {
    label: 'location',
    value: 'New York, NY',
  },
];
