import { Metadata } from 'next'
import { BlogPosts } from '@/app/components/posts'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'A collection of notes on software development, programming, and other topics.',
  keywords: ['programming', 'software development', 'web development', 'notes', 'blog','software engineering', 'javascript', 'typescript', 'react', 'nextjs', 'tailwindcss', 'css', 'html','tech', 'coding', 'code'],
  authors: [{ name: 'Abner Ribeiro' }],
  openGraph: {
    title: 'Notes',
    description: 'A collection of notes on software development, programming, and other topics.',
  },
}

export default function Page() {
  return (
    <section className="py-8 sm:py-10">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Notes</h1>
      <BlogPosts />
    </section>
  )
}