import { getAllBlogPosts } from '@/lib/blog'
import BlogClient from '@/app/components/blog-client'

export const metadata = {
  title: 'Blog - Abner Ribeiro',
  description: 'Insights sobre desenvolvimento de software, tecnologias web e otimização de performance.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="mx-auto max-w-4xl px-3 sm:px-4 py-6 sm:py-8 lg:py-16">
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <div className="section-number animate-fade-in">01</div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight animate-slide-in-left gradient-text">
          Blog
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Insights sobre desenvolvimento de software, tecnologias web, otimização de performance e o cenário em evolução do desenvolvimento moderno.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 animate-fade-in">
          <div className="max-w-md mx-auto">
            <svg className="mx-auto h-12 w-12 text-muted-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Em breve</h3>
            <p className="text-muted-foreground">Novos posts estão a caminho. Volte em breve para insights e tutoriais!</p>
          </div>
        </div>
      ) : (
        <BlogClient initialPosts={posts} />
      )}
    </div>
  )
}