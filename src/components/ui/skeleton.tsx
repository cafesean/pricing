import { cn } from '@/framework/lib/utils';

interface SkeletonProps {
  className?: string;
  [key: string]: any;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
} 