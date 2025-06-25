'use client'

import { useEffect, useState } from 'react'

interface ViewCounterProps {
  slug: string
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    const incrementView = async () => {
      try {
        const response = await fetch('/api/views', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug }),
        })
        
        if (response.ok) {
          const data = await response.json()
          setViews(data.views)
        }
      } catch (error) {
        console.error('Failed to increment view count:', error)
      }
    }

    incrementView()
  }, [slug])

  if (views === null) {
    return <span>— views</span>
  }

  return <span>{views.toLocaleString()} views</span>
}