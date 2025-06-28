export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abner Ribeiro",
    "jobTitle": "Software Developer",
    "description": "Software Developer & Digital Craftsman specializing in modern web applications with focus on performance, accessibility, and exceptional user experiences.",
    "url": "https://abneribeiro.vercel.app",
    "sameAs": [
      "https://github.com/abneribeiroo",
      "https://x.com/abneribeiroo"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
      "Web Development",
      "Software Engineering"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Software Engineering"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Abner Ribeiro",
    "description": "Personal website and blog of Abner Ribeiro, Software Developer",
    "url": "https://abneribeiro.vercel.app",
    "author": {
      "@type": "Person",
      "name": "Abner Ribeiro"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://abneribeiro.vercel.app/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
    </>
  )
}