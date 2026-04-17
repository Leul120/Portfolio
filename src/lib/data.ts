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
