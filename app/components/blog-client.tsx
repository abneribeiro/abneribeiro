'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BlogPost } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import BlogSearch from '@/app/components/blog-search'

interface BlogClientProps {
  initialPosts: BlogPost[]
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts)

  return (
    <>
      {initialPosts.length > 0 && (
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <BlogSearch posts={initialPosts} onFilteredPosts={setFilteredPosts} />
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 animate-fade-in">
          <div className="max-w-md mx-auto">
            <svg className="mx-auto h-12 w-12 text-muted-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Nenhum post encontrado</h3>
            <p className="text-muted-foreground">Tente ajustar os filtros ou termo de busca.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-10 lg:space-y-12">
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group border-b border-border pb-10 lg:pb-12 last:border-b-0 animate-slide-in-up hover:bg-muted/20 -mx-4 px-4 py-6 rounded-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <time dateTime={post.date} className="font-medium">
                    {formatDate(post.date)}
                  </time>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                  {post.views && (
                    <>
                      <span>•</span>
                      <span>{post.views.toLocaleString()} views</span>
                    </>
                  )}
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="group-hover:text-primary transition-colors duration-300"
                >
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  {post.description}
                </p>
                
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:bg-primary/10 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                  >
                    Ler mais
                    <svg 
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {initialPosts.length > 0 && (
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: `${filteredPosts.length * 0.1 + 0.3}s` }}>
          <p className="text-muted-foreground">
            Mais posts em breve. Siga-me no{' '}
            <Link href="https://x.com/abneribeiroo" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Twitter
            </Link>{' '}
            para atualizações.
          </p>
        </div>
      )}
    </>
  )
}