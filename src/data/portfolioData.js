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
    title: "Modern Shoe Store UI",
    type: "E-Commerce Experience",
    category: "web",
    description: "A sleek and modern footwear e-commerce UI built using React.js. Features dynamic product showcases, interactive cart previews, responsive layouts, and fluid transitions inspired by premium sneaker brands.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    demo: "https://modern-shoe-web-ui-react.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/modern-shoe-web-UI-react.git"
  },
  {
    title: "Personal Portfolio Website",
    type: "Motion & Creative Dev",
    category: "web",
    description: "High-end luxury portfolio website featuring an ultra-smooth, zero-ghosting 60 FPS cursor-tracking character animation, frosted glass navigation pill, and responsive layouts.",
    stack: ["React.js", "HTML5 Canvas", "Tailwind CSS", "Vite"],
    demo: "https://my-portfolio-psi-liard-97.vercel.app",
    source: "https://github.com/sanskritigupta312-jpg/My-Portfolio.git"
  },
  {
    title: "Typing Speed Test",
    type: "Interactive Web Tool",
    category: "interactive",
    description: "A real-time typing speed test application that measures WPM (Words Per Minute), accuracy percentages, interactive error highlighting, and countdown session timer.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://sanskritigupta312-jpg.github.io/Typing-Test/",
    source: "https://github.com/sanskritigupta312-jpg/Typing-Test"
  },
  {
    title: "Amazon Clone",
    type: "Full Stack Clone",
    category: "web",
    description: "Comprehensive desktop replica of the Amazon shopping platform featuring product catalog navigation, shopping cart operations, user sign-in simulation, and item filtering.",
    stack: ["React.js", "Tailwind CSS", "Firebase"],
    demo: "https://sanskritigupta312-jpg.github.io/Amazon-clone/",
    source: "https://github.com/sanskritigupta312-jpg/Amazon-clone"
  },
  {
    title: "Flipkart Clone",
    type: "E-Commerce Clone",
    category: "web",
    description: "Responsive clone of Flipkart's shopping interface highlighting promotional carousels, categorized product display grids, banner promos, and brand showcase sections.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://sanskritigupta312-jpg.github.io/Flipkart-Clone-Designing-Web/",
    source: "https://github.com/sanskritigupta312-jpg/Flipkart-Clone-Designing-Web"
  },
  {
    title: "Tic-Tac-Toe Game",
    type: "Interactive Game",
    category: "interactive",
    description: "Classic two-player Tic-Tac-Toe web game featuring interactive board states, automatic win detection logic, turn indicators, winning line visual cues, and score tracking.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://sanskritigupta312-jpg.github.io/Tic-Tac-Toe/",
    source: "https://github.com/sanskritigupta312-jpg/Tic-Tac-Toe.git"
  },
  {
    title: "Rock-Paper-Scissors Game",
    type: "Interactive Game",
    category: "interactive",
    description: "Fun, animated Rock-Paper-Scissors game featuring computerized choice generation, real-time score keeping, victory alerts, and interactive gesture selection.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://sanskritigupta312-jpg.github.io/Rock-Paper-Scissors/",
    source: "https://github.com/sanskritigupta312-jpg/Rock-Paper-Scissors.git"
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
