
import Link from 'next/link'
import ThemeToggle from './theme-toggle'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            aria-label="Go to homepage"
          >
            AR
          </Link>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="flex space-x-0.5 sm:space-x-1" role="menubar">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="text-foreground hover:bg-accent px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105"
                  role="menuitem"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="ml-1 sm:ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
