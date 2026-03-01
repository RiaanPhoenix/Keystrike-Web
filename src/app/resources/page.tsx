import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AccessibilityEnhancements from '@/components/AccessibilityEnhancements';

export const metadata = {
  title: 'Resources | Security Insights & Best Practices',
  description: 'Access cybersecurity resources, whitepapers, webinars, and industry insights from Keystrike security experts.',
  keywords: 'cybersecurity resources, whitepapers, webinars, security guides, best practices, threat intelligence',
  author: 'Keystrike Security',
  robots: 'index, follow',
  openGraph: {
    title: 'Resources | Security Insights & Best Practices',
    description: 'Access cybersecurity resources, whitepapers, webinars, and industry insights from Keystrike security experts.',
    url: 'https://keystrike.com/resources',
    siteName: 'Keystrike',
    images: [{
      url: 'https://keystrike.com/og-resources.jpg',
      width: 1200,
      height: 630,
      alt: 'Keystrike Security Resources'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | Security Insights & Best Practices',
    description: 'Access cybersecurity resources, whitepapers, webinars, and industry insights from Keystrike security experts.',
    images: ['https://keystrike.com/twitter-resources.jpg']
  }
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <PerformanceMonitor />
      <AccessibilityEnhancements />
      <Navigation currentPage="resources" />
      
      <main id="main-content" className="flex-1" role="main">
        {/* Hero Section */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Security <span className="text-accent">Resources</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
                Industry insights, best practices, and expert guidance to strengthen your cybersecurity posture.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="bg-surface-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Whitepapers</h3>
                <p className="text-text-secondary text-sm">In-depth research and analysis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Webinars</h3>
                <p className="text-text-secondary text-sm">Expert-led training sessions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 11-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13V12a1 1 0 011-1z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Case Studies</h3>
                <p className="text-text-secondary text-sm">Real-world implementation examples</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Guides</h3>
                <p className="text-text-secondary text-sm">Step-by-step implementation guides</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-text-secondary">
                Latest insights from our security experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card overflow-hidden">
                <div className="bg-accent bg-opacity-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded">WHITEPAPER</span>
                    <span className="text-text-muted text-sm">New</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    The Future of Physical Input Verification
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm mb-4">
                    Comprehensive analysis of how physical input verification is revolutionizing cybersecurity in remote work environments.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-xs">March 2026 • 24 pages</span>
                    <a href="#" className="text-accent text-sm font-medium hover:underline">
                      Download →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="bg-accent bg-opacity-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">WEBINAR</span>
                    <span className="text-text-muted text-sm">Upcoming</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Zero Trust Architecture Implementation
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm mb-4">
                    Expert-led session on implementing zero trust principles with physical input verification as the foundation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-xs">March 15, 2:00 PM EST</span>
                    <a href="#" className="text-accent text-sm font-medium hover:underline">
                      Register →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="bg-accent bg-opacity-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded">CASE STUDY</span>
                    <span className="text-text-muted text-sm">Popular</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    GlobalBank Security Transformation
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm mb-4">
                    How a leading financial institution reduced security incidents by 96% through Keystrike implementation.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-xs">Success Story • 8 min read</span>
                    <a href="#" className="text-accent text-sm font-medium hover:underline">
                      Read Story →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Library */}
        <section className="bg-surface-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Resource Library
              </h2>
              <p className="text-xl text-text-secondary">
                Explore our complete collection of security resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary">Recent Publications</h3>
                
                <div className="card p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">2026 Cybersecurity Trends Report</h4>
                    <p className="text-text-secondary text-xs">Industry outlook and predictions</p>
                    <span className="text-text-muted text-xs">Feb 2026</span>
                  </div>
                  <a href="#" className="text-accent text-sm hover:underline">Download</a>
                </div>
                
                <div className="card p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v8h12V6H4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Keystroke Analysis Best Practices</h4>
                    <p className="text-text-secondary text-xs">Implementation guide for IT teams</p>
                    <span className="text-text-muted text-xs">Jan 2026</span>
                  </div>
                  <a href="#" className="text-accent text-sm hover:underline">Download</a>
                </div>
                
                <div className="card p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Compliance Automation Checklist</h4>
                    <p className="text-text-secondary text-xs">SOC 2 and ISO 27001 readiness</p>
                    <span className="text-text-muted text-xs">Dec 2025</span>
                  </div>
                  <a href="#" className="text-accent text-sm hover:underline">Download</a>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary">Popular Webinars</h3>
                
                <div className="card p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Introduction to Physical Input Verification</h4>
                    <p className="text-text-secondary text-xs">45 minutes • Beginner level</p>
                    <span className="text-text-muted text-xs">2.1k views</span>
                  </div>
                  <a href="#" className="text-accent text-sm hover:underline">Watch</a>
                </div>
                
                <div className="card p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Advanced Threat Detection Techniques</h4>
                    <p className="text-text-secondary text-xs">60 minutes • Advanced level</p>
                    <span className="text-text-muted text-xs">1.8k views</span>
                  </div>
                  <a href="#" className="text-accent text-sm hover:underline">Watch</a>
                </div>
                
                <div className="card p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">ROI of Security Investment</h4>
                    <p className="text-text-secondary text-xs">30 minutes • Executive level</p>
                    <span className="text-text-muted text-xs">1.5k views</span>
                  </div>
                  <a href="#" className="text-accent text-sm hover:underline">Watch</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-accent py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest security insights delivered to your inbox monthly.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-accent px-6 py-3 font-medium rounded-r-lg hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}