import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AccessibilityEnhancements from '@/components/AccessibilityEnhancements';

export const metadata = {
  title: '404 - Page Not Found | Keystrike',
  description: 'The page you are looking for could not be found. Return to Keystrike homepage or explore our cybersecurity solutions.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <PerformanceMonitor />
      <AccessibilityEnhancements />
      <Navigation />
      
      <main id="main-content" className="flex-1" role="main">
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-32 h-32 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-3.306-1.1-3.306-1.1.5-.6 1.306-1.1 3.306-1.1s2.806.5 3.306 1.1S14.137 15 12 15z"></path>
                  </svg>
                </div>
                <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  Page Not <span className="text-accent">Found</span>
                </h2>
                <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                  The page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a href="/" className="btn btn-primary text-lg px-8 py-3">
                  Return Home
                </a>
                <a href="/solutions" className="btn btn-secondary text-lg px-8 py-3">
                  View Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Pages */}
        <section className="bg-surface-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Popular Pages
              </h3>
              <p className="text-text-secondary">
                Find what you're looking for with these popular destinations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/platform" className="card p-6 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:bg-opacity-20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Platform Overview</h4>
                <p className="text-text-secondary text-sm">Explore the complete security platform</p>
              </a>
              
              <a href="/solutions" className="card p-6 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:bg-opacity-20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Security Solutions</h4>
                <p className="text-text-secondary text-sm">Endpoint, network, and cloud protection</p>
              </a>
              
              <a href="/resources" className="card p-6 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:bg-opacity-20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Resources</h4>
                <p className="text-text-secondary text-sm">Guides, whitepapers, and documentation</p>
              </a>
              
              <a href="/support" className="card p-6 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:bg-opacity-20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Support Center</h4>
                <p className="text-text-secondary text-sm">Get help and technical support</p>
              </a>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-surface py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still Can't Find What You're Looking For?
            </h3>
            <p className="text-text-secondary mb-8">
              Our support team is here to help you navigate our platform and find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn btn-primary">
                Contact Support
              </a>
              <a href="/faq" className="btn btn-secondary">
                View FAQ
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}