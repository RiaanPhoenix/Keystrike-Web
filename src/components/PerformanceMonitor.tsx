'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

// Core Web Vitals monitoring
export default function PerformanceMonitor() {
  useEffect(() => {
    const metrics: PerformanceMetrics = {};
    
    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.lcp = lastEntry.startTime;
          });
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {
          // Fallback for older browsers
          console.debug('LCP observer not available');
        }
      }
    };

    // First Input Delay (FID)
    const observeFID = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        try {
          const fidObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: any) => {
              metrics.fid = entry.processingStart - entry.startTime;
            });
          });
          fidObserver.observe({ type: 'first-input', buffered: true });
        } catch (e) {
          console.debug('FID observer not available');
        }
      }
    };

    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
                metrics.cls = clsValue;
              }
            });
          });
          clsObserver.observe({ type: 'layout-shift', buffered: true });
        } catch (e) {
          console.debug('CLS observer not available');
        }
      }
    };

    // First Contentful Paint (FCP)
    const observeFCP = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                metrics.fcp = entry.startTime;
              }
            });
          });
          fcpObserver.observe({ type: 'paint', buffered: true });
        } catch (e) {
          console.debug('FCP observer not available');
        }
      }
    };

    // Time to First Byte (TTFB)
    const observeTTFB = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        try {
          const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigationEntry) {
            metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          }
        } catch (e) {
          console.debug('TTFB measurement not available');
        }
      }
    };

    // Initialize observers
    observeLCP();
    observeFID();
    observeCLS();
    observeFCP();
    observeTTFB();

    // Report metrics after page load
    const reportMetrics = () => {
      if (process.env.NODE_ENV === 'development') {
        setTimeout(() => {
          console.group('🔍 Performance Metrics');
          console.log('LCP (Largest Contentful Paint):', metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Not measured');
          console.log('FID (First Input Delay):', metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Not measured');
          console.log('CLS (Cumulative Layout Shift):', metrics.cls ? metrics.cls.toFixed(4) : 'Not measured');
          console.log('FCP (First Contentful Paint):', metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Not measured');
          console.log('TTFB (Time to First Byte):', metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Not measured');
          
          // Performance grades
          const lcpGrade = metrics.lcp ? (metrics.lcp <= 2500 ? '✅ Good' : metrics.lcp <= 4000 ? '⚠️ Needs Improvement' : '❌ Poor') : 'N/A';
          const fidGrade = metrics.fid ? (metrics.fid <= 100 ? '✅ Good' : metrics.fid <= 300 ? '⚠️ Needs Improvement' : '❌ Poor') : 'N/A';
          const clsGrade = metrics.cls ? (metrics.cls <= 0.1 ? '✅ Good' : metrics.cls <= 0.25 ? '⚠️ Needs Improvement' : '❌ Poor') : 'N/A';
          
          console.log('--- Performance Grades ---');
          console.log('LCP Grade:', lcpGrade);
          console.log('FID Grade:', fidGrade);
          console.log('CLS Grade:', clsGrade);
          console.groupEnd();
        }, 3000);
      }

      // Send to analytics in production (placeholder)
      if (process.env.NODE_ENV === 'production') {
        // Example: Send metrics to your analytics service
        // analytics.track('performance_metrics', metrics);
      }
    };

    // Report metrics when page is fully loaded
    if (document.readyState === 'complete') {
      reportMetrics();
    } else {
      window.addEventListener('load', reportMetrics);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', reportMetrics);
    };
  }, []);

  // This component doesn't render anything
  return null;
}