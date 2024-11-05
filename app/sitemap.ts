import { getBlogPosts } from '@/app/notes/utils'

export const baseUrl = 'https://abneribeiro.vercel.app'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/notes/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/notes'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
