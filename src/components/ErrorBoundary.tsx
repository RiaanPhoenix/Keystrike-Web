'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Log to error monitoring service
      // errorMonitoringService.captureException(error, { extra: errorInfo });
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg 
                  className="w-8 h-8 text-red-600" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              
              <h1 className="text-2xl font-bold text-text-primary mb-4">
                Something went wrong
              </h1>
              
              <p className="text-text-secondary mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
              </p>

              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="btn btn-primary w-full"
                  aria-label="Try to recover from error"
                >
                  Try Again
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="btn btn-secondary w-full"
                  aria-label="Reload the page"
                >
                  Reload Page
                </button>
                
                <a 
                  href="/" 
                  className="btn btn-secondary w-full"
                  aria-label="Go to homepage"
                >
                  Go to Homepage
                </a>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-text-secondary text-sm cursor-pointer hover:text-text-primary">
                    Error Details (Development)
                  </summary>
                  <div className="mt-4 p-4 bg-red-50 rounded border border-red-200 text-sm">
                    <h3 className="font-semibold text-red-800 mb-2">Error:</h3>
                    <pre className="text-red-700 whitespace-pre-wrap break-words mb-4">
                      {this.state.error.toString()}
                    </pre>
                    
                    {this.state.errorInfo && (
                      <>
                        <h3 className="font-semibold text-red-800 mb-2">Component Stack:</h3>
                        <pre className="text-red-700 whitespace-pre-wrap break-words text-xs">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </>
                    )}
                  </div>
                </details>
              )}

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-text-muted text-sm">
                  If the problem persists, please contact{' '}
                  <a 
                    href="mailto:support@keystrike.com" 
                    className="text-accent hover:underline"
                  >
                    support@keystrike.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Hook version for functional components
export function useErrorHandler() {
  return (error: Error, errorInfo?: ErrorInfo) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught:', error, errorInfo);
    } else {
      // Log to error monitoring service
      // errorMonitoringService.captureException(error, { extra: errorInfo });
    }
  };
}