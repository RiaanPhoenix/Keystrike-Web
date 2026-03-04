import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Center Security Solutions | Physical Infrastructure Protection',
  description: 'Comprehensive data center security solutions with physical access control, environmental monitoring, and compliance automation for critical infrastructure protection.',
  keywords: [
    'data center security',
    'physical access control',
    'data center monitoring',
    'infrastructure protection',
    'facility security',
    'SOC 2 compliance',
    'data center cybersecurity',
    'critical infrastructure',
    'environmental monitoring'
  ],
  openGraph: {
    title: 'Keystrike | Data Center Security Solutions',
    description: 'Protect critical data center infrastructure with advanced security solutions. Physical access control and comprehensive monitoring.',
    url: '/solutions/data-centers',
  },
};

export default function DataCenters() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Data Center{" "}
            <span className="text-accent">Fortress</span>
          </h1>
          <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto">
            <p className="mb-4">Data centers are the backbone of digital infrastructure, requiring the highest levels of physical and cyber security.</p>
            <p>Keystrike provides comprehensive security solutions specifically designed for data center environments, combining physical access control with advanced threat detection to protect critical infrastructure.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Request Security Assessment
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-3">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Data Center Threat Landscape */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Critical Infrastructure Under Siege
            </h2>
            <p className="text-xl text-text-secondary">
              Data centers face unprecedented security challenges from both physical and cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$7.8M</div>
              <div className="text-text-primary font-semibold">average breach cost</div>
              <div className="text-sm text-text-secondary">for data center incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">93%</div>
              <div className="text-text-primary font-semibold">of data centers</div>
              <div className="text-sm text-text-secondary">experienced downtime in past year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">78%</div>
              <div className="text-text-primary font-semibold">insider threats</div>
              <div className="text-sm text-text-secondary">involve privileged access abuse</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-text-primary font-semibold">attack surface</div>
              <div className="text-sm text-text-secondary">continuous threat exposure</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Physical Security Breaches</h3>
              <p className="text-text-secondary mb-4">Unauthorized physical access to data centers can lead to equipment theft, sabotage, and data compromise.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Tailgating and social engineering</li>
                <li>• Equipment tampering</li>
                <li>• Insider threats and rogue employees</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Environmental Threats</h3>
              <p className="text-text-secondary mb-4">Power outages, cooling failures, and environmental disasters can cause catastrophic downtime and data loss.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Power system failures</li>
                <li>• Cooling system breakdowns</li>
                <li>• Fire and water damage</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Cyber Attacks</h3>
              <p className="text-text-secondary mb-4">Advanced persistent threats target data center infrastructure to access hosted customer data and disrupt services.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Ransomware targeting infrastructure</li>
                <li>• Supply chain compromises</li>
                <li>• Cloud service disruptions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keystrike Data Center Solutions */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Keystrike Secures Data Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">SEE:</span> Complete Infrastructure Visibility
              </h3>
              <p className="text-text-secondary mb-6">
                Gain comprehensive visibility across your entire data center infrastructure. Monitor physical access, environmental conditions, and network activity in real-time with centralized oversight and alerting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Physical access monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Environmental sensor integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Network traffic analysis</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">360°</div>
                <div className="text-text-primary font-semibold">Infrastructure View</div>
                <div className="text-sm text-text-secondary mt-2">Complete visibility across all data center systems</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-surface-secondary p-8 rounded-lg order-2 lg:order-1">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">99.7%</div>
                <div className="text-text-primary font-semibold">Threat Prevention</div>
                <div className="text-sm text-text-secondary mt-2">Block security incidents before impact</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">CONTROL:</span> Automated Threat Response
              </h3>
              <p className="text-text-secondary mb-6">
                Automatically respond to security threats with instant containment and remediation. Physical access controls integrate with cybersecurity measures to provide layered protection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Instant threat containment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Automated access revocation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Emergency lockdown protocols</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">PROVE:</span> Compliance & Audit Readiness
              </h3>
              <p className="text-text-secondary mb-6">
                Maintain continuous compliance with industry standards and regulations. Comprehensive audit trails and automated reporting ensure you're always audit-ready for SOC 2, ISO 27001, and other certifications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Comprehensive audit trails</span>
                </li>
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
                  <span className="text-text-secondary">Regulatory framework alignment</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-primary font-semibold">Audit Success</div>
                <div className="text-sm text-text-secondary mt-2">Pass compliance audits with confidence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Center Use Cases */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Comprehensive Data Center Protection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Enterprise Data Centers</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Mission-critical application hosting</li>
                <li>• Private cloud infrastructure</li>
                <li>• Disaster recovery facilities</li>
                <li>• High-performance computing</li>
                <li>• Financial services infrastructure</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Colocation Facilities</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Multi-tenant security isolation</li>
                <li>• Customer access management</li>
                <li>• Cage and cabinet monitoring</li>
                <li>• Visitor escort protocols</li>
                <li>• Compliance reporting per customer</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Cloud Service Providers</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Hyperscale infrastructure protection</li>
                <li>• Multi-region security coordination</li>
                <li>• Service availability assurance</li>
                <li>• Customer data segregation</li>
                <li>• Regulatory compliance automation</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Edge Data Centers</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Distributed infrastructure monitoring</li>
                <li>• Remote facility security</li>
                <li>• 5G network infrastructure</li>
                <li>• IoT data processing centers</li>
                <li>• Content delivery networks</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Government & Defense</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Classified data processing</li>
                <li>• FedRAMP compliance requirements</li>
                <li>• Multi-level security clearance</li>
                <li>• Critical infrastructure protection</li>
                <li>• National security applications</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Telecommunications</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Network operations centers</li>
                <li>• Carrier-grade infrastructure</li>
                <li>• Telecommunication switching</li>
                <li>• Internet exchange points</li>
                <li>• Submarine cable landing stations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fortify Your Data Center Infrastructure
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Protect your critical infrastructure with Keystrike's comprehensive data center security solutions. Ensure uptime, compliance, and customer trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Security Assessment
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Request Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}