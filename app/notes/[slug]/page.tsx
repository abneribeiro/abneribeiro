import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getBlogPosts } from '@/app/notes/utils'
import { baseUrl } from '@/app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props) {
  const params = await props.params;
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) return

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/notes/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Notes(props) {
  const params = await props.params;
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-8 sm:py-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/notes/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Abner Ribeiro',
            },
          }),
        }}
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {post.metadata.title}
      </h1>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 text-sm">
        <p className="text-muted-foreground mb-2 sm:mb-0">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <CustomMDX source={post.content} />
      </div>
    </article>
  )
}