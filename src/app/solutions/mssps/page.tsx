import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MSSP Cybersecurity Solutions | Managed Security Service Providers',
  description: 'Empower MSSPs with advanced cybersecurity solutions. Multi-tenant platform for managed security service providers to deliver physical input verification services.',
  keywords: [
    'MSSP cybersecurity',
    'managed security services',
    'multi-tenant security platform',
    'MSSP solutions',
    'managed detection response',
    'security service provider tools',
    'SOC as a service',
    'security operations center',
    'managed cybersecurity'
  ],
  openGraph: {
    title: 'Keystrike | MSSP Cybersecurity Solutions',
    description: 'Scale your MSSP with advanced cybersecurity solutions. Multi-tenant platform for managed security service providers.',
    url: '/solutions/mssps',
  },
};

export default function MSSPs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            MSSP{" "}
            <span className="text-accent">Excellence</span>
          </h1>
          <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto">
            <p className="mb-4">Managed Security Service Providers face increasing demand for advanced threat detection and response capabilities.</p>
            <p>Keystrike provides the multi-tenant platform and advanced security technologies MSSPs need to deliver superior cybersecurity services at scale while maintaining competitive margins.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Partner with Us
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-3">
              Request MSSP Demo
            </a>
          </div>
        </div>
      </section>

      {/* MSSP Market Challenges */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              MSSP Market Pressures
            </h2>
            <p className="text-xl text-text-secondary">
              Growing demand meets shrinking margins and talent shortages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">47%</div>
              <div className="text-text-primary font-semibold">annual MSSP growth</div>
              <div className="text-sm text-text-secondary">market expanding rapidly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">3.5M</div>
              <div className="text-text-primary font-semibold">cybersecurity jobs</div>
              <div className="text-sm text-text-secondary">remain unfilled globally</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">73%</div>
              <div className="text-text-primary font-semibold">of enterprises</div>
              <div className="text-sm text-text-secondary">outsource security operations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">28%</div>
              <div className="text-text-primary font-semibold">margin pressure</div>
              <div className="text-sm text-text-secondary">from commoditized services</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Talent Shortage</h3>
              <p className="text-text-secondary mb-4">Skilled cybersecurity professionals are scarce and expensive, limiting MSSP growth and service quality.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• High analyst turnover</li>
                <li>• Escalating salary costs</li>
                <li>• Training and retention challenges</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Service Commoditization</h3>
              <p className="text-text-secondary mb-4">Traditional MSSP services are becoming commoditized, driving down prices and margins.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Price-based competition</li>
                <li>• Margin compression</li>
                <li>• Difficulty differentiating</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Scaling Challenges</h3>
              <p className="text-text-secondary mb-4">Growing client bases while maintaining service quality requires advanced automation and platforms.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Manual processes don't scale</li>
                <li>• Alert fatigue and burnout</li>
                <li>• Complex multi-tenant requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keystrike MSSP Platform */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Keystrike Empowers MSSPs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">SCALE:</span> Multi-Tenant Platform
              </h3>
              <p className="text-text-secondary mb-6">
                Purpose-built multi-tenant architecture allows MSSPs to efficiently manage hundreds of clients from a single platform. Advanced automation reduces analyst workload while improving detection accuracy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Single platform, unlimited clients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Automated client provisioning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">White-label customization</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10x</div>
                <div className="text-text-primary font-semibold">Analyst Efficiency</div>
                <div className="text-sm text-text-secondary mt-2">Manage more clients with fewer resources</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-surface-secondary p-8 rounded-lg order-2 lg:order-1">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">95%</div>
                <div className="text-text-primary font-semibold">False Positive Reduction</div>
                <div className="text-sm text-text-secondary mt-2">Focus on real threats, not noise</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">DIFFERENTIATE:</span> Advanced Threat Detection
              </h3>
              <p className="text-text-secondary mb-6">
                Stand out from commodity MSSP services with Keystrike's unique physical input verification technology. Detect threats that other solutions miss while dramatically reducing false positives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Unique detection methodology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Premium pricing capability</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Competitive differentiation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">GROW:</span> Revenue Expansion Opportunities
              </h3>
              <p className="text-text-secondary mb-6">
                Expand service offerings and increase client lifetime value with Keystrike's comprehensive security platform. Upsell advanced capabilities and retain clients with superior threat protection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Expanded service portfolio</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Higher client retention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Recurring revenue growth</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">156%</div>
                <div className="text-text-primary font-semibold">Revenue Growth</div>
                <div className="text-sm text-text-secondary mt-2">Average annual increase for Keystrike MSSP partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSSP Use Cases */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              MSSP Service Offerings with Keystrike
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">24/7 SOC Services</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Continuous threat monitoring</li>
                <li>• Incident response and containment</li>
                <li>• Threat hunting and investigation</li>
                <li>• Vulnerability management</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Managed Detection & Response</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Advanced threat detection</li>
                <li>• Real-time response automation</li>
                <li>• Forensic analysis and reporting</li>
                <li>• Threat intelligence integration</li>
                <li>• Custom playbook development</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Cybersecurity Consulting</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Security assessments and audits</li>
                <li>• Compliance framework implementation</li>
                <li>• Security architecture design</li>
                <li>• Incident response planning</li>
                <li>• Security awareness training</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Cloud Security Services</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Multi-cloud security management</li>
                <li>• Container and serverless protection</li>
                <li>• Cloud configuration monitoring</li>
                <li>• DevSecOps integration</li>
                <li>• Cloud compliance management</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Endpoint Protection</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Advanced endpoint detection</li>
                <li>• Endpoint response and remediation</li>
                <li>• Mobile device security</li>
                <li>• Patch management services</li>
                <li>• Device compliance monitoring</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Identity & Access Management</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Privileged access management</li>
                <li>• Identity governance and administration</li>
                <li>• Multi-factor authentication</li>
                <li>• Single sign-on implementation</li>
                <li>• Access certification and review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your MSSP Business
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the leading MSSPs who are scaling their businesses and increasing margins with Keystrike's advanced cybersecurity platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Partner with Keystrike
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Schedule MSSP Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}