import Link from 'next/link'
import { RiGithubLine, RiTwitterXLine } from "react-icons/ri"
import Timeline from '@/app/components/timeline'
import FloatingNav from '@/app/components/floating-nav'
import ScrollToTop from '@/app/components/scroll-to-top'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <FloatingNav />
      <ScrollToTop />
      <section id="home" className="relative px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 grid-background overflow-hidden">
        <div className="mx-auto max-w-4xl">
          <div className="section-number animate-fade-in">01</div>
          <div className="max-w-3xl">
            <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight animate-slide-in-left">
              <span className="gradient-text block">
                Abner Ribeiro
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-muted-foreground mt-2 sm:mt-3 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                Software Developer
              </span>
            </h1>

            <p className="mb-8 sm:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              I build modern web applications with a focus on performance, user experience, and clean code. 
              Passionate about creating digital solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <Link
                href="https://github.com/abneribeiroo"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubLine className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://x.com/abneribeiroo"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine className="h-4 w-4" />
                Twitter
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-md"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary/5 rounded-full blur-xl animate-pulse-glow" />
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-accent/10 rounded-full blur-lg animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </section>

      <section id="journey" className="px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="section-number animate-fade-in">02</div>
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-slide-in-left">
            Journey
          </h2>
          <p className="mb-12 sm:mb-16 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            My path in software development, from learning the basics to building complex applications that impact thousands of users.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Timeline />
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-muted/30 relative overflow-hidden">
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="section-number animate-fade-in">03</div>
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-slide-in-left">
            Skills & Technologies
          </h2>
          <p className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Technologies I work with to build exceptional digital experiences that perform at scale.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="group p-4 sm:p-6 lg:p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg group-hover:text-primary transition-colors">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                  <span key={tech} className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted rounded-full hover:bg-primary/10 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="group p-4 sm:p-6 lg:p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg group-hover:text-primary transition-colors">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech) => (
                  <span key={tech} className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted rounded-full hover:bg-primary/10 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="group p-4 sm:p-6 lg:p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg group-hover:text-primary transition-colors">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'AWS', 'Git', 'Linux', 'CI/CD'].map((tech) => (
                  <span key={tech} className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted rounded-full hover:bg-primary/10 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </section>

      <section id="contact" className="px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="section-number animate-fade-in">04</div>
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-bounce-in">
            Let's Work Together
          </h2>
          <p className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I'm always interested in hearing about new opportunities and interesting projects. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="mailto:contact@abnerribeiro.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-lg"
            >
              Read My Blog
            </Link>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-accent/10 rounded-full blur-2xl animate-pulse-glow" />
        <div className="absolute top-10 sm:top-20 right-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </section>
    </div>
  )
}
