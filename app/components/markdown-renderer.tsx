'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { memo, useMemo, lazy, Suspense } from 'react'
import type { Components } from 'react-markdown'

// Lazy load syntax highlighter for better performance
const SyntaxHighlighter = lazy(() => 
  import('react-syntax-highlighter/dist/cjs/prism').then(module => ({
    default: module.default
  }))
)

interface MarkdownRendererProps {
  content: string
}

function MarkdownRendererComponent({ content }: MarkdownRendererProps) {
  // Custom minimal theme that adapts to light/dark mode
  const customTheme = useMemo(() => ({
    'code[class*="language-"]': {
      color: '#525252',
      background: 'transparent',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.875rem',
      lineHeight: '1.5',
      textShadow: 'none',
    },
    'pre[class*="language-"]': {
      color: '#525252',
      background: '#f8f9fa',
      fontSize: '0.875rem',
      lineHeight: '1.5',
      margin: '1.5rem 0',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #e9ecef',
      overflow: 'auto',
      textShadow: 'none',
    },
    '.token.comment': { color: '#999' },
    '.token.prolog': { color: '#999' },
    '.token.doctype': { color: '#999' },
    '.token.cdata': { color: '#999' },
    '.token.string': { color: '#666' },
    '.token.attr-value': { color: '#666' },
    '.token.keyword': { color: '#333' },
    '.token.control': { color: '#333' },
    '.token.directive': { color: '#333' },
    '.token.unit': { color: '#333' },
    '.token.statement': { color: '#333' },
    '.token.regex': { color: '#333' },
    '.token.atrule': { color: '#333' },
    '.token.placeholder': { color: '#333' },
    '.token.variable': { color: '#333' },
    '.token.function': { color: '#666' },
    '.token.number': { color: '#666' },
    '.token.operator': { color: '#666' },
    '.token.punctuation': { color: '#999' },
    '.token.property': { color: '#666' },
    '.token.tag': { color: '#666' },
    '.token.boolean': { color: '#666' },
    '.token.selector': { color: '#666' },
    '.token.attr-name': { color: '#666' },
    '.token.class-name': { color: '#666' },
    '.token.constant': { color: '#666' },
    '.token.symbol': { color: '#666' },
    '.token.deleted': { color: '#666' },
    '.token.important': { color: '#666' },
    '.token.bold': { fontWeight: 'bold' },
    '.token.italic': { fontStyle: 'italic' },
  }), [])

  const components: Components = useMemo(() => ({
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      const isInline = !className
      
      if (!isInline && match) {
        return (
          <Suspense fallback={
            <pre className="prose-code-fallback">
              <code>{String(children).replace(/\n$/, '')}</code>
            </pre>
          }>
            <SyntaxHighlighter
              style={customTheme}
              language={match[1]}
              PreTag="pre"
              customStyle={{
                background: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '0.5rem',
                padding: '1rem',
                margin: '1.5rem 0',
                fontSize: '0.875rem',
                lineHeight: '1.5',
                fontFamily: 'var(--font-mono)',
              }}
              codeTagProps={{
                style: {
                  background: 'transparent',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                }
              }}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          </Suspense>
        )
      }
      
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }), [customTheme])

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="text-copy"
      components={components}
    >
      {content}
    </ReactMarkdown>
  )
}

const MarkdownRenderer = memo(MarkdownRendererComponent)
export default MarkdownRenderer