import {
  BotMessageSquare,
  Clock,
  Cloudy,
  LaptopMinimal,
  Palette,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;   // ✅ correct type
  features: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "IT Consulting & Strategy",
    description:
      "Expert guidance to help you navigate complex tech landscapes and future-proof your infrastructure with strategic planning.",
    icon: Clock,
    features: [
      "Technology Roadmap Planning",
      "Infrastructure Audit & Optimization",
      "Digital Transformation Strategy",
      "Risk Assessment & Mitigation",
      "Vendor Selection & Management",
    ],
    price: "From $2,000/mo",
  },
  {
    id: "2",
    title: "Custom Software Development",
    description:
      "End-to-end development of scalable web and mobile applications tailored precisely to your business requirements.",
    icon: LaptopMinimal,
    features: [
      "Full-Stack Web Development",
      "Mobile App Development (iOS & Android)",
      "API Design & Integration",
      "Microservices Architecture",
      "Code Review & Quality Assurance",
    ],
    price: "From $5,000/project",
  },
  {
    id: "3",
    title: "Cloud & DevOps Solutions",
    description:
      "Modernize your infrastructure with cloud-native deployments, CI/CD pipelines, and automated scaling solutions.",
    icon: Cloudy,
    features: [
      "AWS / GCP / Azure Setup",
      "CI/CD Pipeline Automation",
      "Container Orchestration (Kubernetes)",
      "Infrastructure as Code (Terraform)",
      "24/7 Monitoring & Alerting",
    ],
    price: "From $3,000/mo",
  },
  {
    id: "4",
    title: "UI/UX Design",
    description:
      "Create stunning, user-centric designs that drive engagement and deliver seamless experiences across all platforms.",
    icon: Palette,
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Brand Identity Design",
      "Design System Creation",
      "Usability Testing",
    ],
    price: "From $1,500/project",
  },
  {
    id: "5",
    title: "AI & Machine Learning",
    description:
      "Leverage cutting-edge AI to automate processes, gain insights, and build intelligent products that grow with your business.",
    icon: BotMessageSquare,
    features: [
      "Predictive Analytics Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Recommendation Engines",
      "AI Chatbot Development",
    ],
    price: "From $8,000/project",
  },
  {
    id: "6",
    title: "Cybersecurity & Compliance",
    description:
      "Protect your digital assets with comprehensive security audits, penetration testing, and compliance frameworks.",
    icon: ShieldCheck,
    features: [
      "Security Audits & Pen Testing",
      "GDPR / HIPAA Compliance",
      "Zero-Trust Architecture",
      "Incident Response Planning",
      "Security Training for Teams",
    ],
    price: "From $4,000/assessment",
  },
];