import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AccessibilityEnhancements from '@/components/AccessibilityEnhancements';

export const metadata = {
  title: 'Platform Overview | Keystrike Security Platform',
  description: 'Explore the Keystrike cybersecurity platform featuring physical input verification, AI-powered threat detection, and comprehensive security management.',
  keywords: 'cybersecurity platform, security dashboard, threat detection, keystroke analysis, platform overview',
  author: 'Keystrike Security',
  robots: 'index, follow',
  openGraph: {
    title: 'Platform Overview | Keystrike Security Platform',
    description: 'Explore the Keystrike cybersecurity platform featuring physical input verification and comprehensive security management.',
    url: 'https://keystrike.com/platform',
    siteName: 'Keystrike',
    images: [{
      url: 'https://keystrike.com/og-platform.jpg',
      width: 1200,
      height: 630,
      alt: 'Keystrike Platform Overview'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Overview | Keystrike Security Platform',
    description: 'Explore the Keystrike cybersecurity platform featuring physical input verification and comprehensive security management.',
    images: ['https://keystrike.com/twitter-platform.jpg']
  }
};

export default function Platform() {
  return (
    <div className="min-h-screen bg-background">
      <PerformanceMonitor />
      <AccessibilityEnhancements />
      <Navigation currentPage="platform" />
      
      <main id="main-content" className="flex-1" role="main">
        {/* Hero Section */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                The <span className="text-accent">Complete</span> Security Platform
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
                Unified security management through physical input verification. One platform, complete protection, continuous governance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
                  Schedule Demo
                </a>
                <a href="/solutions" className="btn btn-secondary text-lg px-8 py-3">
                  View Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="bg-surface-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Platform Architecture
              </h2>
              <p className="text-xl text-text-secondary">
                Built for enterprise scale, designed for human simplicity
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-6">Core Components</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">Input Verification Engine</h4>
                      <p className="text-text-secondary">Real-time keystroke pattern analysis and physical input verification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">Policy Management</h4>
                      <p className="text-text-secondary">Centralized policy creation, deployment, and enforcement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">Analytics Dashboard</h4>
                      <p className="text-text-secondary">Comprehensive reporting and compliance audit trails</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-lg p-8 border border-border">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">Interactive Demo</h3>
                  <p className="text-text-secondary mb-6">Experience the platform interface</p>
                  <div className="bg-surface-secondary rounded-lg p-6 border border-border">
                    <p className="text-text-muted text-sm">Live platform demo coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Keystrike Completes Your Security Stack */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                How Keystrike <span className="text-accent">Completes</span> Your Security Stack
              </h2>
              <p className="text-xl text-text-primary">
                Enhancing your existing security investments
              </p>
            </div>
            
            {/* Column Headers */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-primary">Security Layer</h3>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-primary">The Unfinished Story</h3>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-text-primary">How Keystrike <span className="text-accent">Supercharges</span> it</h3>
              </div>
            </div>

            {/* Connected Matrix Rows */}
            <div className="space-y-6">
              {/* Row 1: PAM */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="bg-surface-secondary rounded-lg p-6 relative">
                  <div>
                    <h4 className="font-bold text-text-primary">PAM</h4>
                    <p className="text-text-primary text-sm">(CyberArk, BeyondTrust)</p>
                  </div>
                  {/* Connection Arrow - Hidden on mobile */}
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 relative">
                  <p className="text-text-primary text-sm">Controls privileged access at login, but post-login activity becomes a blind spot.</p>
                  {/* Connection Arrow - Hidden on mobile */}
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-accent border border-accent rounded-lg p-6">
                  <div>
                    <p className="text-white font-semibold text-sm">Session Multiplier:</p>
                    <p className="text-white text-sm">Governs live sessions, validating human input and preventing unauthorized commands inside authenticated access.</p>
                  </div>
                </div>
              </div>

              {/* Row 2: IGA */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="bg-surface-secondary rounded-lg p-6 relative">
                  <div>
                    <h4 className="font-bold text-text-primary">IGA</h4>
                    <p className="text-text-primary text-sm">(SailPoint, Saviynt)</p>
                  </div>
                  {/* Connection Arrow - Hidden on mobile */}
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 relative">
                  <p className="text-text-primary text-sm">Defines who should have access, but cannot prove how it's actually used.</p>
                  {/* Connection Arrow - Hidden on mobile */}
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-accent border border-accent rounded-lg p-6">
                  <div>
                    <p className="text-white font-semibold text-sm">Validation Multiplier:</p>
                    <p className="text-white text-sm">Delivers continuous, real-time proof that access intent matches access reality.</p>
                  </div>
                </div>
              </div>

              {/* Row 3: SIEM/XDR */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="bg-surface-secondary rounded-lg p-6 relative">
                  <div>
                    <h4 className="font-bold text-text-primary">SIEM/XDR</h4>
                    <p className="text-text-primary text-sm">(Splunk, SentinelOne, CrowdStrike)</p>
                  </div>
                  {/* Connection Arrow - Hidden on mobile */}
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 relative">
                  <p className="text-text-primary text-sm">Stores and correlates logs after execution. Detection does not prevent damage.</p>
                  {/* Connection Arrow - Hidden on mobile */}
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-accent border border-accent rounded-lg p-6">
                  <div>
                    <p className="text-white font-semibold text-sm">Enforcement Multiplier:</p>
                    <p className="text-white text-sm">Stops malicious actions before execution and feeds high-confidence signals downstream.</p>
                  </div>
                </div>
              </div>

              {/* Row 4: IAM/MFA */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="bg-surface-secondary rounded-lg p-6 relative">
                  <div>
                    <h4 className="font-bold text-text-primary">IAM/MFA</h4>
                    <p className="text-text-primary text-sm">(Okta, EntraID)</p>
                  </div>
                  {/* Connection Arrow - Hidden on mobile */}
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 relative">
                  <p className="text-text-primary text-sm">Verifies identity at login, then assumes trust.</p>
                  {/* Connection Arrow - Hidden on mobile */}
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-accent border border-accent rounded-lg p-6">
                  <div>
                    <p className="text-white font-semibold text-sm">Continuous Trust Multiplier:</p>
                    <p className="text-white text-sm">Extends Zero Trust into the session itself through ongoing validation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-surface-secondary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Platform Capabilities
              </h2>
              <p className="text-xl text-text-secondary">
                Everything you need for comprehensive security governance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Real-Time Monitoring</h3>
                <p className="text-text-secondary text-sm">
                  Live visibility into all user sessions with instant threat detection and response capabilities.
                </p>
              </div>
              
              <div className="card p-6">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Automated Policies</h3>
                <p className="text-text-secondary text-sm">
                  Intelligent policy enforcement that adapts to user behavior and threat landscape changes.
                </p>
              </div>
              
              <div className="card p-6">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Compliance Reports</h3>
                <p className="text-text-secondary text-sm">
                  Automated generation of compliance reports for SOC 2, ISO 27001, and other frameworks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="bg-surface-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Seamless Integration
              </h2>
              <p className="text-xl text-text-secondary">
                Works with your existing security infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['SIEM Systems', 'Identity Providers', 'Cloud Platforms', 'Endpoint Tools'].map((integration, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{integration}</h3>
                  <p className="text-text-secondary text-sm">Native integration support</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Security?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the power of physical input verification firsthand.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Request Platform Demo
              </a>
              <a href="/solutions" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
                Explore Solutions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}