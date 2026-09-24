import { Code2, Layers, Cpu, Globe } from "lucide-react";

export const educationData = [
  {
    institution: "Kalinga University",
    location: "Raipur, Chhattisgarh",
    period: "2024 – Present",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    details: "Currently pursuing B.Tech with focus on Data Structures, Algorithms, Web Engineering, and Modern Database Management Systems.",
    badge: "Pursuing"
  },
  {
    institution: "Adarsh Vidya Mandir",
    location: "Jharkhand",
    period: "2022 – 2024",
    degree: "Senior Secondary (Class XII)",
    field: "Science Stream (PCM)",
    details: "Completed Higher Secondary education with 69.4% aggregate, focusing on Physics, Chemistry, and Mathematics.",
    badge: "69.4%"
  },
  {
    institution: "Adarsh Vidya Mandir",
    location: "Jharkhand",
    period: "2020 – 2022",
    degree: "Secondary School (Class X)",
    field: "General Academics",
    details: "Completed Secondary School examination with 78.6% aggregate, building strong foundational mathematics and logical reasoning.",
    badge: "78.6%"
  }
];

export const experienceData = [
  {
    company: "CodeAir Software Solutions",
    role: "Frontend Developer Intern",
    period: "May 2026 – Present",
    type: "Internship",
    description: [
      "Developing high-performance, accessible, and responsive user interfaces using React.js, JavaScript, and Tailwind CSS.",
      "Building modular, reusable component libraries and integrating REST APIs with streamlined state management.",
      "Collaborating directly with senior engineers to optimize frontend bundle performance and cross-browser responsiveness."
    ],
    stack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "Git & GitHub"]
  },
  {
    company: "CodeWebx Technologies",
    role: "Web Development Intern",
    period: "Nov 2025 – Feb 2026",
    type: "Internship",
    description: [
      "Built interactive web applications and responsive components utilizing React, HTML5, CSS3, and Bootstrap.",
      "Engineered reusable custom hooks and modular component hierarchy for scalable frontend architecture.",
      "Participated in Agile sprint planning, code reviews, and API testing to deliver production-ready client deliverables."
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "REST APIs"]
  }
];

export const skillsCategories = [
  {
    category: "Frontend Development",
    icon: Code2,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Bootstrap", "Vite"]
  },
  {
    category: "Backend & Databases",
    icon: Layers,
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "PostgreSQL", "RESTful APIs"]
  },
  {
    category: "Tools & Platforms",
    icon: Cpu,
    skills: ["Git", "GitHub", "Vercel", "Postman", "Figma", "VS Code", "npm"]
  },
  {
    category: "Core Strengths",
    icon: Globe,
    skills: ["Responsive UI Architecture", "Clean Code Standards", "Agile Workflows", "Problem Solving", "Rapid Prototyping"]
  }
];

export const projectsData = [
  {
    title: "ASIS-AI — Autonomous Structural Intelligence System",
    slug: "asis-ai",
    type: "AI Pipeline & 3D WebGL",
    category: "ai",
    description: "An AI-driven pipeline converting 2D architectural floor plans into interactive 3D spatial models using OpenCV, Three.js, and Blockchain verification.",
    stack: ["React.js", "Three.js", "OpenCV", "WebGL", "Blockchain"],
    demo: "https://asis-ai.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/ASIS-AI",
    image: "/projects/asis-ai.png",
    featured: true,
    year: "2026"
  },
  {
    title: "Modern Shoe Store UI & Showcase",
    slug: "modern-shoe",
    type: "E-Commerce Experience",
    category: "web",
    description: "A sleek and modern footwear e-commerce UI built using React.js. Features dynamic product showcases, interactive cart previews, responsive layouts, and fluid transitions inspired by premium sneaker brands.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    demo: "https://modern-shoe-web-ui-react.vercel.app/",
    source: "https://github.com/sanskritigupta312-jpg/modern-shoe-web-UI-react",
    image: "/projects/modern-shoe.png",
    featured: true,
    year: "2026"
  },
  {
    title: "PixelGo — Unified Hospitality Operating System",
    slug: "pixelgo",
    type: "SaaS & Enterprise Web",
    category: "web",
    description: "Unified hospitality management platform orchestrating multi-property hotel operations, restaurant POS systems, banquet scheduling, and real-time inventory tracking.",
    stack: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "https://pixelgo-sage.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/pixelgo",
    image: "/projects/pixelgo.png",
    featured: true,
    year: "2026"
  },
  {
    title: "MarketMinds — Financial Growth Agency",
    slug: "market-minds",
    type: "FinTech & Growth Analytics",
    category: "web",
    description: "Luxury digital marketing and growth analytics platform featuring bespoke interactive stages, dark editorial aesthetics, and client conversion engines.",
    stack: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
    demo: "https://market-minds-phi.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/MarketMinds",
    image: "/projects/market-minds.png",
    featured: true,
    year: "2026"
  },
  {
    title: "PixelGo Landing Page Architecture",
    slug: "pixelgo-landing",
    type: "Conversion & Product UI",
    category: "web",
    description: "High-converting product landing page with polished responsive design, interactive pricing tables, testimonials carousel, and engaging visual storytelling.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    demo: "https://pixel-go-landing-page.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/PixelGo-LandingPage",
    image: "/projects/pixelgo-landing.png",
    featured: false,
    year: "2026"
  },
  {
    title: "Vasera Society — Smart Community Platform",
    slug: "vasera-society",
    type: "Community Management SaaS",
    category: "web",
    description: "Modern web portal for residential housing societies featuring maintenance billing, amenity bookings, visitor management, and digital community notices.",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    demo: "https://vasera-society-web.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/Vasera-Society-Web",
    image: "/projects/vasera-society.png",
    featured: false,
    year: "2026"
  },
  {
    title: "Neetu LG — Electronics Service Center",
    slug: "neetu-lg",
    type: "Service Business Web",
    category: "web",
    description: "Bespoke web platform for LED TV repair and electronics service center featuring online appointment booking, repair service catalog, and direct WhatsApp contact.",
    stack: ["HTML5", "Modern CSS3", "JavaScript", "Local SEO"],
    demo: "https://neetu-lg.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/Neetu-LG",
    image: "/projects/neetu-lg.png",
    featured: false,
    year: "2026"
  },
  {
    title: "Dhruv — Creative Developer Portfolio",
    slug: "dhruv-portfolio",
    type: "Client Portfolio Website",
    category: "creative",
    description: "Custom personal portfolio crafted for a creative technologist, highlighting engineering accomplishments, project demos, and a sleek contact pipeline.",
    stack: ["React.js", "Framer Motion", "JavaScript", "Tailwind CSS"],
    demo: "https://dhruv-portfolio-one-tau.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/Dhruv-Portfolio",
    image: "/projects/dhruv-portfolio.png",
    featured: false,
    year: "2026"
  },
  {
    title: "Amazon E-Commerce Storefront Clone",
    slug: "amazon-clone",
    type: "Full Stack Clone",
    category: "web",
    description: "Comprehensive desktop replica of the Amazon shopping platform featuring product catalog navigation, banner promos, shopping cart calculations, and responsive layouts.",
    stack: ["HTML5", "CSS3", "JavaScript", "Flexbox & Grid"],
    demo: "https://sanskritigupta312-jpg.github.io/Amazon-clone/",
    source: "https://github.com/sanskritigupta312-jpg/Amazon-clone",
    image: "/projects/amazon-clone.png",
    featured: false,
    year: "2025"
  },
  {
    title: "Flipkart Desktop E-Commerce Clone",
    slug: "flipkart-clone",
    type: "E-Commerce Clone",
    category: "web",
    description: "Accurate desktop clone of Flipkart's shopping interface highlighting promotional carousels, categorized product display grids, deal-of-the-day rails, and cart UI.",
    stack: ["HTML5", "CSS3", "JavaScript", "E-Commerce UI"],
    demo: "https://sanskritigupta312-jpg.github.io/Flipkart-Clone-Designing-Web/",
    source: "https://github.com/sanskritigupta312-jpg/Flipkart-Clone-Designing-Web",
    image: "/projects/flipkart-clone.png",
    featured: false,
    year: "2025"
  },
  {
    title: "ProType — Speed Typing Benchmark Engine",
    slug: "typing-test",
    type: "Interactive Utility & Game",
    category: "interactive",
    description: "Real-time typing test application measuring Words Per Minute (WPM), accuracy percentages, error highlighting, and countdown timer logic.",
    stack: ["JavaScript", "HTML5", "CSS3", "DOM Logic"],
    demo: "https://sanskritigupta312-jpg.github.io/Typing-Test/",
    source: "https://github.com/sanskritigupta312-jpg/Typing-Test",
    image: "/projects/typing-test.png",
    featured: false,
    year: "2025"
  },
  {
    title: "Tic-Tac-Toe Interactive Game",
    slug: "tic-tac-toe",
    type: "Interactive Game",
    category: "interactive",
    description: "Classic two-player Tic-Tac-Toe web game featuring interactive board states, automatic win detection logic, turn indicators, winning line visual cues, and score tracking.",
    stack: ["JavaScript", "HTML5", "CSS3 Animations", "Game Logic"],
    demo: "https://sanskritigupta312-jpg.github.io/Tic-Tac-Toe/",
    source: "https://github.com/sanskritigupta312-jpg/Tic-Tac-Toe",
    image: "/projects/tic-tac-toe.png",
    featured: false,
    year: "2025"
  },
  {
    title: "Rock Paper Scissors Arcade",
    slug: "rock-paper-scissors",
    type: "Interactive Game",
    category: "interactive",
    description: "Browser-based rock-paper-scissors game against randomized AI opponent with live score keeping, animated gestures, and victory alert banners.",
    stack: ["JavaScript", "HTML5", "CSS3", "State Engine"],
    demo: "https://sanskritigupta312-jpg.github.io/Rock-Paper-Scissors/",
    source: "https://github.com/sanskritigupta312-jpg/Rock-Paper-Scissors",
    image: "/projects/rock-paper-scissors.png",
    featured: false,
    year: "2025"
  },
  {
    title: "Artisan Coffee House Experience",
    slug: "coffee",
    type: "Hospitality & Cafe UI",
    category: "web",
    description: "Curated digital storefront for an artisan specialty coffee house featuring roast bean guides, brew profiles, and responsive table bookings.",
    stack: ["React.js", "JavaScript", "Modern CSS", "Vercel"],
    demo: "https://coffee-sage-three.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/Coffee",
    image: "/projects/coffee.png",
    featured: false,
    year: "2026"
  },
  {
    title: "Sanskriti — 3D Velvet & Swiss Portfolio",
    slug: "portfolio-master",
    type: "Motion & Creative Dev",
    category: "creative",
    description: "Current flagship portfolio featuring 60 FPS circular canvas character tracking, Swiss brutalist typography, sound-inspired transitions, and modular React architecture.",
    stack: ["React.js", "HTML5 Canvas", "Vite", "Modern CSS"],
    demo: "https://portfolio-ten-pearl-nxwqcavy9t.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/Portfolio",
    image: "/projects/portfolio-master.png",
    featured: true,
    year: "2026"
  },
  {
    title: "Sanskriti Gupta Portfolio (V1)",
    slug: "my-portfolio-v1",
    type: "Creative Developer Portfolio",
    category: "creative",
    description: "Previous generation portfolio featuring interactive UI components, skill badges, project showcases, and responsive multi-section layout.",
    stack: ["React.js", "Vite", "JavaScript", "Tailwind CSS"],
    demo: "https://my-portfolio-psi-liard-97.vercel.app/",
    source: "https://github.com/sanskritigupta312-jpg/My-Portfolio",
    image: "/projects/my-portfolio-v1.png",
    featured: false,
    year: "2025"
  },
  {
    title: "Instagram Content Automation Engine",
    slug: "insta-automation",
    type: "Automation & Scripting",
    category: "automation",
    description: "Automation script and pipeline for scheduling and auto-publishing creative assets to Instagram with caption formatting and media preprocessing.",
    stack: ["Python", "Node.js", "Instagram Graph API", "Automation"],
    demo: "https://github.com/sanskritigupta312-jpg/Insta-Post-Automation",
    source: "https://github.com/sanskritigupta312-jpg/Insta-Post-Automation",
    image: "/projects/insta-automation.png",
    featured: false,
    year: "2026"
  },
  {
    title: "Amazon UI Architectural System",
    slug: "amazon-designing",
    type: "Design System & Layout",
    category: "web",
    description: "In-depth exploratory layout project dissecting Amazon's complex multi-tiered grid layouts, header dropdown hierarchies, and mega-menu interactions.",
    stack: ["HTML5", "CSS3", "Modular Architecture"],
    demo: "https://github.com/sanskritigupta312-jpg/Amazon-Clone-Designing-Website",
    source: "https://github.com/sanskritigupta312-jpg/Amazon-Clone-Designing-Website",
    image: "/projects/amazon-designing.png",
    featured: false,
    year: "2025"
  }
];

export const certificatesData = [
  {
    title: "Prompt Coding Certificate",
    org: "IIIT, Naya Raipur",
    year: "April, 2026",
    description: "Successfully completed Prompt Coding certification, mastering prompt engineering principles and AI-assisted software development workflows.",
    file: "Prompt Coding.pdf"
  },
  {
    title: "React JS Developer Internship",
    org: "CodeWebx Technologies",
    year: "February 27, 2026",
    description: "Completed an intensive 4-month React JS Developer internship program, building real-world production web platforms using React and Tailwind CSS.",
    file: "CodeWebx Internship.pdf"
  },
  {
    title: "Bootcamp on Data Empowerment",
    org: "Kalinga University & IIIT Hyderabad",
    year: "January 31, 2026",
    description: "Participated in hands-on bootcamp focused on Data Empowerment for Local Innovation and Tech Entrepreneurship.",
    file: "Data-Empowerment.pdf"
  },
  {
    title: "Cloud Computing & DevOps Value Added Course",
    org: "Kalinga University",
    year: "January 30, 2026",
    description: "Completed comprehensive 30-hour course covering Cloud Computing architectures, DevOps pipelines, AWS, Azure, and Google Cloud services.",
    file: "Cloud-Computing.pdf"
  },
  {
    title: "Technology Job Simulation",
    org: "Deloitte Australia / Forage",
    year: "January 9, 2026",
    description: "Completed practical simulation tasks in software architecture, client requirement analysis, and practical coding exercises.",
    file: "Certificate.pdf"
  },
  {
    title: "Innovation Ambassador (IA) Training",
    org: "MoE's Innovation Cell & AICTE",
    year: "November 27, 2025",
    description: "Completed Foundation Level training consisting of 16 comprehensive sessions and 30 contact hours in tech innovation management.",
    file: "IA Online Training Certificate (2).pdf"
  },
  {
    title: "ICSTDTSD International Conference",
    org: "Kalinga University",
    year: "October 31, 2025",
    description: "Participated and presented technical paper at the International Conference on Smart Technologies and Digital Transformation for Sustainable Development.",
    file: "International-Conference .pdf"
  },
  {
    title: "Hands-on Training on Auto-ML Basics and EDA",
    org: "Kalinga University",
    year: "August 22, 2025",
    description: "Hands-on training session on Automated Machine Learning (Auto-ML) and Exploratory Data Analysis (EDA) leveraging modern AI frameworks.",
    file: "Sanskriti Kumari.pdf"
  },
  {
    title: "Cybersecurity Skilling Course",
    org: "Tech Mahindra Foundation & Skill India",
    year: "August 2, 2025",
    description: "Completed intensive 10-hour skilling course covering modern cybersecurity protocols, network hygiene, and defensive fundamentals.",
    file: "Cyber-Security-Certificate.pdf"
  },
  {
    title: "ICETSD International Conference",
    org: "Kalinga University",
    year: "April 18, 2025",
    description: "Attended and presented research paper at the International Conference on Emerging Technologies for Sustainable Development.",
    file: "International-Conference-1.pdf"
  },
  {
    title: "Two-Day Certification Program on Web Development",
    org: "Faculty of CS & IT, Kalinga University",
    year: "February 25, 2025",
    description: "Completed intensive two-day hands-on workshop focused on full-stack web development methodologies and best practices.",
    file: "Web-Dev.pdf"
  },
  {
    title: "Hands-on Training on Python, Coding & Robotics",
    org: "IEEE KU SB & BDS Education",
    year: "January 25, 2025",
    description: "Comprehensive hands-on training covering Python scripting, algorithmic coding logic, and microcontroller robotics integration.",
    file: "One-Day.pdf"
  },
  {
    title: "Robotics Training - 3rd Position Winner",
    org: "IEEE KU SB",
    year: "September 20, 2024",
    description: "Secured 3rd position for the 'IR Remote Controlled Robot' project during a competitive one-week hands-on robotics training.",
    file: "Robotics-3rd.pdf"
  }
];

export const getCertLink = (filename) => {
  return `https://my-portfolio-psi-liard-97.vercel.app/certificates/${encodeURIComponent(filename)}`;
};
