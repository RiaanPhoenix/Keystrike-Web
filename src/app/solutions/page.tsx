import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions | Endpoint, Network & Cloud Security',
  description: 'Comprehensive cybersecurity solutions with physical input verification. Endpoint security, network protection, and cloud security for enterprises. ROI calculator and threat assessment tools.',
  keywords: [
    'cybersecurity solutions',
    'endpoint security',
    'network security',
    'cloud security',
    'physical input verification',
    'enterprise security platform',
    'security solutions',
    'threat detection',
    'zero trust security',
    'compliance automation'
  ],
  openGraph: {
    title: 'Keystrike Security Solutions | Complete Cybersecurity Platform',
    description: 'Enterprise-grade security solutions with physical input verification. Protect endpoints, networks, and cloud infrastructure with Nordic precision.',
    url: '/solutions',
    images: [
      {
        url: '/og-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Security Solutions Overview',
      },
    ],
  },
  alternates: {
    canonical: '/solutions',
  },
};

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Complete the Identity{" "}
            <span className="text-accent">Stack</span>
          </h1>
          <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto">
            <p>Live, protocol-level oversight of all remote interactions,</p>
            <p>closing the gap between access intent and access reality.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-primary text-lg px-8 py-3">
              Request Demo
            </button>
            <button className="btn btn-primary text-lg px-8 py-3">
              Free Remote Access Risk Assessment
            </button>
            <button className="btn btn-primary text-lg px-8 py-3">
              Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Endpoint Security */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-text-primary mb-4">
                <p>Remote Access</p>
                <p>Live View</p>
              </div>
              <p className="text-text-secondary mb-6">
                Consolidate fragmented remote access environment into a single, comprehensive view of:
              </p>
              <div className="space-y-3 mb-8 text-left text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Every connection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Every user</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Every protocol</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">All remote access paths</span>
                </div>
              </div>
              <a href="/solutions/endpoint">
                <button className="btn btn-primary w-full">
                  Learn More
                </button>
              </a>
            </div>

            {/* Network Protection */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-text-primary mb-4">
                <p>Enforcement</p>
                <p>in Real-Time</p>
              </div>
              <p className="text-text-secondary mb-6">
                Block malicious actions before attackers can move laterally or execute ransomware.
              </p>
              <div className="space-y-3 mb-8 text-left text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Continuous verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Automatic blocking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Vendor/third party access support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Frictionless for users</span>
                </div>
              </div>
              <a href="/solutions/network">
                <button className="btn btn-primary w-full">
                  Learn More
                </button>
              </a>
            </div>

            {/* Cloud Security */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-text-primary mb-4">
                <p>Continuous Audit</p>
                <p>and Governance</p>
              </div>
              <p className="text-text-secondary mb-6">
                Transform remote access from unmanaged attack surface into a continuously governed layer with measurable security.
              </p>
              <div className="space-y-3 mb-8 text-left text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Audit and board ready reporting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Real-time framework for remote access policy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Policy validation and compliance</span>
                </div>
              </div>
              <a href="/solutions/cloud">
                <button className="btn btn-primary w-full">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Solutions by Industry
            </h2>
            <p className="text-xl text-text-secondary">
              Specialized security approaches for different industry requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-2">Financial Services</h3>
              <p className="text-text-secondary text-sm">PCI DSS compliance and fraud prevention with physical input verification</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-2">Healthcare</h3>
              <p className="text-text-secondary text-sm">HIPAA compliance and patient data protection through secure access controls</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-2">Government</h3>
              <p className="text-text-secondary text-sm">FedRAMP and security clearance environments with advanced threat detection</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-2">Manufacturing</h3>
              <p className="text-text-secondary text-sm">Industrial IoT security and operational technology protection</p>
            </div>
          </div>
        </div>
      </section>

{/* Platform Integration section moved to landing page */}

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Complete Your Security Stack?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            See how Keystrike's physical input verification integrates seamlessly with your existing tools 
            to provide continuous remote access governance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Free Remote Access Risk Assessment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}