'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function AccessibilityEnhancements() {
  const announceRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Announce page changes to screen readers
  useEffect(() => {
    if (announceRef.current) {
      const pageTitle = document.title;
      announceRef.current.textContent = `Navigated to ${pageTitle}`;
      
      // Clear announcement after a brief delay
      setTimeout(() => {
        if (announceRef.current) {
          announceRef.current.textContent = '';
        }
      }, 1000);
    }
  }, [pathname]);

  // Focus management for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Enhanced tab navigation
      if (event.key === 'Tab' && !event.shiftKey) {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        // Ensure proper focus order
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
        if (currentIndex === focusableElements.length - 1) {
          // Last element, will wrap to first naturally
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const activeModal = document.querySelector('[role="dialog"][aria-modal="true"]');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label="Close"], [data-dismiss]');
          if (closeButton instanceof HTMLElement) {
            closeButton.click();
          }
        }
      }

      // Skip to main content shortcut (Alt + M)
      if (event.altKey && event.key.toLowerCase() === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation shortcut (Alt + N)
      if (event.altKey && event.key.toLowerCase() === 'n') {
        event.preventDefault();
        const navigation = document.querySelector('nav[role="navigation"], nav');
        if (navigation instanceof HTMLElement) {
          const firstLink = navigation.querySelector('a');
          if (firstLink) {
            firstLink.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Manage focus outlines for mouse vs keyboard users
  useEffect(() => {
    let isUsingMouse = false;

    const handleMouseDown = () => {
      isUsingMouse = true;
      document.body.classList.add('using-mouse');
      document.body.classList.remove('using-keyboard');
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        isUsingMouse = false;
        document.body.classList.add('using-keyboard');
        document.body.classList.remove('using-mouse');
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prefers-reduced-motion handling
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = () => {
      if (mediaQuery.matches) {
        document.body.classList.add('reduce-motion');
      } else {
        document.body.classList.remove('reduce-motion');
      }
    };

    handleChange(); // Set initial state
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <>
      {/* Live region for announcing page changes */}
      <div
        ref={announceRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      
      {/* Keyboard shortcuts help (hidden, revealed on Alt+/) */}
      <div 
        id="keyboard-shortcuts"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:bg-surface focus:border focus:border-border focus:rounded-lg focus:p-4 focus:z-50 focus:max-w-xs"
        tabIndex={-1}
      >
        <h3 className="text-lg font-semibold mb-2">Keyboard Shortcuts</h3>
        <ul className="text-sm space-y-1">
          <li><kbd className="bg-surface-secondary px-1 rounded">Alt + M</kbd> - Skip to main content</li>
          <li><kbd className="bg-surface-secondary px-1 rounded">Alt + N</kbd> - Skip to navigation</li>
          <li><kbd className="bg-surface-secondary px-1 rounded">Esc</kbd> - Close modal/dropdown</li>
          <li><kbd className="bg-surface-secondary px-1 rounded">Tab</kbd> - Navigate forward</li>
          <li><kbd className="bg-surface-secondary px-1 rounded">Shift + Tab</kbd> - Navigate backward</li>
        </ul>
      </div>
    </>
  );
}

// Keyboard shortcut to show help
if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key === '/') {
      event.preventDefault();
      const help = document.getElementById('keyboard-shortcuts');
      if (help) {
        help.focus();
      }
    }
  });
}