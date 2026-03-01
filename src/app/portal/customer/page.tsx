import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Portal Login | Keystrike Security Dashboard',
  description: 'Secure customer portal login with physical input verification. Access real-time security monitoring, incident management, compliance reporting, and asset management.',
  keywords: [
    'customer portal login',
    'security dashboard',
    'keystrike customer access',
    'physical input verification login',
    'security monitoring',
    'incident management',
    'compliance reporting',
    'asset management'
  ],
  openGraph: {
    title: 'Keystrike Customer Portal | Security Command Center',
    description: 'Access your personalized security dashboard with real-time monitoring, threat detection, and compliance reporting.',
    url: '/portal/customer',
    images: [
      {
        url: '/og-customer-portal.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Customer Portal - Security Dashboard Access',
      },
    ],
  },
  alternates: {
    canonical: '/portal/customer',
  },
  robots: {
    index: false, // Portal login pages shouldn't be indexed
    follow: true,
  },
};

export default function CustomerPortalLogin() {
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
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-text-primary mb-2">Customer Portal</h1>
                  <p className="text-text-secondary">Access your security dashboard and manage your account</p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your.email@company.com"
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
                    Sign In to Portal
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-text-muted text-sm">
                    Protected by Keystrike physical input verification
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-text-secondary text-sm mb-4">
                    Don't have portal access yet?
                  </p>
                  <button className="btn btn-secondary text-sm">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* Portal Preview */}
            <div className="order-1 lg:order-2">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Your Security Command Center
                </h2>
                <p className="text-xl text-text-secondary">
                  Access real-time security monitoring, incident management, and compliance reporting 
                  through your personalized dashboard.
                </p>
              </div>

              {/* Dashboard Preview */}
              <div className="bg-surface-secondary rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-text-primary">Security Dashboard</h3>
                  <span className="text-green-600 text-sm font-medium">● Live</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">99.8%</div>
                    <div className="text-text-secondary text-xs">Security Score</div>
                  </div>
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">1,247</div>
                    <div className="text-text-secondary text-xs">Protected Endpoints</div>
                  </div>
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">3</div>
                    <div className="text-text-secondary text-xs">Active Alerts</div>
                  </div>
                  <div className="bg-surface rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">0</div>
                    <div className="text-text-secondary text-xs">Critical Issues</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-text-primary text-sm">System Health</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Optimal</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-text-primary text-sm">Compliance Status</span>
                    </div>
                    <span className="text-blue-600 text-sm font-medium">SOC 2 Ready</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-text-primary text-sm">Policy Updates</span>
                    </div>
                    <span className="text-yellow-600 text-sm font-medium">3 Pending</span>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-text-muted text-xs">Dashboard preview • Live data after login</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              What You'll Find in Your Portal
            </h2>
            <p className="text-xl text-text-secondary">
              Complete security management at your fingertips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Real-Time Monitoring</h3>
              <p className="text-text-secondary text-sm">
                Live security dashboard with threat detection, user activity monitoring, 
                and system health indicators.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Incident Management</h3>
              <p className="text-text-secondary text-sm">
                Track security incidents from detection to resolution with automated 
                workflows and detailed forensics.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Compliance Reports</h3>
              <p className="text-text-secondary text-sm">
                Automated compliance reporting for SOC 2, ISO 27001, PCI DSS, and 
                other regulatory requirements.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Asset Management</h3>
              <p className="text-text-secondary text-sm">
                Complete inventory of protected endpoints, devices, and users with 
                security status and configuration details.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Policy Management</h3>
              <p className="text-text-secondary text-sm">
                Configure and manage security policies, access controls, and automated 
                response rules for your organization.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">24/7 Support</h3>
              <p className="text-text-secondary text-sm">
                Direct access to technical support, knowledge base, and community 
                forums with priority assistance.
              </p>
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
            <h2 className="text-2xl font-bold text-text-primary mb-4">Bank-Level Security</h2>
            <p className="text-text-secondary mb-6">
              Your portal login is protected by Keystrike's physical input verification technology. 
              This means we verify not just your credentials, but that you're actually the one typing them.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-text-secondary">End-to-end encryption</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-text-secondary">Physical input verification</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-text-secondary">SOC 2 Type II compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}