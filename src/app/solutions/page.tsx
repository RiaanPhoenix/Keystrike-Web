import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remote Access Governance Solutions | Session Security by Industry | Keystrike',
  description: 'Keystrike delivers continuous remote access governance across critical industries — OT/ICS, financial services, healthcare, government, and data centers. SEE live sessions. CONTROL in real time. PROVE with cryptographic attestation.',
  keywords: [
    'remote access governance solutions',
    'session governance by industry',
    'continuous remote access governance',
    'OT remote access governance',
    'ICS session governance',
    'banking remote access compliance',
    'government privileged access governance',
    'healthcare remote access HIPAA',
    'data center session governance',
    'NIS2 remote access compliance',
    'DORA remote access evidence',
    'deterministic enforcement',
    'cryptographic attestation',
    'post-authentication security',
  ],
  openGraph: {
    title: 'Remote Access Governance Solutions by Industry | Keystrike',
    description: 'Keystrike delivers continuous remote access governance across critical industries — OT/ICS, financial services, healthcare, government, and data centers. SEE live sessions. CONTROL in real time. PROVE with cryptographic attestation.',
    url: 'https://keystrike.com/solutions',
    images: [
      {
        url: '/og-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Remote Access Governance Solutions by Industry',
      },
    ],
  },
  alternates: {
    canonical: 'https://keystrike.com/solutions',
  },
};

const solutionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Remote Access Governance Solutions by Industry',
  description:
    'Keystrike delivers continuous remote access governance — SEE, CONTROL, and PROVE — across OT/ICS, financial services, healthcare, government, MSSPs, and data centers.',
  url: 'https://keystrike.com/solutions',
  about: {
    '@type': 'Thing',
    name: 'Remote Access Governance',
    description:
      'Continuous governance of authenticated remote access sessions through live visibility (SEE), deterministic enforcement (CONTROL), and cryptographic attestation (PROVE). Addresses the Governance Gap between access intent and access reality.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Keystrike replace our PAM or IAM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Keystrike completes PAM and IAM by governing what happens inside the sessions they grant. PAM controls who gets in. Keystrike governs what they do once they\'re in.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Keystrike differ from a SIEM or XDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SIEM and XDR log events after they occur — detection is inherently reactive. Keystrike operates inside the live session and enforces policy before commands execute. It complements your SIEM by generating cryptographically attested session evidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries does Keystrike serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keystrike is deployed in OT/ICS and industrial environments, financial services, healthcare, government, MSSP, and data center environments — sectors where remote access governance is a regulatory and operational requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What compliance frameworks does Keystrike support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keystrike generates audit-ready evidence directly applicable to NIS2, DORA, PCI DSS, HIPAA, FedRAMP, CMMC, SOC 2, ISO 27001, and IEC 62443 requirements for remote access governance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can Keystrike be deployed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Customers report Keystrike is operational in approximately 20 minutes, with clear documentation and deployment designed not to disrupt existing workflows or user experience.',
      },
    },
  ],
};

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation currentPage="solutions" />

      {/* Hero */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            The Governance Layer Your{' '}
            <span className="text-accent">Security Stack Was Missing</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            IAM and PAM grant access. SIEM and XDR log events after the fact. Keystrike governs
            what happens during the live session — with real-time enforcement, live session
            visibility, and cryptographically attested proof of control.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Request an Executive Briefing
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-3">
              Free Remote Access Risk Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Governance Gap */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 text-center">
            The Governance Gap
          </h2>
          <div className="space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              Authentication tells you who was granted access. It tells you nothing about what they
              do with it. That space — between access intent and access reality — is where
              authenticated attackers operate, ransomware is deployed through legitimate credentials,
              and third-party contractors exceed their authorized scope.
            </p>
            <p className="font-semibold text-text-primary">
              Keystrike closes this gap. Not before login. Not after. During the live session itself.
            </p>
          </div>
        </div>
      </section>

      {/* SEE CONTROL PROVE */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              SEE. CONTROL. PROVE.
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Keystrike governs authenticated remote access sessions through three integrated capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SEE */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded mb-3 tracking-widest">SEE</span>
              <div className="text-2xl font-bold text-text-primary mb-4">
                <p>Remote Access</p>
                <p>Live View</p>
              </div>
              <p className="text-text-secondary mb-6">
                Consolidate your fragmented remote access environment into a single, comprehensive
                view of:
              </p>
              <div className="space-y-3 mb-8 text-left text-sm">
                {['Every connection', 'Every user', 'Every protocol', 'All remote access paths'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/platform" className="btn btn-primary w-full block text-center">
                Learn More
              </a>
            </div>

            {/* CONTROL */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded mb-3 tracking-widest">CONTROL</span>
              <div className="text-2xl font-bold text-text-primary mb-4">
                <p>Enforcement</p>
                <p>in Real-Time</p>
              </div>
              <p className="text-text-secondary mb-6">
                Block unauthorized actions before attackers can move laterally or execute ransomware.
              </p>
              <div className="space-y-3 mb-8 text-left text-sm">
                {[
                  'Continuous verification inside the session',
                  'Automatic blocking of unauthorized commands',
                  'Vendor and third-party access governance',
                  'Frictionless for legitimate users',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/platform" className="btn btn-primary w-full block text-center">
                Learn More
              </a>
            </div>

            {/* PROVE */}
            <div className="card p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
              </div>
              <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded mb-3 tracking-widest">PROVE</span>
              <div className="text-2xl font-bold text-text-primary mb-4">
                <p>Continuous Audit</p>
                <p>and Governance</p>
              </div>
              <p className="text-text-secondary mb-6">
                Transform remote access from an unmanaged attack surface into a continuously governed
                layer with measurable, provable security.
              </p>
              <div className="space-y-3 mb-8 text-left text-sm">
                {[
                  'Audit-ready and board-ready reporting',
                  'Real-time framework for remote access policy',
                  'Cryptographically attested evidence for every session',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/platform" className="btn btn-primary w-full block text-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Complement */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center">
            How Keystrike Fits Your Security Stack
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Keystrike does not replace any tool in your stack. It completes the layer that was always missing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-surface rounded-xl p-6 border border-border text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Layer 1</p>
              <h3 className="font-bold text-text-primary mb-2">IAM / PAM / MFA</h3>
              <p className="text-text-secondary text-sm mb-4">Grant access</p>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">✓ In your stack</span>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-border text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Layer 2</p>
              <h3 className="font-bold text-text-primary mb-2">SIEM / XDR / SOAR</h3>
              <p className="text-text-secondary text-sm mb-4">Log events after the fact</p>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">✓ In your stack</span>
            </div>
            <div className="bg-accent rounded-xl p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-3">Layer 3</p>
              <h3 className="font-bold text-white mb-2">Keystrike</h3>
              <p className="text-blue-100 text-sm mb-4">Govern the live session</p>
              <div className="flex justify-center gap-2 flex-wrap">
                <span className="inline-block bg-white bg-opacity-20 text-white text-xs font-medium px-2 py-1 rounded-full">SEE</span>
                <span className="inline-block bg-white bg-opacity-20 text-white text-xs font-medium px-2 py-1 rounded-full">CONTROL</span>
                <span className="inline-block bg-white bg-opacity-20 text-white text-xs font-medium px-2 py-1 rounded-full">PROVE</span>
              </div>
            </div>
          </div>
          <p className="text-center text-text-secondary text-sm mt-8 max-w-2xl mx-auto">
            Keystrike governs what authenticated users actually do inside live sessions, in real time — adding the governance layer that was never there before.
          </p>
        </div>
      </section>

      {/* By Industry */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Remote Access Governance by Industry
            </h2>
            <p className="text-xl text-text-secondary">
              Remote access governance for the sectors where authenticated access gone wrong has real consequences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/solutions/manufacturing" className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-4">Operational Technology</h3>
              <p className="text-text-secondary text-sm text-left mb-4">Secure remote access to ICS, SCADA, and industrial IoT environments. Continuously verify every privileged session across converged IT/OT networks to prevent unauthorized commands reaching production systems.</p>
              <div className="text-accent text-sm font-medium">Learn More →</div>
            </a>

            <a href="/solutions/banking" className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-4">Banking</h3>
              <p className="text-text-secondary text-sm text-left mb-4">Protect core banking and payment systems with cryptographic session verification. Meet PCI DSS, SOX, and DORA requirements with immutable audit trails that prove every privileged action was authorized.</p>
              <div className="text-accent text-sm font-medium">Learn More →</div>
            </a>

            <a href="/solutions/government" className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-4">Government</h3>
              <p className="text-text-secondary text-sm text-left mb-4">Enforce zero trust privileged access for classified and sensitive government systems. Verify contractor and personnel sessions in real time to meet FedRAMP, NIST 800-53, and CMMC requirements with cryptographic attestation.</p>
              <div className="text-accent text-sm font-medium">Learn More →</div>
            </a>

            <a href="/solutions/healthcare" className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-4">Healthcare</h3>
              <p className="text-text-secondary text-sm text-left mb-4">Secure privileged access to EHR systems, medical devices, and clinical networks. Verify every vendor and remote support session to maintain HIPAA compliance and reduce ransomware blast radius across patient care environments.</p>
              <div className="text-accent text-sm font-medium">Learn More →</div>
            </a>

            <a href="/solutions/mssps" className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-4">MSSPs</h3>
              <p className="text-text-secondary text-sm text-left mb-4">Gain multi-tenant visibility and cryptographic accountability across every client environment. Verify analyst and privileged sessions at scale and deliver auditable proof of access control to managed security clients.</p>
              <div className="text-accent text-sm font-medium">Learn More →</div>
            </a>

            <a href="/solutions/data-centers" className="card p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-4">Data Centers</h3>
              <p className="text-text-secondary text-sm text-left mb-4">Govern and enforce every remote session across tenants, vendors, and internal operations in real time. Stop unauthorized commands before they execute and interrupt lateral movement automatically. Deliver cryptographically attested audit trails for SOC 2, ISO 27001, and PCI-DSS compliance.</p>
              <div className="text-accent text-sm font-medium">Learn More →</div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Does Keystrike replace our PAM or IAM?',
                a: 'No. Keystrike completes PAM and IAM by governing what happens inside the sessions they grant. PAM controls who gets in. Keystrike governs what they do once they\'re in.',
              },
              {
                q: 'How does Keystrike differ from a SIEM or XDR?',
                a: 'SIEM and XDR log events after they occur — detection is inherently reactive. Keystrike operates inside the live session and enforces policy before commands execute. It complements your SIEM by generating cryptographically attested session evidence.',
              },
              {
                q: 'Which industries does Keystrike serve?',
                a: 'Keystrike is deployed in OT/ICS and industrial environments, financial services, healthcare, government, MSSP, and data center environments — sectors where remote access governance is a regulatory and operational requirement.',
              },
              {
                q: 'What compliance frameworks does Keystrike support?',
                a: 'Keystrike generates audit-ready evidence directly applicable to NIS2, DORA, PCI DSS, HIPAA, FedRAMP, CMMC, SOC 2, ISO 27001, and IEC 62443 requirements for remote access governance.',
              },
              {
                q: 'How quickly can Keystrike be deployed?',
                a: 'Customers report Keystrike is operational in approximately 20 minutes, with clear documentation and deployment designed not to disrupt existing workflows or user experience.',
              },
            ].map((item, i) => (
              <details key={i} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-semibold text-text-primary pr-4">{item.q}</h3>
                  <svg className="w-5 h-5 text-text-muted flex-shrink-0 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <p className="text-text-secondary text-sm mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Govern What Happens After Login?
          </h2>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
            Keystrike closes the governance gap between access intent and access reality. It does not
            replace your IAM, PAM, or SIEM — it completes them by adding the governance layer that
            governs what happens inside the live session.
          </p>
          <p className="text-blue-200 text-sm mb-8">
            Keystrike does not replace your IAM, PAM, or SIEM. It governs what happens inside the sessions they permit — adding the layer that was never there before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Request an Executive Briefing →
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Free Remote Access Risk Assessment →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
