import Link from 'next/link'
import { RiGithubLine, RiTwitterXLine } from "react-icons/ri"


export default function Component() {
  return (
    <div className="flex items-center min-h-[calc(100vh-6.6rem)] pl-4 grid-background border-x  border-border-color">
      <section className="w-full max-w-2xl py-8 sm:py-10 ">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="inline-block bg-clip-text">
            Abner Ribeiro
          </span>
          <span className="block text-foreground">Software Developer</span>
        </h1>

        <p className="mb-8 text-base text-foreground sm:text-lg tracking-tight">
          You can see more of my work on{' '}
          <Link
            href="https://x.com/abneribeiroo"
            className="inline-flex items-center gap-1 font-medium"
          >
            Twitter <RiTwitterXLine className="h-4 w-4" />
          </Link>{' '}
          and more of my code on{' '}
          <Link
            href="https://github.com/abneribeiroo"
            className="inline-flex items-center gap-1 font-medium "
          >
            GitHub <RiGithubLine className="h-4 w-4" />
          </Link>
          .
        </p>

        <div className="flex flex-wrap gap-4 mb-8 ">
          <Link
            href="https://github.com/abneribeiroo"
            className="inline-flex items-center gap-1 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-card-foreground"
          >
            <RiGithubLine className="h-4 w-4" />
            View GitHub Profile
          </Link>
        </div>
      </section>
    </div>
  )
}
