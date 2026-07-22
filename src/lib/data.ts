export const heroTags = [
  "Enterprise Architecture",
  "Full Stack",
  "Cloud & DevOps",
  "Security by Design",
  "AI-Assisted Engineering",
] as const;

export const stats = [
  { value: "10+", label: "Years experience" },
  { value: "1", label: "SaaS in production" },
  { value: "4", label: "Industry sectors" },
  { value: "~30%", label: "Faster deployments" },
] as const;

export const growthStory = [
  { year: "2016", label: "Software Engineer", active: false },
  { year: "2019", label: "Full-Stack Engineer", active: false },
  { year: "2021", label: "Frontend Architecture Lead", active: false },
  { year: "2024", label: "System Designer / Solution Architect", active: false },
  { year: "", label: "Technical Leader — concept to production", active: true },
] as const;

export const flagship = {
  name: "JJT — Child Education Sponsorship Platform",
  url: "https://sponsorone.app",
  urlLabel: "sponsorone.app",
  period: "2024 — Present",
  description:
    "Education NGOs run sponsorships on spreadsheets, WhatsApp, and paper receipts — no audit trail, no donor accountability, reconciliation done by hand. JJT replaces all of it: every payment recorded against an immutable ledger, every sponsor seeing exactly where their money went, every action auditable for board and regulatory review — including Islamic-compliant Zakat tracking.",
  roles: ["MY ROLE: PRODUCT ARCHITECT", "FULL STACK ENGINEER", "SOLE BUILDER · IDEA → PRODUCTION"],
  modules: [
    { label: "PUBLIC SITE", body: "5-step sponsorship wizard — commit without an account" },
    { label: "ADMIN CONSOLE", body: "18 modules — payments, donations, Zakat, funds, audit log" },
    { label: "SPONSOR PORTAL", body: "Claims-scoped ledger and progress tracking per sponsor" },
  ],
  highlights: [
    { title: "Clean Architecture", body: "framework-free domain layer; JPA never crosses into business logic" },
    { title: "Append-only financial ledger", body: "immutability enforced at both domain and PostgreSQL levels" },
    {
      title: "Security by design",
      body: "memory-only access tokens, rotating hashed refresh tokens, claims-scoped data access",
    },
    {
      title: "Multi-tenant & compliance-ready",
      body: "organisation scoping on every table; system-wide immutable audit trail",
    },
  ],
  metrics: [
    { value: "~76", label: "API ENDPOINTS" },
    { value: "25", label: "DB MIGRATIONS" },
    { value: "~15.5k", label: "LINES OF CODE" },
    { value: "3", label: "USER ROLES" },
  ],
  stack: [
    "Java 17",
    "Spring Boot 3.2",
    "PostgreSQL 16",
    "Angular 19",
    "TypeScript",
    "JWT",
    "Flyway",
    "Docker",
    "Testcontainers",
    "Heroku",
    "Firebase",
  ],
  caseStudyLabel: "Read the AWS deployment case study",
  caseStudyNote: "Architecture · challenges · debugging stories · roadmap",
  caseStudyHref: "/case-studies/jjt",
} as const;

export const caseStudies = [
  {
    tag: "NGO / FINTECH",
    period: "2024 —",
    title: "JJT Platform",
    problem: "sponsorship money moving with no audit trail.",
    solution:
      "an append-only ledger enforced at the database level, claims-scoped access, and full reconciliation — built solo, live in production.",
    status: "LIVE",
    href: "/case-studies/jjt",
  },
  {
    tag: "GOVERNMENT",
    period: "2021 —",
    title: "TAMM Platform",
    problem: "multiple product teams shipping inconsistent frontends at government scale.",
    solution:
      "a shared component library, design system, and CI/CD standards that cut deployment time ~30%.",
    status: "COMING SOON",
  },
  {
    tag: "ENERGY",
    period: "2019 — 2021",
    title: "Halliburton Digital Well",
    problem: "real-time well data over unstable field networks.",
    solution:
      "resilient WebSocket streams with backoff, versioned APIs, and an aggregation layer that cut response times ~15%.",
    status: "COMING SOON",
  },
] as const;

export const principles = [
  {
    tag: "ARCHITECTURE",
    title: "Clean boundaries, boring core",
    body: "Domain logic stays framework-free. Frameworks, databases, and clouds are replaceable details at the edges — that's what makes a system last a decade.",
  },
  {
    tag: "SECURITY",
    title: "Security by design",
    body: "Auth, access control, and data scoping are architecture — not features added later. Claims-scoped access means parameter manipulation simply can't work.",
  },
  {
    tag: "DATA",
    title: "Invariants enforced twice",
    body: "Critical rules — like an append-only financial ledger — live in the domain model and again at the database level. Guarantees you can't bypass, even by accident.",
  },
  {
    tag: "DELIVERY",
    title: "CI/CD as a product",
    body: "Pipelines, environments, and observability get the same design care as user features. Teams ship faster when the path to production is engineered, not improvised.",
  },
  {
    tag: "TESTING",
    title: "Test against reality",
    body: "Integration tests run against a real database (Testcontainers), not mocks. If the test doesn't exercise the real behavior, it's documentation, not verification.",
  },
  {
    tag: "KNOWLEDGE",
    title: "Decisions are documented",
    body: "Architecture decision records and C4 diagrams keep the \"why\" alive after the meeting ends. A system nobody can explain is a liability, however well it runs.",
  },
  {
    tag: "MAINTAINABILITY",
    title: "Optimize for the next engineer",
    body: "Code is read far more than written. I design systems the next engineer can maintain without me in the room — that's the real measure of quality.",
  },
  {
    tag: "AI",
    title: "AI-assisted, engineer-verified",
    body: "AI accelerates exploration, testing, and delivery — but every line ships under engineering judgment. The skill is knowing what to keep.",
  },
] as const;

export const aiWorkflow = [
  { title: "Architecture exploration", body: "Pressure-testing designs and trade-offs before committing" },
  { title: "Agentic workflows", body: "Multi-step AI tooling for scaffolding, refactors, and migrations" },
  {
    title: "AI-assisted testing",
    body: "Generating test cases and edge conditions, verified against real systems",
  },
  { title: "Developer productivity", body: "Faster delivery without loosening review or quality standards" },
] as const;

export const experience = [
  {
    company: "JJT Sponsorship Platform",
    location: "Independent · sponsorone.app",
    role: "System Designer / Solution Architect",
    period: "2024 — Present",
    theme: "SYSTEM DESIGN · END-TO-END OWNERSHIP",
    bullets: [
      "Designed the complete system architecture from business requirements through implementation planning — then built and shipped it to production as the sole engineer.",
      "Worked directly with stakeholders to translate real business processes — sponsorships, payments, financial reporting — into a scalable technical solution.",
      "Designed the domain model, database architecture, system workflows, user roles and permissions, immutable audit trail, and financial tracking before a line of code was written.",
      "Produced the BRD, architecture diagrams, technical documentation, and implementation guidelines that governed the entire build.",
      "Defined a modular, reusable architecture — Java Spring Boot, Angular, PostgreSQL — built for maintainability and long-term evolution.",
      "Planned and executed the AWS production deployment: Docker containerization, ECS/Fargate, and the CI/CD strategy.",
    ],
  },
  {
    company: "Elm Company",
    location: "Riyadh, Saudi Arabia",
    role: "Senior Software Engineer · Front-End Architecture Lead",
    period: "Oct 2021 — Present",
    theme: "TECHNICAL LEADERSHIP",
    bullets: [
      "Lead frontend architecture for TAMM, a national-scale government platform — owning the shared component library, design system, and engineering standards every Angular and React product team builds on.",
      "Build and maintain the backend services (Java Spring Boot, Node.js/NestJS, PostgreSQL, MongoDB) that connect government systems to citizen-facing applications.",
      "Designed platform-wide security: JWT/OAuth2 authentication, role-based access control, and API key management for third-party integrations — plus WebSocket infrastructure for real-time notifications.",
      "Cut deployment time ~30% by rebuilding CI/CD pipelines (GitHub Actions, GitLab CI) across product teams; delivered 20–25% performance gains through profiling and optimization.",
      "Operate production workloads on AWS, Kubernetes, and OpenShift with Datadog observability that catches problems before users do.",
      "Mentor engineers, lead code reviews, and document architecture decisions so quality scales with the team — and the architecture outlives any one person.",
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
      "Developed real-time dashboards on RxJS streams with error handling and automatic retry; replaced manual deployments with Docker pipelines for consistent environments.",
    ],
  },
] as const;

export const skillGroups = [
  { group: "LANGUAGES", list: "JavaScript (ES6+), TypeScript, Java, Python, Go" },
  { group: "FRONTEND", list: "Angular, React, RxJS, NgRx, SSR, PWAs, Svelte/SvelteKit" },
  { group: "BACKEND & APIS", list: "Node.js, NestJS, Spring Boot, REST, GraphQL, WebSockets, Microservices" },
  { group: "DATA", list: "PostgreSQL, MongoDB, Flyway" },
  { group: "CLOUD & OPS", list: "AWS, Docker, Kubernetes, OpenShift, GitHub Actions, GitLab CI, Datadog" },
  { group: "SECURITY", list: "JWT/OAuth2, RBAC, API key management, claims-scoped access" },
] as const;

export const coreStack = [
  "TypeScript",
  "Java · Spring Boot",
  "Angular",
  "Node.js · NestJS",
  "PostgreSQL",
  "Kubernetes · AWS",
] as const;

export const certifications = [
  { title: "Machine Learning", issuer: "Coursera" },
  { title: "Angular Advanced", issuer: "Pluralsight" },
] as const;

export const education = {
  degree: "BSc, Computer Science",
  school: "PMAS UAAR — UIIT",
  period: "2012 — 2016",
  note: "Extensive coursework in Python for machine learning and data analysis — NumPy, Pandas, Scikit-learn, and TensorFlow/Keras.",
} as const;
