import type { CvId, CvProfile } from './types'

/** Source: text from «FULL STACK - ANDREW DERVYASHKO.pdf» (ANDREW_DEREVYASHKO_FULL_STACK.pdf had no text layer). */

const sharedName = 'Andrew Derevyashko'

const sharedLanguages = ['English', 'Belarusian', 'Russian']

const sharedContacts: CvProfile['contacts'] = [
  { label: 'Email', value: 'derevishko@gmail.com', href: 'mailto:derevishko@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/andrey-dzeraviashka-76609217b',
    href: 'https://www.linkedin.com/in/andrey-dzeraviashka-76609217b',
  },
  { label: 'Telegram', value: '@i_undefined', href: 'https://t.me/i_undefined' },
]

const sharedEducation: CvProfile['education'] = [
  {
    place: 'Belarusian State University, Minsk',
    degree: "Bachelor's degree",
    period: '2015 — 2020',
  },
]

export const cvProfiles: Record<CvId, CvProfile> = {
  frontend: {
    id: 'frontend',
    label: 'Frontend',
    name: sharedName,
    title: 'Frontend Engineer',
    headline: 'React, Vue, TypeScript · UI, accessibility, SCSS',
    summary:
      'Software developer with 6+ years of commercial TypeScript experience. Strong focus on product interfaces: React and Vue, SCSS, and accessible, performant UIs. Comfortable integrating with APIs and collaborating with PMs and cross-functional teams.',
    skills: [
      'React',
      'Vue',
      'TypeScript',
      'JavaScript',
      'SCSS / CSS',
      'Responsive UI & accessibility',
      'Git',
      'CI/CD',
    ],
    languages: sharedLanguages,
    experience: [
      {
        role: 'Full Stack Engineer',
        company: 'Timspark',
        period: 'June 2024 — Present',
        highlights: [
          'Built user interfaces for enterprise security analytics with emphasis on usability and accessibility.',
          'Worked with project managers to align delivery with business goals and milestones.',
        ],
      },
      {
        role: 'Backend Engineer',
        company: 'Kodan',
        period: 'October 2020 — June 2024',
        highlights: [
          'Shipped intuitive flows for search, navigation, and booking in a high-traffic consumer product.',
          'Collaborated on UX for Elasticsearch-powered search and filtering.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'Renault Group, Minsk',
        period: 'October 2018 — October 2020',
        highlights: [
          'Delivered HR and workforce tools, an online auction UI, and repair workflow dashboards.',
          'Implemented a live video streaming experience for customers monitoring vehicle repairs.',
          'Built call center interfaces with clearer workflows and better agent efficiency.',
        ],
      },
    ],
    education: sharedEducation,
    contacts: sharedContacts,
  },
  backend: {
    id: 'backend',
    label: 'Backend',
    name: sharedName,
    title: 'Backend Engineer',
    headline: 'Node.js, NestJS, GraphQL · microservices & data platforms',
    summary:
      'Six years of commercial TypeScript experience building scalable backends: NestJS microservices, GraphQL, PostgreSQL, MongoDB, MySQL, Elasticsearch, and Redis. Docker, AWS, and CI/CD for reliable delivery.',
    skills: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'GraphQL',
      'Microservices',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Elasticsearch',
      'Redis',
      'Docker',
      'AWS',
      'CI/CD',
    ],
    languages: sharedLanguages,
    experience: [
      {
        role: 'Full Stack Engineer',
        company: 'Timspark',
        period: 'June 2024 — Present',
        highlights: [
          'Optimized database queries and reliability under heavy load for security analytics workloads.',
          'Partnered with cross-functional teams to diagnose and fix production issues.',
        ],
      },
      {
        role: 'Backend Engineer',
        company: 'Kodan',
        period: 'October 2020 — June 2024',
        highlights: [
          'Designed and built a microservices platform with Node.js, NestJS, and GraphQL.',
          'Implemented advanced search with Elasticsearch (filtering, relevance) for a yacht marketplace.',
          'Integrated a secure payment gateway for online transactions.',
          'Built high-throughput data infrastructure: microservices, ingestion pipelines, dynamic pricing with real-time updates.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'Renault Group, Minsk',
        period: 'October 2018 — October 2020',
        highlights: [
          'Developed web backends supporting HR, auctions, service workflows, and call center operations.',
          'Focused on reliable task assignment, integrations, and analytics-friendly service design.',
        ],
      },
    ],
    education: sharedEducation,
    contacts: sharedContacts,
  },
  fullstack: {
    id: 'fullstack',
    label: 'Fullstack',
    name: sharedName,
    title: 'Full Stack Engineer',
    headline: 'TypeScript · React, Vue, Node, NestJS · Minsk, Belarus',
    summary:
      'Results-driven software developer with 6 years of commercial experience in TypeScript. Proficient in front-end and back-end development using React, Vue, and Node.js. Experienced with scalable applications on NestJS and databases: PostgreSQL, MySQL, and MongoDB. Redis for caching, Docker for containerization, AWS for cloud, SCSS for styling, and a strong focus on high-quality code.',
    skills: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'React',
      'Vue',
      'NestJS',
      'GraphQL',
      'Microservices',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Elasticsearch',
      'Redis',
      'Docker',
      'AWS',
      'SCSS',
      'CI/CD',
    ],
    languages: sharedLanguages,
    experience: [
      {
        role: 'Full Stack Engineer',
        company: 'Timspark',
        period: 'June 2024 — Present',
        highlights: [
          'Developed user interfaces for enterprise security analytics; improved usability and accessibility.',
          'Collaborated with project managers to align development with business objectives and milestones.',
          'Optimized database queries for performance and reliability under heavy load.',
          'Worked with cross-functional teams to troubleshoot issues and stabilize delivery.',
        ],
      },
      {
        role: 'Backend Engineer',
        company: 'Kodan',
        period: 'October 2020 — June 2024',
        highlights: [
          'Built a scalable microservices platform with Node.js, NestJS, and GraphQL.',
          'Delivered Elasticsearch-powered search and filtering for a yacht marketplace.',
          'Integrated a secure payment gateway for online transactions.',
          'Shipped intuitive interfaces for navigation and booking.',
          'Established data infrastructure with NestJS microservices, ingestion pipelines, and dynamic pricing with real-time updates.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'Renault Group, Minsk',
        period: 'October 2018 — October 2020',
        highlights: [
          'Built an employee management tool for HR, attendance, and payroll.',
          'Delivered an online auction platform for used cars with smooth bidding and transactions.',
          'Optimized repair workflows with centralized task management for service businesses.',
          'Created a live video streaming experience so customers could monitor repairs in real time.',
          'Implemented a call center solution with streamlined inquiries and analytics.',
        ],
      },
    ],
    education: sharedEducation,
    contacts: sharedContacts,
  },
}

export const cvOrder: CvId[] = ['frontend', 'backend', 'fullstack']
