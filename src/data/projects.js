const assetBase = import.meta.env.BASE_URL;

const rallyTabDemoBase = (import.meta.env.VITE_RALLYTAB_DEMO_URL || 'https://rally-tab.vercel.app').replace(/\/$/, '');
const resolveITDemoUrl = import.meta.env.VITE_RESOLVEIT_DEMO_URL || '';
const skillBridgeDemoUrl = import.meta.env.VITE_SKILLBRIDGE_DEMO_URL || '';

export const projects = [
  {
    slug: 'resolveit',
    title: 'ResolveIT',
    subtitle: 'Interactive IT support operations demo',
    shortTitle: 'ResolveIT: Interactive IT Support Operations Demo',
    status: 'Featured project',
    availability: resolveITDemoUrl ? 'Live demo' : 'Interactive portfolio demo',
    summary: 'Interactive IT support operations demo built with Next.js, TypeScript, and Tailwind CSS. Simulates technician workflows, device diagnostics, ticket resolution, and employee-facing support updates across desktop and mobile.',
    description: 'ResolveIT is a responsive portfolio project that simulates a modern IT support operations workflow. It includes a technician workspace, employee self-service portal, ticket queue, device inventory, guided VPN diagnostics, resolution checklist, internal notes, public updates, and shared local state between technician and employee views.',
    why: 'I built ResolveIT to show product thinking beyond a static dashboard. The demo lets someone walk through a realistic critical VPN incident, take technician actions, resolve the ticket, and verify the result from the employee-facing portal.',
    highlights: [
      'Technician workspace and employee self-service portal',
      'Guided VPN diagnostics with simulated remote actions',
      'Ticket lifecycle, SLA triage, notes, and public updates'
    ],
    features: [
      'Interactive landing-page demo preview',
      'Web and mobile preview modes',
      'Technician workspace',
      'Employee self-service portal',
      'Ticket lifecycle management',
      'SLA and priority triage',
      'Device health inspection',
      'Guided VPN diagnostic workflow',
      'Simulated remote support actions',
      'Resolution checklist gating',
      'Internal technician notes',
      'Public employee-facing updates',
      'Local browser state persistence',
      'Responsive mobile demo coach'
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Lucide React', 'Recharts', 'localStorage'],
    badges: ['IT Support Simulation', 'Interactive Demo', 'Responsive UI'],
    privacy: 'Fictional IT incident data with local browser state persistence.',
    imagePair: {
      desktop: {
        src: `${assetBase}images/projects/resolveit/resolveit-workspace.png`,
        alt: 'ResolveIT technician workspace showing a critical VPN support incident, guided demo steps, ticket workflow, and device inspector',
        width: 1440,
        height: 1000,
        label: 'Technician workspace'
      },
      mobile: {
        src: `${assetBase}images/projects/resolveit/resolveit-employee-mobile.png`,
        alt: 'ResolveIT employee self-service portal for Sarah Johnson submitting a VPN support request on mobile',
        width: 390,
        height: 844,
        label: 'Employee portal'
      },
      mobileTabs: ['Employee Portal']
    },
    visual: {
      label: 'IT Support Operations',
      items: ['Critical VPN Ticket', 'Device Health', 'Guided Diagnostics', 'Employee Portal']
    },
    liveDemo: resolveITDemoUrl ? {
      label: 'Live Demo',
      href: resolveITDemoUrl,
      external: true
    } : {
      label: 'Live Demo',
      modal: true
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/michaelleethedev/ResolveIT',
      external: true
    },
    next: [
      'Add more incident templates beyond VPN support',
      'Add manager-level analytics for ticket volume and SLA trends',
      'Replace simulated actions with a small API-backed event log'
    ],
    featured: true
  },
  {
    slug: 'rallytab',
    title: 'RallyTab',
    subtitle: 'Sports-bar ordering and operations platform',
    shortTitle: 'RallyTab: Sports-Bar Ordering and Operations Platform',
    status: 'Featured project',
    availability: 'Live demo and public repository',
    summary: 'A mobile-first ordering and live-tab experience that lets sports-bar guests order from their table while staff manage kitchen tickets, service requests, table activity, and menu availability.',
    description: 'RallyTab is a hospitality operations demo built around the messy, high-pressure workflow of a sports bar. Guests can order from a table-aware mobile interface while staff manage active tabs, kitchen tickets, service requests, and menu availability.',
    why: 'I built RallyTab to practice designing connected workflows instead of isolated screens. The project focuses on how customer actions, kitchen operations, and staff decisions affect each other in real time.',
    highlights: [
      'Table-aware QR ordering with a persistent local cart',
      'Synchronized kitchen, order, and service workflows',
      'Live-tab splitting and staff operations dashboards'
    ],
    features: [
      'Guest mobile ordering',
      'Persistent local cart',
      'Kitchen ticket queue',
      'Staff operations dashboard',
      'Service request tracking',
      'Table activity monitoring',
      'Menu availability controls',
      'Mock checkout and demo data'
    ],
    tech: ['Next.js 15', 'TypeScript', 'React 19', 'Tailwind CSS', 'Local Storage'],
    badges: ['Live Demo', 'Operations Dashboard', 'Mobile Workflow'],
    privacy: 'Mock checkout and demo data only. No real payments or customer records.',
    imagePair: {
      desktop: {
        src: `${assetBase}images/projects/rallytab/rallytab-dashboard.png`,
        alt: 'RallyTab staff operations dashboard showing active tabs, open orders, kitchen tickets, sales pace, and service requests',
        width: 1440,
        height: 1000,
        label: 'Staff dashboard'
      },
      mobile: {
        src: `${assetBase}images/projects/rallytab/rallytab-mobile.png`,
        alt: 'RallyTab mobile guest experience showing a live game, table number, menu categories, and popular food items',
        width: 390,
        height: 844,
        label: 'Guest mobile'
      },
      mobileTabs: ['Guest Order']
    },
    visual: {
      label: 'Live Tab Operations',
      items: ['Table QR Order', 'Kitchen Queue', 'Service Requests', 'Split Tab']
    },
    liveDemo: {
      label: 'Live Demo',
      href: `${rallyTabDemoBase}/demo`,
      external: true,
      routes: [
        { label: 'Demo Hub', href: `${rallyTabDemoBase}/demo` },
        { label: 'Customer View', href: `${rallyTabDemoBase}/table/24` },
        { label: 'Owner View', href: `${rallyTabDemoBase}/staff` }
      ]
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/michaelleethedev/RallyTab',
      external: true
    },
    next: [
      'Add backend persistence for live orders',
      'Add role-based staff permissions',
      'Expand table management and payment edge cases'
    ],
    featured: true,
    wide: true
  },
  {
    slug: 'skillbridge-ai',
    title: 'SkillBridge AI',
    subtitle: 'EdTech SaaS dashboard',
    shortTitle: 'SkillBridge AI: Tutoring Dashboard and Learning Workflow',
    status: 'Featured project',
    availability: skillBridgeDemoUrl ? 'Live demo' : 'Case study and interactive preview',
    summary: 'A tutoring dashboard for reviewing fictional student progress, finding learning gaps, generating practice plans, and sharing clear summaries.',
    description: 'SkillBridge AI is an education dashboard concept for tutors who need to quickly understand student progress and turn learning gaps into practical next steps.',
    why: 'I built SkillBridge AI to practice AI-assisted workflow design in a sensitive domain. The emphasis is on clear explanations, fictional data, and useful summaries instead of overclaiming what AI can do.',
    highlights: [
      'Progress and skill-mastery dashboard',
      'Learning-gap review workflows',
      'Practice-plan and summary generation'
    ],
    features: [
      'Student progress dashboard',
      'Skill gap triage',
      'Weekly practice planning',
      'Parent summary workflow',
      'Priority queue for tutor review',
      'Fictional student records'
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    badges: ['AI Workflow', 'Education Dashboard', 'Case Study'],
    privacy: 'Fictional student records. No private education data.',
    image: `${assetBase}images/projects/skillbridge/skillbridge-dashboard.png`,
    imageAlt: 'SkillBridge AI dashboard showing student metrics, an AI priority queue, and a weekly learning plan',
    imageWidth: 1440,
    imageHeight: 1000,
    imagePosition: 'top center',
    visual: {
      label: 'Learning Insights',
      items: ['Student Profile', 'Skill Gaps', 'Practice Plan', 'Parent Summary']
    },
    liveDemo: skillBridgeDemoUrl ? {
      label: 'Live Demo',
      href: skillBridgeDemoUrl,
      external: true
    } : {
      label: 'Live Demo',
      modal: true
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/michaelleethedev/SkillBridge-AI',
      external: true
    },
    next: [
      'Add more realistic tutor workflows around scheduling',
      'Improve accessibility for dense data views',
      'Connect the planning flow to a lightweight backend'
    ],
    featured: true
  },
  {
    slug: 'seamless',
    title: 'Seamless',
    subtitle: 'Browser productivity extension',
    shortTitle: 'Seamless: Chrome Extension for Reusable Writing Templates',
    status: 'Real-world product',
    availability: 'Live on the Chrome Web Store',
    summary: 'A Chrome extension for organizing, searching, favoriting, and inserting reusable writing templates without leaving the browser.',
    description: 'Seamless is a Chrome extension that helps people save reusable writing templates, organize them by folder, search quickly, and insert snippets while working in the browser.',
    why: 'I built Seamless because repeated writing is a real productivity problem. This project let me focus on a tight browser workflow, privacy-conscious local storage, and a product that can actually be installed.',
    highlights: [
      'Folder, search, and favorites organization',
      'One-click reusable template insertion',
      'Privacy-first local storage'
    ],
    features: [
      'Chrome extension workflow',
      'Template library',
      'Folders and favorites',
      'Search and quick filtering',
      'Reusable snippet insertion',
      'Local browser storage',
      'Chrome Web Store listing'
    ],
    tech: ['TypeScript', 'Chrome APIs', 'Tailwind CSS', 'Local Storage'],
    badges: ['Chrome Extension', 'Live Product', 'Local Storage'],
    privacy: 'Templates remain local to the user’s browser.',
    image: `${assetBase}images/projects/seamless/seamless-overview.webp`,
    imageAlt: 'Seamless Chrome extension template library showing search, categories, favorites, and reusable templates',
    imageWidth: 1280,
    imageHeight: 800,
    visual: {
      label: 'Template Library',
      items: ['Search Templates', 'Favorite Reply', 'Insert Snippet', 'Local Storage']
    },
    liveDemo: {
      label: 'Chrome Store',
      href: 'https://chromewebstore.google.com/detail/seamless/phipkfflgldgfdmgenobpklmlnpekgph?hl=en',
      external: true
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/michaelleethedev/Seamless',
      external: true
    },
    next: [
      'Add optional cloud sync while keeping local-first defaults',
      'Improve onboarding for first-time extension users',
      'Add more keyboard-first insertion workflows'
    ]
  }
];

export const projectDemoCopy = {
  ResolveIT: {
    eyebrow: 'IT support operations demo',
    intro: 'Walk through Sarah Johnson’s critical VPN incident from triage to resolution: inspect the device, run guided diagnostics, apply remote support actions, and verify the employee-facing update.',
    tabs: ['Ticket Queue', 'Device Health', 'VPN Diagnostics', 'Employee Portal'],
    stats: [
      ['P1', 'Critical priority'],
      ['12m', 'SLA timer'],
      ['4/4', 'Checklist steps']
    ],
    actions: ['Inspect Sarah Johnson ticket', 'Reset VPN adapter', 'Clear DNS cache', 'Resolve incident'],
    notes: {
      'Ticket Queue': 'The technician workspace prioritizes the critical VPN incident, SLA status, internal notes, and next best action.',
      'Device Health': 'Device inventory links Sarah’s assigned laptop to health checks, network status, and recent support context.',
      'VPN Diagnostics': 'Guided diagnostics gate resolution until the VPN adapter reset, DNS cache clear, and troubleshooting checklist are complete.',
      'Employee Portal': 'Public updates mirror technician progress so Sarah can see the ticket status and resolution summary from self-service.'
    }
  },
  Seamless: {
    eyebrow: 'Browser extension demo',
    intro: 'Explore the reusable-template workflow: organize saved writing, find the right snippet, favorite it, and insert it from a compact browser panel.',
    tabs: ['Library', 'Templates', 'Settings'],
    stats: [
      ['42', 'Saved templates'],
      ['8', 'Folders'],
      ['Local', 'Storage mode']
    ],
    actions: ['Search refund reply', 'Favorite onboarding note', 'Insert support snippet'],
    notes: {
      Library: 'The library view keeps templates searchable and organized by folder so users can move quickly while writing.',
      Templates: 'Template cards can be favorited, previewed, copied, or inserted into the current browser workflow.',
      Settings: 'Privacy stays simple: saved templates remain in local browser storage.'
    }
  },
  'SkillBridge AI': {
    eyebrow: 'EdTech dashboard demo',
    intro: 'Move through a tutoring dashboard built around student progress, learning gaps, and practical next-step planning.',
    tabs: ['Overview', 'Skill Gaps', 'Practice Plan'],
    stats: [
      ['86%', 'Mastery'],
      ['4', 'Priority gaps'],
      ['12', 'Practice tasks']
    ],
    actions: ['Filter algebra gaps', 'Generate practice plan', 'Prepare parent summary'],
    notes: {
      Overview: 'Tutors can scan student progress, priority queues, and weekly learning trends at a glance.',
      'Skill Gaps': 'Gap reviews turn raw progress data into specific topics that need attention.',
      'Practice Plan': 'The planning view converts insights into structured practice work and shareable summaries.'
    }
  },
  RallyTab: {
    eyebrow: 'Hospitality ops demo',
    intro: 'Test the sports-bar flow from both sides: guest mobile ordering and the staff operations board.',
    tabs: ['Guest Order', 'Kitchen Queue', 'Staff Board'],
    stats: [
      ['18', 'Open tabs'],
      ['7', 'Kitchen tickets'],
      ['3', 'Service requests']
    ],
    actions: ['Add wings to tab', 'Mark ticket ready', 'Split table 12 tab'],
    notes: {
      'Guest Order': 'Guests order from a table-aware mobile interface with persistent cart context.',
      'Kitchen Queue': 'Kitchen staff can prioritize live tickets and see order timing clearly.',
      'Staff Board': 'Operators monitor tabs, service requests, table activity, and menu availability.'
    }
  }
};

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
