// Core competencies grouped by domain. Each skill renders as a terminal token/badge.

export interface CompetencyGroup {
  category: string;
  skills: string[];
}

export const competencies: CompetencyGroup[] = [
  {
    category: 'Languages & Scripting',
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'PowerShell', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Security Domains & Practices',
    skills: [
      'Network Security',
      'Cloud Security',
      'Penetration Testing',
      'Vulnerability Assessment (VAPT)',
      'Threat Modeling',
      'SIEM',
    ],
  },
  {
    category: 'Security Tools & Frameworks',
    skills: ['Nmap', 'Wireshark', 'Burp Suite', 'Kali Linux', 'Metasploit'],
  },
  {
    category: 'Operating Systems & Platforms',
    skills: ['Linux', 'Windows', 'macOS'],
  },
  {
    category: 'Infrastructure & Networking',
    skills: [
      'TCP/IP',
      'LAN/WAN',
      'Network Architecture',
      'pfSense',
      'Proxmox VE',
      'VirtualBox',
      'Virtualization',
      'Containerization',
    ],
  },
  {
    category: 'Databases',
    skills: ['SQL', 'MySQL', 'MongoDB', 'Database Design'],
  },
  {
    category: 'Development Practices',
    skills: [
      'Software Development Life Cycle (SDLC)',
      'Agile',
      'CI/CD',
      'Automation',
      'REST APIs',
      'Object-Oriented Programming (OOP)',
    ],
  },
  {
    category: 'AI, Data & Research',
    skills: [
      'Machine Learning',
      'Artificial Intelligence',
      'Prompt Engineering',
      'Data Analysis',
      'Predictive Modeling',
      'Cryptography',
      'Cryptanalysis',
      'Digital Twins',
      'Zero-Knowledge Proofs',
    ],
  },
];
