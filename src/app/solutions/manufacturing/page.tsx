import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Cybersecurity | Industrial IoT & OT Security Solutions',
  description: 'Advanced cybersecurity solutions for manufacturing. Industrial IoT security, operational technology protection, and supply chain security with physical input verification.',
  keywords: [
    'manufacturing cybersecurity',
    'industrial IoT security',
    'operational technology security',
    'OT security',
    'SCADA security',
    'supply chain security',
    'physical input verification',
    'industrial control systems',
    'manufacturing IT security'
  ],
  openGraph: {
    title: 'Keystrike | Manufacturing & Industrial Cybersecurity',
    description: 'Protect manufacturing operations with advanced cybersecurity. Industrial IoT and operational technology security solutions.',
    url: '/solutions/manufacturing',
  },
};

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Manufacturing{" "}
            <span className="text-accent">Security</span>
          </h1>
          <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto">
            <p className="mb-4">In operational technology environments, authentication alone isn't enough. Manufacturing control systems underpin production capabilities, and any misuse of privileged access has real-world consequences.</p>
            <p>Keystrike continuously validates human presence during active OT sessions, significantly reducing the risk of credential misuse against systems that keep production lines running safely and efficiently.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Schedule Demo
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-3">
              Free OT Security Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Manufacturing Threat Landscape */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Manufacturing Under Attack
            </h2>
            <p className="text-xl text-text-secondary">
              Industrial systems face increasing cyberthreats that can halt production and cause safety incidents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">77%</div>
              <div className="text-text-primary font-semibold">of manufacturers</div>
              <div className="text-sm text-text-secondary">experienced cyberattacks in 2023</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$50M</div>
              <div className="text-text-primary font-semibold">average incident cost</div>
              <div className="text-sm text-text-secondary">including downtime and recovery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">23</div>
              <div className="text-text-primary font-semibold">days average downtime</div>
              <div className="text-sm text-text-secondary">per successful attack</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">68%</div>
              <div className="text-text-primary font-semibold">target OT systems</div>
              <div className="text-sm text-text-secondary">manufacturing-specific attacks</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Ransomware & Production Disruption</h3>
              <p className="text-text-secondary mb-4">Attacks that encrypt control systems and halt production lines, causing massive financial losses and safety concerns.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Production line shutdowns</li>
                <li>• Equipment damage</li>
                <li>• Safety system compromises</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Industrial Espionage</h3>
              <p className="text-text-secondary mb-4">Theft of intellectual property, trade secrets, and proprietary manufacturing processes by competitors and nation-states.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Trade secret theft</li>
                <li>• Process documentation</li>
                <li>• Customer data exfiltration</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Supply Chain Attacks</h3>
              <p className="text-text-secondary mb-4">Compromises that spread through interconnected manufacturing networks and vendor relationships.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Vendor system compromises</li>
                <li>• Third-party access abuse</li>
                <li>• Supply chain disruption</li>
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
              How Keystrike Protects Manufacturing
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">CONTROL:</span> Real-Time Production Protection
              </h3>
              <p className="text-text-secondary mb-6">
                Prevent ransomware and malicious commands from disrupting production systems. Physical input verification ensures that only legitimate operators can control critical manufacturing equipment and processes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Instant production line protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Safety system integrity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Zero production downtime</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-text-primary font-semibold">Uptime Protection</div>
                <div className="text-sm text-text-secondary mt-2">Manufacturing systems stay operational during attacks</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-surface-secondary p-8 rounded-lg order-2 lg:order-1">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-text-primary font-semibold">OT Monitoring</div>
                <div className="text-sm text-text-secondary mt-2">Continuous oversight of operational technology</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">PROVE:</span> Operational Compliance & Audit
              </h3>
              <p className="text-text-secondary mb-6">
                Maintain compliance with industry regulations and standards while providing comprehensive audit trails for all OT interactions. Meet ISO 27001, NIST, and other manufacturing security requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Manufacturing compliance reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">OT security audit trails</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Change management tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">SEE:</span> Complete Industrial Visibility
              </h3>
              <p className="text-text-secondary mb-6">
                Map and monitor your entire industrial network including SCADA systems, PLCs, HMIs, and industrial IoT devices. Gain real-time visibility into who accesses what systems and when across your manufacturing environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">SCADA system monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Industrial IoT device tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Multi-site factory networks</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-primary font-semibold">Asset Visibility</div>
                <div className="text-sm text-text-secondary mt-2">Every device and connection mapped and monitored</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Use Cases */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Protecting Every Manufacturing Environment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Automotive Manufacturing</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Assembly line control systems</li>
                <li>• Robotic manufacturing cells</li>
                <li>• Quality control systems</li>
                <li>• Paint shop operations</li>
                <li>• Supply chain integration</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Chemical & Process Industries</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Process control systems</li>
                <li>• Safety instrumented systems</li>
                <li>• Batch management systems</li>
                <li>• Environmental monitoring</li>
                <li>• Regulatory compliance systems</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Discrete Manufacturing</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• CNC machine control</li>
                <li>• Material handling systems</li>
                <li>• Inventory management</li>
                <li>• Production scheduling</li>
                <li>• Quality assurance systems</li>
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
              "In operational technology environments, authentication alone isn't enough. Our control systems underpin national infrastructure, and any misuse of privileged access has real-world consequences. Keystrike continuously validates human presence during active OT sessions, significantly reducing the risk of credential misuse against systems that keep the power grid stable and secure."
            </p>
            <div>
              <div className="font-semibold text-gray-900">CISO</div>
              <div className="text-gray-600">National Power Grid Operator</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Manufacturing Operations
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Protect your production lines and operational technology with Keystrike's advanced industrial cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Demo
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Free OT Security Assessment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}