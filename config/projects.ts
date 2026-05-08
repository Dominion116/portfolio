import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "afrimo-database",
    companyName: "Afrimobile Technology",
    type: "Professional",
    category: ["Backend", "Web Dev"],
    shortDescription:
      "Backend API powering a blockchain-integrated smartphone platform with referral systems, share trading, installment plans, withdrawals, and crypto wallet integration.",
    websiteLink: "https://www.afrimobiletech.com/",
    githubLink: "https://github.com/BernardOnuh/Afrimo-Database",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Web3.js",
      "Ethers.js",
      "Cloudinary",
      "Node-Cron",
      "Winston",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg:
      "https://res.cloudinary.com/dhhq7xc6g/image/upload/q_auto/f_auto/v1778159172/afrimobile_lnkt6p.png",
    pagesInfoArr: [
      {
        title: "Referral & Earnings System",
        description:
          "Multi-tier referral engine with automated cron-based reward distribution, audit logging, and real-time earnings tracking.",
        imgArr: [],
      },
      {
        title: "Share & Loan Module",
        description:
          "Share trading, share loans, co-founder installment plans, and a franchise module with dedicated controllers and routes.",
        imgArr: [],
      },
      {
        title: "Admin & Withdrawal Controls",
        description:
          "Admin analytics dashboard, withdrawal scheduling, audit trails, PDF report generation, and per-user withdrawal restrictions.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built and maintained the full backend infrastructure for Afrimobile Technology's platform, covering user management, share transactions, referral logic, and admin controls.",
        "Integrated blockchain tooling (Web3.js, Ethers.js) for crypto wallet support and on-chain transaction handling alongside a REST API serving multiple client applications.",
      ],
      bullets: [
        "Engineered a multi-tier referral and earnings system with automated cron-based reward distribution.",
        "Implemented share trading, share loans, co-founder installment plans, and a franchise module with dedicated controllers and routes.",
        "Built admin analytics, withdrawal controls, audit logging, and withdrawal scheduling with PDF report generation.",
        "Integrated Cloudinary for media uploads, Nodemailer for email notifications, and JWT-based authentication with rate limiting.",
      ],
    },
  },
  {
    id: "predict-stacks",
    companyName: "Predict Stacks",
    type: "Personal",
    category: ["Web Dev", "Frontend", "Backend", "Smart Contracts"],
    shortDescription:
      "Decentralized prediction markets platform on Stacks L2 Blockchain. Bet on future events with STX, transparent and secure by Bitcoin. Create markets, place bets, and earn rewards on the most trusted prediction platform built on Stacks.",
    websiteLink: "https://predict-stack.vercel.app/",
    githubLink: "https://github.com/Dominion116/PredictStack",
    techStack: [
      "Next.js",
      "React",
      "Stacks Clarity",
      "Bitcoin",
      "Tailwind CSS",
    ],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg:
      "https://res.cloudinary.com/dhhq7xc6g/image/upload/q_auto/f_auto/v1778159549/predictstack_ppdomd.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Built PredictStack, a decentralized prediction markets platform on the Stacks L2 blockchain, enabling users to create markets, place bets, and earn rewards — all secured by Bitcoin.",
        "The project spans a full-stack implementation from smart contracts in Clarity to a Next.js frontend integrated with the Stacks ecosystem, Hiro Chainhooks, and USDCx for settlement.",
      ],
      bullets: [
        "Authored Clarity smart contracts for market creation, bet placement, resolution, and reward distribution on the Stacks blockchain.",
        "Built a Next.js + React frontend with Tailwind CSS covering pages for markets, dashboard, leaderboard, and admin.",
        "Integrated Hiro Chainhooks for real-time on-chain event tracking and market state synchronization.",
        "Implemented wallet connectivity and USDCx token flows for secure, transparent on-chain transactions.",
        "Designed reusable UI components including market cards, activity feeds, and animated hero sections.",
      ],
    },
  },
    {
    id: "nova-web",
    companyName: "NovaWeb",
    type: "Professional",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "Modern, high-performance landing page for a web development agency. Features a hero section, service highlights, glassmorphism badges, and smooth scroll-triggered animations with a polished Vercel-inspired design.",
    techStack: ["React", "Typescript", "Vite", "Tailwind CSS", "Framer Motion"],
    startDate: new Date("2026-01-21"),
    endDate: new Date("2026-01-22"),
    companyLogoImg:
      "https://res.cloudinary.com/dhhq7xc6g/image/upload/q_auto/f_auto/v1778159311/novaweb_qzjs2v.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "NovaWeb is a landing page for a fictional web development agency, built to showcase modern frontend development practices with a clean, professional aesthetic.",
        "It features a fully responsive layout with dark/light mode support, smooth animations, and a contact section.",
      ],
      bullets: [
        "Built a multi-section agency landing page using React, TypeScript, and Tailwind CSS.",
        "Implemented scroll-triggered animations and hover effects using Framer Motion.",
        "Applied glassmorphism badge styling and a Vercel-inspired design system with Geist fonts.",
        "Added dark/light mode support across all components including a responsive mobile navbar.",
      ],
    },
  },
];

//   {
//     id: "built-design",
//     companyName: "Builtdesign",
//     type: "Professional",
//     category: ["Web Dev", "Full Stack", "UI/UX"],
//     shortDescription:
//       "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
//     websiteLink: "https://builtdesign.in",
//     techStack: [
//       "Next.js",
//       "React",
//       "Node.js",
//       "MongoDB",
//       "GraphQL",
//       "Nest.js",
//       "Typescript",
//     ],
//     startDate: new Date("2021-07-01"),
//     endDate: new Date("2022-07-01"),
//     companyLogoImg: "/projects/builtdesign/logo.png",
//     pagesInfoArr: [
//       {
//         title: "Landing Page",
//         description:
//           "Modern and responsive landing page showcasing company services and portfolio",
//         imgArr: [
//           "/projects/builtdesign/landing_1.webp",
//           "/projects/builtdesign/landing_3.webp",
//           "/projects/builtdesign/landing_5.webp",
//           "/projects/builtdesign/landing_6.webp",
//           "/projects/builtdesign/landing_2.webp",
//           "/projects/builtdesign/landing_4.webp",
//         ],
//       },
//       {
//         title: "Custom PDF Reader and optimizer",
//         description:
//           "Specialized PDF viewer with optimization features for improved performance and user experience",
//         imgArr: ["/projects/builtdesign/pdf_opt.webp"],
//       },
//       {
//         title: "Clients Dashboard",
//         description:
//           "Comprehensive client portal with project tracking, document management, and communication tools",
//         imgArr: [
//           "/projects/builtdesign/cli_dashboard_1.webp",
//           "/projects/builtdesign/cli_dashboard_2.webp",
//           "/projects/builtdesign/cli_dashboard_3.webp",
//         ],
//       },
//       {
//         title: "Admin Dashboard",
//         description:
//           "Powerful administrative interface for managing users, projects, and system settings",
//         imgArr: ["/projects/builtdesign/logo.png"],
//       },
//     ],
//     descriptionDetails: {
//       paragraphs: [
//         "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
//         "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
//         "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
//       ],
//       bullets: [
//         "Developed and optimized a high-performing website catering to over 4000 users.",
//         "Collaborated closely with the product team to implement cutting-edge features.",
//         "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
//         "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
//         "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
//       ],
//     },
//   },
//   {
//     id: "the-super-quotes",
//     companyName: "The Super Quotes",
//     type: "Professional",
//     category: ["Mobile Dev", "Full Stack", "UI/UX"],
//     shortDescription:
//       "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
//     websiteLink:
//       "https://play.google.com/store/apps/details?id=com.thesuperlife",
//     techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
//     startDate: new Date("2021-07-01"),
//     endDate: new Date("2022-07-01"),
//     companyLogoImg: "/projects/superquotes/logo.png",
//     pagesInfoArr: [
//       {
//         title: "Quotes View Page",
//         description:
//           "Elegantly designed quotes display with customizable themes and sharing options",
//         imgArr: ["/projects/superquotes/app_2.webp"],
//       },
//       {
//         title: "Quotes Download Component",
//         description:
//           "Feature allowing users to download quotes as beautiful images for social media sharing",
//         imgArr: [
//           "/projects/superquotes/app_4.webp",
//           "/projects/superquotes/app_7.webp",
//         ],
//       },
//       {
//         title: "Account Management",
//         description:
//           "User profile management with favorites, history, and personalization settings",
//         imgArr: ["/projects/superquotes/app_6.webp"],
//       },
//       {
//         title: "Interest Selection and Update Page",
//         description:
//           "Interactive interface for users to select and update their quote preferences and interests",
//         imgArr: [
//           "/projects/superquotes/app_1.webp",
//           "/projects/superquotes/app_3.webp",
//         ],
//       },
//       {
//         title: "Responsiveness",
//         description:
//           "Adaptive design ensuring optimal user experience across various device sizes and orientations",
//         imgArr: ["/projects/superquotes/app_5.webp"],
//       },
//     ],
//     descriptionDetails: {
//       paragraphs: [
//         `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
//         `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
//         `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
//         `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
//       ],
//       bullets: [
//         "Led the end-to-end development of a captivating application using JavaScript and React Native.",
//         "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
//         "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
//         "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
//       ],
//     },
//   },
//   {
//     id: "apex-shopping",
//     companyName: "Apex Shopping App",
//     type: "Personal",
//     category: ["Mobile Dev", "Full Stack", "UI/UX"],
//     shortDescription:
//       "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
//     githubLink: "https://github.com/namanbarkiya/apex-shopping-app",
//     techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
//     startDate: new Date("2021-07-14"),
//     endDate: new Date("2022-07-01"),
//     companyLogoImg: "/projects/apex/logo.png",
//     pagesInfoArr: [
//       {
//         title: "Splash Screen",
//         description: "Custom animated splash screen with app branding",
//         imgArr: ["/projects/apex/app_7.webp"],
//       },
//       {
//         title: "Login/Signup Authentication",
//         description: "Secure user authentication system with Firebase",
//         imgArr: ["/projects/apex/app_1.webp"],
//       },
//       {
//         title: "All Products Explore Screen",
//         description: "Interactive product browsing with categories and filters",
//         imgArr: ["/projects/apex/app_3.webp"],
//       },
//       {
//         title: "Admin Panel",
//         description:
//           "Comprehensive admin dashboard for product and order management",
//         imgArr: ["/projects/apex/app_4.webp", "/projects/apex/app_6.webp"],
//       },
//       {
//         title: "Sidenav Navigation",
//         description: "Intuitive side navigation for easy app navigation",
//         imgArr: ["/projects/apex/app_5.webp"],
//       },
//       {
//         title: "Firebase Database",
//         description:
//           "Real-time database structure for efficient data management",
//         imgArr: ["/projects/apex/db.webp"],
//       },
//     ],
//     descriptionDetails: {
//       paragraphs: [
//         "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
//         "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
//         "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
//         "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
//       ],
//       bullets: [
//         "Implemented secure user authentication and authorization using Firebase",
//         "Designed and developed an intuitive product browsing and shopping cart system",
//         "Created a comprehensive admin panel for product and order management",
//         "Integrated real-time data synchronization using Firebase Database",
//         "Implemented state management using Redux for optimal performance",
//         "Designed responsive UI components following mobile-first principles",
//         "Incorporated smooth animations and transitions for enhanced user experience",
//       ],
//     },
//   },
//   {
//     id: "builtdesign-blogs",
//     companyName: "Builtdesign Blogs",
//     type: "Professional",
//     category: ["Web Dev", "Full Stack", "UI/UX"],
//     shortDescription:
//       "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
//     websiteLink: "https://blog.builtdesign.in",
//     techStack: ["Next.js", "React", "Node.js", "MongoDB", "Typescript"],
//     startDate: new Date("2022-03-01"),
//     endDate: new Date("2022-07-01"),
//     companyLogoImg: "/projects/builtdesign-blogs/logo.png",
//     pagesInfoArr: [
//       {
//         title: "Blog Landing Page",
//         description:
//           "Modern and responsive landing page showcasing featured articles",
//         imgArr: ["/projects/builtdesign-blogs/blog_2.webp"],
//       },
//       {
//         title: "Blog Listing",
//         description:
//           "Organized display of all blog posts with search and filtering",
//         imgArr: ["/projects/builtdesign-blogs/blog_3.webp"],
//       },
//       {
//         title: "Category Navigation",
//         description: "Intuitive category-based navigation system",
//         imgArr: ["/projects/builtdesign-blogs/blog_1.webp"],
//       },
//       {
//         title: "Article View",
//         description:
//           "Clean and readable article layout with rich media support",
//         imgArr: [
//           "/projects/builtdesign-blogs/blog_4.webp",
//           "/projects/builtdesign-blogs/blog_5.webp",
//         ],
//       },
//     ],
//     descriptionDetails: {
//       paragraphs: [
//         "As part of the Builtdesign platform, I developed a sophisticated blog website that serves as a content hub for the company's thought leadership and industry insights. The project leveraged Next.js and React to create a fast, SEO-friendly platform.",
//         "The blog platform features a modern, responsive design that prioritizes readability and user engagement. I implemented a robust content management system using Netlify CMS, enabling the content team to easily publish and manage blog posts.",
//         "The architecture includes server-side rendering for optimal performance and SEO, while MongoDB provides flexible content storage. TypeScript ensures code reliability and maintainability throughout the application.",
//         "Key features include category-based navigation, search functionality, and a rich text editor for content creation. The platform supports various content types including images, code snippets, and embedded media.",
//       ],
//       bullets: [
//         "Developed a modern blog platform using Next.js and React with TypeScript",
//         "Implemented Netlify CMS for efficient content management",
//         "Created a responsive design that prioritizes readability and user engagement",
//         "Built server-side rendering for optimal performance and SEO",
//         "Integrated MongoDB for flexible content storage and management",
//         "Developed category-based navigation and search functionality",
//         "Implemented rich text editing capabilities for content creation",
//       ],
//     },
//   },

//   {
//     id: "cirql-dashboard",
//     companyName: "Cirql Dashboard",
//     type: "Personal",
//     category: ["Web Dev", "Frontend", "UI/UX"],
//     shortDescription:
//       "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
//     websiteLink: "https://cirql-ui.namanbarkiya.xyz/",
//     techStack: ["React", "Tailwind CSS", "Google Auth"],
//     startDate: new Date("2023-01-01"),
//     endDate: new Date("2023-02-15"),
//     companyLogoImg: "/projects/cirql/logo.png",
//     pagesInfoArr: [
//       {
//         title: "Dashboard Home",
//         description:
//           "Main dashboard view with analytics widgets and data visualization",
//         imgArr: ["/projects/cirql/web_1.png", "/projects/cirql/web_2.png"],
//       },
//       {
//         title: "Profile Page",
//         description:
//           "User profile management interface with customization options",
//         imgArr: ["/projects/cirql/web_3.png", "/projects/cirql/web_4.png"],
//       },
//     ],
//     descriptionDetails: {
//       paragraphs: [
//         "For the 'Cirql Dashboard' personal, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
//         "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
//         "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
//         "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
//         "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
//       ],
//       bullets: [
//         "Created a user-friendly dashboard project using React and Tailwind CSS.",
//         "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
//         "Designed UI components to provide an intuitive and visually pleasing experience.",
//         "Focused on implementing a smooth routing system to simulate real-world use cases.",
//         "Enhanced my skills in UI design, routing, and component architecture.",
//       ],
//     },
//   },
//   {
//     id: "inscript-hindi-typing",
//     companyName: "Inscript Hindi Typing",
//     type: "Personal",
//     category: ["Web Dev", "UI/UX"],
//     shortDescription:
//       "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.",
//     websiteLink: "https://hindityping.namanbarkiya.xyz",
//     githubLink: "https://github.com/namanbarkiya/inscript-hindi-keyboard",
//     techStack: ["HTML 5", "CSS 3", "Javascript"],
//     startDate: new Date("2022-05-01"),
//     endDate: new Date("2022-06-15"),
//     companyLogoImg: "/projects/hindi-keyboard/logo.png",
//     pagesInfoArr: [
//       {
//         title: "Typing Interface",
//         description: "Minimal and user-friendly Inscript Hindi typing area",
//         imgArr: ["/projects/hindi-keyboard/web_1.png"],
//       },
//       {
//         title: "Copy and Download the file",
//         description:
//           "Export functionality allowing users to copy text or download as a document file",
//         imgArr: [
//           "/projects/hindi-keyboard/web_2.png",
//           "/projects/hindi-keyboard/web_3.png",
//         ],
//       },
//     ],
//     descriptionDetails: {
//       paragraphs: [
//         "The 'Inscript Hindi Typing Website' project emerged from the need to provide a simple and accessible tool for Hindi writers, especially those in digital news and media, who wished to convey data in Hindi.",
//         "Recognizing the challenges posed by complex software in the market, I set out to create a minimalistic typing area that catered to the needs of a vast community of Hindi typists in India.",
//         "The project was designed to address the specific requirements of users familiar with the Inscript keyboard layout, mapping English and Hindi alphabets for seamless typing. The intuitive interface allowed users to effortlessly switch between languages, streamlining the process of content creation.",
//         "Leveraging HTML and CSS, I crafted the website's UI to ensure a user-friendly experience. Additionally, Local Storage was utilized to enable users to save and retrieve their work, enhancing convenience and productivity.",
//         "The website's focus on user experience and simplicity proved to be a key factor in its popularity among Hindi writers. By offering a tool that reduced the barriers to entry, I contributed to the digital empowerment of Hindi typists who previously faced challenges in conveying their message effectively.",
//         "This project marked one of my initial forays into web development and highlighted the transformative potential of technology in addressing real-world challenges.",
//       ],
//       bullets: [
//         "Developed a user-friendly website for Inscript Hindi typing.",
//         "Catered to the needs of Hindi writers in digital news and media.",
//         "Created a minimalistic and intuitive typing interface for the Inscript keyboard layout.",
//         "Mapped English and Hindi alphabets to provide a seamless typing experience.",
//         "Utilized HTML and CSS to design a user-friendly UI.",
//         "Implemented Local Storage to enable users to save and retrieve their work.",
//         "Contributed to the digital empowerment of Hindi typists by offering a simple tool.",
//         "Marked one of my first web development projects, showcasing technology's potential for addressing real-world needs.",
//       ],
//     },
//   },
// ];

export const featuredProjects = Projects.slice(0, 3);
