import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index} className="px-4 py-2">{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted'}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} className="px-4 py-2">{cell}</td>
      ))}
    </tr>
  ))

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border">
        <thead className="bg-muted">
          <tr>{headers}</tr>
        </thead>
        <tbody className="divide-y divide-border">{rows}</tbody>
      </table>
    </div>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props} className="text-primary hover:underline">
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} className="text-primary hover:underline" />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} className="text-primary hover:underline" />
}

function RoundedImage(props) {
  return (
    <div className="my-6">
      <Image alt={props.alt} className="rounded-lg" {...props} />
    </div>
  )
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
      className="px-1 py-0.5 rounded-md bg-muted text-foreground"
    />
  )
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug, className: `scroll-m-20 ${level === 1 ? 'text-4xl' : level === 2 ? 'text-3xl' : level === 3 ? 'text-2xl' : level === 4 ? 'text-xl' : 'text-lg'} font-bold tracking-tight` },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor invisible absolute -ml-8 pr-2 text-muted-foreground hover:visible',
          'aria-hidden': 'true',
          children: '#',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}