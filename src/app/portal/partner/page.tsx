import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Portal Login | Keystrike Partnership Hub',
  description: 'Secure partner portal login with physical input verification. Access sales resources, deal management, training programs, and marketing support. Three-tier partner program.',
  keywords: [
    'partner portal login',
    'keystrike partner access',
    'sales resources',
    'deal management',
    'partner training',
    'marketing support',
    'partner program',
    'silver gold platinum partners'
  ],
  openGraph: {
    title: 'Keystrike Partner Portal | Partnership Hub Access',
    description: 'Access your partnership dashboard with sales tools, training resources, deal management, and marketing support programs.',
    url: '/portal/partner',
    images: [
      {
        url: '/og-partner-portal.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Partner Portal - Partnership Hub Access',
      },
    ],
  },
  alternates: {
    canonical: '/portal/partner',
  },
  robots: {
    index: false, // Portal login pages shouldn't be indexed
    follow: true,
  },
};

export default function PartnerPortalLogin() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Login Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Login Form */}
            <div className="order-2 lg:order-1">
              <div className="card p-8 max-w-md mx-auto lg:max-w-none">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-text-primary mb-2">Partner Portal</h1>
                  <p className="text-text-secondary">Access your sales resources and partnership tools</p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Partner Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="partner@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Password
                    </label>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Partner ID (Optional)
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="PTNR-12345"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="remember"
                        className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
                      />
                      <label htmlFor="remember" className="ml-2 text-sm text-text-secondary">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-accent hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <button type="submit" className="btn btn-primary w-full py-3">
                    Access Partner Portal
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-text-muted text-sm">
                    Secured with Keystrike partner authentication
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-text-secondary text-sm mb-4">
                    Interested in becoming a partner?
                  </p>
                  <button className="btn btn-secondary text-sm">
                    Partner Program Info
                  </button>
                </div>
              </div>
            </div>

            {/* Portal Preview */}
            <div className="order-1 lg:order-2">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Your Partnership Hub
                </h2>
                <p className="text-xl text-text-secondary">
                  Everything you need to succeed with Keystrike: sales tools, training resources, 
                  deal management, and marketing support.
                </p>
              </div>

              {/* Dashboard Preview */}
              <div className="bg-surface-secondary rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-text-primary">Partner Dashboard</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Gold Tier</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">$847K</div>
                    <div className="text-text-secondary text-xs">Q1 Pipeline</div>
                  </div>
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">23</div>
                    <div className="text-text-secondary text-xs">Active Deals</div>
                  </div>
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">94%</div>
                    <div className="text-text-secondary text-xs">Certification</div>
                  </div>
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">$12K</div>
                    <div className="text-text-secondary text-xs">MDF Available</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-text-primary text-sm">Deal: ACME Corp Implementation</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">$340K</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-text-primary text-sm">Training: Advanced Security</span>
                    </div>
                    <span className="text-yellow-600 text-sm font-medium">Due Mar 15</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-text-primary text-sm">Marketing: Q1 Campaign</span>
                    </div>
                    <span className="text-blue-600 text-sm font-medium">Ready</span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-text-muted text-xs">Portal preview • Full access after login</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Resources */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Partner Resources & Tools
            </h2>
            <p className="text-xl text-text-secondary">
              Everything you need to accelerate your Keystrike business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sales Tools */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Sales Resources</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Sales presentations & demos</li>
                <li>• ROI calculators & tools</li>
                <li>• Competitive battle cards</li>
                <li>• Pricing & configuration</li>
                <li>• Case studies & references</li>
              </ul>
            </div>

            {/* Training */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Training & Certification</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Technical training modules</li>
                <li>• Sales methodology course</li>
                <li>• Certification tracking</li>
                <li>• Webinar library</li>
                <li>• Hands-on lab access</li>
              </ul>
            </div>

            {/* Deal Management */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Deal Management</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Deal registration system</li>
                <li>• Pipeline tracking</li>
                <li>• Opportunity management</li>
                <li>• Quote & proposal tools</li>
                <li>• Commission tracking</li>
              </ul>
            </div>

            {/* Marketing Support */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Marketing Support</h3>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Co-branded materials</li>
                <li>• Campaign templates</li>
                <li>• Market development funds</li>
                <li>• Event support</li>
                <li>• Lead sharing program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Program Tiers */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Partner Program Tiers
            </h2>
            <p className="text-xl text-text-secondary">
              Advance through our partner program and unlock greater benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver Tier */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gray-600 font-bold text-lg">Ag</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Silver Partner</h3>
              <div className="text-text-secondary mb-6">
                <p className="mb-4">Entry level partnership with foundational benefits</p>
                <div className="text-left space-y-2 text-sm">
                  <div>• Basic sales training</div>
                  <div>• Standard margins (20%)</div>
                  <div>• Deal registration</div>
                  <div>• Marketing materials</div>
                  <div>• Email support</div>
                </div>
              </div>
              <div className="text-text-muted text-sm">Requirements: $50K annual commitment</div>
            </div>

            {/* Gold Tier */}
            <div className="card p-8 text-center border-2 border-accent">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-yellow-600 font-bold text-lg">Au</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Gold Partner</h3>
              <div className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">Most Popular</div>
              <div className="text-text-secondary mb-6">
                <p className="mb-4">Enhanced partnership with premium benefits</p>
                <div className="text-left space-y-2 text-sm">
                  <div>• Advanced technical training</div>
                  <div>• Enhanced margins (30%)</div>
                  <div>• MDF program access</div>
                  <div>• Co-marketing opportunities</div>
                  <div>• Priority support</div>
                </div>
              </div>
              <div className="text-text-muted text-sm">Requirements: $200K annual + certification</div>
            </div>

            {/* Platinum Tier */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-lg">Pt</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Platinum Partner</h3>
              <div className="text-text-secondary mb-6">
                <p className="mb-4">Elite partnership with maximum benefits</p>
                <div className="text-left space-y-2 text-sm">
                  <div>• Executive training program</div>
                  <div>• Premium margins (40%)</div>
                  <div>• Joint go-to-market</div>
                  <div>• Dedicated partner manager</div>
                  <div>• 24/7 technical support</div>
                </div>
              </div>
              <div className="text-text-muted text-sm">Requirements: $500K annual + specializations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Partner Success Stories
            </h2>
            <p className="text-xl text-text-secondary">
              See how our partners are growing their businesses with Keystrike
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">SC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">SecureCore Solutions</h3>
                  <p className="text-text-secondary text-sm">Managed Security Service Provider • Gold Partner</p>
                </div>
              </div>
              <div className="bg-surface-muted p-4 rounded-lg mb-6 italic text-text-secondary text-sm">
                "Partnering with Keystrike transformed our business. We've grown our security practice by 340% 
                in 18 months, and our customers love the physical input verification. The partner portal makes 
                it easy to manage deals and access the resources we need."
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">340%</div>
                  <div className="text-text-muted text-xs">Revenue Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">$2.1M</div>
                  <div className="text-text-muted text-xs">Annual Pipeline</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">47</div>
                  <div className="text-text-muted text-xs">Customers Added</div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">CT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">CyberTech Partners</h3>
                  <p className="text-text-secondary text-sm">Systems Integrator • Platinum Partner</p>
                </div>
              </div>
              <div className="bg-surface-muted p-4 rounded-lg mb-6 italic text-text-secondary text-sm">
                "The Keystrike partner program is best-in-class. The training and certification helped our team 
                become true experts, and the marketing support has been incredible. We're now their largest partner 
                in the region and continuing to grow."
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">89%</div>
                  <div className="text-text-muted text-xs">Win Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">$5.7M</div>
                  <div className="text-text-muted text-xs">Q4 Pipeline</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">12</div>
                  <div className="text-text-muted text-xs">Certified Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Secure Partner Access</h2>
            <p className="text-text-secondary mb-6">
              Partner portal access is protected by the same physical input verification technology 
              we provide to customers. Your login is secured at the keystroke level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-text-secondary">Partner data encryption</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-text-secondary">Keystroke verification</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-text-secondary">Role-based access control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}