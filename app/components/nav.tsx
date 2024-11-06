import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/notes': {
    name: 'Notes',
  }
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 w-full bg-background/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-foreground hover:bg-accent px-3 py-2 rounded-md text-base font-medium md:font-semibold  transition-colors duration-200 ease-in-out"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="w-10 h-10">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}