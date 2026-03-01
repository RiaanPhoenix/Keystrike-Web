interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'accent', 
  className = '', 
  text,
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    accent: 'text-accent'
  };

  const spinner = (
    <div className={`inline-flex items-center ${className}`} role="status" aria-live="polite">
      <svg
        className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {text && (
        <span className="ml-2 text-sm text-text-secondary">
          {text}
        </span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div 
        className="fixed inset-0 bg-background bg-opacity-75 flex items-center justify-center z-50"
        aria-label="Loading"
      >
        <div className="card p-8 text-center">
          {spinner}
          {text && (
            <p className="mt-4 text-text-secondary text-sm">{text}</p>
          )}
        </div>
      </div>
    );
  }

  return spinner;
}

// Skeleton loading component for better perceived performance
export function SkeletonLoader({ 
  lines = 3, 
  className = '', 
  avatar = false 
}: { 
  lines?: number; 
  className?: string; 
  avatar?: boolean;
}) {
  return (
    <div className={`animate-pulse ${className}`} aria-label="Loading content">
      <div className="flex space-x-4">
        {avatar && (
          <div className="rounded-full bg-surface-muted h-10 w-10"></div>
        )}
        <div className="flex-1 space-y-3 py-1">
          {Array.from({ length: lines }, (_, i) => (
            <div 
              key={i}
              className={`h-2 bg-surface-muted rounded ${
                i === lines - 1 ? 'w-3/4' : 'w-full'
              }`}
            />
          ))}
        </div>
      </div>
      <span className="sr-only">Loading content...</span>
    </div>
  );
}

// Page loading component
export function PageLoader({ message = "Loading page..." }: { message?: string }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" text={message} />
        <div className="mt-8 space-y-2">
          <SkeletonLoader lines={2} className="max-w-md mx-auto" />
          <SkeletonLoader lines={1} className="max-w-sm mx-auto" />
        </div>
      </div>
    </div>
  );
}

// Button loading state
export function LoadingButton({ 
  isLoading, 
  children, 
  loadingText = "Loading...",
  className = "",
  disabled,
  ...props 
}: {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}) {
  return (
    <button 
      className={`${className} ${isLoading ? 'cursor-not-allowed opacity-75' : ''}`}
      disabled={isLoading || disabled}
      aria-disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center">
          <LoadingSpinner size="sm" className="mr-2" />
          {loadingText}
        </div>
      ) : (
        children
      )}
    </button>
  );
}