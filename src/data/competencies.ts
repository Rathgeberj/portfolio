// Core competencies grouped by domain. Each skill renders as a terminal token/badge.

export interface CompetencyGroup {
  category: string;
  skills: string[];
}

export const competencies: CompetencyGroup[] = [
  {
    category: 'Languages & Scripting',
    skills: ['Python', 'C++', 'JavaScript', 'PowerShell', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Operating Systems & Platforms',
    skills: ['Linux', 'Windows', 'macOS'],
  },
  {
    category: 'Security Tools & Frameworks',
    skills: ['Nmap', 'Wireshark', 'Burp Suite', 'Kali Linux', 'Metasploit'],
  },
  {
    category: 'Infrastructure & Networking',
    skills: ['TCP/IP', 'LAN/WAN', 'pfSense', 'Proxmox VE', 'VirtualBox', 'Virtualization'],
  },
  {
    category: 'Databases',
    skills: ['SQL', 'MongoDB'],
  },
  {
    category: 'Development Practices',
    skills: ['Software Development Life Cycle (SDLC)', 'Agile', 'CI/CD', 'Automation'],
  },
  {
    category: 'AI & Research',
    skills: ['Machine Learning', 'Artificial Intelligence', 'Cryptography', 'Zero-Knowledge Proofs'],
  },
];
