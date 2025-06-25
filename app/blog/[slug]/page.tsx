import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPostSlugs } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import ViewCounter from '@/app/components/view-counter'
import MarkdownRenderer from '@/app/components/markdown-renderer'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

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

  return (
    <article className="mx-auto max-w-3xl px-3 sm:px-4 py-6 sm:py-8">
      <header className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="hidden sm:inline">•</span>
          <span>{post.readingTime} min read</span>
          <span className="hidden sm:inline">•</span>
          <ViewCounter slug={slug} />
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4 gradient-text">
          {post.title}
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          {post.description}
        </p>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <MarkdownRenderer content={post.content} />
    </article>
  )
}