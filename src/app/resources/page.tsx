import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AccessibilityEnhancements from '@/components/AccessibilityEnhancements';

export const metadata = {
  title: 'Remote Access Governance Resources | Session Security Research & Guides | Keystrike',
  description: 'Research, practitioner guides, and security leadership resources on remote access governance, continuous verification after login, and deterministic session enforcement. Designed for CISOs, compliance leaders, and security operations teams.',
  keywords: 'remote access governance, session governance, post-authentication security, continuous verification, deterministic enforcement, cryptographic attestation, NIS2 compliance, DORA compliance, privileged remote access, third-party access risk, session hijacking',
  author: 'Keystrike',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://keystrike.com/resources',
  },
  openGraph: {
    title: 'Remote Access Governance Resources | Keystrike',
    description: 'Research, practitioner guides, and security leadership resources on remote access governance, continuous verification after login, and deterministic session enforcement. Designed for CISOs, compliance leaders, and security operations teams.',
    url: 'https://keystrike.com/resources',
    siteName: 'Keystrike',
    images: [{
      url: 'https://keystrike.com/og-resources.jpg',
      width: 1200,
      height: 630,
      alt: 'Keystrike Remote Access Governance Resources'
    }]
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Remote Access Governance Resources | Keystrike',
    description: 'Research, practitioner guides, and security leadership resources on remote access governance, continuous verification after login, and deterministic session enforcement.',
    images: ['https://keystrike.com/twitter-resources.jpg']
  }
};

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Remote Access Governance Resources',
  description: 'Research, guides, and practitioner resources on remote access governance, session governance, continuous verification, and post-authentication security.',
  url: 'https://keystrike.com/resources',
  about: {
    '@type': 'Thing',
    name: 'Remote Access Governance',
    description: 'The Governance Gap is the space between access intent and access reality in remote access environments. When a user authenticates through MFA and is granted access via IAM or PAM, the security stack has done its job — up to that point. But authentication answers one question: should this person be allowed in? It does not answer: what are they actually doing once inside? Keystrike addresses this gap by governing the live session — verifying commands in real time, blocking unauthorized actions, and generating cryptographically attested evidence of exactly what happened.',
  },
  provider: {
    '@type': 'Organization',
    name: 'Keystrike',
    url: 'https://keystrike.com',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between remote access governance and PAM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PAM controls who is permitted access and manages privileged credentials. Remote access governance controls what happens inside the sessions PAM grants. PAM answers: "Should this person be allowed in?" Keystrike answers: "What are they actually doing, and does it match what they\'re supposed to do?"',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Keystrike a monitoring or surveillance tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Keystrike is a governance platform. Monitoring observes and alerts after the fact. Keystrike deterministically enforces inside the session in real time — verifying commands against policy and blocking unauthorized actions before they execute.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Keystrike replace our SIEM or XDR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. SIEM and XDR log events after they occur — detection is inherently reactive. Keystrike complements your SIEM by governing what happens during the live session, and by generating cryptographically attested session evidence that enriches your existing log data with verified, tamper-proof records.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Keystrike support NIS2 and DORA compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NIS2 and DORA both require organizations to demonstrate that privileged and third-party remote access is governed, not just permitted. Keystrike generates continuous, audit-ready evidence of session activity — who accessed what, what commands were executed, what was blocked — in a format directly usable for regulatory audits.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when Keystrike blocks a command?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a command or action violates the governance policy, Keystrike stops it before it executes. The session is interrupted, the unauthorized action does not complete, and the event is recorded in the audit log with cryptographic attestation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Keystrike handle third-party and contractor access?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Third-party remote access is one of the highest-risk vectors in enterprise environments. Keystrike governs contractor sessions the same way it governs internal sessions — with live visibility, deterministic enforcement, and continuous evidence generation — ensuring contractors operate within their authorized scope.',
      },
    },
  ],
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PerformanceMonitor />
      <AccessibilityEnhancements />
      <Navigation currentPage="resources" />

      <main id="main-content" className="flex-1" role="main">

        {/* Hero */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Remote Access Governance:<br />
                <span className="text-accent">Research, Guides &amp; Practitioner Resources</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
                Resources for security leaders researching the governance gap between access intent and access reality — and what it takes to close it.
              </p>
              <p className="text-base text-text-secondary max-w-3xl mx-auto">
                Keystrike publishes technical guidance for CISOs, compliance teams, security operations leaders, and identity and PAM owners researching session governance, post-authentication control, and continuous verification inside authenticated remote sessions.
              </p>
            </div>
          </div>
        </section>

        {/* Governance Gap Definition */}
        <section className="bg-surface-secondary py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 text-center">
              What Is the Governance Gap?
            </h2>
            <div className="prose max-w-none text-text-secondary space-y-4 text-base leading-relaxed">
              <p>
                When a user authenticates and gains access, your IAM, PAM, and MFA have done their job. But authentication answers only one question: <em>Should this person be allowed in?</em> It says nothing about what happens next — what commands are run, what files are touched, what systems are reached.
              </p>
              <p>
                The Governance Gap is the space between access intent and access reality. It is where authenticated attackers operate. It is where ransomware is deployed by legitimate credentials. It is where third-party contractors exceed their scope. It is where your existing stack stops.
              </p>
              <p className="font-semibold text-text-primary">
                Keystrike closes that gap. These resources explain how.
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
                Keystrike governs authenticated remote access sessions through three capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 border-t-4 border-accent">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  {/* Eye icon */}
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">SEE</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Live visibility into every active remote session. Know exactly what is happening inside authenticated connections, in real time, without waiting for a log event.
                </p>
                <p className="text-text-muted text-xs mt-3 font-medium uppercase tracking-wide">For Security Operations</p>
              </div>

              <div className="card p-8 border-t-4 border-accent">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  {/* Shield check icon */}
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">CONTROL</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Deterministic enforcement inside the session. Keystrike verifies commands against policy and blocks unauthorized actions before they execute. Not detection. Not alerting. Enforcement.
                </p>
                <p className="text-text-muted text-xs mt-3 font-medium uppercase tracking-wide">For CISOs</p>
              </div>

              <div className="card p-8 border-t-4 border-accent">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  {/* Document check icon */}
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">PROVE</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Continuous, audit-ready evidence. Every session produces cryptographically attested records of exactly what happened, by whom, and when. Designed for NIS2, DORA, SOC 2, and IEC 62443 audit requirements.
                </p>
                <p className="text-text-muted text-xs mt-3 font-medium uppercase tracking-wide">For Compliance &amp; Audit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stack Complement */}
        <section className="bg-surface-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center">
              How Keystrike Completes Your Security Stack
            </h2>
            <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
              Your security stack grants access. Keystrike governs what happens during it.
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
          </div>
        </section>

        {/* Featured Resources */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-text-secondary">
                Research and practitioner guidance on remote access governance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="card overflow-hidden">
                <div className="bg-accent bg-opacity-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded font-medium">WHITEPAPER</span>
                    <span className="text-text-muted text-sm">Coming soon</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    The Governance Gap: Why IAM and PAM Leave You Exposed After Authentication
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm mb-4">
                    An examination of the post-authentication attack surface — where authenticated attackers operate, how ransomware deploys through valid sessions, and how a governance layer closes the gap.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-xs">2026 • Available at launch</span>
                    <span className="text-text-muted text-sm font-medium">Notify me →</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card overflow-hidden">
                <div className="bg-accent bg-opacity-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium">GUIDE</span>
                    <span className="text-text-muted text-sm">Coming soon</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Remote Access Governance for Critical Infrastructure: A Practitioner&apos;s Guide
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm mb-4">
                    Practical guidance for OT, ICS, and critical infrastructure security teams on governing third-party remote access, meeting NIS2 and IEC 62443 requirements, and building continuous verification into remote access workflows.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-xs">2026 • Available at launch</span>
                    <span className="text-text-muted text-sm font-medium">Notify me →</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card overflow-hidden">
                <div className="bg-accent bg-opacity-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-slate-600 text-white text-xs px-2 py-1 rounded font-medium">EXECUTIVE BRIEF</span>
                    <span className="text-text-muted text-sm">Coming soon</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Deterministic Enforcement vs. Detection: Why the Difference Matters for Security Leaders
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm mb-4">
                    Detection is reactive — damage is already done by the time an alert fires. This brief explains how deterministic in-session enforcement works, how it differs from monitoring, and what it means for blast radius containment.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-xs">2026 • Available at launch</span>
                    <span className="text-text-muted text-sm font-medium">Notify me →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Library */}
        <section className="bg-surface-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Resource Library
              </h2>
              <p className="text-xl text-text-secondary">
                Publications and practitioner sessions on session governance and post-authentication security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Publications */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary">Publications</h3>

                <div className="card p-4 flex items-center space-x-4 opacity-80">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Closing the Gap Between Access Intent and Access Reality</h4>
                    <p className="text-text-secondary text-xs">Foundational research on the Governance Gap</p>
                    <span className="text-text-muted text-xs">Available at launch</span>
                  </div>
                  <span className="text-text-muted text-xs font-medium whitespace-nowrap">Coming soon</span>
                </div>

                <div className="card p-4 flex items-center space-x-4 opacity-80">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Third-Party Remote Access Risk: What PAM Doesn&apos;t Cover</h4>
                    <p className="text-text-secondary text-xs">Risk and governance guidance for organizations with vendor and contractor access</p>
                    <span className="text-text-muted text-xs">Available at launch</span>
                  </div>
                  <span className="text-text-muted text-xs font-medium whitespace-nowrap">Coming soon</span>
                </div>

                <div className="card p-4 flex items-center space-x-4 opacity-80">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Continuous Verification After Login: A Framework for Security Leaders</h4>
                    <p className="text-text-secondary text-xs">CISO-oriented explainer on post-authentication governance</p>
                    <span className="text-text-muted text-xs">Available at launch</span>
                  </div>
                  <span className="text-text-muted text-xs font-medium whitespace-nowrap">Coming soon</span>
                </div>
              </div>

              {/* Webinars */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary">Webinars &amp; Sessions</h3>

                <div className="card p-4 flex items-center space-x-4 opacity-80">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Session Governance in Practice: Live Demonstration</h4>
                    <p className="text-text-secondary text-xs">45 minutes · Practitioner level</p>
                    <span className="text-text-muted text-xs">Available at launch</span>
                  </div>
                  <span className="text-text-muted text-xs font-medium whitespace-nowrap">Coming soon</span>
                </div>

                <div className="card p-4 flex items-center space-x-4 opacity-80">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">DORA &amp; NIS2 Compliance: Building Audit-Ready Evidence for Remote Access</h4>
                    <p className="text-text-secondary text-xs">30 minutes · Compliance level</p>
                    <span className="text-text-muted text-xs">Available at launch</span>
                  </div>
                  <span className="text-text-muted text-xs font-medium whitespace-nowrap">Coming soon</span>
                </div>

                <div className="card p-4 flex items-center space-x-4 opacity-80">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm">Why the Authenticated Attacker Is Your Biggest Risk</h4>
                    <p className="text-text-secondary text-xs">45 minutes · Executive level</p>
                    <span className="text-text-muted text-xs">Available at launch</span>
                  </div>
                  <span className="text-text-muted text-xs font-medium whitespace-nowrap">Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Persona Pathways */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Find Resources by Role
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Remote access governance looks different depending on where you sit. Start here.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8">
                <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="inline-block bg-accent text-white text-xs px-2 py-1 rounded font-medium mb-3">CISO</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">CONTROL</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  You approved the access. You built the stack. But who governs what happens after login? Resources for security executives building a governance layer over authenticated remote access.
                </p>
              </div>

              <div className="card p-8">
                <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v6a1 1 0 102 0V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="inline-block bg-slate-600 text-white text-xs px-2 py-1 rounded font-medium mb-3">COMPLIANCE &amp; AUDIT</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">PROVE</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  NIS2 requires evidence that remote access is governed, not just permitted. DORA requires you to prove it. These resources address what audit-ready proof of control looks like in practice.
                </p>
              </div>

              <div className="card p-8">
                <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                  </svg>
                </div>
                <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded font-medium mb-3">SECURITY OPERATIONS</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">SEE</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Visibility doesn&apos;t stop at authentication. Resources for SecOps teams building live visibility and enforcement capability inside active remote sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-secondary py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Frequently Asked Questions About Remote Access Governance
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: 'What is the difference between remote access governance and PAM?',
                  a: 'PAM controls who is permitted access and manages privileged credentials. Remote access governance controls what happens inside the sessions PAM grants. PAM answers: "Should this person be allowed in?" Keystrike answers: "What are they actually doing, and does it match what they\'re supposed to do?"',
                },
                {
                  q: 'Is Keystrike a monitoring or surveillance tool?',
                  a: 'No. Keystrike is a governance platform. Monitoring observes and alerts after the fact. Keystrike deterministically enforces inside the session in real time — verifying commands against policy and blocking unauthorized actions before they execute.',
                },
                {
                  q: 'Does Keystrike replace our SIEM or XDR?',
                  a: 'No. SIEM and XDR log events after they occur — detection is inherently reactive. Keystrike complements your SIEM by governing what happens during the live session, and by generating cryptographically attested session evidence that enriches your existing log data with verified, tamper-proof records.',
                },
                {
                  q: 'How does Keystrike support NIS2 and DORA compliance?',
                  a: 'NIS2 and DORA both require organizations to demonstrate that privileged and third-party remote access is governed, not just permitted. Keystrike generates continuous, audit-ready evidence of session activity — who accessed what, what commands were executed, what was blocked — in a format directly usable for regulatory audits.',
                },
                {
                  q: 'What happens when Keystrike blocks a command?',
                  a: 'When a command or action violates the governance policy, Keystrike stops it before it executes. The session is interrupted, the unauthorized action does not complete, and the event is recorded in the audit log with cryptographic attestation.',
                },
                {
                  q: 'How does Keystrike handle third-party and contractor access?',
                  a: 'Third-party remote access is one of the highest-risk vectors in enterprise environments. Keystrike governs contractor sessions the same way it governs internal sessions — with live visibility, deterministic enforcement, and continuous evidence generation — ensuring contractors operate within their authorized scope.',
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
            <div className="text-center mt-10">
              <a href="/faq" className="text-accent font-medium hover:underline">View all FAQs →</a>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="bg-accent py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Remote Access Governance Intelligence — Delivered Monthly
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Practical guidance for security leaders on post-authentication risk, session governance, and compliance evidence. No noise — just what matters for governing authenticated remote access.
            </p>
            <div className="max-w-md mx-auto flex mb-8">
              <input
                type="email"
                placeholder="Your work email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-accent px-6 py-3 font-medium rounded-r-lg hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-blue-100 text-sm mb-10">No spam, unsubscribe at any time.</p>
            <div className="border-t border-blue-400 border-opacity-40 pt-10">
              <p className="text-blue-100 mb-6 text-lg">
                See how Keystrike governs authenticated remote access in your environment.
              </p>
              <a href="/contact" className="inline-block bg-white text-accent font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Request an Executive Briefing →
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
