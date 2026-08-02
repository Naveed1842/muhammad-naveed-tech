export const companies = [
  "Elm Company",
  "TAMM",
  "Halliburton Digital Well",
  "LMKR",
  "RISETech",
] as const;

export const tamm = {
  eyebrow: "02 / SELECTED WORK — TAMM",
  name: "TAMM — national government services platform",
  org: "Elm Company · Riyadh",
  period: "2021 — Present",
  role: "Frontend Architecture Lead",
  summary:
    "TAMM is how citizens in Saudi Arabia access government services online — [N] services, [N] product teams shipping into it, some in Angular, some in React.",
  ownership:
    "I own the shared component library, the design system, and the frontend engineering standards those teams build on. The technically interesting part isn't the components — it's that my decisions are expensive to reverse. A breaking change in the library is a breaking change in [N] products at once, so the work is mostly versioning discipline, deprecation paths, and getting agreement from teams that each had their own way of doing things before I showed up.",
  backend:
    "Alongside that I build the backend services that connect government systems to the citizen-facing apps (Spring Boot, NestJS, PostgreSQL, MongoDB), and designed the platform's authentication and access model: JWT/OAuth2, RBAC, and API key management for third-party integrations.",
  results: [
    "Deployment time down ~30% after rebuilding CI/CD across product teams (GitHub Actions, GitLab CI).",
    "20–25% performance improvement on [name the specific app or journey] after profiling.",
  ],
  hardestPartLabel: "The hardest part",
  hardestPart:
    "[ADD: one honest paragraph — a migration that went sideways, a standard teams resisted, or a decision you'd reverse.]",
  stack: [
    "Java · Spring Boot",
    "Node.js · NestJS",
    "Angular",
    "React",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Kubernetes · OpenShift",
    "Datadog",
  ],
} as const;

export const sponsorOne = {
  eyebrow: "03 / SELECTED WORK — SPONSORONE",
  name: "SponsorOne — sponsorship and donation platform for education NGOs",
  url: "https://sponsorone.app",
  urlLabel: "sponsorone.app",
  period: "2024 — Present",
  status: "In pilot — not yet public",
  roleLine: "Independent · sole engineer",
  problem:
    "Small education NGOs track child sponsorships in spreadsheets and WhatsApp threads and reconcile donations by hand. The failure mode isn't inefficiency — it's that when a board member or a donor asks where a specific payment went, nobody can answer with confidence.",
  solution:
    "SponsorOne records every payment against an append-only ledger. Sponsors see their own money trail. Admins get reconciliation and a system-wide audit log. Zakat is tracked separately from general donations, because the accounting rules differ and combining them is a genuine problem for the organizations I built this for.",
  ownership:
    "I did all of it: requirements with the stakeholders, domain model, schema, API, Angular frontend, deployment, and support.",
  decisionsLabel: "Two decisions I'd defend in a review",
  decisions: [
    "The ledger is append-only in the domain model and enforced again in PostgreSQL. One layer can be bypassed by a future developer in a hurry; two is harder to bypass by accident.",
    "Access is claims-scoped rather than filtered per request, so swapping an ID in a URL returns nothing instead of someone else's data.",
  ],
  differentlyLabel: "What I'd do differently",
  differently: "[ADD: one honest line — a decision you'd reverse or a shortcut you regret.]",
  stack: [
    "Java 17",
    "Spring Boot 3.2",
    "PostgreSQL 16",
    "Angular 19",
    "Flyway",
    "Docker",
    "Testcontainers",
    "Heroku",
  ],
  caseStudyLabel: "Read the full case study",
  caseStudyHref: "/case-studies/jjt",
} as const;

export const principles = [
  {
    tag: "ARCHITECTURE",
    title: "Boundaries first",
    body: "Domain logic stays free of the framework. It's a discipline that costs you speed early and pays back the first time you replace a database, a queue, or a cloud. I've had to do all three.",
  },
  {
    tag: "DATA",
    title: "Enforce critical rules twice",
    body: "An append-only ledger lives in the domain model and again as a database constraint. A future developer under deadline pressure will find the one path you didn't guard.",
  },
  {
    tag: "TESTING",
    title: "Test against a real database",
    body: "Integration tests run on Testcontainers, not mocks. A mocked test tells you your mocks agree with each other.",
  },
] as const;

export const experience = [
  {
    company: "Elm Company",
    location: "Riyadh, Saudi Arabia",
    role: "Senior Software Engineer · Front-End Architecture Lead",
    period: "Oct 2021 — Present",
    theme: "TECHNICAL LEADERSHIP",
    bullets: [
      "Lead frontend architecture for TAMM, a national-scale government platform — owning the shared component library, design system, and engineering standards every Angular and React product team builds on. Full story above.",
      "Build and maintain the backend services (Java Spring Boot, Node.js/NestJS, PostgreSQL, MongoDB) that connect government systems to citizen-facing applications.",
      "Designed platform-wide security: JWT/OAuth2 authentication, role-based access control, and API key management for third-party integrations — plus WebSocket infrastructure for real-time notifications.",
      "Operate production workloads on AWS, Kubernetes, and OpenShift with Datadog observability that catches problems before users do.",
      "Mentor [N] engineers, lead code reviews, and document architecture decisions so quality scales with the team — and the architecture outlives any one person.",
    ],
  },
  {
    company: "LMKR",
    location: "Islamabad, Pakistan",
    role: "Software Developer (Full-Stack JavaScript)",
    period: "Sep 2019 — Sep 2021",
    theme: "FULL STACK · RESILIENCE",
    bullets: [
      "Built mission-critical software for Halliburton's Digital Well Program — well planning and daily operations tools drilling engineers depend on.",
      "Designed versioned REST and GraphQL APIs so evolving the system never broke existing clients — an early lesson in designing for change.",
      "Engineered real-time well monitoring over WebSocket streams with retry and exponential backoff, built for unstable field networks where naive implementations fail.",
      "Consolidated scattered backend calls into a single aggregation layer, cutting API response times ~15%; refactored a legacy Node.js codebase into independently deployable services.",
    ],
  },
  {
    company: "RISETech",
    location: "Pakistan",
    role: "Software Engineer (Frontend Heavy)",
    period: "Dec 2016 — Aug 2019",
    theme: "FOUNDATIONS",
    bullets: [
      "Built enterprise Angular and React applications for healthcare and IoT clients — domains where correctness and security are non-negotiable.",
      "Implemented authentication and role-based access control end to end: JWT, route guards, session management, secure API access.",
    ],
  },
  {
    company: "Independent — SponsorOne",
    location: "sponsorone.app",
    role: "Sole Engineer",
    period: "2024 — Present",
    theme: "SYSTEM DESIGN · END-TO-END OWNERSHIP",
    bullets: [
      "Designed, built, deployed, and now run a sponsorship and donation platform for education NGOs end to end — see the SponsorOne case study above.",
    ],
  },
] as const;

export const stackTiers = [
  {
    label: "Day-to-day, would bet a product on",
    list: "Java · Spring Boot · TypeScript · Angular · PostgreSQL · Node.js/NestJS",
  },
  {
    label: "Ship with regularly",
    list: "Docker · AWS · Kubernetes · GitHub Actions · GitLab CI · Datadog · MongoDB · Flyway · REST/GraphQL/WebSockets",
  },
  {
    label: "Used, wouldn't claim depth",
    list: "React · Svelte · Go · Python (tooling, not production)",
  },
] as const;

export const education = {
  degree: "BSc, Computer Science",
  school: "PMAS UAAR — UIIT",
  period: "2012 — 2016",
} as const;
