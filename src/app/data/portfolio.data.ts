import { PortfolioData } from './portfolio.models';

export const PORTFOLIO: PortfolioData = {
  profile: {
    name: 'Sadeep Rathnayaka',
    titles: [
      'Robotics Engineer',
      'ROS 2 & Motion Planning Developer',
      'Software Engineer',
    ],
    bio:
      'Robotics engineer and software developer with First-Class Honours in Electronic and Telecommunication Engineering from the University of Moratuwa, Sri Lanka. I build robots end to end, from SolidWorks design and Gazebo simulation to ROS 2 control, motion planning and navigation on real hardware, including manipulator work on a UR10e during my research internship at SUTD. Industry experience as a software engineer gives me a strong foundation in writing clean, maintainable code.',
    researchInterests: [
      'Autonomous Navigation',
      'Manipulation & Motion Planning',
      'Service & Healthcare Robotics',
      'Human-Robot Interaction',
    ],
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
    { label: 'Projects', fragment: 'projects' },
    { label: 'Journey', fragment: 'timeline' },
    { label: 'Achievements', fragment: 'achievements' },
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
          icon: 'bx bx-bot',
          text: 'Final-year project: <strong>Mobile Robot Receptionist</strong>, a semi-humanoid service robot. I built its 4-DoF arm for autonomous elevator-button interaction.',
        },
        {
          icon: 'bx bx-book-open',
          text: 'Robotics coursework: <strong>Robotics</strong> (kinematics, DH parameters), <strong>Autonomous Systems</strong> (Kalman filters, EKF, SLAM), <strong>Machine Vision</strong>, and <strong>Deep Learning for Vision</strong>.',
        },
        {
          icon: 'bx bx-code-block',
          text: 'Software foundations: <strong>OOP</strong>, <strong>Data Structures & Algorithms</strong>, and <strong>Relational Databases</strong>.',
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
          text: 'Contributed to an <strong>autonomous hospital-cleaning robot</strong> project, focusing on manipulator control for cleaning high-touch surfaces.',
        },
        {
          icon: 'bx bx-cube-alt',
          text: 'Developed a <strong>Gazebo</strong> simulation to evaluate planned robotic-arm motions against the arm’s joint constraints.',
        },
        {
          icon: 'bx bx-network-chart',
          text: 'Integrated <strong>ROS 2</strong> and <strong>MoveIt</strong> with the simulation for manipulator control, motion planning, and trajectory execution.',
        },
        {
          icon: 'bx bx-check-shield',
          text: 'Tested and validated planned motions on a <strong>Universal Robots UR10e</strong> industrial manipulator.',
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
      slug: 'mobile-robot-receptionist',
      category: 'robotics',
      title: 'Mobile Robot Receptionist (Final-Year Project)',
      summary:
        'Semi-humanoid service robot that moves between floors on its own. I designed and built its 4-DoF arm for elevator-button interaction: camera-based button detection, 3D button localization, MoveIt motion planning, Gazebo simulation, and integration with the physical robot.',
      image: 'assets/images/Mobile Robot Receptionist.svg',
      tech: ['ROS 2', 'MoveIt 2', 'Gazebo', 'C++', 'Python', 'SolidWorks', 'Computer Vision'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Mobile_Robot_Receptionist',
          type: 'github',
        },
        {
          label: 'More Info',
          url: '/projects/mobile-robot-receptionist',
          type: 'details',
        },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'A semi-humanoid mobile receptionist robot, built as a team final-year project at the University of Moratuwa. My part was robot-elevator interaction: giving the robot an arm that can find and press elevator buttons by itself, so it can move between floors without help.',
        },
        {
          title: 'My Contribution: Robot-Elevator Interaction',
          cards: [
            {
              title: 'Arm Design',
              items: [
                'Compact 4-DoF robotic arm designed in SolidWorks',
                'Sized for precise motion near elevator panels',
                'Mounted on the mobile base',
              ],
            },
            {
              title: 'Perception',
              items: [
                'Camera-based elevator-button detection using a machine learning model',
                'Button localization node estimating the 3D pose of the target button',
              ],
            },
            {
              title: 'Planning & Control',
              items: [
                'ROS 2 nodes and drivers for arm control and monitoring',
                'MoveIt configured for inverse kinematics and collision-free motion planning',
                'Trajectories tested in RViz before running on hardware',
              ],
            },
          ],
        },
        {
          title: 'Workflow',
          bullets: [
            'Designed the 4-DoF arm in SolidWorks.',
            'Integrated the arm with ROS 2 and configured MoveIt for planning and execution.',
            'Validated detection, localization and arm control together in a Gazebo simulation.',
            'Assembled the arm on the robot and tested button pressing on the physical hardware.',
          ],
        },
      ],
    },
    {
      slug: 'hospital-cleaning-robot',
      category: 'robotics',
      title: 'Hospital Cleaning Robot (SUTD Research Internship)',
      summary:
        'Manipulator control for an autonomous hospital-cleaning robot that cleans high-touch surfaces. Built a Gazebo simulation to check planned arm motions against joint constraints, integrated ROS 2 and MoveIt for planning and trajectory execution, and validated the motions on a UR10e.',
      image: 'assets/images/UR Arm.png',
      tech: ['ROS 2', 'MoveIt', 'Gazebo', 'UR10e', 'C++', 'Python'],
      links: [
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/posts/sadeep-rathnayaka_internship-robotics-simulation-activity-7220534427246813184-I9_3',
          type: 'linkedin',
        },
        {
          label: 'More Info',
          url: '/projects/hospital-cleaning-robot',
          type: 'details',
        },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'During my six-month research internship at the Singapore University of Technology and Design (SUTD), supervised by Prof. Tan U-Xuan, I contributed to an autonomous hospital-cleaning robot. My work focused on controlling its manipulator to clean high-touch surfaces.',
        },
        {
          title: 'What I Worked On',
          bullets: [
            'Developed a Gazebo simulation to evaluate planned robotic-arm motions against the arm’s joint constraints.',
            'Integrated ROS 2 and the MoveIt framework with the simulation for manipulator control, motion planning, and trajectory execution.',
            'Tested and validated the planned motions on a Universal Robots UR10e industrial manipulator.',
          ],
        },
      ],
    },
    {
      slug: 'turbobot',
      category: 'robotics',
      title: 'Turbobot: Autonomous Mobile Robot',
      summary:
        'Four-wheel differential-drive robot designed in SolidWorks and built from scratch. Autonomous navigation with ROS 2 and Nav2, tested in Gazebo, then a physical build with a Raspberry Pi, wheel encoders and an IMU for sensor fusion and state estimation.',
      image: 'assets/images/Turbobot.png',
      tech: ['ROS 2', 'Nav2', 'Gazebo', 'C++', 'Python', 'SolidWorks', 'Raspberry Pi'],
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
            'Four-wheel differential drive robot built from scratch with custom 3D modeling, ROS 2 integration, and EKF-based localization — from mechanical design to autonomous navigation.',
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
              title: 'ROS 2 & Nav2',
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
        '6-DOF robotic arm with ROS 2, MoveIt 2, SolidWorks modeling, URDF, RViz visualization, and joystick teleoperation.',
      image: 'assets/images/Flexobot.png',
      tech: ['C++', 'Python', 'ROS 2', 'MoveIt 2', 'SolidWorks'],
      links: [
        {
          label: 'View Code',
          url: 'https://github.com/SadeepRathnayaka/Flexobot-Robotic-Arm',
          type: 'github',
        },
        { label: 'More Info', url: '/projects/flexobot', type: 'details' },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            '6-DOF robotic arm with custom 3D modeling, ROS 2 and MoveIt 2 integration, joystick control, URDF modeling, and real-time manipulation planning.',
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
            'ROS 2 URDF, RViz, and joint trajectory control',
            'MoveIt 2 motion planning and manipulation',
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
      slug: 'inventory-manager',
      category: 'software',
      title: 'Inventory Manager (Monolithic → Microservices)',
      summary:
        'Inventory management backend built twice: first as a monolithic Spring Boot app with a relational MySQL design, then re-architected as microservices with JWT auth, Eureka discovery, API Gateway routing, and paginated search.',
      image: 'assets/images/Inventory Management_Resize.jpg',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Microservices'],
      links: [
        {
          label: 'Microservices Code',
          url: 'https://github.com/SadeepRathnayaka/Inventory-Manager-II-BackEnd',
          type: 'github',
        },
        {
          label: 'Monolithic Code',
          url: 'https://github.com/SadeepRathnayaka/Inventory-Manager-BackEnd',
          type: 'github',
        },
        {
          label: 'More Info',
          url: '/projects/inventory-manager',
          type: 'details',
        },
      ],
      detailSections: [
        {
          title: 'Project Overview',
          content:
            'The same inventory domain implemented in two architectures. The monolithic version uses interconnected MySQL tables with optimized custom queries and paginated search. The microservices version splits the system into independent services behind an API Gateway with centralized JWT security and Eureka-based discovery.',
        },
        {
          title: 'Microservices Architecture',
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
  ],
  skillCategories: [
    {
      name: 'Robotics',
      skills: [
        { name: 'ROS 2', icon: 'bx bx-bot', iconType: 'boxicon' },
        { name: 'MoveIt 2', icon: 'bx bx-move', iconType: 'boxicon' },
        { name: 'Nav2', icon: 'bx bx-current-location', iconType: 'boxicon' },
        { name: 'Gazebo', icon: 'bx bx-cube-alt', iconType: 'boxicon' },
        { name: 'RViz', icon: 'bx bx-show', iconType: 'boxicon' },
        { name: 'Webots', icon: 'bx bx-world', iconType: 'boxicon' },
        { name: 'SolidWorks', icon: 'bx bx-shape-polygon', iconType: 'boxicon' },
        { name: 'URDF', icon: 'bx bx-sitemap', iconType: 'boxicon' },
      ],
    },
    {
      name: 'Robotics Foundations',
      skills: [
        { name: 'Kinematics', icon: 'bx bx-math', iconType: 'boxicon' },
        { name: 'Motion Planning', icon: 'bx bx-git-commit', iconType: 'boxicon' },
        { name: 'EKF / Sensor Fusion', icon: 'bx bx-line-chart', iconType: 'boxicon' },
        { name: 'SLAM', icon: 'bx bx-map-alt', iconType: 'boxicon' },
        { name: 'Machine Vision', icon: 'bx bx-camera', iconType: 'boxicon' },
        { name: 'Deep Learning', icon: 'bx bx-brain', iconType: 'boxicon' },
      ],
    },
    {
      name: 'Languages',
      skills: [
        { name: 'C++', icon: 'devicon-cplusplus-plain', iconType: 'devicon' },
        { name: 'Python', icon: 'bx bxl-python', iconType: 'boxicon' },
        { name: 'Java', icon: 'bx bxl-java', iconType: 'boxicon' },
        { name: 'C#', icon: 'devicon-csharp-plain', iconType: 'devicon' },
        { name: 'TypeScript', icon: 'bx bxl-typescript', iconType: 'boxicon' },
      ],
    },
    {
      name: 'Backend & Frontend',
      skills: [
        { name: 'Spring Boot', icon: 'bx bxl-spring-boot', iconType: 'boxicon' },
        { name: 'REST APIs', icon: 'bx bx-git-branch', iconType: 'boxicon' },
        { name: 'Microservices', icon: 'bx bx-network-chart', iconType: 'boxicon' },
        { name: 'Kafka', icon: 'bx bx-git-merge', iconType: 'boxicon' },
        { name: 'gRPC', icon: 'bx bx-transfer-alt', iconType: 'boxicon' },
        { name: 'Angular', icon: 'bx bxl-angular', iconType: 'boxicon' },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'SQL', icon: 'bx bx-data', iconType: 'boxicon' },
        { name: 'MySQL', icon: 'custom-mysql', iconType: 'custom' },
        { name: 'Oracle', icon: 'bx bxs-data', iconType: 'boxicon' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', iconType: 'devicon' },
      ],
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: 'bx bxl-git', iconType: 'boxicon' },
        { name: 'Docker', icon: 'bx bxl-docker', iconType: 'boxicon' },
        { name: 'n8n', icon: 'bx bx-git-repo-forked', iconType: 'boxicon' },
        { name: 'Altium', icon: 'bx bx-chip', iconType: 'boxicon' },
      ],
    },
  ],
  achievements: [
    {
      title: '2nd Runners-Up',
      event: 'RoboRoarz 2024, Singapore',
      year: '2024',
      description: 'Reconfigurable robot navigation competition.',
      icon: 'bx bx-trophy',
      link: {
        url: 'https://www.linkedin.com/posts/entc-uom_entc-eclub-roboroarz2024-activity-7177874795420680192--GV4',
        label: 'View post',
      },
    },
    {
      title: 'Champions',
      event: 'Robot Design Competition 2023 (Virtual)',
      year: '2023',
      description: 'Robot design and programming in a Webots simulation, University of Moratuwa.',
      icon: 'bx bx-medal',
    },
    {
      title: 'Champions',
      event: 'SparkLink 1.0, University of Ruhuna',
      year: '2023',
      description: 'Hardware description language (HDL) design competition.',
      icon: 'bx bx-chip',
      link: {
        url: 'https://www.linkedin.com/posts/ieee-student-branch-university-of-ruhuna_sparklink1-phase2-ieee-activity-7108102675027660800-M07a',
        label: 'View post',
      },
    },
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
