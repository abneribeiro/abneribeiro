import Link from 'next/link'
import { RiGithubLine, RiTwitterXLine } from "react-icons/ri"
import { BlogPosts } from '@/app/components/posts'

export default function Page() {
  return (
    <section className="mx-auto pt-8 sm:pt-10 text-wrap">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="inline-block bg-gradient-to-r from-primary to-muted bg-clip-text ">
          Abner Ribeiro
        </span>
        <span className="block text-foreground">Software Developer</span>
      </h1>

      <p className="mb-8 max-w-2xl text-base text-foreground sm:text-base tracking-tight">
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
          className="inline-flex items-center gap-1 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:text-primary-foreground/80"
        >
          <RiGithubLine className="h-4 w-4" />
          View GitHub Profile
        </Link>
      </div>

      <div className="my-8">
        <h2 className="mb-6 text-xl font-bold tracking-tight">
          Latest Posts
        </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
