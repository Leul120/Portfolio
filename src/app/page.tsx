"use client";

import { motion } from "framer-motion";
import { Module } from "@/components/Module";
import {
  Terminal,
  Cpu,
  Database,
  Globe,
  Layers,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  ExternalLink,
  ChevronRight,
  Code,
  Github
} from "lucide-react";
import Link from "next/link";

const RESUME_DATA = {
  name: "Leul Melkamu Bezabih",
  title: "Backend Developer",
  email: "leulmelkamu15@gmail.com",
  phone: "0969089004",
  location: "ETHIOPIA",
  linkedin: "https://linkedin.com/in/leul-melkamu-803352262",
  profile: "Backend engineer with experience in microservices, API development, and cloud infrastructure. Built and deployed production systems using Spring Boot, Node.js,Flask, Fast API, Docker, and AWS. Experienced in delivering real-time, AI-driven, and distributed applications and skilled in solving complex problems and optimizing system performance.",
  experience: [
    {
      company: "Addis Financials",
      role: "Backend Developer",
      period: "12/2024 – 08/2025",
      points: [
        "Designed and built backend features using Spring Boot and microservices.",
        "Developed scalable APIs and integrated PostgreSQL, Redis, and Kafka for production workloads.",
        "Debugged and optimized services to improve performance and reliability.",
        "Deployed services with Docker and AWS, gaining hands-on cloud experience."
      ]
    },
    {
      company: "Freelance Projects",
      role: "Backend Developer (Remote)",
      period: "01/2024 – 11/2024",
      points: [
        "Architected and delivered bespoke backend solutions and API infrastructures for various clients.",
        "Engineered real-time data processing modules and high-performance services using Node.js and Python.",
        "Optimized cloud-native deployments and containerized legacy systems for improved scalability.",
        "Consulted on technical strategy and system architecture for distributed applications."
      ]
    },
    {
      company: "LDDA Technologies",
      role: "Backend Engineer",
      period: "02/2023 – 11/2024",
      points: [
        "Built REST APIs and backend services using Node.js and Express.",
        "Designed course, user, and enrollment modules with secure access control.",
        "Implemented video upload, streaming, and progress tracking.",
        "Optimized queries and caching for fast course delivery at scale."
      ]
    },
    {
      company: "Prime Software Plc",
      role: "Fullstack Engineer",
      period: "05/2022 – 12/2022",
      points: [
        "Architected Rest APIs and enterprise services utilizing Spring Boot and React.js.",
        "Debugged and optimized core services to significantly improve system performance and reliability.",
        "Collaborated on full-stack feature delivery following Agile methodologies."
      ]
    },
    {
      company: "Efuye Gela",
      role: "Full Stack Developer & Mentor",
      period: "02/2022 – 05/2022",
      points: [
        "Architected and deployed 'EGA', a robust e-commerce engine for game rentals and purchases.",
        "Engineered a scalable stack using Next.js, Prisma ORM, and MongoDB.",
        "Integrated Telebirr payment gateways to facilitate secure transactions.",
        "Mentored and led development squads, focusing on backend architecture patterns."
      ]
    },
  ],
  projects: [

    {
      title: "Smart Interview Trainer",
      desc: "An AI-orchestrated simulations platform utilizing real-time biometric and vocal frequency analysis. Designed a matrix of microservices focused on behavioral feedback loops, translating raw video/audio streams into actionable confidence scores and performance metrics.",
      tech: ["Spring Boot", "OpenCV", "WebRTC", "Eureka", "AWS EC2", "Python"],
      github: "https://github.com/Leul120/interview-trainer"
    },
    {
      title: "Transport Allocation System",
      desc: "Architecture of an automated transit load balancer that utilizes computer vision density estimation to optimize vehicle dispatching. Leverages high-speed WebSocket telemetry and AWS Rekognition to process live camera feeds for real-time station crowd management.",
      tech: ["Spring Boot", "Flask", "Python", "OpenCV", "AWS Rekognition", "WS"],
      github: "https://github.com/Leul120/transport-allocation-system"
    },
    {
      title: "Safe Status Notifier",
      desc: "Developed a distributed alert system that synchronizes device telemetry and power states across mobile and backend nodes. Orchestrates real-time transparency for connectivity status using GraphQL and spatial indexing via Google Maps API to bridge communication gaps in critical moments.",
      tech: ["Spring Boot", "Kotlin", "PostgreSQL", "GraphQL", "Google Maps API"],
      github: "https://github.com/Leul120/notifier"
    },
    {
      title: "Cinema Ticket Booking App",
      desc: "Engineered a high-performance movie ticketing ecosystem handling 500+ concurrent sessions. Features a hardened security layer with JWT auth, granular role-based access control, and a real-time reactive seat reservation engine that eliminates double-booking hazards.",
      tech: ["Spring Boot", "React.js", "MySQL", "Spring Security", "Docker", "Tailwind CSS"],
      github: "https://github.com/Leul120/cinema-ticket-booking"
    },
  ],
  skills: [
    "Spring Boot", "Microservices", "Python", "Next.js", "PostgreSQL", "AWS",
    "Node.js", "React.js", "GraphQL", "Docker", "Reactive Programming"
  ]
};

export default function Home() {
  return (
    <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 h-full min-h-screen max-w-[1600px] mx-auto">

      {/* LEFT COLUMN - Profile & Skills */}
      <div className="md:col-span-3 flex flex-col gap-4">
        <Module title="Identity" delay={0.1}>
          <h1 className="text-2xl font-bold tracking-tighter mb-1 uppercase italic">{RESUME_DATA.name}</h1>
          <p className="text-sm text-muted mb-4 font-bold">{RESUME_DATA.title}</p>
          <div className="space-y-3 text-xs">
            <a href={`mailto:${RESUME_DATA.email}`} className="terminal-link max-sm:text-[10px]">
              <Mail size={12} /> <span>{RESUME_DATA.email}</span>
            </a>
            <div className="flex items-center gap-2 text-muted">
              <Phone size={12} /> <span>{RESUME_DATA.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <MapPin size={12} /> <span>{RESUME_DATA.location}</span>
            </div>
            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-link"
            >
              <Linkedin size={12} /> <span>[LINK] LinkedIn Profile</span>
            </a>
          </div>
        </Module>

        <Module title="Capabilities" delay={0.2} className="flex-1">
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.map((skill, i) => (
              <span
                key={skill}
                className="px-2 py-1 border border-border text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-[10px] uppercase text-muted mb-4 tracking-[0.2em]">System Architecture</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px]">
                <span>Distributed Systems</span>
                <span className="text-muted">95%</span>
              </div>
              <div className="w-full bg-border/20 h-[1px]">
                <div className="bg-foreground h-full w-[95%]" />
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span>Cloud Native</span>
                <span className="text-muted">90%</span>
              </div>
              <div className="w-full bg-border/20 h-[1px]">
                <div className="bg-foreground h-full w-[90%]" />
              </div>
            </div>
          </div>
        </Module>
      </div>

      {/* CENTER COLUMN - Hero & Projects */}
      <div className="md:col-span-6 flex flex-col gap-4">
        <Module title="Executive_Summary" delay={0.3}>
          <div className="relative">
            <p className="text-lg leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
              {RESUME_DATA.profile}
            </p>
            <div className="absolute -bottom-2 -right-2 text-[8px] text-muted-foreground/30 font-mono">
              [DEBUG_LOG_01_SUCCESS]
            </div>
          </div>
        </Module>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESUME_DATA.projects.map((project, i) => (
            <Module key={project.title} title={`Project_0${i + 1}`} delay={0.4 + i * 0.1}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-bold uppercase tracking-tight">{project.title}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-link text-[10px] uppercase font-bold"
                  >
                    <span>View_Source</span>
                    <Github size={12} />
                  </a>
                )}
              </div>
              <p className="text-xs text-muted mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] text-muted border border-border px-1">
                    {t}
                  </span>
                ))}
              </div>
            </Module>
          ))}
          {/* Terminal Module Placeholder */}
          <Module title="Interactive_Shell" delay={0.6} className="md:col-span-2">
            <div className="font-mono text-[11px] space-y-1">
              <div className="flex gap-2 text-muted">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~/leul-portfolio</span>
                <span>ls projects/active</span>
              </div>
              <div className="text-muted/60 ml-6">cinema_ticketing_system.sh</div>
              <div className="text-muted/60 ml-6">safe_status_notifier_sync.v3</div>
              <div className="text-muted/60 ml-6">interview_trainer_ai_v2.bin</div>
              <div className="flex gap-2 mt-2">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~/leul-portfolio</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </Module>
        </div>
      </div>

      {/* RIGHT COLUMN - Experience */}
      <div className="md:col-span-3 flex flex-col gap-4">
        <Module title="Deployment_History" delay={0.7} className="flex-1">
          <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-border">
            {RESUME_DATA.experience.map((exp, i) => (
              <div key={exp.company} className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] bg-background border border-foreground flex items-center justify-center">
                  <div className="w-1 h-1 bg-foreground" />
                </div>
                <div className="mb-4">
                  <p className="text-[10px] text-muted font-bold tracking-widest">{exp.period}</p>
                  <h4 className="text-xs font-bold uppercase">{exp.company}</h4>
                  <p className="text-[10px] italic text-muted-foreground">{exp.role}</p>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-[11px] leading-snug flex gap-2">
                      <ChevronRight size={10} className="shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Module>
      </div>

    </div>
  );
}
