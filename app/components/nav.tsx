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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80  backdrop-blur-sm shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16 max-w-xl lg:mx-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-gray-900 hover:bg-gray-200  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}