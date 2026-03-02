import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Cybersecurity | HIPAA Compliance Solutions',
  description: 'Advanced cybersecurity solutions for healthcare organizations. HIPAA compliance, patient data protection, and medical device security with physical input verification.',
  keywords: [
    'healthcare cybersecurity',
    'HIPAA compliance',
    'patient data protection',
    'medical device security',
    'healthcare data breach prevention',
    'physical input verification',
    'medical record security',
    'healthcare IT security',
    'PHI protection'
  ],
  openGraph: {
    title: 'Keystrike | Healthcare Cybersecurity Solutions',
    description: 'Protect healthcare organizations with advanced cybersecurity. HIPAA compliance and patient data protection through physical input verification.',
    url: '/solutions/healthcare',
  },
};

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Healthcare{" "}
            <span className="text-accent">Security</span>
          </h1>
          <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto">
            <p className="mb-4">Healthcare organizations face unique cybersecurity challenges protecting patient data and critical medical systems.</p>
            <p>Keystrike provides continuous monitoring and real-time protection for healthcare IT infrastructure, ensuring HIPAA compliance while maintaining seamless clinical workflows.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Schedule Demo
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-3">
              Free HIPAA Risk Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Healthcare Threat Landscape */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Healthcare Under Attack
            </h2>
            <p className="text-xl text-text-secondary">
              Healthcare organizations face more cyberattacks than any other sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">88%</div>
              <div className="text-text-primary font-semibold">of healthcare organizations</div>
              <div className="text-sm text-text-secondary">experienced a cyberattack in 2023</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$11M</div>
              <div className="text-text-primary font-semibold">average breach cost</div>
              <div className="text-sm text-text-secondary">highest of any industry sector</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">329</div>
              <div className="text-text-primary font-semibold">days to identify</div>
              <div className="text-sm text-text-secondary">average time to detect breach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">70%</div>
              <div className="text-text-primary font-semibold">involve credentials</div>
              <div className="text-sm text-text-secondary">of healthcare breaches</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Ransomware Attacks</h3>
              <p className="text-text-secondary mb-4">Healthcare is the #1 target for ransomware, with attacks often disrupting critical patient care.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Patient care disruption</li>
                <li>• Medical device takeover</li>
                <li>• Critical system shutdowns</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Data Breaches</h3>
              <p className="text-text-secondary mb-4">Protected Health Information (PHI) is highly valuable, making healthcare a prime target for data theft.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• PHI exfiltration</li>
                <li>• Medical identity theft</li>
                <li>• HIPAA violations</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Insider Threats</h3>
              <p className="text-text-secondary mb-4">Healthcare workers with privileged access can inadvertently or maliciously compromise patient data.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Credential misuse</li>
                <li>• Data snooping</li>
                <li>• Accidental exposure</li>
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
              How Keystrike Protects Healthcare
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">CONTROL:</span> Real-Time Threat Prevention
              </h3>
              <p className="text-text-secondary mb-6">
                Stop ransomware and data breaches before they impact patient care. Physical input verification ensures only legitimate users can access critical healthcare systems and patient data.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Instant ransomware blocking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Medical device protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Zero patient care disruption</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-primary font-semibold">Uptime Protection</div>
                <div className="text-sm text-text-secondary mt-2">Critical healthcare systems remain operational during attacks</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-surface-secondary p-8 rounded-lg order-2 lg:order-1">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">HIPAA</div>
                <div className="text-text-primary font-semibold">Compliant by Design</div>
                <div className="text-sm text-text-secondary mt-2">Meets all technical and administrative safeguards</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">PROVE:</span> HIPAA Compliance & Audit Readiness
              </h3>
              <p className="text-text-secondary mb-6">
                Maintain continuous HIPAA compliance with automated audit trails and real-time monitoring. Every access to PHI is tracked, verified, and documented for regulatory inspections.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Automated HIPAA reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">PHI access audit trails</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Breach notification assistance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">SEE:</span> Complete Healthcare Environment Visibility
              </h3>
              <p className="text-text-secondary mb-6">
                Gain complete visibility across your healthcare IT infrastructure. Monitor who accesses Electronic Health Records (EHRs), medical devices, and administrative systems in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">EHR access monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Medical device oversight</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary">Multi-site hospital networks</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-secondary p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-text-primary font-semibold">Continuous Monitoring</div>
                <div className="text-sm text-text-secondary mt-2">Never miss a threat across all healthcare systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Use Cases */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Protecting Every Part of Healthcare
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Hospitals & Health Systems</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Emergency department systems</li>
                <li>• Operating room networks</li>
                <li>• Patient monitoring devices</li>
                <li>• Pharmacy management systems</li>
                <li>• Laboratory information systems</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Outpatient Clinics</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Practice management systems</li>
                <li>• Telehealth platforms</li>
                <li>• Patient portal access</li>
                <li>• Billing and coding systems</li>
                <li>• Medical imaging workstations</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Long-term Care Facilities</h3>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Resident care management</li>
                <li>• Medication administration</li>
                <li>• Family communication systems</li>
                <li>• Staff scheduling platforms</li>
                <li>• Compliance reporting tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Healthcare Organization
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Protect patient data and ensure HIPAA compliance with Keystrike's advanced cybersecurity solutions designed specifically for healthcare.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Schedule Demo
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Free HIPAA Risk Assessment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}