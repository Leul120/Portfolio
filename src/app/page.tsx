"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Github,
  ExternalLink,
  ChevronRight,
  Code,
  Database,
  Server,
  Cloud,
  Cpu,
  Globe,
  X,
  Clock,
  Folder,
  Layers,
  ArrowUpRight,
  Sparkles,
  Menu,
  Zap,
  Shield,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { RESUME_DATA, Project } from "@/lib/data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            LM.
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors link-underline"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="btn-primary text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-foreground-muted hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="badge badge-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block">{RESUME_DATA.name}</span>
            <span className="block mt-2 gradient-text">{RESUME_DATA.title}</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-4"
          >
            {RESUME_DATA.subtitle}
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            className="text-base text-foreground-muted/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {RESUME_DATA.profile.split('\n\n')[0]}
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {RESUME_DATA.stats.map((stat, index) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-foreground-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-foreground-muted rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Project Detail Modal
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-background-tertiary rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="badge badge-primary">{project.category}</span>
            <span className="badge badge-success">{project.status}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
          <p className="text-foreground-muted">{project.shortDesc}</p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {project.highlights.map((highlight) => (
            <div key={highlight.label} className="glass rounded-lg p-3 text-center">
              <div className="text-xs text-foreground-muted mb-1">{highlight.label}</div>
              <div className="text-sm font-semibold">{highlight.value}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Overview
          </h3>
          <p className="text-foreground-muted leading-relaxed whitespace-pre-line">
            {project.fullDesc}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            Key Features
          </h3>
          <ul className="space-y-2">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground-muted">
                <ChevronRight className="w-4 h-4 text-accent-primary mt-1 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-blue-500" />
            Architecture
          </h3>
          <ul className="space-y-2">
            {project.architecture.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground-muted">
                <ChevronRight className="w-4 h-4 text-accent-secondary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-green-500" />
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <Github className="w-5 h-5" />
          View on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </motion.div>
  );
}

// Project Card
function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      variants={scaleIn}
      className="glass-card rounded-xl p-6 card-hover cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-2">
          <span className="badge badge-primary text-xs">{project.category}</span>
          <span className="badge badge-success text-xs">{project.status}</span>
        </div>
        <ArrowUpRight className="w-5 h-5 text-foreground-muted group-hover:text-foreground transition-colors" />
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-foreground-muted mb-4 line-clamp-2">
        {project.shortDesc}
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {project.highlights.map((h) => (
          <div key={h.label} className="text-center">
            <div className="text-xs text-foreground-muted">{h.label}</div>
            <div className="text-sm font-semibold">{h.value}</div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className="badge text-xs">
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="badge text-xs">+{project.tech.length - 4}</span>
        )}
      </div>
    </motion.div>
  );
}

// Projects Section
function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="badge badge-primary mb-4">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              A selection of my recent work, showcasing expertise in microservices, 
              AI integration, and cloud architecture.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    { name: "Systems & Architecture", icon: Server, skills: RESUME_DATA.skills["Systems & Architecture"] },
    { name: "Infrastructure & Platform", icon: Cloud, skills: RESUME_DATA.skills["Infrastructure & Platform"] },
    { name: "Messaging & Streaming", icon: Workflow, skills: RESUME_DATA.skills["Messaging & Streaming"] },
    { name: "Data & Storage", icon: Database, skills: RESUME_DATA.skills["Data & Storage"] },
    { name: "Observability", icon: Globe, skills: RESUME_DATA.skills["Observability"] },
    { name: "Languages & Runtimes", icon: Code, skills: RESUME_DATA.skills["Languages & Runtimes"] },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="badge badge-primary mb-4">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Technologies and tools I use to build scalable, production-ready systems.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  variants={scaleIn}
                  className="glass-card rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <h3 className="font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="badge badge-primary mb-4">Career</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              My professional journey building production systems and leading development teams.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent transform md:-translate-x-1/2" />

            {RESUME_DATA.experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-primary rounded-full border-4 border-background transform -translate-x-1/2 mt-1.5" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                }`}>
                  <div className="glass-card rounded-xl p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-accent-primary">
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="text-xs text-foreground-muted">
                          • {exp.location}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{exp.company}</h3>
                    <p className="text-sm text-foreground-muted mb-4">{exp.role}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li 
                          key={i} 
                          className={`text-sm text-foreground-muted flex gap-2 ${
                            index % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 text-accent-primary shrink-0 md:order-1" />
                          <span className="md:order-2">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="badge badge-primary mb-4">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a 
                href={`mailto:${RESUME_DATA.email}`}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-foreground-muted">{RESUME_DATA.email}</p>
              </a>

              <a 
                href={`tel:${RESUME_DATA.phone}`}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-accent-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-secondary/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-sm text-foreground-muted">{RESUME_DATA.phone}</p>
              </a>

              <a 
                href={RESUME_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <p className="text-sm text-foreground-muted">Connect with me</p>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <a 
                href={`mailto:${RESUME_DATA.email}?subject=Let's work together`}
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
              >
                <Mail className="w-5 h-5" />
                Send me an email
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} Leul Melkamu Bezabih. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={RESUME_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </div>
  );
}
