export const jjtCaseStudy = {
  title: "SponsorOne — Child Education Sponsorship Platform for JJT",
  description:
    "How a solo-built, append-only ledger architecture replaced spreadsheets and paper receipts for an education sponsorship NGO — and how it got deployed to AWS.",
  liveUrl: "https://sponsorone.app",
  liveLabel: "sponsorone.app",
  period: "2024 — Present",
  role: "Full-Stack Engineer · Sole Builder — requirements to production",

  problem: {
    eyebrow: "THE PROBLEM",
    title: "Sponsorship money was moving with no audit trail.",
    body: [
      "Education NGOs typically run child sponsorship programs on spreadsheets, WhatsApp threads, and paper receipts. Sponsors have no visibility into where their money actually goes, reconciliation is done by hand at month end, and there's no defensible record to show a board, a donor, or a regulator when they ask a hard question.",
      "JJT needed to replace that entirely — for payments, donations, and Zakat, which carries its own compliance obligations under Islamic finance rules. The organization needed every transaction traceable, every sponsor able to see their own impact, and every action in the system auditable after the fact.",
    ],
  },

  approach: {
    eyebrow: "ARCHITECTURE & APPROACH",
    title: "Design the invariants first, write code second.",
    intro:
      "Before a line of code was written, the domain model, database architecture, user roles and permissions, and financial tracking rules were designed and documented in a BRD and a set of architecture diagrams. That sequencing mattered: for a system handling other people's money, the rules that can never be broken have to be decided before the framework that will enforce them.",
    pillars: [
      {
        title: "Clean Architecture",
        body: "The domain layer is framework-free — no JPA annotations, no Spring types, no HTTP concerns inside business logic. Persistence and web layers are adapters around the domain, not the other way around. That's what let the same core survive decisions about hosting, database tooling, and deployment target without a rewrite.",
      },
      {
        title: "Append-only financial ledger",
        body: "Every payment, donation, and Zakat transaction is written once and never mutated. Immutability is enforced twice — once in the domain model, which exposes no update or delete path for ledger entries, and again at the PostgreSQL level, so even a direct database session can't quietly edit history.",
      },
      {
        title: "Security by design",
        body: "Access tokens live in memory only, never in local storage; refresh tokens rotate and are stored hashed. Every query is claims-scoped, so a sponsor's session simply cannot resolve another sponsor's or organization's data — parameter manipulation isn't a risk to patch later, because there's no path to the data in the first place.",
      },
      {
        title: "Multi-tenant & compliance-ready",
        body: "Organization scoping is enforced on every table, not bolted on with a filter in the service layer. Combined with a system-wide, immutable audit trail, the platform is built to support multiple NGOs on shared infrastructure without any risk of cross-tenant data leakage.",
      },
    ],
  },

  system: {
    eyebrow: "SYSTEM LAYOUT",
    title: "Three surfaces, one ledger underneath.",
    modules: [
      {
        label: "PUBLIC SITE",
        title: "5-step sponsorship wizard",
        body: "A donor can commit to sponsoring a child without creating an account first — reducing the drop-off that comes from forcing signup before someone has decided to give.",
      },
      {
        label: "ADMIN CONSOLE",
        title: "18 operational modules",
        body: "Payments, donations, Zakat, funds, and the audit log all live behind role-gated screens, so NGO staff can run day-to-day operations without ever touching the database directly.",
      },
      {
        label: "SPONSOR PORTAL",
        title: "Claims-scoped ledger view",
        body: "Every sponsor sees a progress view and transaction history scoped to exactly their own contributions — the same claims-based access control that protects the backend also drives what's rendered in the UI.",
      },
    ],
  },

  challenges: {
    eyebrow: "CHALLENGES",
    title: "The hard decisions, and why they went that way.",
    items: [
      {
        title: "Making \"immutable\" actually mean immutable",
        problem:
          "An append-only ledger is easy to describe and easy to accidentally violate — a stray UPDATE in a migration, an admin \"fix\" script, or a well-meaning bug fix can quietly break the guarantee the whole audit story depends on.",
        solution:
          "The domain model exposes no mutation path for a posted ledger entry — corrections are new, linked, offsetting entries, never edits. That rule is mirrored at the PostgreSQL level so the guarantee holds even outside the application layer.",
      },
      {
        title: "Claims-scoped access without a performance tax",
        problem:
          "Scoping every query by organization and by sponsor is the right security model, but naive implementations turn into a filter bolted onto every service method — easy to forget on a new endpoint, and easy to get subtly wrong.",
        solution:
          "Scoping lives at the data-access layer, derived from the authenticated principal's claims, so every new query inherits it by construction rather than by convention. A missing filter isn't a possible bug class here.",
      },
      {
        title: "Session security without breaking UX",
        problem:
          "Memory-only access tokens are the right call for exposure risk, but they raise the obvious question of what happens on a page refresh, and rotating refresh tokens raise the question of what happens if a rotation request is replayed or lost mid-flight.",
        solution:
          "Rotating, hashed refresh tokens re-issue a short-lived access token silently on load, and rotation is designed to be safely retryable, so a dropped request degrades to a re-auth prompt instead of a stuck session.",
      },
      {
        title: "Shipping a one-person production platform to AWS",
        problem:
          "With no separate ops team, deployment, migrations, and rollback all had to be safe enough for one engineer to run confidently — including on a database holding real financial records.",
        solution:
          "Docker containerization plus ECS/Fargate keeps the runtime environment reproducible and the deploy target stateless; Flyway-versioned migrations make schema changes forward-only and reviewable; and integration tests run against a real PostgreSQL instance via Testcontainers, so \"the tests pass\" means the database behavior was actually exercised, not mocked.",
      },
    ],
  },

  deployment: {
    eyebrow: "DEPLOYMENT",
    title: "Built on AWS, moved to Heroku when the bill stopped making sense.",
    body: "The first production deployment was planned and executed end to end on AWS — Spring Boot and Angular containerized with Docker, running on ECS/Fargate so there was no server fleet to patch, with a CI/CD pipeline running the Testcontainers-backed integration suite before anything reached production. Flyway owns every schema change, so migrations are versioned, ordered and reviewable rather than run ad hoc against a live database.",
    body2: "It now runs on Heroku. The AWS setup was the better platform and the wrong economics for a system funded by an NGO — the monthly bill was buying resilience the current load didn't need. Because the domain layer is framework-free and the services were already containerized, moving hosts was a deployment change rather than a rewrite, which is the entire argument for keeping those boundaries clean. I'd make the same call again; I'd just run the cost numbers before picking the more interesting infrastructure rather than after.",
  },

  roadmap: {
    eyebrow: "WHAT'S NEXT",
    title: "Where the platform goes from here.",
    items: [
      "Extending Zakat and regulatory reporting to cover additional jurisdictions as JJT's donor base grows.",
      "A sponsor-facing mobile app on top of the existing claims-scoped API, reusing the domain layer as-is.",
      "Additional payment gateway integrations to widen how donors can give.",
      "Exportable audit packages formatted for institutional donor and board review.",
    ],
  },
} as const;
