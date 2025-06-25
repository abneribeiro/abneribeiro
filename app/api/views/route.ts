import { NextRequest, NextResponse } from 'next/server'

const views: Record<string, number> = {}

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json()
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    views[slug] = (views[slug] || 0) + 1
    
    return NextResponse.json({ 
      slug, 
      views: views[slug] 
    })
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  
  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
  }
  
  return NextResponse.json({ 
    slug, 
    views: views[slug] || 0 
  })
}