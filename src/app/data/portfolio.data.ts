import { PortfolioData } from './portfolio.models';

export const PORTFOLIO: PortfolioData = {
  profile: {
    name: 'Sadeep Rathnayaka',
    titles: [
      'Full Stack Software Engineer',
      'Passionate Backend Developer',
      'Continuous Learner',
    ],
    bio:
      'A First-Class Honours engineering graduate from the University of Moratuwa, Sri Lanka, and a Full-Stack Engineer with a strong passion for backend systems and database engineering. Combines outstanding academic performance (4x Dean’s List, top 0.8% nationally) with specialized international research in robotics and enterprise-level backend software engineering experience. A proactive, rapid learner dedicated to building clean, maintainable codebases, and solving high-impact technical problems.',
    image: 'assets/images/Profile Image HD.png',
    cvUrl: 'assets/cv/Sadeep_Rathnayaka_CV.pdf',
    socialLinks: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sadeep-rathnayaka/',
        icon: 'bx bxl-linkedin',
        variant: 'linkedin',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/SadeepRathnayaka',
        icon: 'bx bxl-github',
        variant: 'github',
      },
      {
        label: 'Email',
        url: 'mailto:sadeepm20@gmail.com',
        icon: 'bx bx-envelope',
        variant: 'email',
      },
      {
        label: 'CV',
        url: 'assets/cv/Sadeep_Rathnayaka_CV.pdf',
        icon: 'bx bx-file',
        variant: 'cv',
      },
    ],
  },
  navItems: [
    { label: 'Home', fragment: 'home' },
    { label: 'Timeline', fragment: 'timeline' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Contact', fragment: 'contact' },
  ],
  timeline: [
    {
      date: '4 May 2026 – Current',
      title: 'Software Engineer (Full Stack)',
      subtitle: '<strong>DirectFN Pvt Ltd.</strong> — Colombo, Sri Lanka',
      highlights: [
        {
          icon: 'bx bx-code-alt',
          text: 'Backend development: built stable, maintainable business logic in <strong>Java</strong>.',
        },
        {
          icon: 'bx bx-data',
          text: 'Database management & optimization: managed schemas in <strong>Oracle Database</strong> and optimized <strong>SQL</strong> for performance.',
        },
        {
          icon: 'bx bxl-angular',
          text: 'Frontend integration: built UIs with <strong>Angular</strong> ensuring clean API-to-UI data flow.',
        },
        {
          icon: 'bx bx-bug',
          text: 'Problem analysis & debugging: investigated production issues and removed bottlenecks across frontend and backend.',
        },
        {
          icon: 'bx bx-layer',
          text: 'Full-stack delivery: owned features end-to-end (DB design → API creation → frontend integration).',
        },
      ],
    },
    {
      date: '1 Jul 2025 – 30 Apr 2026',
      title: 'Software Engineer',
      subtitle: '<strong>IFS R&D International Pvt Ltd.</strong> — Colombo, Sri Lanka',
      highlights: [
        {
          icon: 'bx bx-git-branch',
          text: 'Architectural refactoring: migrated legacy monolithic <strong>C#</strong> codebases into loosely-coupled extensions via interface-driven design.',
        },
        {
          icon: 'bx bx-search-alt',
          text: 'Root Cause Analysis (RCA): identified core vulnerabilities behind production incidents and implemented permanent fixes.',
        },
        {
          icon: 'bx bx-bot',
          text: 'Workflow automation: built an automation tool using <strong>n8n</strong> + <strong>vector databases</strong> to generate unit tests for migrated codebases.',
        },
        {
          icon: 'bx bxl-git',
          text: 'Version control: followed Git best practices for clean history and reliable branch management.',
        },
      ],
    },
    {
      date: 'June 2021 – June 2025',
      title: 'Graduated from University of Moratuwa',
      subtitle: 'B.Sc. (Hons) Electronic and Telecommunication Engineering',
      highlights: [
        {
          icon: 'bx bx-award',
          text: 'Graduated with <strong>First-Class Honours</strong> (GPA: <strong>3.84/4.00</strong>) and <strong>4× Dean’s List</strong> distinctions (Semesters 1, 4, 6, 8).',
        },
        {
          icon: 'bx bx-chip',
          text: 'Completed studies in Electronics and Telecommunication Engineering, specializing in <strong>Software Development</strong> and <strong>Robotics</strong>.',
        },
        {
          icon: 'bx bx-book-open',
          text: 'Mastered <strong>OOP</strong>, <strong>Data Structures & Algorithms (DSA)</strong>, backend development, and <strong>Relational Databases</strong>.',
        },
        {
          icon: 'bx bx-brain',
          text: 'Strong analytical problem-solving and professional English communication within agile, multi-disciplinary teams.',
        },
      ],
    },
    {
      date: '27 Nov 2023 – 27 May 2024',
      title: 'Robotics Research Intern',
      subtitle: '<strong>Singapore University of Technology and Design</strong> — Singapore',
      highlights: [
        {
          icon: 'bx bx-cog',
          text: 'Robotic control development: designed and implemented a robotic control system for an autonomous hospital cleaning robot.',
        },
        {
          icon: 'bx bx-network-chart',
          text: 'Framework implementation: used <strong>ROS</strong> to integrate hardware, manage sensor data, and handle real-time controls.',
        },
        {
          icon: 'bx bx-math',
          text: 'Algorithmic problem-solving: formulated and tested motion control algorithms for safe navigation in complex environments.',
        },
        {
          icon: 'bx bx-group',
          text: 'Research collaboration: worked with international researchers bridging theory and real-world automation.',
        },
      ],
      link: {
        url: 'https://www.linkedin.com/posts/sadeep-rathnayaka_internship-robotics-simulation-activity-7220534427246813184-I9_3',
        label: 'Verify on LinkedIn',
      },
    },
    {
      date: '2020',
      title: 'Selected for University of Moratuwa',
      description: 'Based on outstanding A-Level results',
    },
    {
      date: '2019',
      title: 'Nalanda College, Colombo',
      subtitle: 'G.C.E Advanced Level Examination (Physical Science Stream)',
      highlights: [
        {
          icon: 'bx bx-line-chart',
          text: 'Secured a Z-Score of <strong>2.4172 / 3.00</strong> in the Physical Science stream (Combined Mathematics, Physics, Chemistry), earning direct merit-based admission to the country’s premier engineering university.',
        },
        {
          icon: 'bx bx-medal',
          text: 'Achieved an Island Rank of <strong>246</strong> out of ~<strong>30,000</strong> students (Top <strong>0.8%</strong>) and a District Rank of <strong>80</strong> in Colombo District out of ~<strong>4,000</strong> students (Top <strong>2.0%</strong>).',
        },
      ],
    },
  ],
  projects: [
    {
      slug: 'distributed-banking-platform',
      category: 'software',
      badge: 'current',
      title: 'Distributed Banking Platform (Microservices Architecture)',
      summary:
        'Ongoing microservices banking backend: user-service exposes REST APIs for registration and profile management; auth-service and account-service react to Kafka events with Protocol Buffer payloads. Each service owns a PostgreSQL database and runs in Docker — with API gateway, gRPC, and full Saga compensation planned next.',
      image: 'assets/images/BankingSystem.jpg',
      tech: [
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Kafka',
        'Protocol Buffers',
        'REST APIs',
        'Docker',
        'Microservices',
      ],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Banking-System',
          type: 'github',
        },
        {
          label: 'More Info',
          url: '/projects/distributed-banking-platform',
          type: 'details',
        },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'A distributed banking platform built as independent Spring Boot microservices, each with its own PostgreSQL database. User registration is the entry point: the user-service persists profile data, then publishes typed events so auth credentials and a savings account are created asynchronously in separate services. The project is actively in development — core registration and event flows are in place; API gateway, login, transfers, and compensating Saga steps are on the roadmap.',
        },
        {
          title: 'Microservices Architecture',
          cards: [
            {
              title: 'User Service (port 4000)',
              items: [
                'REST API: POST/GET/PUT/DELETE /users',
                'Jakarta Bean Validation on registration payloads',
                'User profile CRUD with unique email constraint',
                'Generates savings account numbers (BNK-SAV-*)',
                'Publishes userRegistration and accountCreation Kafka events',
              ],
            },
            {
              title: 'Auth Service (port 4001)',
              items: [
                'Consumes userRegistration events from Kafka',
                'Creates AuthUser records with BCrypt-hashed passwords',
                'Dedicated PostgreSQL database for credentials',
                'Spring Security PasswordEncoder configuration',
              ],
            },
            {
              title: 'Account Service (port 4002)',
              items: [
                'Consumes accountCreation events from Kafka',
                'Persists Account entities with balance and account number',
                'Dedicated PostgreSQL database per service boundary',
                'Links accounts to user IDs from registration flow',
              ],
            },
          ],
        },
        {
          title: 'Event-Driven Registration Flow',
          bullets: [
            'Client POST /users with profile, password, and initialBalance (see api-requests samples).',
            'User-service saves the user, then serializes UserEvent and AccountCreationEvent with Protocol Buffers.',
            'Kafka topic userRegistration → auth-service creates hashed credentials asynchronously.',
            'Kafka topic accountCreation → account-service opens the savings account with the initial balance.',
            'Choreography-style distributed workflow across three databases without a shared monolithic schema.',
          ],
        },
        {
          title: 'Infrastructure & Tooling',
          bullets: [
            'Java 21 + Spring Boot 4 with Spring Data JPA and Spring Kafka',
            'Protocol Buffer schemas (kafka_event.proto) compiled via protobuf-maven-plugin',
            'Per-service Dockerfiles and IntelliJ run configs for Postgres 16 + Kafka',
            'HTTP client samples in api-requests/ for local integration testing',
            'Global exception handling and custom exceptions (e.g. EmailAlreadyExists, UserNotFound)',
          ],
        },
        {
          title: 'In Progress & Roadmap',
          bullets: [
            'API Gateway as a single secured entry point',
            'gRPC for synchronous inter-service calls (Protobuf schemas already in use for Kafka today)',
            'Full Saga pattern with compensation / rollback on partial failures',
            'Login, JWT issuance, and account operations (transfers, balance inquiry)',
            'Docker Compose orchestration for one-command local stacks',
          ],
        },
      ],
    },
    {
      slug: 'pos-system',
      category: 'software',
      title: 'Point of Sales (POS) System',
      summary:
        'Scalable POS backend with Spring Boot microservices, JWT/RBAC at the API Gateway, Eureka service discovery, and WebClient inter-service communication.',
      image: 'assets/images/POS System.jpg',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Microservices'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Point-of-Sales-System-BackEnd',
          type: 'github',
        },
        { label: 'More Info', url: '/projects/pos-system', type: 'details' },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'A comprehensive Point of Sale system built with Spring Boot microservices, JWT authentication, and role-based access control. Multiple independent services communicate via WebClient with centralized security through an API Gateway.',
        },
        {
          title: 'Microservices Architecture',
          cards: [
            {
              title: 'User Service',
              items: [
                'JWT Authentication & RBAC',
                'User registration (Admin/Cashier/Manager)',
                'OTP-based password reset',
              ],
            },
            {
              title: 'Customer Service',
              items: ['Customer CRUD', 'Loyalty points management'],
            },
            {
              title: 'Inventory Service',
              items: [
                'Inventory management',
                'Brand categorization',
                'Custom search with pagination',
              ],
            },
            {
              title: 'Order Service',
              items: [
                'Order processing',
                'Inter-service communication',
                'Transaction management',
              ],
            },
          ],
        },
        {
          title: 'Core Technical Implementation',
          bullets: [
            'Spring Boot microservices with independent databases',
            'JWT authentication with RBAC',
            'Eureka service discovery',
            'API Gateway as single secured entry point',
            'WebClient for synchronous inter-service calls',
            'MySQL with optimized queries',
          ],
        },
        {
          title: 'Challenges & Solutions',
          bullets: [
            'Distributed transaction management using Saga pattern',
            'Service discovery with Eureka Server',
            'Optimized database queries for high-volume inventory',
          ],
        },
      ],
    },
    {
      slug: 'inventory-microservices',
      category: 'software',
      title: 'Inventory Manager (Microservices)',
      summary:
        'Spring Boot microservices for inventory management with JWT auth, Eureka discovery, API Gateway routing, and paginated search across normalized MySQL schemas.',
      image: 'assets/images/Inventory Management_Resize.jpg',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Inventory-Manager-II-BackEnd',
          type: 'github',
        },
        {
          label: 'More Info',
          url: '/projects/inventory-microservices',
          type: 'details',
        },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'Inventory management system using Spring Boot microservices with JWT authentication. Independent services communicate through an API Gateway with centralized security and Eureka-based discovery.',
        },
        {
          title: 'Architecture',
          cards: [
            {
              title: 'User Service',
              items: ['JWT auth', 'User management', 'OTP password reset'],
            },
            {
              title: 'Inventory Service',
              items: ['CRUD operations', 'Paginated search', 'Brand & category management'],
            },
            {
              title: 'API Gateway',
              items: ['Single entry point', 'Request routing', 'JWT validation'],
            },
            {
              title: 'Discovery Service',
              items: ['Eureka Server', 'Service registration', 'Load balancing'],
            },
          ],
        },
      ],
    },
    {
      slug: 'inventory-monolithic',
      category: 'software',
      title: 'Inventory Manager (Monolithic)',
      summary:
        'Monolithic Spring Boot backend with relational MySQL design, CRUD APIs, and optimized custom queries for inventory search with pagination.',
      image: 'assets/images/Inventory Management_Resize.jpg',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Inventory-Manager-BackEnd',
          type: 'github',
        },
        {
          label: 'More Info',
          url: '/projects/inventory-monolithic',
          type: 'details',
        },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'Scalable inventory management backend using Java and Spring Boot in a monolithic architecture, with interconnected MySQL tables and paginated inventory search.',
        },
      ],
    },
    {
      slug: 'echo-ex-mini-game',
      category: 'software',
      title: 'Echo Ex Mini Game Backend',
      summary:
        'Spring Boot mini-game platform backend with JWT authentication and relational MySQL schema for players, inventory, and game state.',
      image: 'assets/images/mini-game.png',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/EcoEx-Mini-Game-BackEnd',
          type: 'github',
        },
      ],
    },
    {
      slug: 'gamehub',
      category: 'software',
      title: 'GameHub',
      summary:
        'React + TypeScript game discovery app integrating the RAWG API with dynamic filtering, hooks-based state, and responsive modular CSS.',
      image: 'assets/images/GameHub.png',
      tech: ['React', 'TypeScript', 'HTML', 'CSS'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/game-hub',
          type: 'github',
        },
        {
          label: 'Live Demo',
          url: 'https://game-hub-two-inky.vercel.app/',
          type: 'demo',
        },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'Responsive game discovery platform using React and TypeScript with RAWG API integration, dynamic filters, and cross-device UI components.',
        },
      ],
    },
    {
      slug: 'lseg-flower-exchange',
      category: 'software',
      title: 'Flower Exchange Platform (LSEG)',
      summary:
        'C++ flower trading platform with OOP-based order matching engine, buy/sell flows, and efficient trade execution algorithms.',
      image: 'assets/images/LSEG Platforn.png',
      tech: ['C++', 'OOP', 'Trading Engine'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/LSEG-Flower-Exchange-Project',
          type: 'github',
        },
      ],
    },
    {
      slug: 'hospital-cleaning-robot',
      category: 'robotics',
      title: 'Hospital Cleaning Robot (SUTD)',
      summary:
        'Mobile manipulator for hospital cleaning with point cloud processing, path planning, and collision avoidance using ROS, MoveIt, and Universal Robots.',
      image: 'assets/images/UR Arm.png',
      tech: ['C++', 'Python', 'ROS', 'MoveIt'],
      links: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/posts/sadeep-rathnayaka_internship-robotics-simulation-activity-7220534427246813184-I9_3',
          type: 'linkedin',
        },
      ],
    },
    {
      slug: 'turbobot',
      category: 'robotics',
      title: 'Turbobot: Autonomous Mobile Robot',
      summary:
        'Autonomous 4-wheel differential drive robot with ROS2, Nav2, Gazebo simulation, and RViz visualization using C++/Python nodes.',
      image: 'assets/images/Turbobot.png',
      tech: ['C++', 'Python', 'ROS2', 'Nav2'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Turbobot-Autonomous-Robot',
          type: 'github',
        },
        { label: 'More Info', url: '/projects/turbobot', type: 'details' },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'Four-wheel differential drive robot built from scratch with custom 3D modeling, ROS2 integration, and EKF-based localization — from mechanical design to autonomous navigation.',
        },
        {
          title: 'Demonstration',
          videoUrl: 'https://www.youtube.com/embed/c9c6hL1LTTQ',
          videoCaption:
            'Turbobot in action: autonomous navigation and control',
        },
        {
          title: 'Key Features',
          cards: [
            {
              title: '3D Model Design',
              items: [
                'SolidWorks chassis optimized for differential drive',
                'Compact, durable mechanical layout',
              ],
            },
            {
              title: 'ROS2 & Nav2',
              items: [
                'Motion control and localization nodes',
                'Gazebo simulation and RViz visualization',
              ],
            },
          ],
        },
      ],
    },
    {
      slug: 'flexobot',
      category: 'robotics',
      title: 'Flexobot: 6-DOF Robotic Arm',
      summary:
        '6-DOF robotic arm with ROS2, MoveIt2, SolidWorks modeling, URDF, RViz visualization, and joystick teleoperation.',
      image: 'assets/images/Flexobot.png',
      tech: ['C++', 'Python', 'ROS2', 'MoveIt2', 'SolidWorks'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Flexobot-Robotics-Arm',
          type: 'github',
        },
        { label: 'More Info', url: '/projects/flexobot', type: 'details' },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            '6-DOF robotic arm with custom 3D modeling, ROS2 and MoveIt2 integration, joystick control, URDF modeling, and real-time manipulation planning.',
        },
        {
          title: 'Demonstration',
          videoUrl: 'https://www.youtube.com/embed/yZKS2mFUIUg',
          videoCaption: 'Flexobot: robotic arm capabilities demo',
        },
        {
          title: 'Key Features',
          bullets: [
            'SolidWorks design with six rotational joints',
            'ROS2 URDF, RViz, and joint trajectory control',
            'MoveIt2 motion planning and manipulation',
          ],
        },
      ],
    },
    {
      slug: 'parasitic-egg-detection',
      category: 'ml',
      title: 'Parasitic Egg Detection',
      summary:
        'AI system for detecting and classifying parasitic eggs using RTM-Det-tiny with image slicing and patch recombination for accuracy.',
      image: 'assets/images/Egg Detection Ml.png',
      tech: ['Python', 'Computer Vision', 'Deep Learning'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Parasitic-Egg-Detection-and-Classification',
          type: 'github',
        },
      ],
    },
  ],
  skillCategories: [
    {
      name: 'Backend',
      skills: [
        { name: 'Backend Development', icon: 'bx bx-server', iconType: 'boxicon' },
        { name: 'C#', icon: 'devicon-csharp-plain', iconType: 'devicon' },
        { name: 'Java', icon: 'bx bxl-java', iconType: 'boxicon' },
        { name: 'Python', icon: 'bx bxl-python', iconType: 'boxicon' },
        { name: 'Spring Boot', icon: 'bx bxl-spring-boot', iconType: 'boxicon' },
        { name: 'REST APIs', icon: 'bx bx-git-branch', iconType: 'boxicon' },
        { name: 'Microservices', icon: 'bx bx-network-chart', iconType: 'boxicon' },
        { name: 'Monolithic Architecture', icon: 'bx bx-cube', iconType: 'boxicon' },
        { name: 'gRPC', icon: 'bx bx-transfer-alt', iconType: 'boxicon' },
        { name: 'Kafka', icon: 'bx bx-git-merge', iconType: 'boxicon' },
      ],
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'TypeScript', icon: 'bx bxl-typescript', iconType: 'boxicon' },
        { name: 'Angular', icon: 'bx bxl-angular', iconType: 'boxicon' },
        { name: 'JavaScript', icon: 'bx bxl-javascript', iconType: 'boxicon' },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'SQL', icon: 'bx bx-data', iconType: 'boxicon' },
        { name: 'MySQL', icon: 'custom-mysql', iconType: 'custom' },
        { name: 'Oracle', icon: 'bx bxs-data', iconType: 'boxicon' },
        { name: 'Relational Databases', icon: 'bx bx-table', iconType: 'boxicon' },
      ],
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Version Control (Git)', icon: 'bx bxl-git', iconType: 'boxicon' },
        { name: 'Git', icon: 'bx bxl-git', iconType: 'boxicon' },
      ],
    }
    
  ],
  contact: {
    email: 'sadeepm20@gmail.com',
    whatsapp: {
      display: '+94 71 632 8541',
      url: 'https://wa.me/94716328541',
    },
  },
  footerSocial: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sadeep-rathnayaka/',
      icon: 'bx bxl-linkedin',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/SadeepRathnayaka',
      icon: 'bx bxl-github',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/_.sadeep_',
      icon: 'bx bxl-instagram',
    },
  ],
  copyrightYear: 2026,
};

export function getProjectBySlug(slug: string) {
  return PORTFOLIO.projects.find((p) => p.slug === slug);
}
