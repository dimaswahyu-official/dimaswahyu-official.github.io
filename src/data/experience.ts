export interface JobExperience {
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  setting: string;
  description: string;
  contributions: string[];
  tags: string[];
}

export const experiences: JobExperience[] = [
  {
    role: "Mobile Application Developer",
    company: "PT Nojorono Tobacco International",
    type: "Full-time",
    duration: "Nov 2024 - Present",
    location: "Jakarta, Indonesia",
    setting: "On-site",
    description: "Develop and maintain mobile and web applications for warehouse operations, field execution, and internal approval systems, focusing on reliability, offline capability, performance, and scalable architecture.",
    contributions: [
      "Led end-to-end development of 3 production mobile applications (Warehouse, Scanner, and Merchandiser) using React Native (Expo and CLI), implementing state management, offline-first data handling, and barcode/QR scanning.",
      "Designed and integrated REST APIs, handling data synchronization, error recovery, and operational edge cases for mobile users.",
      "Developed and maintained a web-based approval system using React, supporting role-based workflows and internal operations.",
      "Supervised and reviewed vendor-developed web applications, ensuring code quality, architectural consistency, and alignment with business and technical requirements."
    ],
    tags: ["Mobile Development", "React Native", "React", "REST API", "State Management"]
  },
  {
    role: "IT Developer Specialist",
    company: "LOVE ID",
    type: "Full-time",
    duration: "Dec 2020 - Oct 2024",
    location: "Jakarta, Indonesia",
    setting: "On-site",
    description: "Develop and maintain web and mobile applications for payment and international remittance systems, focusing on performance, scalability, and regulatory compliance.",
    contributions: [
      "Developed and maintained remittance platforms using Next.js, React, and Redux, supporting 15+ international remittance partners and 20+ local banks.",
      "Implemented and maintained KYC (Know Your Customer) workflows in compliance with Bank Indonesia regulations, validating 8+ mandatory user data fields.",
      "Built responsive transaction and collection pages, improving user click-through and transaction rates.",
      "Improved web performance and accessibility, resulting in faster page load times across desktop and mobile devices.",
      "Debugged, analyzed, and resolved 20+ production issues, improving application stability and reducing user-reported errors.",
      "Developed dashboard and profile modules based on detailed UI/UX specifications using React."
    ],
    tags: ["Web Development", "Next.js", "Redux", "Fintech", "UI/UX Scaling"]
  },
  {
    role: "Android Developer",
    company: "LOVE ID",
    type: "Full-time",
    duration: "Dec 2019 - Oct 2024",
    location: "Jakarta, Indonesia",
    setting: "On-site",
    description: "Design, develop, and maintain Android applications for digital payments, billing, and international remittance.",
    contributions: [
      "Developed Android applications using Android with Java (native).",
      "Integrated REST APIs for payments, billing, top-up, and remittance services.",
      "Optimized application build and runtime performance, reducing build time by ~8%.",
      "Identified and resolved 5+ workflow and process issues, improving transaction reliability.",
      "Designed and implemented 6 electronic money payment pages (e.g., e-wallets) and 10+ billing modules including utilities and digital goods.",
      "Built international remittance features for 15+ destination countries with multiple remittance partners."
    ],
    tags: ["Android Native", "Java", "API Integration", "Performance Tuning"]
  },
  {
    role: "Information Technology Developer",
    company: "Quality Testing and Certification Centers Feed",
    type: "Freelance",
    duration: "Jun 2022 - Jun 2023",
    location: "Jakarta, Indonesia",
    setting: "Remote",
    description: "Developed and maintained a web application optimized for security, structured financial calculations, and user management.",
    contributions: [
      "Developed and maintained a web application using Next.js with Redux for centralized state management.",
      "Implemented Role-Based Access Control (RBAC) with 4 user roles (customer, manager, finance, operator).",
      "Built reporting and analytics modules, including 2 financial/management reports and 5 interactive charts for data visualization.",
      "Implemented email-based OTP authentication workflows for secure user access."
    ],
    tags: ["Next.js", "Redux.js", "RBAC", "Data Visualization"]
  },
  {
    role: "Web Developer",
    company: "UPN \"Veteran\" Jawa Timur",
    type: "Internship",
    duration: "Jan 2018 - Jun 2018",
    location: "Surabaya, East Java, Indonesia",
    setting: "On-site",
    description: "Designed and developed core procurement system architectures to streamline organizational workflows.",
    contributions: [
      "Designed and developed a procurement web application to support goods purchasing and approval workflows.",
      "Produced technical and reporting documentation to support system usage, audits, and ongoing maintenance.",
      "Optimized database queries to improve reporting performance and reduce response time."
    ],
    tags: ["Web Development", "Database Optimization", "Procurement Workflows"]
  }
];