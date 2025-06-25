interface LoadingSkeletonProps {
  className?: string
}

export default function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return (
    <div className={`animate-pulse bg-muted rounded ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse-glow"></div>
    </div>
  )
}

export function BlogPostSkeleton() {
  return (
    <article className="group border-b border-border pb-10 lg:pb-12 last:border-b-0 -mx-4 px-4 py-6 rounded-lg">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4 text-sm">
          <LoadingSkeleton className="h-4 w-24" />
          <LoadingSkeleton className="h-4 w-2" />
          <LoadingSkeleton className="h-4 w-20" />
        </div>
        
        <LoadingSkeleton className="h-8 w-3/4" />
        
        <div className="space-y-2">
          <LoadingSkeleton className="h-4 w-full" />
          <LoadingSkeleton className="h-4 w-5/6" />
          <LoadingSkeleton className="h-4 w-4/6" />
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          <LoadingSkeleton className="h-6 w-16" />
          <LoadingSkeleton className="h-6 w-20" />
          <LoadingSkeleton className="h-6 w-14" />
        </div>
        
        <LoadingSkeleton className="h-6 w-24" />
      </div>
    </article>
  )
}