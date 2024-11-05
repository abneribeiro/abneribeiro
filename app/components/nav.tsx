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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between h-16 max-w-xl lg:mx-auto">
          <div className="flex space-x-4">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-foreground hover:bg-accent px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ease-in-out"
              >
                {name}
              </Link>
            ))}
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
