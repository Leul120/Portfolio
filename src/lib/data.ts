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
      role: "Senior System Engineer",
      period: "Dec 2024 – Aug 2025",
      location: "Addis Ababa, Ethiopia",
      points: [
        "Designed and implemented event-driven microservices architecture handling 10K+ TPS with 99.95% uptime SLA",
        "Built distributed transaction coordination using Saga pattern with Kafka for eventual consistency",
        "Implemented circuit breakers, bulkheads, and rate limiting for fault isolation and graceful degradation",
        "Deployed containerized infrastructure on AWS ECS with auto-scaling policies based on custom metrics",
        "Established observability stack with distributed tracing (Jaeger), structured logging, and Prometheus metrics",
        "Led capacity planning exercises and performance tuning, reducing p99 latency by 60%"
      ]
    },
    {
      company: "Freelance & Consulting",
      role: "System Architecture Consultant",
      period: "Jan 2024 – Nov 2024",
      location: "Remote",
      points: [
        "Architected distributed systems for 6+ clients across fintech, education, and logistics sectors",
        "Designed service mesh infrastructure with Eureka discovery, load balancing, and intelligent routing",
        "Implemented event sourcing and CQRS patterns for high-throughput data pipelines",
        "Established SRE practices including SLOs, error budgets, and incident response runbooks",
        "Conducted chaos engineering experiments to validate system resilience and failover mechanisms",
        "Advised on database sharding strategies and read replica topologies for horizontal scalability"
      ]
    },
    {
      company: "LDDA Technologies",
      role: "Infrastructure Engineer",
      period: "Feb 2023 – Nov 2024",
      location: "Addis Ababa, Ethiopia",
      points: [
        "Designed and operated video streaming infrastructure with CDN integration and adaptive bitrate delivery",
        "Implemented Redis clustering for distributed caching and session management at scale",
        "Built real-time analytics pipeline processing 1M+ events daily with Kafka and Flink",
        "Established CI/CD pipelines with blue-green deployment strategies and automated rollback mechanisms",
        "Implemented database replication topologies and automated failover procedures",
        "Conducted post-mortems and root cause analysis for production incidents, improving MTTR by 50%"
      ]
    },
    {
      company: "Prime Software Plc",
      role: "System Engineer",
      period: "May 2022 – Dec 2022",
      location: "Addis Ababa, Ethiopia",
      points: [
        "Architected enterprise service mesh with Spring Cloud Gateway and Netflix OSS stack",
        "Implemented OAuth2/OIDC identity federation with multi-tenant authorization",
        "Designed database partitioning strategy handling 500K+ records with sub-100ms query performance",
        "Built health check and readiness probe systems for Kubernetes orchestration",
        "Implemented distributed rate limiting using Redis Cell for API gateway protection"
      ]
    },
    {
      company: "Efuye Gela",
      role: "Platform Engineer & Tech Lead",
      period: "Feb 2022 – May 2022",
      location: "Addis Ababa, Ethiopia",
      points: [
        "Architected e-commerce platform handling 1000+ concurrent sessions with auto-scaling",
        "Designed eventual consistency model for inventory management across distributed nodes",
        "Implemented payment reconciliation system with idempotency guarantees and retry logic",
        "Established monitoring dashboards and alerting for critical business metrics",
        "Led platform reliability initiatives including load testing and stress testing protocols"
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
