'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  technologies: string[]
}

const timelineData: TimelineItem[] = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Corp',
    description: 'Leading the development of enterprise-scale web applications serving 50K+ users. Architected microservices infrastructure and implemented CI/CD pipelines, resulting in 40% faster deployment cycles. Mentoring junior developers and driving technical decisions.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    description: 'Built and maintained multiple client-facing applications with 99.9% uptime. Integrated third-party APIs and payment systems, processing over $1M in transactions monthly. Collaborated with design and product teams to implement pixel-perfect responsive interfaces.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Tailwind CSS']
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    company: 'Creative Studio',
    description: 'Developed interactive web experiences for major brands. Optimized application performance achieving 95+ Lighthouse scores. Implemented modern state management patterns and component libraries used across multiple projects.',
    technologies: ['React', 'Redux', 'SASS', 'Webpack', 'Framer Motion', 'Storybook']
  },
  {
    year: '2021',
    title: 'Junior Developer',
    company: 'Learning & Growing',
    description: 'Completed intensive bootcamp and built first production applications. Contributed to open-source projects and earned multiple certifications. Developed strong foundation in algorithms, data structures, and software engineering principles.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Git', 'Linux', 'Python']
  },
  {
    year: '2020',
    title: 'Started Coding Journey',
    company: 'Self-taught',
    description: 'Discovered passion for programming and began self-directed learning. Built first personal projects and learned fundamentals of computer science. Committed to daily coding practice and continuous skill development.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Basic Programming Concepts']
  }
]

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-center group"
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 md:border-4 border-background z-10 group-hover:scale-110 transition-transform duration-200" />
      
      {/* Content container - responsive layout */}
      <div className={`w-full pl-10 md:pl-0 md:w-5/12 ${
        index % 2 === 0 
          ? 'md:pr-8 md:text-right' 
          : 'md:pl-8 md:ml-auto md:text-left'
      }`}>
        <div className="bg-card border border-border rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              {item.year}
            </span>
          </div>
          
          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
            {item.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 font-medium">
            {item.company}
          </p>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {item.description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line - responsive positioning */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />
      
      <div className="space-y-8 sm:space-y-12">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.year} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}