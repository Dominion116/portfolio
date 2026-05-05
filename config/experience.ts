import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "web3nova",
    position: "Full Stack Blockchain Developer",
    company: "Web3Nova",
    location: "Remote",
    startDate: new Date("2024-12-01"),
    endDate: "Present",
    description: [
      "Developed DeFi protocols managing over $10k in transactions and deployed smart contracts with zero security incidents at Web3Nova.",
      "Mentored junior developers and collaborated cross-functionally to deliver complex blockchain solutions.",
    ],
    achievements: [
      "Developed DeFi protocols managing over $10k in transactions and deployed smart contracts with zero security incidents.",
      "Mentored junior developers and collaborated cross-functionally to deliver complex blockchain solutions.",
    ],
    skills: ["Typescript", "React", "Next.js", "Node.js", "AWS", "CI/CD"],
    companyUrl: "https://www.web3nova.org/",
    logo: "https://res.cloudinary.com/dhhq7xc6g/image/upload/q_auto/f_auto/v1777980536/web3nova_qkjwve.jpg",
  },
  {
    id: "upwork",
    position: "Full Stack Blockchain Developer",
    company: "Upwork",
    location: "Remote",
    startDate: new Date("2023-09-01"),
    endDate: "Present",
    description: [
      "Full-stack blockchain developer specializing in smart contracts and decentralized applications (dApps).",
      "Successfully developed a multi-wallet connect app and built DeFi applications with ERC20, NFTs, and custom scripts.",
      "Built secure frontend and backend systems with React, Node.js, and Solidity using a security-first, multi-chain approach.",
    ],
    achievements: [
      "Delivered a multi-wallet connect application and multiple DeFi products for production use.",
      "Implemented smart contracts and custom blockchain scripts covering ERC20 and NFT workflows.",
      "Built secure full-stack dApps with React, Node.js, and Solidity for real-world usage.",
    ],
    skills: [
      "React",
      "Node.js",
      "Typescript",
      "Solidity",
      "DeFi",
      "Smart Contracts",
      "Sui Move",
    ],
    companyUrl: "https://www.upwork.com/freelancers/~01406dff4e402c4a18",
    logo: "https://res.cloudinary.com/dhhq7xc6g/image/upload/q_auto/f_auto/v1777983937/upwork_dvijny.png",
  },
  {
    id: "metaminds-agency",
    position: "Full Stack Developer",
    company: "Metaminds Agency",
    location: "Remote",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-12-01"),
    description: [
      "Full-stack development of enterprise web applications across e-commerce, SaaS, and digital marketing sectors.",
      "Built scalable solutions with Node.js, Express, React, and Next.js while architecting robust backend APIs and CI/CD pipelines.",
      "Collaborated with designers, product managers, and DevOps engineers to deliver reliable client work.",
    ],
    achievements: [
      "Led full-stack development across e-commerce, SaaS, and digital marketing products.",
      "Architected backend APIs and CI/CD pipelines while collaborating with cross-functional teams to ship scalable solutions.",
    ],
    skills: ["Node.js", "express.js", "React", "Next.js", "Typescript", "CI/CD", "AWS"],
    companyUrl: "https://metaminds.agency",
    logo: "https://res.cloudinary.com/dhhq7xc6g/image/upload/q_auto/f_auto/v1777981473/metaminds_r5zvx5.jpg",
  },
];
