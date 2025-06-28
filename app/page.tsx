import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <main className="w-full md:w-3/4 pr-0 md:pr-12">
        <h1 className="text-4xl md:text-5xl mb-2 font-medium">abner ribeiro</h1>
        <p className="text-copy my-5">i build modern web applications with clean code and great user experiences</p>
        
        <h2 className="text-2xl md:text-3xl mb-4 mt-12 font-medium">things i'm proud of</h2>
        <ul className="text-copy pl-0 space-y-1">
          <li className="pl-1">being a software developer & problem solver</li>
          <li className="pl-1">building applications that help people daily</li>
          <li className="pl-1">contributing to open source projects</li>
          <li className="pl-1">writing clean, maintainable code</li>
        </ul>
        
        <h2 className="text-2xl md:text-3xl mb-4 mt-12 font-medium">things i believe</h2>
        <ul className="text-copy pl-0 space-y-1">
          <li className="pl-1">simple solutions are often the best solutions
            <ul className="text-copy pl-0 space-y-1">
              <li className="pl-1">clean code is easier to maintain</li>
              <li className="pl-1">performance matters</li>
              <li className="pl-1">user experience should be prioritized</li>
            </ul>
          </li>
          <li className="pl-1">continuous learning is essential
            <ul className="text-copy pl-0 space-y-1">
              <li className="pl-1">technology evolves rapidly</li>
              <li className="pl-1">staying curious leads to better solutions</li>
              <li className="pl-1">sharing knowledge helps everyone grow</li>
            </ul>
          </li>

        </ul>
      </main>
      
      <nav className="mt-12 md:mt-0 w-full md:w-1/4">
        <ul className="space-y-2 md:text-right">
          <li className="p-0"><Link className="text-copy" href="/">about</Link></li>
          <li className="p-0"><Link className="text-nav hover:text-nav-hover" href="/blog">writing</Link></li>
          <li className="p-0"><a href="https://github.com/abneribeiro" target="_blank" rel="noopener noreferrer" className="text-nav hover:text-nav-hover inline-flex items-center gap-1">code<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
          <li className="p-0"><a href="https://x.com/abneribeiro0" target="_blank" rel="noopener noreferrer" className="text-nav hover:text-nav-hover inline-flex items-center gap-1">follow<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
        </ul>
      </nav>
    </div>
  )
}