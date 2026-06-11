// All project data lives here. Adding a project = adding an entry to this array.
// Projects with `deepDive` get a full detail page at /projects/[slug].

export interface ProjectDetailSection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  /** Domain/category tags, e.g. "security", "cryptography" */
  tags: string[];
  /** Concrete technologies — rendered as [badge] tags on cards and detail pages */
  techStack: string[];
  date: string;
  featured?: boolean;
  /** Present = project gets a detail page and a "DEEP DIVE AVAILABLE" badge */
  deepDive?: {
    sections: ProjectDetailSection[];
    links?: { label: string; url: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: 'homelab',
    name: 'Cybersecurity & AI Research Homelab',
    summary:
      'Self-hosted lab integrating pfSense firewall, Proxmox VE, and NAS storage.',
    tags: ['networking', 'security', 'homelab', 'AI', 'infrastructure'],
    techStack: ['pfSense', 'Proxmox VE', 'NAS', 'VLANs', '[TBD]'],
    date: 'Feb 2025 – Present',
    featured: true,
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            '[PLACEHOLDER] Architecture overview of the homelab: pfSense firewall, Proxmox VE hypervisor, and NAS storage.',
          ],
        },
        {
          heading: 'Design Considerations',
          body: [
            '[PLACEHOLDER] Hardware choices, network segmentation strategy, and security boundaries.',
          ],
        },
        {
          heading: 'Technologies Used',
          body: ['[PLACEHOLDER] pfSense, Proxmox VE, NAS, VLANs, ...'],
        },
        {
          heading: 'Outcomes & Takeaways',
          body: ['[PLACEHOLDER] Lessons learned and future plans. Individual homelab sub-projects to be added later.'],
        },
      ],
    },
  },
  {
    slug: 'applied-cryptanalysis',
    name: 'Applied Cryptanalysis',
    summary:
      'Script using English language index of coincidence and letter frequency to break a poly-alphabetic substitution cipher.',
    tags: ['cryptography', 'python'],
    techStack: ['Python'],
    date: '2022',
  },
  {
    slug: 'tag-security-review',
    name: 'TAG-Security Review',
    summary:
      'Security assessment of Thanos software alongside the dev team, evaluating secure software handling access to critical data.',
    tags: ['security', 'open source', 'assessment'],
    techStack: ['Thanos', '[TBD]'],
    date: '2023',
  },
  {
    slug: 'digital-twin-security',
    name: 'Digital Twin Security Research',
    summary:
      'Created a digital twin of a robotic system and identified exploitable hardware/software vulnerabilities that could compromise system safety.',
    tags: ['security', 'research', 'hardware', 'software'],
    techStack: ['[TBD]'],
    date: '2023 – 2024',
  },
  {
    slug: 'homomorphic-encryption',
    name: 'Homomorphic Encryption Model',
    summary:
      'Environment to compute over encrypted data on an external server without decryption using the FFHE library in Python.',
    tags: ['cryptography', 'python', 'encryption'],
    techStack: ['Python', 'FFHE'],
    date: '2022',
  },
  {
    slug: 'epl-projection-model',
    name: 'English Premier League Projection Model',
    summary:
      'Predicted EPL final standings using KNN, XGBoost, Random Forest, SVM, and Neural Network models trained on historical data.',
    tags: ['machine learning', 'python', 'data science'],
    techStack: ['Python', 'XGBoost', '[TBD]'],
    date: '2023',
  },
  {
    slug: 'university-marketplace',
    name: 'University Marketplace',
    summary:
      'Secure online marketplace for college students built with Python, React, CSS, HTML, and MongoDB under an agile framework.',
    tags: ['full-stack', 'security', 'react', 'python', 'mongodb'],
    techStack: ['Python', 'React', 'MongoDB', 'HTML', 'CSS'],
    date: '2023 – 2024',
  },
];
