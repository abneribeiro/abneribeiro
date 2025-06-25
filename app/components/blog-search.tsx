'use client'

import { useState, useMemo, useEffect } from 'react'
import { BlogPost } from '@/lib/blog'

interface BlogSearchProps {
  posts: BlogPost[]
  onFilteredPosts: (posts: BlogPost[]) => void
}

export default function BlogSearch({ posts, onFilteredPosts }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'readingTime'>('date')

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = posts.flatMap(post => post.tags)
    return [...new Set(tags)].sort()
  }, [posts])

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesTag = selectedTag === '' || post.tags.includes(selectedTag)
      
      return matchesSearch && matchesTag
    })

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'readingTime':
          return a.readingTime - b.readingTime
        case 'date':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

    return filtered
  }, [posts, searchTerm, selectedTag, sortBy])

  // Update parent component when filtered posts change
  useEffect(() => {
    onFilteredPosts(filteredPosts)
  }, [filteredPosts, onFilteredPosts])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedTag('')
    setSortBy('date')
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-muted-foreground" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <input
          type="search"
          placeholder="Pesquisar posts por título, descrição ou tags..."
          className="block w-full pl-10 pr-3 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Tag Filter */}
          <div className="flex-1 min-w-0">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            >
              <option value="">Todas as tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex-1 min-w-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'readingTime')}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            >
              <option value="date">Mais recentes</option>
              <option value="title">Ordem alfabética</option>
              <option value="readingTime">Tempo de leitura</option>
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        {(searchTerm || selectedTag || sortBy !== 'date') && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-accent transition-all duration-200"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {filteredPosts.length === posts.length 
            ? `${posts.length} posts` 
            : `${filteredPosts.length} de ${posts.length} posts`
          }
        </span>
        {(searchTerm || selectedTag) && (
          <span className="text-xs">
            {searchTerm && `Buscando: "${searchTerm}"`}
            {searchTerm && selectedTag && ' | '}
            {selectedTag && `Tag: ${selectedTag}`}
          </span>
        )}
      </div>

      {/* Active Tags */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Tags populares:</span>
          {allTags.slice(0, 6).map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? '' : tag)}
              className={`px-2 py-1 text-xs rounded-full border transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}