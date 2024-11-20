
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${"https://abneribeiro.vercel.app"}/sitemap.xml`,
  }
}
