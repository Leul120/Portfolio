export const RESUME_DATA = {
  name: "Leul Melkamu",
  title: "Software Architect",
  subtitle: "System Design • Distributed Platforms • Event-Driven Architecture",
  email: "leulmelkamu15@gmail.com",
  phone: "+251 969 089 004",
  location: "Addis Ababa, Ethiopia",
  linkedin: "https://linkedin.com/in/leul-melkamu-803352262",
  github: "https://github.com/Leul120",
  profile: `Software Architect with 4+ years designing production systems from first principles — defining service boundaries, choosing consistency models, and encoding business rules as structural constraints rather than application logic.

Recent work: a 10-service procurement SaaS where multi-tenancy is enforced cryptographically (JWT-embedded tenantId + Hibernate row-level filters, never a spoofable header), fault tolerance is built into the topology (Resilience4j circuit breakers per inter-service call, Kafka retry topics with dead-letter channels), and financial controls are structural (3-way invoice matching, immutable approval histories). The architecture answers "what happens when X fails" before a line of code is written.

Also designed an AI inference pipeline where the core insight was decoupling ingestion from AI processing via Kafka — so neither tier blocks the other and each scales independently. That kind of structural decision is what differentiates a system design from a list of features.`,

  stats: [
    { label: "Years Experience", value: "4+", icon: "Clock" },
    { label: "Projects Delivered", value: "15+", icon: "Folder" },
    { label: "Technologies", value: "20+", icon: "Code" },
    { label: "Systems Built", value: "10+", icon: "Server" },
  ],

  experience: [
    {
      company: "Addis Financials",
      role: "Backend Developer",
      period: "12/2024 – 08/2025",
      location: "Remote",
      points: [
        "Spearheaded the V2 Platform Evolution: Led the architectural migration of the core financial engine from a monolithic v1 to a high-availability Microservices architecture using Spring Boot, resulting in a 40% reduction in deployment lead time and vastly improved fault isolation.",
        "Database & Query Optimization: Overhauled the persistence layer by implementing PostgreSQL indexing strategies and a Redis-based read-aside caching pattern, which slashed primary database CPU load by 30% and achieved sub-100ms latency for critical financial reporting endpoints.",
        "Event-Driven Resilience: Engineered an asynchronous communication backbone using Apache Kafka, enabling real-time transaction synchronization across distributed services while ensuring strict eventual consistency for ledger updates.",
        "Secure API Orchestration: Designed and documented security-hardened RESTful APIs (OAuth2/JWT) using OpenAPI/Swagger, which streamlined 3rd-party integrations and reduced frontend-backend coordination overhead by two weeks per development cycle."
      ],
      tech: ["Spring Boot", "Apache Kafka", "PostgreSQL", "Redis", "OAuth2 / JWT", "Docker"]
    },
    {
      company: "360GROUND",
      role: "Backend Developer",
      period: "07/2024 – 11/2024",
      location: "Addis Ababa",
      points: [
        "Architected a Scalable Modular Monolith: Designed a robust backend using Express.js, enforcing strict separation of concerns and modularity to handle high-concurrency traffic while maintaining a clean, maintainable codebase.",
        "Concurrency & Data Integrity: Engineered high-throughput API endpoints utilizing Redis-based distributed locking and session management, successfully eliminating race conditions during peak transaction periods.",
        "Performance Engineering: Conducted deep-dive Node.js event-loop profiling and debugging to identify and resolve blocking operations, achieving a 99.9% uptime standard and optimizing resource utilization across the stack."
      ],
      tech: ["Node.js", "Express", "Redis", "PostgreSQL"]
    },
    {
      company: "Freelance Projects",
      role: "Fullstack Developer",
      period: "01/2024 – 11/2024",
      location: "Online",
      points: [
        "Architected bespoke end-to-end solutions for diverse clients, focusing on scalable API infrastructures and cloud-native deployments.",
        "Developed real-time data processing engines utilizing FastAPI and Node.js, tailored for high-performance requirements and low-latency data streaming.",
        "Containerized legacy infrastructures using Docker, simplifying environment parity and significantly reducing deployment issues.",
        "Consulted on Cloud Strategy: Advised clients on AWS resource optimization (IAM, VPC, S3) to balance high availability with cost-efficiency."
      ],
      tech: ["FastAPI", "Node.js", "Docker", "AWS", "PostgreSQL"]
    },
    {
      company: "LDDA Technologies",
      role: "Backend Engineer",
      period: "02/2023 – 11/2023",
      location: "Addis Ababa",
      points: [
        "Developed a secure EdTech backend using Node.js/Express, managing complex user hierarchies and role-based access control (RBAC).",
        "Engineered a custom video streaming module, implementing chunked uploads and optimized retrieval paths for low-bandwidth environments.",
        "Database Optimization: Refined PostgreSQL indexing and query execution plans, cutting data retrieval times for large-scale enrollment reports by 50%.",
        "Integrated secure payment gateways and analytics endpoints, providing real-time financial tracking for platform administrators."
      ],
      tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Firebase"]
    },
    {
      company: "Alter Digital Solutions",
      role: "Fullstack Engineer",
      period: "05/2022 – 12/2022",
      location: "Addis Ababa",
      points: [
        "Enterprise Fullstack Development: Engineered modular, end-to-end web applications leveraging Spring Boot for robust backend logic and React.js for dynamic, state-driven user interfaces.",
        "Performance Engineering: Identified and resolved critical performance bottlenecks by optimizing Hibernate/JPA queries and implementing efficient data-transfer objects (DTOs), reducing payload sizes and server-side processing time.",
        "Scalable API Design: Architected and documented RESTful APIs following industry best practices, ensuring high maintainability and seamless integration between the Java-based micro-modules and the frontend.",
        "System Reliability & Debugging: Enhanced application stability by implementing structured error-handling frameworks and conducting deep-dive debugging of production services to maintain high uptime."
      ],
      tech: ["Spring Boot", "React", "PostgreSQL", "Hibernate", "REST API"]
    },
    {
      company: "Efuye Gela",
      role: "Fullstack Developer",
      period: "02/2022 – 05/2022",
      location: "Addis Ababa",
      points: [
        "End-to-End Engine Development: Engineered the core logic for 'EGA', a high-performance e-commerce platform for game rentals, taking the product from initial architectural design to successful production launch.",
        "Full-Stack Optimization: Leveraged Next.js (SSR/ISR) and Tailwind CSS to build a lightning-fast, SEO-optimized frontend, achieving high Core Web Vitals scores and a seamless user experience.",
        "Type-Safe Data Modeling: Architected a scalable schema using Prisma ORM and MongoDB, ensuring data integrity across complex rental cycles, user inventories, and transaction logs.",
        "FinTech Integration: Developed a secure payment bridge for Telebirr, handling encrypted callbacks and transaction verification to facilitate local-compliant digital payments."
      ],
      tech: ["Next.js", "TypeScript", "MongoDB", "Prisma", "Tailwind CSS"]
    },
  ],

  skills: {
    "Systems & Architecture": ["Microservices", "Multi-Tenant SaaS", "Event-Driven Architecture", "Distributed Systems", "System Design", "API Design"],
    "Infrastructure & Platform": ["Docker", "Kubernetes", "Spring Cloud Gateway", "Resilience4j", "CI/CD", "AWS"],
    "Messaging & Streaming": ["Apache Kafka", "Event Sourcing", "CQRS", "RabbitMQ", "Stream Processing"],
    "Data & Storage": ["PostgreSQL", "MongoDB", "Redis", "Hibernate", "Database-per-Service", "Optimistic Locking"],
    "AI & Integration": ["FastAPI", "Gemini API", "GitHub API", "WebSocket", "GraphQL", "OAuth2 / JWT"],
    "Languages & Runtimes": ["Java", "Spring Boot", "Python", "Node.js", "TypeScript", "Go"]
  },

  education: {
    institution: "Addis Ababa University",
    degree: "Computer Science",
    location: "Addis Ababa"
  },

  projects: [
    {
      id: "procurepro",
      title: "ProcurePro",
      shortDesc: "Cloud-native multi-tenant procurement platform automating the full procurement lifecycle",
      fullDesc: `A production-grade SaaS procurement platform built on a 10-service microservices architecture. Automates the complete procurement lifecycle — from vendor onboarding and RFQ management through bid evaluation, purchase order approval, delivery tracking, automated 3-way invoice matching, and vendor performance scoring.

Serves multiple independent organisations from a single deployment with full row-level data isolation enforced via JWT-embedded tenant identity. Every procurement action is fully auditable, vendor selection is driven by weighted KPI scores, and financial controls are enforced at the system level via multi-level approval workflows.`,
      keyFeatures: [
        "Multi-tenant SaaS: row-level data isolation enforced cryptographically via JWT-embedded tenantId",
        "Full lifecycle: vendor onboarding → RFQ → bid evaluation → PO approval → delivery → invoice matching",
        "Automated 3-way invoice matching (price, quantity, delivery) with dispute resolution workflow",
        "Weighted vendor scoring engine tracking on-time delivery, quality, price competitiveness, and compliance",
        "Multi-level approval workflows for purchase requisitions and purchase orders with immutable audit history",
        "Event-driven architecture: 7 Kafka topics coordinate scoring updates, notifications, and workflow automation"
      ],
      architecture: [
        "10 independently deployable Spring Boot 3.2 microservices behind Spring Cloud Gateway (JWT validation, rate limiting)",
        "PostgreSQL database-per-service with Hibernate @Filter for row-level tenant scoping on every query",
        "Apache Kafka event bus with idempotent producers (acks=all) and @RetryableTopic consumers with exponential backoff",
        "Redis-per-service caching with tenant-prefixed keys; Redisson distributed locks preventing race conditions",
        "Resilience4j circuit breakers on all inter-service HTTP calls with graceful fallback responses",
        "Next.js 14 App Router frontend with Zustand auth store, Radix UI, React Hook Form, and Recharts dashboards"
      ],
      tech: ["Spring Boot", "Spring Cloud Gateway", "PostgreSQL", "Apache Kafka", "Redis", "Next.js", "Docker", "Kubernetes"],
      github: "https://github.com/Leul120/PMS",
      category: "Enterprise Platform",
      status: "Production",
      highlights: [
        { label: "Services", value: "10 Microservices" },
        { label: "Model", value: "Multi-Tenant SaaS" },
        { label: "Stack", value: "Spring + Next.js" }
      ]
    },
    {
      id: "aisynapse",
      title: "AI-Synapse",
      shortDesc: "AI-powered DevOps intelligence platform for automated issue detection and one-click PR fixes",
      fullDesc: `An AI-powered DevOps platform that continuously monitors real GitHub repositories, runtime logs, and service telemetry to detect issues through a configurable rules engine. When an issue is detected, the system assembles full multi-layer context (source files, configs, stack traces, dependencies, telemetry) and routes it to an AI service that generates actionable fix suggestions.

Developers review suggestions in a real-time dashboard and apply them as GitHub commits or pull requests with a single click. Built for horizontal scale via a Kafka-based async inference pipeline — AI processing never blocks ingestion threads.`,
      keyFeatures: [
        "Continuous GitHub repository monitoring with configurable threshold-based rules engine (error rates, latency spikes)",
        "Multi-layer context assembly: source files, configs, stack traces, dependencies, and telemetry per issue",
        "Kafka-based async AI inference — ingestion and AI processing fully decoupled for horizontal scale",
        "One-click fix application as GitHub commits or pull requests directly from the dashboard",
        "Real-time dashboard with live event streams, suggestion tracking, and PR status updates",
        "Full GitHub OAuth integration: repository browsing, branching, commit creation, and PR management"
      ],
      architecture: [
        "Spring Boot Core service handles event ingestion, rules evaluation, and multi-layer context assembly",
        "FastAPI AI service consumes Kafka topics for async inference with no blocking HTTP calls to Core",
        "Apache Kafka decouples ingestion from AI processing; Kafka partitioning enables parallel throughput scaling",
        "Next.js dashboard streams live events and surfaces AI suggestions with one-click PR application",
        "GitHub OAuth + REST API integration for repository access, branch management, and automated PR creation",
        "Stateless service design allows independent horizontal scaling of Core, AI, and Dashboard tiers"
      ],
      tech: ["Spring Boot", "FastAPI", "Apache Kafka", "Next.js", "GitHub API", "Docker", "Python"],
      github: "https://github.com/Leul120/ai-synapse",
      category: "DevOps Intelligence",
      status: "Production",
      highlights: [
        { label: "AI", value: "Async Inference" },
        { label: "Fix", value: "One-Click PR" },
        { label: "Stack", value: "Spring + FastAPI" }
      ]
    },
    {
      id: "safestatus",
      title: "SafeStatusNotifier",
      shortDesc: "Real-time status sharing app for families and close contacts",
      fullDesc: `A mobile application that lets users share their real-time status and location with family members and trusted contacts. Users can set custom status messages, share their live location during trips, and receive notifications when contacts update their status or arrive at destinations.

Built with privacy as a priority - users have full control over who can see their status and for how long. The app uses a modern backend with GraphQL APIs to efficiently fetch and update status data in real-time.`,
      keyFeatures: [
        "Real-time status updates shared with approved contacts only",
        "Live location sharing during trips with automatic arrival detection",
        "Custom status messages with emoji support and expiration times",
        "Push notifications for contact status changes and location arrivals",
        "Granular privacy controls - choose who sees what information",
        "Offline mode with sync when connection is restored"
      ],
      architecture: [
        "Spring Boot backend with GraphQL APIs for efficient data fetching",
        "JWT authentication with secure token storage on mobile devices",
        "PostgreSQL database for user data and status history",
        "FCM (Firebase Cloud Messaging) for push notifications",
        "Docker containerization for consistent deployments",
        "Mobile app built with Flutter for cross-platform support"
      ],
      tech: ["Spring Boot", "GraphQL", "PostgreSQL", "Flutter", "Firebase", "Docker"],
      github: "https://github.com/Leul120/notifier",
      category: "Mobile + Backend",
      status: "Production",
      highlights: [
        { label: "Platform", value: "Cross-Platform" },
        { label: "Focus", value: "Privacy-First" },
        { label: "Stack", value: "Spring + Flutter" }
      ]
    },
    {
      id: "interview",
      title: "Interview Trainer Platform",
      shortDesc: "AI-powered interview practice platform with video calls and feedback",
      fullDesc: `A web platform that helps job seekers practice technical and behavioral interviews through simulated sessions. Users can join video-based mock interviews with AI-generated questions tailored to their target role and experience level.

The platform supports multiple interview formats - solo practice with recorded responses, peer-to-peer mock interviews, and AI-evaluated sessions with detailed feedback on communication skills, technical accuracy, and answer structure. Includes a question bank organized by company, role, and difficulty level.`,
      keyFeatures: [
        "Live video interviews with built-in recording and playback",
        "AI-generated questions based on job role and company",
        "Automated feedback on answer quality using Gemini API",
        "Question bank with filtering by category, difficulty, and company",
        "Interview scheduling and calendar integration",
        "Performance tracking with progress analytics over time"
      ],
      architecture: [
        "Spring Boot monolith with clear module separation",
        "LiveKit for WebRTC video streaming and recording",
        "WebSocket connections for real-time session signaling",
        "PostgreSQL for user data, questions, and session history",
        "Redis for session state and temporary caching",
        "Gemini API integration for question generation and evaluation"
      ],
      tech: ["Spring Boot", "LiveKit", "WebSocket", "PostgreSQL", "Redis", "React"],
      github: "https://github.com/Leul120/interview-trainer",
      category: "EdTech Platform",
      status: "Production",
      highlights: [
        { label: "Type", value: "EdTech" },
        { label: "Feature", value: "AI Feedback" },
        { label: "Video", value: "WebRTC" }
      ]
    },
    {
      id: "transport",
      title: "Transport Allocation System",
      shortDesc: "Fleet management and vehicle dispatch platform for logistics",
      fullDesc: `A comprehensive fleet management system designed for logistics companies to track vehicles, optimize routes, and manage driver assignments. Dispatchers can view real-time vehicle locations on a map, assign trips based on proximity and availability, and track delivery progress.

The system includes driver mobile apps for receiving assignments, updating status, and communicating with dispatch. Features automated route optimization considering traffic, vehicle capacity, and delivery time windows. Managers can generate reports on fleet utilization, driver performance, and operational costs.`,
      keyFeatures: [
        "Real-time GPS tracking of fleet vehicles on interactive map",
        "Automated vehicle allocation based on proximity and availability",
        "Driver mobile app for trip assignments and status updates",
        "Route optimization considering traffic and delivery windows",
        "Delivery confirmation with photo capture and digital signature",
        "Analytics dashboard with fleet utilization and performance metrics"
      ],
      architecture: [
        "Spring Boot backend with WebSocket for real-time location updates",
        "MySQL database for trips, vehicles, drivers, and delivery records",
        "Redis for caching active trip data and driver locations",
        "Mobile apps built with Flutter for driver and dispatcher interfaces",
        "Google Maps API for routing and geolocation services",
        "Apache Kafka for processing location stream and event logging"
      ],
      tech: ["Spring Boot", "MySQL", "Redis", "Flutter", "WebSocket", "Kafka"],
      github: "https://github.com/Leul120/transport-allocation-system",
      category: "Fleet Management",
      status: "Production",
      highlights: [
        { label: "Type", value: "Logistics" },
        { label: "Feature", value: "Real-time Tracking" },
        { label: "Platform", value: "Web + Mobile" }
      ]
    },
    {
      id: "comparewise",
      title: "CompareWise",
      shortDesc: "Product comparison app with AI recommendations and price tracking",
      fullDesc: `A mobile application that helps users make informed purchasing decisions by comparing products side-by-side across multiple retailers. Users can create comparison lists, track price history, and receive AI-powered recommendations based on their preferences and budget.

The app aggregates product data from various sources and presents it in an easy-to-scan format with key specifications, user reviews, and price comparisons. Users can set price alerts and get notified when products drop to their target price.`,
      keyFeatures: [
        "Side-by-side product comparison with specification highlighting",
        "AI-powered product recommendations based on user preferences",
        "Price history charts and price drop alerts",
        "Saved comparison lists for future reference",
        "Product scanning via barcode for instant price lookup",
        "User reviews aggregation from multiple sources"
      ],
      architecture: [
        "Spring Boot REST API with PostgreSQL for product and user data",
        "Redis caching layer for frequently accessed product information",
        "Flutter mobile app with offline support for saved comparisons",
        "Background jobs for price tracking and alert notifications",
        "Gemini API for natural language product analysis",
        "Third-party retailer APIs for price aggregation"
      ],
      tech: ["Spring Boot", "PostgreSQL", "Redis", "Flutter", "Gemini API"],
      github: "https://github.com/Leul120/comparewise",
      category: "Consumer App",
      status: "Production",
      highlights: [
        { label: "Type", value: "Mobile App" },
        { label: "Feature", value: "AI Recommendations" },
        { label: "Utility", value: "Price Tracking" }
      ]
    },
    {
      id: "cosmetics",
      title: "Cosmetics E-commerce",
      shortDesc: "Online beauty store with product catalog, cart, and secure checkout",
      fullDesc: `A complete online cosmetics store with a modern shopping experience. Customers can browse products by category, view detailed product pages with images, add items to cart, and complete secure checkout with multiple payment options.

The platform includes an admin panel for managing inventory, processing orders, and tracking sales. Features customer reviews and ratings to help shoppers make informed decisions. Supports both guest checkout and registered user accounts with order history.`,
      keyFeatures: [
        "Product catalog with category browsing and search functionality",
        "Shopping cart with quantity management and price calculations",
        "Secure checkout flow with Chapa payment integration",
        "User accounts with order history and saved addresses",
        "Product reviews and star ratings from verified customers",
        "Admin dashboard for inventory, orders, and sales analytics",
        "Image gallery with Cloudinary for fast media delivery"
      ],
      architecture: [
        "React frontend with Ant Design components and TailwindCSS styling",
        "Node.js/Express REST API with modular route structure",
        "MongoDB with Mongoose for product, user, and order data",
        "JWT authentication with refresh tokens for session management",
        "Cloudinary integration for image uploads and transformations",
        "Chapa API for payment processing and transaction verification",
        "Socket.io for real-time order status notifications"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Socket.io", "JWT"],
      github: "https://github.com/Leul120/cosmetics-ecommerce",
      category: "E-commerce",
      status: "Production",
      highlights: [
        { label: "Type", value: "E-commerce" },
        { label: "Payments", value: "Chapa" },
        { label: "Admin", value: "Dashboard" }
      ]
    }
  ]
};

export type Project = typeof RESUME_DATA.projects[0];
export type Experience = typeof RESUME_DATA.experience[0];
