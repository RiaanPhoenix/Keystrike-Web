import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AccessibilityEnhancements from '@/components/AccessibilityEnhancements';

export const metadata = {
  title: 'Partners | Strategic Alliances & Integrations',
  description: 'Explore Keystrike partner ecosystem including technology partners, channel partners, and strategic integrations.',
  keywords: 'cybersecurity partners, technology alliances, channel partners, integrations, partnership program',
  author: 'Keystrike Security',
  robots: 'index, follow',
  openGraph: {
    title: 'Partners | Strategic Alliances & Integrations',
    description: 'Explore Keystrike partner ecosystem including technology partners, channel partners, and strategic integrations.',
    url: 'https://keystrike.com/partners',
    siteName: 'Keystrike',
    images: [{
      url: 'https://keystrike.com/og-partners.jpg',
      width: 1200,
      height: 630,
      alt: 'Keystrike Partner Ecosystem'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partners | Strategic Alliances & Integrations',
    description: 'Explore Keystrike partner ecosystem including technology partners, channel partners, and strategic integrations.',
    images: ['https://keystrike.com/twitter-partners.jpg']
  }
};

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      <PerformanceMonitor />
      <AccessibilityEnhancements />
      <Navigation currentPage="partners" />
      
      <main id="main-content" className="flex-1" role="main">
        {/* Hero Section */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Partner <span className="text-accent">Ecosystem</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
                Building the future of cybersecurity through strategic partnerships and seamless integrations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
                  Become a Partner
                </a>
                <a href="/portal/partner" className="btn btn-secondary text-lg px-8 py-3">
                  Partner Portal
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="bg-surface-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Partnership Programs
              </h2>
              <p className="text-xl text-text-secondary">
                Multiple pathways to collaborate and grow together
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Technology Partners</h3>
                <p className="text-text-secondary mb-6">
                  Integrate Keystrike's physical input verification into your security solutions
                </p>
                <ul className="text-text-muted text-sm space-y-2 mb-6">
                  <li>• API access and documentation</li>
                  <li>• Technical support and training</li>
                  <li>• Co-marketing opportunities</li>
                  <li>• Revenue sharing models</li>
                </ul>
                <a href="/contact" className="btn btn-secondary">Learn More</a>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Channel Partners</h3>
                <p className="text-text-secondary mb-6">
                  Expand your portfolio with Keystrike's innovative cybersecurity solutions
                </p>
                <ul className="text-text-muted text-sm space-y-2 mb-6">
                  <li>• Sales training and certification</li>
                  <li>• Marketing development funds</li>
                  <li>• Deal registration program</li>
                  <li>• Dedicated partner support</li>
                </ul>
                <a href="/contact" className="btn btn-secondary">Apply Now</a>
              </div>
              
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Strategic Alliances</h3>
                <p className="text-text-secondary mb-6">
                  Joint go-to-market strategies and deep technology integration partnerships
                </p>
                <ul className="text-text-muted text-sm space-y-2 mb-6">
                  <li>• Joint solution development</li>
                  <li>• Shared go-to-market strategy</li>
                  <li>• Executive sponsor alignment</li>
                  <li>• Co-innovation roadmaps</li>
                </ul>
                <a href="/contact" className="btn btn-secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-text-secondary">
                Strategic partnerships with the world's leading technology companies
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[
                'Microsoft Azure', 'AWS', 'Google Cloud', 'CrowdStrike', 
                'Okta', 'Splunk', 'Palo Alto', 'ServiceNow'
              ].map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-surface-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="w-16 h-16 bg-accent bg-opacity-10 rounded flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-text-secondary text-sm font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Highlights */}
        <section className="bg-surface-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Seamless <span className="text-accent">Integrations</span>
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  Keystrike integrates natively with your existing security infrastructure, providing immediate value without disrupting your current workflows.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">SIEM Integration</h4>
                      <p className="text-text-secondary">Direct integration with Splunk, QRadar, ArcSight, and other leading SIEM platforms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">Identity Providers</h4>
                      <p className="text-text-secondary">Native support for Active Directory, Okta, Ping Identity, and Azure AD</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">Cloud Platforms</h4>
                      <p className="text-text-secondary">Certified integrations with AWS, Azure, and Google Cloud security services</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-text-primary mb-6">Integration Stats</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">150+</div>
                    <div className="text-text-secondary text-sm">Native Integrations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">5min</div>
                    <div className="text-text-secondary text-sm">Average Setup Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                    <div className="text-text-secondary text-sm">Integration Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-text-secondary text-sm">API Support</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-text-primary mb-4">Developer Resources</h4>
                  <div className="space-y-2">
                    <a href="#" className="flex items-center text-accent text-sm hover:underline">
                      <span className="mr-2">📚</span> API Documentation
                    </a>
                    <a href="#" className="flex items-center text-accent text-sm hover:underline">
                      <span className="mr-2">🔧</span> SDK Downloads
                    </a>
                    <a href="#" className="flex items-center text-accent text-sm hover:underline">
                      <span className="mr-2">💬</span> Developer Community
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Success Stories */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Partner Success Stories
              </h2>
              <p className="text-xl text-text-secondary">
                How our partners are transforming cybersecurity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">TechSecure Solutions</h3>
                    <p className="text-text-secondary text-sm">Channel Partner</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 italic">
                  "Keystrike's partner program helped us expand our security portfolio and increase revenue by 40%. The technical support and sales training were exceptional."
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-accent font-semibold">Sarah Mitchell, VP Sales</div>
                  <div className="text-text-muted text-sm">+40% Revenue Growth</div>
                </div>
              </div>
              
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">CloudGuard Systems</h3>
                    <p className="text-text-secondary text-sm">Technology Partner</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-6 italic">
                  "The Keystrike API integration was seamless. Our joint solution now provides unmatched security visibility to our enterprise customers."
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-accent font-semibold">Michael Chen, CTO</div>
                  <div className="text-text-muted text-sm">2-week Integration</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Resources */}
        <section className="bg-surface-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Partner Resources
              </h2>
              <p className="text-xl text-text-secondary">
                Everything you need to succeed with Keystrike
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Training & Certification</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Comprehensive training programs and certification paths for partners
                </p>
                <a href="#" className="text-accent text-sm font-medium hover:underline">Access Training →</a>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Marketing Assets</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Co-branded materials, case studies, and presentation templates
                </p>
                <a href="#" className="text-accent text-sm font-medium hover:underline">Download Assets →</a>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Technical Support</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Dedicated technical support and integration assistance
                </p>
                <a href="#" className="text-accent text-sm font-medium hover:underline">Get Support →</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the Keystrike partner ecosystem and transform cybersecurity together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Apply to Partner Program
              </a>
              <a href="/portal/partner" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
                Access Partner Portal
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}