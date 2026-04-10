import type { SkeletonProps } from '../../types';

export function Skeleton({ className = '', width, height, rounded = 'rounded-lg' }: SkeletonProps) {
  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`skeleton-shimmer ${rounded} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({
  lines = 1,
  className = '',
  lastLineWidth = '75%',
}: {
  lines?: number;
  className?: string;
  lastLineWidth?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4"
          width={i === lines - 1 && lines > 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
}

export function SkeletonImage({ className = '', aspectRatio = '16/9' }: { className?: string; aspectRatio?: string }) {
  return (
    <div
      className={`skeleton-shimmer rounded-2xl w-full ${className}`}
      style={{ aspectRatio }}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white border border-border rounded-2xl p-6 ${className}`} aria-hidden="true">
      <div className="flex items-start gap-4 mb-4">
        <Skeleton className="w-12 h-12 rounded-xl flex-shrink-0" />
        <div className="flex-1">
          <Skeleton className="h-5 mb-2 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <SkeletonText lines={3} className="mb-4" />
      <Skeleton className="h-9 rounded-full w-32" />
    </div>
  );
}

export function SkeletonNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-border" aria-hidden="true">
      <Skeleton className="h-8 w-32" />
      <div className="hidden md:flex items-center gap-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-16" />
        ))}
      </div>
      <Skeleton className="h-10 w-28 rounded-full" />
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      <Skeleton className="h-7 w-48 rounded-full mb-12 mx-auto" />
      <Skeleton className="h-24 w-full max-w-4xl mb-4 mx-auto" />
      <Skeleton className="h-24 w-3/4 max-w-3xl mb-8 mx-auto" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
        <SkeletonText lines={2} className="w-64" />
        <div className="flex -space-x-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="w-12 h-12 rounded-full border-4 border-white" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkeletonTestimonials() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white border border-border rounded-3xl p-12 text-center">
        <Skeleton className="w-16 h-16 rounded-full mx-auto mb-8" />
        <SkeletonText lines={4} className="max-w-2xl mx-auto mb-8" />
        <Skeleton className="h-6 w-48 mx-auto" />
      </div>
    </div>
  );
}
