import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keystrike Portals | Customer & Partner Access',
  description: 'Access Keystrike customer and partner portals. Secure login with physical input verification for security dashboards, partner resources, and account management.',
  keywords: [
    'keystrike portal',
    'customer portal',
    'partner portal', 
    'secure login',
    'physical input verification',
    'security dashboard',
    'partner resources',
    'account access'
  ],
  openGraph: {
    title: 'Keystrike Portal Access | Customer & Partner Login',
    description: 'Secure portal access with physical input verification. Customer security dashboards and partner business tools.',
    url: '/portal',
    images: [
      {
        url: '/og-portal.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Portal Access - Customer and Partner Login',
      },
    ],
  },
  alternates: {
    canonical: '/portal',
  },
};

export default function PortalSelection() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Access Your{" "}
            <span className="text-accent">Portal</span>
          </h1>
          <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto">
            Choose your portal to access your personalized dashboard, resources, and tools. 
            Experience Nordic precision in security management.
          </p>
        </div>
      </section>

      {/* Portal Options */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Customer Portal */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Customer Portal</h2>
              <p className="text-text-secondary mb-8">
                Access your security dashboard, manage incidents, view compliance reports, and get support. 
                Real-time visibility into your security posture.
              </p>
              
              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-primary">Security Dashboard</h4>
                    <p className="text-text-secondary text-sm">Real-time threat monitoring and security posture</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-primary">Incident Management</h4>
                    <p className="text-text-secondary text-sm">Track and manage security incidents and responses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-primary">Compliance Reports</h4>
                    <p className="text-text-secondary text-sm">Automated compliance reporting and audit trails</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-primary">Support & Resources</h4>
                    <p className="text-text-secondary text-sm">24/7 support access and knowledge base</p>
                  </div>
                </div>
              </div>
              
              <a href="/portal/customer">
                <button className="btn btn-primary w-full text-lg py-3">
                  Access Customer Portal
                </button>
              </a>
              
              <div className="mt-4 text-text-muted text-sm">
                For existing Keystrike customers • Secure login required
              </div>
            </div>

            {/* Partner Portal */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">Partner Portal</h2>
              <p className="text-text-secondary mb-8">
                Access sales resources, marketing materials, training programs, and manage your deals. 
                Everything you need to succeed with Keystrike.
              </p>
              
              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-primary">Sales Resources</h4>
                    <p className="text-text-secondary text-sm">Sales collateral, competitive intelligence, pricing tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-primary">Training & Certification</h4>
                    <p className="text-text-secondary text-sm">Technical training, certification tracks, skill assessments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-primary">Deal Management</h4>
                    <p className="text-text-secondary text-sm">Deal registration, pipeline tracking, incentive programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-text-primary">Marketing Support</h4>
                    <p className="text-text-secondary text-sm">Co-branded materials, campaign assets, market development funds</p>
                  </div>
                </div>
              </div>
              
              <a href="/portal/partner">
                <button className="btn btn-primary w-full text-lg py-3">
                  Access Partner Portal
                </button>
              </a>
              
              <div className="mt-4 text-text-muted text-sm">
                For authorized Keystrike partners • Partner credentials required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Benefits */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Why Use Keystrike Portals?
            </h2>
            <p className="text-xl text-text-secondary">
              Designed with Nordic precision for maximum efficiency and user experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Real-Time Updates</h3>
              <p className="text-text-secondary text-sm">
                Live data refreshes and instant notifications for critical events and updates
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Secure Access</h3>
              <p className="text-text-secondary text-sm">
                Multi-factor authentication and physical input verification for portal access
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Personalized Dashboard</h3>
              <p className="text-text-secondary text-sm">
                Customizable dashboards with role-based access and personalized widgets
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">24/7 Support</h3>
              <p className="text-text-secondary text-sm">
                Round-the-clock support access with built-in chat and ticketing system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Need Portal Access?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Contact our team to set up your portal access and get started with your personalized dashboard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-primary px-8 py-3">
              Request Customer Access
            </button>
            <button className="btn btn-secondary px-8 py-3">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}