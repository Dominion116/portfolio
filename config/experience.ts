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
    companyUrl: "https://web3nova.com",
    logo: "/logos/web3nova.png",
  },
  {
    id: "metaminds-agency",
    position: "Full Stack Developer",
    company: "Metaminds Agency",
    location: "Remote",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-12-01"),
    description: [
      "Led full-stack development of enterprise web applications across e-commerce, SaaS, and digital marketing sectors.",
      "Built scalable solutions with Node.js, Express, React, and Next.js while architecting robust backend APIs and CI/CD pipelines.",
      "Collaborated with designers, product managers, and DevOps engineers to deliver reliable client work.",
    ],
    achievements: [
      "Led full-stack development across e-commerce, SaaS, and digital marketing products.",
      "Architected backend APIs and CI/CD pipelines while collaborating with cross-functional teams to ship scalable solutions.",
    ],
    skills: ["Node.js", "express.js", "React", "Next.js", "Typescript", "CI/CD", "AWS"],
    companyUrl: "https://metaminds.agency",
    logo: "/logos/metaminds.png",
  },
];
