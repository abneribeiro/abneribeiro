import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPostSlugs } from '@/lib/blog'
import MarkdownRenderer from '@/app/components/markdown-renderer'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Enable ISR with revalidation
export const revalidate = 3600 // Revalidate every hour
export const dynamic = 'force-static'
export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Abner Ribeiro',
    }
  }

  return {
    title: `${post.title} - Abner Ribeiro`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}


export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const publishedYear = new Date(post.date).getFullYear()
  const authorName = 'abner ribeiro'
  
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <main className="w-full md:w-3/4 pr-0 md:pr-12">
        <h1 className="text-4xl md:text-5xl mb-2 font-medium">{post.title.toLowerCase()}</h1>
        <p className="text-lg text-copy mb-16">{publishedYear} – {authorName}</p>
        
        <div className="prose">
          <MarkdownRenderer content={post.content} />
        </div>
      </main>
      
      <nav className="mt-12 md:mt-0 w-full md:w-1/4">
        <ul className="space-y-2 md:text-right">
          <li className="p-0"><Link className="text-nav hover:text-nav-hover" href="/">about</Link></li>
          <li className="p-0"><Link className="text-nav hover:text-nav-hover" href="/blog">writing</Link></li>
          <li className="p-0"><a href="https://github.com/abneribeiro" target="_blank" rel="noopener noreferrer" className="text-nav hover:text-nav-hover inline-flex items-center gap-1">code<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
          <li className="p-0"><a href="https://x.com/abneribeiro" target="_blank" rel="noopener noreferrer" className="text-nav hover:text-nav-hover inline-flex items-center gap-1">follow<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
        </ul>
      </nav>
    </div>
  )
}