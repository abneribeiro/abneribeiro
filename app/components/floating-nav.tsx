'use client'

import { useState, useEffect } from 'react'

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          setIsVisible(scrollY > 300)

          // Determine active section
          const sections = ['home', 'journey', 'skills', 'contact']
          const sectionElements = sections.map(id => document.getElementById(id))
          
          for (let i = sectionElements.length - 1; i >= 0; i--) {
            const section = sectionElements[i]
            if (section && section.offsetTop <= scrollY + 200) {
              setActiveSection(sections[i])
              break
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  const navItems = [
    { id: 'home', label: '01', name: 'Home' },
    { id: 'journey', label: '02', name: 'Journey' },
    { id: 'skills', label: '03', name: 'Skills' },
    { id: 'contact', label: '04', name: 'Contact' },
  ]

  return (
    <div className="fixed right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 animate-slide-in-right">
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-1.5 sm:p-2 shadow-lg">
        <nav className="flex flex-col space-y-1.5 sm:space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent text-muted-foreground hover:text-foreground'
              }`}
              aria-label={`Go to ${item.name} section`}
            >
              <span className="absolute inset-0 flex items-center justify-center text-xs font-mono font-semibold">
                {item.label}
              </span>
              
              {/* Tooltip - hidden on mobile */}
              <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-background border border-border px-2 py-1 rounded text-xs whitespace-nowrap shadow-lg">
                  {item.name}
                </div>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}