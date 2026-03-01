import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AccessibilityEnhancements from '@/components/AccessibilityEnhancements';

export const metadata = {
  title: 'Support | Help Center & Technical Support',
  description: 'Get help with Keystrike security platform. Access documentation, contact support, and find answers to common questions.',
  keywords: 'technical support, help center, documentation, customer service, troubleshooting',
  author: 'Keystrike Security',
  robots: 'index, follow',
  openGraph: {
    title: 'Support | Help Center & Technical Support',
    description: 'Get help with Keystrike security platform. Access documentation, contact support, and find answers to common questions.',
    url: 'https://keystrike.com/support',
    siteName: 'Keystrike',
    images: [{
      url: 'https://keystrike.com/og-support.jpg',
      width: 1200,
      height: 630,
      alt: 'Keystrike Support Center'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support | Help Center & Technical Support',
    description: 'Get help with Keystrike security platform. Access documentation, contact support, and find answers to common questions.',
    images: ['https://keystrike.com/twitter-support.jpg']
  }
};

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      <PerformanceMonitor />
      <AccessibilityEnhancements />
      <Navigation currentPage="support" />
      
      <main id="main-content" className="flex-1" role="main">
        {/* Hero Section */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                How Can We <span className="text-accent">Help?</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
                Get the support you need to maximize your Keystrike security platform investment.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or solutions..."
                    className="w-full pl-12 pr-4 py-4 text-lg border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                  <svg className="w-6 h-6 text-text-muted absolute left-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-accent hover:text-accent-dark">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="bg-surface-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Phone Support</h3>
                <p className="text-text-secondary mb-6">
                  Speak directly with our technical support experts for immediate assistance.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-text-primary font-semibold">+1 (555) 123-4567</p>
                  <p className="text-text-muted text-sm">Mon-Fri: 8AM-8PM EST</p>
                  <p className="text-text-muted text-sm">Avg response: Under 30 seconds</p>
                </div>
                <a href="tel:+15551234567" className="btn btn-primary">Call Now</a>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Live Chat</h3>
                <p className="text-text-secondary mb-6">
                  Get instant help from our support team through our live chat system.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-accent font-semibold">● Online Now</p>
                  <p className="text-text-muted text-sm">24/7 Available</p>
                  <p className="text-text-muted text-sm">Avg response: Under 2 minutes</p>
                </div>
                <button className="btn btn-primary">Start Chat</button>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Email Support</h3>
                <p className="text-text-secondary mb-6">
                  Submit detailed requests and receive comprehensive responses from our team.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-text-primary font-semibold">support@keystrike.com</p>
                  <p className="text-text-muted text-sm">24/7 Monitoring</p>
                  <p className="text-text-muted text-sm">Avg response: Under 4 hours</p>
                </div>
                <a href="mailto:support@keystrike.com" className="btn btn-primary">Send Email</a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Quick Actions
              </h2>
              <p className="text-xl text-text-secondary">
                Common tasks and helpful resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="#" className="card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Documentation</h3>
                <p className="text-text-secondary text-sm">Complete platform guides and API docs</p>
              </a>
              
              <a href="#" className="card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">System Status</h3>
                <p className="text-text-secondary text-sm">Check platform health and incidents</p>
              </a>
              
              <a href="#" className="card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Training Videos</h3>
                <p className="text-text-secondary text-sm">Step-by-step platform tutorials</p>
              </a>
              
              <a href="#" className="card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1-2H8l-1 2H5V5z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Submit Ticket</h3>
                <p className="text-text-secondary text-sm">Create a support ticket for complex issues</p>
              </a>
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="bg-surface-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-8">Popular Articles</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold text-sm">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        <a href="#" className="hover:text-accent">Getting Started with Keystrike Platform</a>
                      </h3>
                      <p className="text-text-secondary text-sm mb-2">Complete setup guide for new installations</p>
                      <span className="text-text-muted text-xs">Updated 2 days ago • 5 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold text-sm">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        <a href="#" className="hover:text-accent">Troubleshooting Authentication Issues</a>
                      </h3>
                      <p className="text-text-secondary text-sm mb-2">Common login and SSO configuration problems</p>
                      <span className="text-text-muted text-xs">Updated 1 week ago • 8 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold text-sm">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        <a href="#" className="hover:text-accent">Configuring Policy Rules</a>
                      </h3>
                      <p className="text-text-secondary text-sm mb-2">Best practices for creating effective security policies</p>
                      <span className="text-text-muted text-xs">Updated 3 days ago • 12 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold text-sm">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        <a href="#" className="hover:text-accent">API Integration Examples</a>
                      </h3>
                      <p className="text-text-secondary text-sm mb-2">Code samples for common API use cases</p>
                      <span className="text-text-muted text-xs">Updated 5 days ago • 15 min read</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-8">Support Categories</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="card p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">Installation & Setup</h3>
                        <p className="text-text-secondary text-sm">23 articles</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  
                  <div className="card p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">Configuration</h3>
                        <p className="text-text-secondary text-sm">31 articles</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  
                  <div className="card p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">Troubleshooting</h3>
                        <p className="text-text-secondary text-sm">18 articles</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  
                  <div className="card p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">API & Integrations</h3>
                        <p className="text-text-secondary text-sm">15 articles</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="bg-accent py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Security Emergency?</h2>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              For critical security incidents requiring immediate attention, contact our emergency response team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+15551234911" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Call Emergency: +1 (555) 123-4911
              </a>
              <a href="mailto:emergency@keystrike.com" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
                Email: emergency@keystrike.com
              </a>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              Available 24/7 • Average response time: Under 5 minutes
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}