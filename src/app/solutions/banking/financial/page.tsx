import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Services Cybersecurity | PCI DSS Compliance Solutions',
  description: 'Advanced cybersecurity solutions for financial institutions. PCI DSS compliance, fraud prevention, and real-time threat detection with physical input verification.',
  keywords: [
    'financial services cybersecurity',
    'PCI DSS compliance',
    'banking security',
    'financial fraud prevention',
    'DORA compliance',
    'physical input verification',
    'financial institution security',
    'payment card security',
    'financial data protection'
  ],
  openGraph: {
    title: 'Keystrike | Financial Services Cybersecurity Solutions',
    description: 'Protect financial institutions with advanced cybersecurity. PCI DSS compliance and fraud prevention through physical input verification.',
    url: '/solutions/financial',
  },
};

export default function FinancialServices() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Financial Services{" "}
            <span className="text-accent">Security</span>
          </h1>
          <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto">
            <p className="mb-4">For financial institutions, credential compromise isn't just an IT issue—it's systemic risk.</p>
            <p>Keystrike provides continuous validation of user presence during privileged sessions, reducing unauthorized access to critical financial infrastructure and reinforcing trust in financial stability.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Schedule Demo
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-3">
              Free Risk Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Financial Services Face Unique Challenges
            </h2>
            <p className="text-xl text-text-secondary">
              Traditional security tools weren't built for the demands of financial institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Regulatory Compliance</h3>
              <p className="text-text-secondary mb-4">PCI DSS, DORA, and other financial regulations require demonstrable controls over privileged access.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Continuous monitoring requirements</li>
                <li>• Audit trail obligations</li>
                <li>• Real-time reporting demands</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Fraud Prevention</h3>
              <p className="text-text-secondary mb-4">Financial institutions are prime targets for credential-based attacks and insider threats.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Credential stuffing attacks</li>
                <li>• Account takeover attempts</li>
                <li>• Insider fraud detection</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Third-Party Access</h3>
              <p className="text-text-secondary mb-4">Banks must provide secure access to vendors, partners, and remote employees.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Vendor access management</li>
                <li>• Remote work security</li>
                <li>• Cross-border operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keystrike Solutions */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Keystrike Protects Financial Institutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">CONTROL:</span> Real-Time Fraud Prevention
              </h3>
              <p className="text-text-secondary mb-6">
                Block unauthorized financial transactions and account access attempts the moment they occur. Physical input verification ensures that only legitimate users can execute sensitive operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Instant blocking of suspicious transactions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Prevention of account takeover attacks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Zero-false-positive fraud alerts</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">99.7%</div>
                <div className="text-text-primary font-semibold">Fraud Detection Rate</div>
                <div className="text-sm text-text-secondary mt-2">With zero false positives through physical verification</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-surface-secondary p-8 rounded-lg order-2 lg:order-1">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-primary font-semibold">Audit Trail Coverage</div>
                <div className="text-sm text-text-secondary mt-2">Every keystroke cryptographically verified and logged</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">PROVE:</span> Regulatory Compliance
              </h3>
              <p className="text-text-secondary mb-6">
                Meet PCI DSS, DORA, and other regulatory requirements with continuous audit trails and real-time compliance reporting. Every action is cryptographically verified and traceable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Automated compliance reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Immutable audit logs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Real-time regulatory dashboard</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">SEE:</span> Complete Financial Infrastructure Visibility
              </h3>
              <p className="text-text-secondary mb-6">
                Gain unprecedented visibility into who accesses critical financial systems, when, and what they do. Map all remote access paths across trading floors, data centers, and cloud environments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Trading system access monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Core banking system oversight</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Cross-border transaction tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">&lt;2s</div>
                <div className="text-text-primary font-semibold">Threat Response Time</div>
                <div className="text-sm text-text-secondary mt-2">From detection to containment across all systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Quote */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
              "Under DORA, financial institutions must demonstrate not just strong controls, but operational resilience under stress. For a central bank, credential compromise is not an IT issue, it is systemic risk. Keystrike strengthens our control framework by continuously validating real user presence during privileged sessions, reducing the likelihood of unauthorized access to critical financial infrastructure and reinforcing trust in the stability of the financial system."
            </p>
            <div>
              <div className="font-semibold text-gray-900">CISO</div>
              <div className="text-gray-600">Nordic Central Bank</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect Your Financial Institution
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading banks and financial institutions using Keystrike to prevent fraud and maintain regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Demo
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Free Financial Risk Assessment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}