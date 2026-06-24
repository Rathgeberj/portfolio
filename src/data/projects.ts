// All project data lives here. Adding a project = adding an entry to this array.
// Projects with `deepDive` get a full detail page at /projects/[slug].
// Order: most pertinent to cybersecurity first, least last (Homelab stays on top).

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
  /** Award/recognition — highlighted as a badge on the card and detail page */
  award?: string;
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
      'A self-hosted lab running pfSense with VLAN segmentation, Proxmox VE, containerized self-hosted services, Splunk for security monitoring, and NAS-backed storage — built to develop real-world sysadmin, networking, and incident-response skills.',
    tags: [],
    techStack: [
      'pfSense',
      'VLAN Segmentation',
      'Proxmox VE',
      'Containerization',
      'Splunk',
      'NAS',
    ],
    date: 'Feb 2025 – Present',
    featured: true,
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'A self-hosted homelab running pfSense with VLAN segmentation, Proxmox VE, containerized self-hosted services, Splunk for security monitoring, and NAS-backed storage.',
            'The lab is an ongoing platform for building and maintaining real-world skills across system administration, networking, and incident response.',
          ],
        },
        {
          heading: 'Documentation In Progress',
          body: [
            '> status: under active construction',
            'This deep dive is still being built out. As the homelab grows, detailed write-ups of its architecture, VLAN segmentation strategy, self-hosted services, Splunk monitoring, and individual sub-projects will be documented and linked here.',
            'Check back soon.',
          ],
        },
      ],
    },
  },
  {
    slug: 'tag-security-review',
    name: 'TAG-Security Review',
    summary:
      'A CNCF TAG-Security self-assessment of Thanos (the CNCF project for Prometheus HA and long-term storage) — mapping the architecture and data flows, generating an SBOM, and building a full STRIDE threat model to kick off a CNCF joint security assessment.',
    tags: [],
    techStack: [
      'Supply Chain Security',
      'Cloud Security',
      'Threat Modeling',
      'Application Security Assessments',
      'Kubernetes',
    ],
    date: 'Oct 2023 – Dec 2023',
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'Thanos is a CNCF project that extends Prometheus with global metric querying across clusters, long-term storage in object storage, and high availability through redundancy. It is built from modular components — Querier, Store Gateway, Sidecar, Receive, Ruler, and Compactor.',
            'Working directly with the project maintainers, my team produced a TAG-Security self-assessment: the foundational security document a project completes to kick off a CNCF joint security assessment and support its path toward graduation.',
          ],
        },
        {
          heading: 'Scope & Methodology',
          body: [
            'We mapped the full system architecture and data flows across both deployment models: pull mode, where Sidecars read metrics from Prometheus and ship blocks to object storage, and push mode, where Prometheus remote-writes to Receive components — both converging at the Querier, which translates PromQL into StoreAPI requests.',
            'We generated a software bill of materials (SBOM) with FOSSA-cli in CycloneDX format to surface dependency and supply-chain risk across the Go codebase, and reviewed the security policy, development practices (DCO commit signing, code review, CI), and OpenSSF best-practices posture.',
          ],
        },
        {
          heading: 'STRIDE Threat Model',
          body: [
            "We built a complete threat model using Microsoft's STRIDE framework across all six categories:",
            'Spoofing — per-component authentication, access-control policies, and audit-log monitoring.',
            'Tampering — TLS for all object-storage communication and integrity checksums on received metrics.',
            'Repudiation — centralized audit logging with timestamps and user identity, plus suspicious-activity alerting.',
            'Information Disclosure — server-side and TLS encryption with network/IP-scoped access restrictions.',
            'Denial of Service — rate limiting, load balancing, and anomaly detection.',
            'Elevation of Privilege — least-privilege defaults and regular permission reviews.',
          ],
        },
        {
          heading: 'Findings & Outcome',
          body: [
            "Thanos's core strengths are TLS-encrypted transit between components, a distributed and redundant architecture for fault tolerance, and inherited Prometheus authentication and RBAC.",
            'The assessment also documented the project\'s non-goals: security is not Thanos\'s reason for existence, so there is no client-side encryption at rest and the HTTP APIs lack built-in auth/TLS (mTLS for gRPC is on the roadmap). Operators must layer on their own access controls, storage encryption, and monitoring.',
            'The completed self-assessment became the foundational document used to kick off the CNCF joint security assessment.',
          ],
        },
      ],
      links: [
        {
          label: 'Thanos Self-Assessment',
          url: 'https://github.com/rathgeberj/tag-security/blob/main/assessments/projects/thanos/self-assessment.md',
        },
        {
          label: 'GitHub Repository',
          url: 'https://github.com/rathgeberj/tag-security',
        },
      ],
    },
  },
  {
    slug: 'applied-cryptanalysis',
    name: 'Applied Cryptanalysis',
    summary:
      'A tool that breaks a Vigenère-style cipher over a 27-character alphabet, hardened with randomly inserted noise — recovering the key length, key, and plaintext from ciphertext alone, with no human input.',
    tags: [],
    techStack: [
      'Python',
      'Cryptanalysis',
      'Cryptography',
      'Algorithms',
      'Information Security',
    ],
    date: 'Sep 2022 – Oct 2022',
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'Built with a 3-person team, this tool automatically breaks a poly-alphabetic (Vigenère-style) shift cipher over a 27-character alphabet — the lowercase letters a–z plus space.',
            'The ciphertext is further hardened with randomly inserted noise characters, making it longer than the underlying plaintext. Even so, the tool recovers the key length, the key, and the clean plaintext from ciphertext alone, with no human input.',
          ],
        },
        {
          heading: 'How It Works',
          body: [
            'The attack runs in three fully automated stages:',
            '1. Key-length recovery — Index of Coincidence (IoC) analysis. The ciphertext is split into candidate slices, the IoC is computed per slice and averaged, and a threshold of ~1.7 identifies the true key length.',
            '2. Key recovery — each slice reduces to a mono-alphabetic Caesar cipher. Per-slice letter-frequency tables are rotated through all 27 positions and matched against an English frequency distribution to recover each shift in the key.',
            '3. Plaintext recovery — the ciphertext is decrypted with the recovered key, then two dictionary-matching strategies based on Levenshtein (edit) distance strip the inserted noise and reconstruct clean English text.',
          ],
        },
        {
          heading: 'Implementation',
          body: [
            'Implemented in Python 3 (tested on 3.13), using NumPy for the frequency analysis and jellyfish for the Levenshtein edit-distance calculations.',
          ],
        },
        {
          heading: 'Limitations',
          body: [
            'Dictionary parsing is format-dependent, pathological keys with unusual repetition can skew the IoC estimation, and the thresholds are tuned for English text — other languages would require re-tuning.',
          ],
        },
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/rathgeberj/applied-cryptanalysis',
        },
      ],
    },
  },
  {
    slug: 'digital-twin-security',
    name: 'Digital Twins for Simulation and Security',
    summary:
      "A research paper (supervised by Professor Rui Li) on digital twins in smart manufacturing and their cybersecurity implications — examining whether a digital twin expands or contracts a system's attack surface, grounded by a ROS2/Gazebo proof-of-concept controlling a robotic arm on an assembly line.",
    tags: [],
    techStack: [
      'Threat Modeling',
      'Cybersecurity',
      'Industrial Control Systems (ICS/SCADA)',
      'Digital Twins',
      'Technical Writing',
    ],
    date: 'Sep 2023 – Sep 2024',
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'A research paper written under the supervision of Professor Rui Li, exploring digital twins in smart manufacturing and their implications for cybersecurity.',
            "The central theme is the tradeoff between capability and security: whether adopting a digital twin expands or contracts a system's attack surface, how digital twins compare to alternatives like SCADA and IoT, and how they can themselves serve as cybersecurity tools through sandboxed penetration testing and safe pre-production validation.",
          ],
        },
        {
          heading: 'Research Questions & Findings',
          body: [
            'The work centers on two questions: whether moving from conventional decentralized operations to a digital-twin architecture expands or reduces vulnerability exposure, and whether cybersecurity-focused digital twins offer real advantages over contemporary security methods.',
            'The conclusion is that it depends — outcomes are governed by a persistent tension between capability/efficiency and security, making digital twins a powerful but case-dependent framework whose advantages shift with industry context.',
          ],
        },
        {
          heading: 'Security Analysis',
          body: [
            "The paper traces digital twins from NASA's Apollo 13 missions to modern smart manufacturing, and positions them against SCADA, IoT platforms, simulation tools, and physical models.",
            'It examines centralization vulnerabilities, backup and rollback complications, and the difficulty of zero-trust in tightly integrated systems — and why simpler systems like SCADA often carry less security complexity despite capability trade-offs. Manufacturing-specific threats like ransomware and, above all, supply-chain risk are highlighted given how interconnected production lines are.',
          ],
        },
        {
          heading: 'Proof of Concept',
          body: [
            'To ground the research in a working system, my professor and I built a proof-of-concept digital twin using ROS2 and Gazebo, configuring an environment to control a small robotic arm operating as part of a larger manufacturing assembly line.',
          ],
        },
      ],
      links: [
        {
          label: 'GitHub Repository (includes the research paper)',
          url: 'https://github.com/rathgeberj/digital-twin-security',
        },
      ],
    },
  },
  {
    slug: 'nyu-swap',
    name: 'NYU Swap',
    summary:
      'A full-stack university marketplace that lets students buy, sell, and swap goods within their campus community, organized around NYU residence halls. Built as a group Design Project — a React frontend and a Flask REST API backend backed by MongoDB.',
    tags: [],
    techStack: [
      'Full-Stack Development',
      'Continuous Integration and Continuous Delivery (CI/CD)',
      'REST APIs',
      'MongoDB',
      'Front-End Design',
    ],
    date: 'Sep 2023 – May 2024',
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'A full-stack university marketplace that lets students buy, sell, and swap goods — textbooks, furniture, clothing, school supplies — within their campus community. The app is organized around NYU residence halls, so students can source affordable items locally and connect with sellers on campus.',
            'Built as a group project for a Design Project course, split across two repositories: a React frontend and a Flask REST API backend backed by MongoDB.',
          ],
        },
        {
          heading: 'Features',
          body: [
            'Browse a live product grid and open item detail pages with price, brand, category, condition, and seller.',
            'Post listings through a backend-driven dynamic form.',
            'Sign up and log in with profile creation that auto-fills an address from a chosen NYU residence hall.',
            'Manage a shopping cart and a saved/favorites list, follow other users, and message between buyers and sellers.',
          ],
        },
        {
          heading: 'Architecture',
          body: [
            'A clean two-tier split. The React 18 frontend (React Router v6, Material UI, Emotion) talks to the backend over HTTP via axios, with route guards protecting authenticated pages and session state mirrored to localStorage.',
            'The backend (Flask + Flask-RESTX) exposes around 20 REST endpoints with auto-generated Swagger docs, layered over a dedicated data-access module per concern — users, products, followers, conversations, residence halls — that talks to MongoDB through shared CRUD helpers. Passwords are hashed with scrypt via Werkzeug, and the app runs against a local MongoDB or MongoDB Atlas in the cloud.',
          ],
        },
        {
          heading: 'Engineering & Deployment',
          body: [
            'Ships with a Dockerfile, a GitHub Actions CI pipeline, and a pytest + flake8 test/lint workflow, automated through a makefile.',
          ],
        },
      ],
      links: [
        {
          label: 'GitHub — Frontend',
          url: 'https://github.com/rathgeberj/uni-marketplace-frontend',
        },
        {
          label: 'GitHub — Backend',
          url: 'https://github.com/rathgeberj/uni-marketplace-backend',
        },
      ],
    },
  },
  {
    slug: 'premier-league-db',
    name: 'Premier League Database',
    summary:
      'A 3-tier full-stack web app to manage and visualize an EPL season — a normalized MySQL 8 schema (8 related tables) with triggers, views, stored functions, a transactional stored procedure, and analytics views, behind a modular Python/Flask REST API and a vanilla JavaScript frontend.',
    tags: [],
    techStack: [
      'SQL',
      'Database Design',
      'REST API Development',
      'MySQL',
      'Flask',
    ],
    date: 'Jan 2026 – May 2026',
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'A 3-tier full-stack web app to manage and visualize an English Premier League season, built across a MySQL database tier, a Python/Flask REST API, and a vanilla JavaScript frontend.',
          ],
        },
        {
          heading: 'Database',
          body: [
            'The data layer is a normalized MySQL 8 schema of 8 related tables, loaded from numbered SQL files in sequence — table definitions, seed data, triggers, views, functions, procedures, and aggregate views.',
            'It implements advanced database features: triggers for automated operations, views for simplified access, stored functions, a transactional stored procedure, and aggregate analytics views for stats like manager win rates, top scorers, and referee workload.',
          ],
        },
        {
          heading: 'API & Frontend',
          body: [
            'A modular Python/Flask REST API sits in front of the database, and a vanilla JavaScript frontend consumes it to display live standings, player and team statistics, and an interactive player-transfer tool.',
          ],
        },
        {
          heading: 'Implementation',
          body: [
            'Backend in Python 3.10+ with Flask, MySQL 8 for storage, and a static vanilla JavaScript/HTML/CSS frontend. Database credentials are configured via a .env file, with the frontend served on port 8080 and the Flask API running alongside it.',
          ],
        },
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/rathgeberj/premier-league-db',
        },
      ],
    },
  },
  {
    slug: 'sp500-forecasting',
    name: 'S&P Return Forecasting',
    summary:
      'An end-to-end pipeline forecasting next-day S&P 500 log returns from a decade of price and macroeconomic data — engineering 32 features and benchmarking 5 models, with XGBoost coming out on top.',
    tags: [],
    techStack: [
      'Quantitative Analytics',
      'Time Series Forecasting',
      'Machine Learning',
      'Python',
      'Feature Engineering',
    ],
    date: 'Mar 2026 – Apr 2026',
    award: 'Best Project Winner — NYU Tandon Data Science Bootcamp',
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'Built with a 4-person team, this project is an end-to-end machine learning pipeline that forecasts next-day S&P 500 log returns by combining roughly 10 years of daily market data with macroeconomic indicators.',
            'It was named Best Project at the NYU Tandon Data Science Bootcamp.',
          ],
        },
        {
          heading: 'Data & Features',
          body: [
            'The pipeline merges ~2,515 trading days (April 2016 – April 2026) of S&P 500 OHLCV data with the Federal Funds Rate, GDP, core inflation, and unemployment. Macro series were aligned to the trading calendar and forward-filled to daily frequency, deliberately keeping real outliers like the COVID-19 unemployment spike and the 2022–2023 rate hikes since they carry the most signal.',
            'Augmented Dickey-Fuller (ADF) testing identified non-stationary series, which were first-differenced until stationary. From there the team engineered 32 features — multi-lag macro variables (lags 1, 2, 3, 5, 10), technical indicators (RSI-14, MACD, Bollinger Bands %B), and interaction terms (Fed rate × inflation, GDP × unemployment).',
          ],
        },
        {
          heading: 'Models & Results',
          body: [
            'Five models were benchmarked over a ~500-day test period (April 2024 – April 2026): Linear Regression (baseline), Random Forest, VAR, an LSTM with 30-day sequence memory, and XGBoost.',
            'XGBoost won clearly, cutting RMSE to ~0.0072 versus ~0.0102 for the others. The four baselines clustered tightly around linear regression — evidence that lagged macro data alone has weak day-ahead predictive power, while the engineered technical signals and interaction terms substantially improved predictions.',
          ],
        },
        {
          heading: 'Implementation',
          body: [
            'Implemented in Python with pandas, NumPy, and SciPy for data work, statsmodels for ADF stationarity testing, scikit-learn for the baseline models, XGBoost for gradient boosting, and TensorFlow for the LSTM, with Matplotlib/Seaborn for visualization.',
          ],
        },
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/rathgeberj/sp500-forecasting',
        },
      ],
    },
  },
  {
    slug: 'epl-projection-model',
    name: 'English Premier League Projection Model',
    summary:
      'Supervised ML models that predict English Premier League match outcomes (home win, away win, or draw) from 12+ seasons of historical match statistics — the best models cleared the 50% target at ~52% accuracy on a notoriously hard 3-class problem.',
    tags: [],
    techStack: [
      'Machine Learning',
      'Python',
      'Data Analysis',
      'Scikit-Learn',
      'Predictive Modeling',
    ],
    date: 'Mar 2023 – May 2023',
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'Built as the final project for the Mining Massive Datasets course at NYU Tandon, this project uses supervised machine learning to predict the result of an English Premier League fixture — home win, away win, or draw — from historical match statistics.',
            'The goal was to beat 50% accuracy on this three-class problem, with a stretch goal of estimating Vegas-style betting odds.',
          ],
        },
        {
          heading: 'Data & Features',
          body: [
            'Match data comes from football-data.co.uk, organized as per-season CSV files spanning 12+ seasons. Raw features include goals (full-time and half-time), shots (total and on-target), fouls, yellow/red cards, corners, referee, and historical bookmaker odds.',
            'The feature pipeline encodes categorical variables, engineers per-team home/away rolling averages, merges them into per-matchup feature rows, and standardizes the values before modeling.',
          ],
        },
        {
          heading: 'Models & Methodology',
          body: [
            'Five models were compared. Three handle result classification — XGBoost, K-Nearest Neighbors, and Random Forest — while a Neural Network (MLP) and Support Vector Regression project full-season point totals and final standings.',
            'Hyperparameters were tuned with GridSearchCV using 5-fold cross-validation, and models were evaluated on accuracy, precision, recall, and F1-score.',
          ],
        },
        {
          heading: 'Results',
          body: [
            'The classification models landed around 50–52% accuracy, clearing the 50% baseline: XGBoost reached ~52.5% cross-validation accuracy (51.1% across 12 seasons, F1 ≈ 0.46), K-Nearest Neighbors ~52.3%, and Random Forest ~49.9%.',
            'Draws proved especially hard to predict, and match statistics alone offer limited power to separate the three outcomes — a fitting reflection of how unpredictable football results really are.',
          ],
        },
        {
          heading: 'Implementation',
          body: [
            'Developed in Python 3.10 on Google Colab, using pandas and NumPy for data wrangling, scikit-learn and XGBoost for modeling, statsmodels for statistics, and Matplotlib/Seaborn for visualization.',
          ],
        },
      ],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/rathgeberj/premier-league-prediction-model',
        },
      ],
    },
  },
  {
    slug: 'portfolio',
    name: 'Cybersecurity Portfolio',
    summary:
      'rathgeberj.dev — this very site. A personal cybersecurity portfolio built with Astro and Tailwind CSS in a terminal/OS desktop aesthetic, and a hands-on exercise in prompting and orchestrating AI agents from concept to deployment.',
    tags: [],
    techStack: [
      'Prompt Engineering',
      'Continuous Integration and Continuous Delivery (CI/CD)',
      'Astro',
      'Tailwind CSS',
      'TypeScript',
    ],
    date: 'Jun 2026 – Present',
    deepDive: {
      sections: [
        {
          heading: 'Overview',
          body: [
            'rathgeberj.dev — the site you are reading — is my personal cybersecurity portfolio, built with Astro and Tailwind CSS and presented through a terminal/OS desktop aesthetic, complete with a matrix-rain background and a monospace UI.',
            'It is fully data-driven: every page renders from TypeScript data files in src/data/, so adding or updating content means editing data, never components.',
          ],
        },
        {
          heading: 'AI-Assisted Development',
          body: [
            'Beyond the portfolio itself, the project is a practical exercise in prompting and orchestrating AI agents — the majority of the site was AI-assisted. It gave me hands-on experience directing and reviewing modern AI development tools end to end, from initial concept through to deployment.',
          ],
        },
        {
          heading: 'Architecture & Deployment',
          body: [
            'Built as an Astro static site with a Tailwind design system driven by a small set of terminal color tokens and reusable component patterns. Projects with a deep dive generate their own detail pages, certifications track earned and in-progress states, and the experience timeline supports grouped promotion progressions.',
            'The site builds through a GitHub Actions CI pipeline and deploys to its custom domain, rathgeberj.dev.',
          ],
        },
      ],
      links: [
        {
          label: 'Live Site',
          url: 'https://rathgeberj.dev',
        },
        {
          label: 'GitHub Repository',
          url: 'https://github.com/rathgeberj/portfolio',
        },
      ],
    },
  },
];
