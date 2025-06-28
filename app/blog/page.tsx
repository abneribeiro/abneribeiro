import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog - Abner Ribeiro',
  description: 'Some of my notes about software development and web technologies.',
}

// Enable ISR for blog list
export const revalidate = 3600 // Revalidate every hour

export default function BlogPage() {
  const posts = getAllBlogPosts()
  
  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<number, typeof posts>)
  
  const years = Object.keys(postsByYear).map(Number).sort((a, b) => b - a)

  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <main className="w-full md:w-3/4 pr-0 md:pr-12">
        <h1 className="text-4xl md:text-5xl mb-2 font-medium">writing</h1>
        <p className="text-copy my-5">some of my notes about software development</p>
        
        {posts.length === 0 ? (
          <p className="text-copy my-5">No posts yet. Coming soon...</p>
        ) : (
          <>
            {years.map(year => (
              <div key={year}>
                <h2 className="text-2xl md:text-3xl mb-4 mt-12 font-medium">{year}</h2>
                <ul className="text-copy pl-0 space-y-1">
                  {postsByYear[year].map(post => (
                    <li key={post.slug} className="pl-1">
                      <Link className="underline" href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </main>
      
      <nav className="mt-12 md:mt-0 w-full md:w-1/4">
        <ul className="space-y-2 md:text-right">
          <li className="p-0"><Link className="text-nav hover:text-nav-hover" href="/">about</Link></li>
          <li className="p-0"><Link className="text-copy" href="/blog">writing</Link></li>
          <li className="p-0"><a href="https://github.com/abneribeiro" target="_blank" rel="noopener noreferrer" className="text-nav hover:text-nav-hover inline-flex items-center gap-1">code<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
          <li className="p-0"><a href="https://x.com/abneribeiro" target="_blank" rel="noopener noreferrer" className="text-nav hover:text-nav-hover inline-flex items-center gap-1">follow<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
        </ul>
      </nav>
    </div>
  )
}