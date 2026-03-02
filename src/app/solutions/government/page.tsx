import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Cybersecurity | FedRAMP & Security Clearance Solutions',
  description: 'Advanced cybersecurity solutions for government agencies. FedRAMP compliance, security clearance environments, and critical infrastructure protection.',
  keywords: [
    'government cybersecurity',
    'FedRAMP compliance',
    'security clearance',
    'federal government security',
    'critical infrastructure protection',
    'physical input verification',
    'government IT security',
    'FISMA compliance',
    'classified systems security'
  ],
  openGraph: {
    title: 'Keystrike | Government Cybersecurity Solutions',
    description: 'Protect government agencies with advanced cybersecurity. FedRAMP compliance and security clearance environment protection.',
    url: '/solutions/government',
  },
};

export default function Government() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Government{" "}
            <span className="text-accent">Security</span>
          </h1>
          <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto">
            <p className="mb-4">For city governments, cybersecurity is about maintaining continuity of essential public services and protecting citizen data.</p>
            <p>Keystrike strengthens governmental resilience by continuously validating real user presence during privileged sessions, reducing the risk of unauthorized access across critical city infrastructure.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Schedule Demo
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-3">
              Free Security Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Government Threat Landscape */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Government Under Siege
            </h2>
            <p className="text-xl text-text-secondary">
              Government agencies face sophisticated, persistent, and well-funded adversaries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">30K+</div>
              <div className="text-text-primary font-semibold">cyberattacks daily</div>
              <div className="text-sm text-text-secondary">on US government systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-text-primary font-semibold">days to discover</div>
              <div className="text-sm text-text-secondary">average dwell time for threats</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">83%</div>
              <div className="text-text-primary font-semibold">involve credentials</div>
              <div className="text-sm text-text-secondary">of government breaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$4.7M</div>
              <div className="text-text-primary font-semibold">average breach cost</div>
              <div className="text-sm text-text-secondary">for government agencies</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Nation-State Actors</h3>
              <p className="text-text-secondary mb-4">Advanced Persistent Threats (APTs) targeting critical government infrastructure and classified information.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Long-term infiltration campaigns</li>
                <li>• Zero-day exploit deployment</li>
                <li>• Supply chain compromises</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Insider Threats</h3>
              <p className="text-text-secondary mb-4">Government employees and contractors with security clearances pose significant risks to sensitive data.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Clearance holder compromises</li>
                <li>• Privileged access abuse</li>
                <li>• Data exfiltration attempts</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Critical Infrastructure</h3>
              <p className="text-text-secondary mb-4">Attacks on power grids, water systems, and transportation networks can disrupt entire regions.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• SCADA system targeting</li>
                <li>• Industrial control systems</li>
                <li>• Emergency services disruption</li>
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
              How Keystrike Protects Government
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">CONTROL:</span> Advanced Threat Prevention
              </h3>
              <p className="text-text-secondary mb-6">
                Stop nation-state attacks and insider threats in real-time. Physical input verification provides cryptographic proof that only authorized personnel are accessing classified systems and critical infrastructure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Real-time APT blocking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Insider threat detection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Critical infrastructure protection</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-text-primary font-semibold">Threat Prevention Rate</div>
                <div className="text-sm text-text-secondary mt-2">Even against advanced persistent threats</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-surface-secondary p-8 rounded-lg order-2 lg:order-1">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">FedRAMP</div>
                <div className="text-text-primary font-semibold">Ready</div>
                <div className="text-sm text-text-secondary mt-2">Meets all federal security requirements</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">PROVE:</span> Regulatory Compliance & Audit
              </h3>
              <p className="text-text-secondary mb-6">
                Meet FedRAMP, FISMA, and other federal compliance requirements with comprehensive audit trails and real-time monitoring. Every action in classified environments is cryptographically verified.
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
                  <span className="text-text-secondary">Security clearance audit trails</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Classification level enforcement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">SEE:</span> Complete Government Infrastructure Visibility
              </h3>
              <p className="text-text-secondary mb-6">
                Gain unprecedented visibility across classified networks, SCADA systems, and critical government infrastructure. Monitor every access, every command, and every data transfer in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Classified system monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Critical infrastructure oversight</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Multi-agency coordination</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">0</div>
                <div className="text-text-primary font-semibold">Blind Spots</div>
                <div className="text-sm text-text-secondary mt-2">Complete visibility across all government systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Use Cases */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Protecting Every Level of Government
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Federal Agencies</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Classified data systems</li>
                <li>• Intelligence networks</li>
                <li>• Defense systems</li>
                <li>• National security infrastructure</li>
                <li>• Inter-agency communications</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">State Government</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• State databases</li>
                <li>• DMV and licensing systems</li>
                <li>• Tax and revenue systems</li>
                <li>• Emergency management</li>
                <li>• Inter-state coordination</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Local Government</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Municipal services</li>
                <li>• Public safety systems</li>
                <li>• Utilities management</li>
                <li>• Citizen service portals</li>
                <li>• Emergency response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Quote */}
      <section className="bg-surface py-16">
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
              "For a city government, cybersecurity is about maintaining continuity of essential public services and protecting citizen data. Credential-based attacks against municipal systems can disrupt operations and erode public trust. Keystrike strengthens our resilience by continuously validating real user presence during privileged sessions, reducing the risk of unauthorised access across critical city infrastructure."
            </p>
            <div>
              <div className="font-semibold text-gray-900">CISO</div>
              <div className="text-gray-600">City of Tulsa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Government Operations
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Protect critical government infrastructure and classified information with Keystrike's advanced cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Demo
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Free Security Assessment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}