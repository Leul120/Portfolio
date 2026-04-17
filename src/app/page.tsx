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
  X,
  Menu,
  ArrowUpRight,
  Clock,
  Server,
  Database,
  Cloud,
  Layers,
  Activity,
  Cpu,
  Radio,
  Shield,
  Terminal,
  Workflow,
  Zap
} from "lucide-react";
import Link from "next/link";
import { RESUME_DATA, Project } from "@/lib/data";

// Animation variants - Apple style (subtle)
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

// Navigation - Apple Style
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 nav-glass'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-12'>
          <Link href='/' className='text-[21px] font-semibold tracking-tight text-white'>
            LM
          </Link>
          
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-xs text-[rgba(255,255,255,0.8)] hover:text-white transition-colors tracking-wide'
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className='md:hidden p-2' onClick={() => setIsOpen(!isOpen)}>
            <Menu className='w-5 h-5' />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden nav-glass border-t border-[rgba(255,255,255,0.1)]'
          >
            <div className='px-6 py-4 space-y-3'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='block text-sm text-[rgba(255,255,255,0.8)] hover:text-white'
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

// Hero Section - Apple Style
function HeroSection() {
  return (
    <section id='about' className='min-h-screen flex items-center pt-12'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-8 w-full'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={staggerContainer}
          className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'
        >
          {/* Left - Main Info */}
          <div className='lg:col-span-7'>
            <motion.div variants={fadeUp}>
              <span className='tag tag-blue mb-6'>System Engineer</span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className='text-[56px] lg:text-[80px] font-semibold leading-[1.05] tracking-[-0.03em] mb-6'
            >
              {RESUME_DATA.name}
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className='text-[21px] lg:text-[28px] text-[rgba(255,255,255,0.6)] leading-[1.4] tracking-[-0.021em] mb-8 max-w-[600px]'
            >
              {RESUME_DATA.subtitle}
            </motion.p>

            <motion.p 
              variants={fadeUp}
              className='text-[17px] text-[rgba(255,255,255,0.6)] leading-[1.5] mb-10 max-w-[560px]'
            >
              {RESUME_DATA.profile.split('\n\n')[0]}
            </motion.p>

            <motion.div variants={fadeUp} className='flex flex-wrap gap-4'>
              <a href='#projects' className='btn-primary'>
                View Projects
              </a>
              <a 
                href={`mailto:${RESUME_DATA.email}`}
                className='btn-secondary'
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right - Stats & Info */}
          <div className='lg:col-span-5'>
            <motion.div 
              variants={staggerContainer}
              className='space-y-4'
            >
              {/* Quick Stats */}
              <motion.div variants={fadeUp} className='card p-6'>
                <div className='grid grid-cols-2 gap-6'>
                  {RESUME_DATA.stats.slice(0, 4).map((stat) => (
                    <div key={stat.label}>
                      <div className='text-[32px] font-semibold tracking-[-0.021em]'>{stat.value}</div>
                      <div className='text-xs text-[rgba(255,255,255,0.6)] uppercase tracking-wide mt-1'>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Location & Contact */}
              <motion.div variants={fadeUp} className='card p-6 space-y-4'>
                <div className='flex items-center gap-3 text-[rgba(255,255,255,0.8)]'>
                  <MapPin className='w-4 h-4 text-[#0a84ff]' />
                  <span className='text-sm'>{RESUME_DATA.location}</span>
                </div>
                <div className='flex items-center gap-3 text-[rgba(255,255,255,0.8)]'>
                  <Mail className='w-4 h-4 text-[#0a84ff]' />
                  <span className='text-sm'>{RESUME_DATA.email}</span>
                </div>
                <div className='flex gap-3 pt-2'>
                  <a 
                    href={RESUME_DATA.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-ghost text-xs'
                  >
                    <Github className='w-4 h-4 mr-2' />
                    GitHub
                  </a>
                  <a 
                    href={RESUME_DATA.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-ghost text-xs'
                  >
                    <Linkedin className='w-4 h-4 mr-2' />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Project Modal - Detailed View
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 bg-black/90 backdrop-blur-xl overflow-y-auto'
      onClick={onClose}
    >
      <div className='min-h-screen px-6 py-20'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className='max-w-[900px] mx-auto'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className='fixed top-6 right-6 w-10 h-10 flex items-center justify-center bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors'
          >
            <X className='w-5 h-5' />
          </button>

          {/* Header */}
          <div className='mb-12'>
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='tag tag-blue'>{project.category}</span>
              <span className='tag tag-green'>{project.status}</span>
            </div>
            <h2 className='text-[48px] lg:text-[64px] font-semibold leading-[1.05] tracking-[-0.021em] mb-4'>
              {project.title}
            </h2>
            <p className='text-[21px] text-[rgba(255,255,255,0.6)] leading-[1.4]'>
              {project.shortDesc}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className='grid grid-cols-3 gap-4 mb-12'>
            {project.highlights.map((h) => (
              <div key={h.label} className='card p-5 text-center'>
                <div className='text-xs text-[rgba(255,255,255,0.6)] uppercase tracking-wide mb-2'>
                  {h.label}
                </div>
                <div className='text-lg font-semibold text-[#0a84ff]'>{h.value}</div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className='mb-12'>
            <h3 className='text-[24px] font-semibold mb-4 tracking-[-0.021em]'>Overview</h3>
            <p className='text-[17px] text-[rgba(255,255,255,0.6)] leading-[1.6] whitespace-pre-line'>
              {project.fullDesc}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
            {/* Key Features */}
            <div className='card p-6'>
              <h3 className='text-[18px] font-semibold mb-5 flex items-center gap-2 tracking-[-0.021em]'>
                <Zap className='w-5 h-5 text-[#ff9f0a]' />
                Key Features
              </h3>
              <ul className='space-y-3'>
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className='flex items-start gap-3 text-[15px] text-[rgba(255,255,255,0.8)] leading-[1.5]'>
                    <ChevronRight className='w-4 h-4 text-[#0a84ff] mt-0.5 shrink-0' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div className='card p-6'>
              <h3 className='text-[18px] font-semibold mb-5 flex items-center gap-2 tracking-[-0.021em]'>
                <Workflow className='w-5 h-5 text-[#5e5ce6]' />
                Architecture
              </h3>
              <ul className='space-y-3'>
                {project.architecture.map((item, i) => (
                  <li key={i} className='flex items-start gap-3 text-[15px] text-[rgba(255,255,255,0.8)] leading-[1.5]'>
                    <ChevronRight className='w-4 h-4 text-[#5e5ce6] mt-0.5 shrink-0' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <div className='mb-12'>
            <h3 className='text-[18px] font-semibold mb-4 tracking-[-0.021em]'>Technology Stack</h3>
            <div className='flex flex-wrap gap-2'>
              {project.tech.map((tech) => (
                <span key={tech} className='tag'>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary inline-flex items-center gap-2'
          >
            <Github className='w-5 h-5' />
            View on GitHub
            <ExternalLink className='w-4 h-4' />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Project Card - Bento Style
function ProjectCard({ project, onClick, featured = false }: { project: Project; onClick: () => void; featured?: boolean }) {
  if (featured) {
    return (
      <motion.div
        variants={fadeUp}
        className='card-interactive p-8 lg:col-span-2 cursor-pointer group'
        onClick={onClick}
      >
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6'>
          <div className='flex-1'>
            <div className='flex gap-2 mb-4'>
              <span className='tag tag-blue'>{project.category}</span>
              <span className='tag tag-green'>{project.status}</span>
            </div>
            <h3 className='text-[28px] font-semibold mb-3 tracking-[-0.021em] group-hover:text-[#0a84ff] transition-colors'>
              {project.title}
            </h3>
            <p className='text-[15px] text-[rgba(255,255,255,0.6)] leading-[1.5] mb-6 max-w-[600px]'>
              {project.shortDesc}
            </p>
            <div className='flex flex-wrap gap-2'>
              {project.tech.slice(0, 5).map((tech) => (
                <span key={tech} className='tag text-xs'>{tech}</span>
              ))}
              {project.tech.length > 5 && (
                <span className='tag text-xs'>+{project.tech.length - 5}</span>
              )}
            </div>
          </div>
          <div className='flex items-center gap-4 lg:flex-col lg:items-end'>
            {project.highlights.map((h) => (
              <div key={h.label} className='text-right'>
                <div className='text-xs text-[rgba(255,255,255,0.6)] uppercase tracking-wide'>{h.label}</div>
                <div className='text-lg font-semibold text-[#0a84ff]'>{h.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6 pt-4 border-t border-[rgba(255,255,255,0.1)] flex items-center justify-between'>
          <span className='text-[13px] text-[rgba(255,255,255,0.6)] group-hover:text-[#0a84ff] transition-colors'>
            Click to view details
          </span>
          <span className='text-[13px] font-medium text-[#0a84ff] opacity-0 group-hover:opacity-100 transition-opacity'>
            View Project →
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      className='card-interactive p-6 cursor-pointer group flex flex-col h-full'
      onClick={onClick}
    >
      <div className='flex-1'>
        <div className='flex gap-2 mb-4'>
          <span className='tag tag-blue text-xs'>{project.category}</span>
        </div>
        <h3 className='text-[21px] font-semibold mb-2 tracking-[-0.021em] group-hover:text-[#0a84ff] transition-colors'>
          {project.title}
        </h3>
        <p className='text-[13px] text-[rgba(255,255,255,0.6)] leading-[1.4] mb-4'>
          {project.shortDesc}
        </p>
        <div className='flex flex-wrap gap-1.5'>
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className='tag text-xs'>{tech}</span>
          ))}
        </div>
      </div>
      <div className='mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)]'>
        <span className='text-[12px] text-[rgba(255,255,255,0.5)] group-hover:text-[#0a84ff] transition-colors flex items-center gap-1'>
          View details
          <span className='inline-block transition-transform group-hover:translate-x-1'>→</span>
        </span>
      </div>
    </motion.div>
  );
}

// Projects Section - Bento Grid
function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id='projects' className='section-padding bg-[#0a0a0a]'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className='mb-16'>
            <span className='tag tag-indigo mb-4'>Selected Work</span>
            <h2 className='text-[48px] lg:text-[56px] font-semibold leading-[1.05] tracking-[-0.021em] mb-4'>
              Projects
            </h2>
            <p className='text-[17px] text-[rgba(255,255,255,0.6)] max-w-[600px]'>
              Distributed systems and infrastructure platforms designed for scale, reliability, and performance.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div 
            variants={staggerContainer}
            className='grid grid-cols-1 lg:grid-cols-3 gap-4'
          >
            {RESUME_DATA.projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                featured={index === 0}
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

// Experience Section - Clean Timeline
function ExperienceSection() {
  return (
    <section id='experience' className='section-padding'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className='mb-16'>
            <span className='tag tag-indigo mb-4'>Career</span>
            <h2 className='text-[48px] lg:text-[56px] font-semibold leading-[1.05] tracking-[-0.021em] mb-4'>
              Experience
            </h2>
          </motion.div>

          <div className='space-y-0'>
            {RESUME_DATA.experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeUp}
                className='group'
              >
                <div className={`py-8 ${index !== 0 ? 'border-t border-[rgba(255,255,255,0.1)]' : ''}`}>
                  <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12'>
                    {/* Date & Company */}
                    <div className='lg:col-span-4'>
                      <div className='text-xs text-[#0a84ff] font-medium uppercase tracking-wide mb-2'>
                        {exp.period}
                      </div>
                      <h3 className='text-[24px] font-semibold tracking-[-0.021em] mb-1'>
                        {exp.company}
                      </h3>
                      <p className='text-[15px] text-[rgba(255,255,255,0.6)]'>
                        {exp.role}
                      </p>
                      <p className='text-xs text-[rgba(255,255,255,0.4)] mt-1'>
                        {exp.location}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className='lg:col-span-8'>
                      <ul className='space-y-3'>
                        {exp.points.map((point, i) => (
                          <li 
                            key={i} 
                            className='flex items-start gap-3 text-[15px] text-[rgba(255,255,255,0.8)] leading-[1.5]'
                          >
                            <ChevronRight className='w-4 h-4 text-[#0a84ff] mt-0.5 shrink-0' />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Section - Grid Layout
function SkillsSection() {
  const skillCategories = [
    { name: 'Systems & Architecture', icon: Server, skills: RESUME_DATA.skills['Systems & Architecture'], color: '#0a84ff' },
    { name: 'Infrastructure', icon: Cloud, skills: RESUME_DATA.skills['Infrastructure & Platform'], color: '#30d158' },
    { name: 'Messaging', icon: Radio, skills: RESUME_DATA.skills['Messaging & Streaming'], color: '#5e5ce6' },
    { name: 'Data & Storage', icon: Database, skills: RESUME_DATA.skills['Data & Storage'], color: '#ff9f0a' },
    { name: 'Observability', icon: Activity, skills: RESUME_DATA.skills['Observability'], color: '#bf5af2' },
    { name: 'Languages', icon: Terminal, skills: RESUME_DATA.skills['Languages & Runtimes'], color: '#64d2ff' },
  ];

  return (
    <section className='section-padding bg-[#0a0a0a]'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className='mb-16'>
            <span className='tag tag-indigo mb-4'>Expertise</span>
            <h2 className='text-[48px] lg:text-[56px] font-semibold leading-[1.05] tracking-[-0.021em] mb-4'>
              Technical Skills
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
          >
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  variants={fadeUp}
                  className='card p-6'
                >
                  <div className='flex items-center gap-3 mb-5'>
                    <div 
                      className='w-10 h-10 flex items-center justify-center'
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon className='w-5 h-5' style={{ color: category.color }} />
                    </div>
                    <h3 className='text-[17px] font-semibold tracking-[-0.021em]'>
                      {category.name}
                    </h3>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map((skill) => (
                      <span key={skill} className='tag text-xs'>
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

// Contact Section
function ContactSection() {
  return (
    <section id='contact' className='section-padding'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className='text-center mb-16'>
            <span className='tag tag-indigo mb-4'>Contact</span>
            <h2 className='text-[48px] lg:text-[56px] font-semibold leading-[1.05] tracking-[-0.021em] mb-4'>
              Get in Touch
            </h2>
            <p className='text-[17px] text-[rgba(255,255,255,0.6)] max-w-[500px] mx-auto'>
              Available for system architecture consulting and infrastructure engineering opportunities.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className='max-w-[800px] mx-auto'
          >
            <div className='card p-8 lg:p-12'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                <a 
                  href={`mailto:${RESUME_DATA.email}`}
                  className='text-center group'
                >
                  <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#0a84ff]/10 group-hover:bg-[#0a84ff]/20 transition-colors'>
                    <Mail className='w-5 h-5 text-[#0a84ff]' />
                  </div>
                  <div className='text-[15px] font-medium mb-1'>Email</div>
                  <div className='text-[13px] text-[rgba(255,255,255,0.6)]'>{RESUME_DATA.email}</div>
                </a>

                <a 
                  href={`tel:${RESUME_DATA.phone}`}
                  className='text-center group'
                >
                  <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#30d158]/10 group-hover:bg-[#30d158]/20 transition-colors'>
                    <Phone className='w-5 h-5 text-[#30d158]' />
                  </div>
                  <div className='text-[15px] font-medium mb-1'>Phone</div>
                  <div className='text-[13px] text-[rgba(255,255,255,0.6)]'>{RESUME_DATA.phone}</div>
                </a>

                <a 
                  href={RESUME_DATA.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-center group'
                >
                  <div className='w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#5e5ce6]/10 group-hover:bg-[#5e5ce6]/20 transition-colors'>
                    <Linkedin className='w-5 h-5 text-[#5e5ce6]' />
                  </div>
                  <div className='text-[15px] font-medium mb-1'>LinkedIn</div>
                  <div className='text-[13px] text-[rgba(255,255,255,0.6)]'>Connect</div>
                </a>
              </div>

              <div className='border-t border-[rgba(255,255,255,0.1)] pt-8'>
                <a 
                  href={`mailto:${RESUME_DATA.email}?subject=System Engineering Inquiry`}
                  className='btn-primary w-full flex items-center justify-center gap-2'
                >
                  <Mail className='w-4 h-4' />
                  Start a Conversation
                  <ArrowUpRight className='w-4 h-4' />
                </a>
              </div>
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
    <footer className='py-8 border-t border-[rgba(255,255,255,0.1)]'>
      <div className='max-w-[1200px] mx-auto px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='text-[13px] text-[rgba(255,255,255,0.6)]'>
            {new Date().getFullYear()} Leul Melkamu Bezabih
          </div>
          <div className='flex items-center gap-6'>
            <a 
              href={RESUME_DATA.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[rgba(255,255,255,0.6)] hover:text-white transition-colors'
            >
              <Github className='w-5 h-5' />
            </a>
            <a 
              href={RESUME_DATA.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[rgba(255,255,255,0.6)] hover:text-white transition-colors'
            >
              <Linkedin className='w-5 h-5' />
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
    <div className='min-h-screen bg-black'>
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
