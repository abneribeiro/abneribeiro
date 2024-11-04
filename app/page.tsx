import Link from 'next/link'
import { RiGithubLine, RiTwitterXLine } from "react-icons/ri"
import { BlogPosts } from '@/app/components/posts'

export default function Page() {
  return (
    <section className="container mx-auto pt-8 sm:pt-10 text-wrap">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        <span className="inline-block bg-gradient-to-r from-zinc-950 to-zinc-600 bg-clip-text text-transparent">
          Abner Ribeiro
        </span>
        <span className="block text-foreground">Software Developer</span>
      </h1>

      <p className="mb-8 max-w-2xl text-base text-muted-foreground sm:text-base tracking-tight text-pretty">
        You can see more of my work on{' '}
        <Link
          href="https://x.com/abneribeiroo"
          className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
        >
          Twitter <RiTwitterXLine className="h-4 w-4" />
        </Link>{' '}
        and more of my code on{' '}
        <Link
          href="https://github.com/abneribeiroo"
          className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
        >
          GitHub <RiGithubLine className="h-4 w-4" />
        </Link>
        .
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="https://github.com/abneribeiroo"
          className="inline-flex items-center gap-1 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:text-zinc-300/90"
        >
          <RiGithubLine className="h-4 w-4" />
          View GitHub Profile
        </Link>

      </div>

      <div className="my-8">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-balance">
          Latest Posts
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}