export const RESUME_DATA = {
  name: "Leul Melkamu Bezabih",
  title: "Senior System Engineer",
  subtitle: "Distributed Systems • Infrastructure Architecture • Platform Engineering",
  email: "leulmelkamu15@gmail.com",
  phone: "+251 969 089 004",
  location: "Addis Ababa, Ethiopia",
  linkedin: "https://linkedin.com/in/leul-melkamu-803352262",
  github: "https://github.com/Leul120",
  profile: `System Engineer with 4+ years designing, building, and operating large-scale distributed infrastructure. Specialized in microservices architecture, service mesh patterns, and high-availability systems. Expertise spans the full stack from kernel-level understanding to cloud-native orchestration.

Core competencies include distributed systems design, reliability engineering (SRE practices), infrastructure as code, observability platforms, and capacity planning. Proven ability to architect systems handling 10K+ TPS with 99.9% availability SLAs. Deep understanding of consensus algorithms, CAP theorem trade-offs, and eventual consistency patterns.

Experienced in building self-healing systems with automated failover, circuit breakers, and graceful degradation. Advocate for chaos engineering principles and production readiness reviews.`,
  
  stats: [
    { label: "Years Experience", value: "4+", icon: "Clock" },
    { label: "Projects Delivered", value: "15+", icon: "Folder" },
    { label: "Technologies", value: "20+", icon: "Code" },
    { label: "Systems Built", value: "8", icon: "Server" },
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
  ],

  skills: {
    "Systems & Architecture": ["Distributed Systems", "Microservices", "Event-Driven Architecture", "SRE Practices", "System Design"],
    "Infrastructure & Platform": ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Service Mesh"],
    "Messaging & Streaming": ["Apache Kafka", "RabbitMQ", "Event Sourcing", "CQRS", "Stream Processing"],
    "Data & Storage": ["PostgreSQL", "MongoDB", "Redis Cluster", "Elasticsearch", "Database Sharding", "Replication"],
    "Observability": ["Prometheus", "Grafana", "Distributed Tracing", "Structured Logging", "APM"],
    "Languages & Runtimes": ["Java", "Python", "Go", "Node.js", "Spring Boot", "FastAPI"]
  },

  education: {
    institution: "Addis Ababa University",
    degree: "Computer Science",
    location: "Addis Ababa"
  },

  projects: [
    {
      id: "safestatus",
      title: "SafeStatusNotifier",
      shortDesc: "Distributed real-time telemetry platform with GraphQL federation",
      fullDesc: `A distributed device telemetry and presence platform designed for real-time status synchronization across mobile and backend nodes. Implements eventual consistency patterns for device state replication with conflict-free resolution.

The system architecture emphasizes data sovereignty and privacy-through-design, implementing attribute-based access control (ABAC) for fine-grained permission management. All telemetry data flows through authenticated channels with end-to-end encryption guarantees.`,
      keyFeatures: [
        "GraphQL federated API gateway with schema stitching for service composition",
        "Real-time presence detection using heartbeat mechanisms and timeout-based failure detection",
        "ABAC authorization model with relationship-based access control (ReBAC)",
        "Event-driven notification pipeline with delivery guarantees and retry logic",
        "PostgreSQL with row-level security policies for multi-tenant data isolation",
        "Containerized deployment with health checks and graceful shutdown handling"
      ],
      architecture: [
        "Domain-driven design with bounded contexts for user, device, and access management",
        "GraphQL schema federation for cross-service data aggregation",
        "JWT-based authentication with RS256 asymmetric signing",
        "PostgreSQL 14+ with read replicas and connection pooling (HikariCP)",
        "Multi-stage Docker builds with distroless base images",
        "Infrastructure as Code with environment-specific configuration management"
      ],
      tech: ["Spring Boot", "GraphQL", "PostgreSQL", "JWT", "Docker", "Java 21"],
      github: "https://github.com/Leul120/notifier",
      category: "Distributed Systems",
      status: "Production",
      highlights: [
        { label: "API Pattern", value: "GraphQL Federation" },
        { label: "Auth Model", value: "ABAC / ReBAC" },
        { label: "Consistency", value: "Eventual" }
      ]
    },
    {
      id: "interview",
      title: "Interview Trainer Platform",
      shortDesc: "Multi-tenant video streaming platform with service mesh architecture",
      fullDesc: `A distributed video communication platform built on service mesh principles, handling real-time media streaming, AI-driven analysis, and multi-party session coordination. The system implements backpressure handling and circuit breakers for resilient third-party integrations.

Architected for horizontal scalability with event sourcing for session state management and CQRS for read-heavy analytics workloads. Implements sophisticated load balancing strategies for geographic distribution of media servers.`,
      keyFeatures: [
        "Service mesh with Eureka discovery, client-side load balancing, and intelligent routing",
        "Event-sourced session management with Apache Kafka for state replication",
        "CQRS pattern separating command and query responsibilities for analytics",
        "WebSocket gateway with connection pooling and heartbeat-based health checks",
        "AI pipeline integration with Gemini for asynchronous question generation and scoring",
        "Multi-tenant data isolation with schema-per-tenant database strategy"
      ],
      architecture: [
        "Spring Cloud Gateway with rate limiting and request/response transformation",
        "Netflix OSS stack: Eureka (service discovery), Ribbon (load balancing), Hystrix (circuit breakers)",
        "Kafka cluster with topic partitioning for horizontal scaling of event consumers",
        "R2DBC for non-blocking database access with backpressure handling",
        "Redis Cluster for distributed session state and real-time presence",
        "LiveKit SFU for selective forwarding unit-based video routing"
      ],
      tech: ["Spring Boot", "Spring Cloud", "Kafka", "Redis Cluster", "WebSocket", "LiveKit", "R2DBC"],
      github: "https://github.com/Leul120/interview-trainer",
      category: "Service Mesh Platform",
      status: "Production",
      highlights: [
        { label: "Architecture", value: "Service Mesh" },
        { label: "Pattern", value: "Event Sourcing + CQRS" },
        { label: "Scaling", value: "Horizontal" }
      ]
    },
    {
      id: "comparewise",
      title: "CompareWise",
      shortDesc: "Multi-model data platform with AI-driven ranking engine",
      fullDesc: `A polyglot persistence platform implementing multiple database models for optimal data representation: relational for structured data, document for flexible schemas, and cache for real-time rankings. The system uses distributed transaction patterns for cross-model consistency.

Implements sophisticated caching strategies including read-through, write-behind, and cache-aside patterns. AI integration follows the ambassador pattern for resilient external service communication with fallback mechanisms.`,
      keyFeatures: [
        "Polyglot persistence with PostgreSQL (relational) and Redis (cache/graph)",
        "Distributed caching with cache warming, eviction policies, and consistency patterns",
        "AI ambassador pattern with circuit breakers for Gemini API integration",
        "Offline-first synchronization using CRDTs for conflict resolution",
        "Weighted scoring engine with pluggable algorithm selection (AHP, TOPSIS)",
        "Multi-tenant resource isolation with quota management and rate limiting"
      ],
      architecture: [
        "Layered architecture with domain, application, and infrastructure separation",
        "Spring Data JPA with Hibernate second-level caching (Ehcache)",
        "Redis data structures (Sorted Sets for rankings, Hashes for objects)",
        "JWT token rotation with refresh token binding and device fingerprinting",
        "CDC (Change Data Capture) pattern for cache invalidation",
        "Blue-green deployment with database migration rollback strategies"
      ],
      tech: ["Spring Boot", "PostgreSQL", "Redis", "Flutter", "CRDTs", "CDC"],
      github: "https://github.com/Leul120/comparewise",
      category: "Polyglot Platform",
      status: "Production",
      highlights: [
        { label: "Pattern", value: "Polyglot Persistence" },
        { label: "Sync", value: "CRDT-based" },
        { label: "Caching", value: "Multi-tier" }
      ]
    },
    {
      id: "transport",
      title: "Transport Allocation System",
      shortDesc: "Edge-compute IoT platform with stream processing and consensus",
      fullDesc: `An intelligent transport orchestration system implementing edge computing patterns for real-time computer vision processing. The architecture follows the Lambda pattern with separate speed and batch layers for different processing requirements.

Implements distributed consensus for vehicle allocation decisions using weighted scoring algorithms. The system handles network partitions gracefully with CRDT-based state synchronization and automatic conflict resolution when connectivity restores.`,
      keyFeatures: [
        "Edge computing architecture with frame preprocessing at camera nodes",
        "Lambda architecture with Kafka Streams (speed layer) and batch analytics",
        "Distributed consensus algorithm for vehicle allocation with conflict resolution",
        "CRDT-based state synchronization for partition tolerance",
        "WebSocket clustering with Redis pub/sub for horizontal scaling of connections",
        "Circuit breakers and bulkheads for AWS Rekognition API protection"
      ],
      architecture: [
        "Spring Boot with WebFlux for non-blocking I/O handling of camera streams",
        "JavaCV with FFmpeg for hardware-accelerated frame extraction",
        "Kafka Connect for integrating camera feeds with processing pipeline",
        "MySQL with partitioning for time-series telemetry data",
        "Saga pattern for distributed allocation transaction coordination",
        "AWS IoT Core for device management and shadow state synchronization"
      ],
      tech: ["Spring Boot", "Kafka Streams", "AWS Rekognition", "WebFlux", "CRDTs", "Saga Pattern"],
      github: "https://github.com/Leul120/transport-allocation-system",
      category: "Edge Computing Platform",
      status: "Production",
      highlights: [
        { label: "Pattern", value: "Lambda Architecture" },
        { label: "Consensus", value: "Weighted Scoring" },
        { label: "Resilience", value: "CRDT + Saga" }
      ]
    },
    {
      id: "cosmetics",
      title: "Cosmetics E-commerce",
      shortDesc: "Full-stack e-commerce platform with real-time payments and media management",
      fullDesc: `A production-ready cosmetics e-commerce platform built with the MERN stack. Features a complete shopping experience from product discovery to payment processing.

The architecture separates client and server concerns with a React SPA frontend and RESTful Express API backend. Implements secure JWT-based authentication alongside Google OAuth for flexible user onboarding. Payment processing integrated with Chapa for regional transaction support.`,
      keyFeatures: [
        "Product catalog with multi-category filtering and search",
        "Cloudinary-integrated media management with Multer uploads",
        "JWT + Google OAuth dual authentication system",
        "Chapa payment integration with server-side transaction handling",
        "Real-time order updates via WebSocket (port 9000)",
        "Role-based admin dashboard for inventory and order management",
        "User review and rating system for products"
      ],
      architecture: [
        "React SPA with Ant Design component library and TailwindCSS utilities",
        "Express.js REST API with Mongoose ODM for MongoDB",
        "JWT middleware for protected route authorization",
        "Cloudinary SDK for image upload and transformation pipeline",
        "Chapa API integration for payment initialization and verification",
        "Socket.io for real-time order status broadcasting",
        "CORS configured for cross-origin development environment"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Socket.io", "JWT"],
      github: "https://github.com/Leul120/cosmetics-ecommerce",
      category: "Full-Stack E-commerce",
      status: "Production",
      highlights: [
        { label: "Stack", value: "MERN" },
        { label: "Payments", value: "Chapa" },
        { label: "Media", value: "Cloudinary" }
      ]
    }
  ]
};

export type Project = typeof RESUME_DATA.projects[0];
export type Experience = typeof RESUME_DATA.experience[0];
