import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Keystrike | Continuous Remote Access Governance | Founded by Security Researchers',
  description: 'Keystrike is a continuous remote access governance platform founded by cybersecurity researchers in Reykjavik, Iceland. We govern what happens after login — with deterministic enforcement, live session visibility, and cryptographic attestation.',
  keywords: [
    'Keystrike',
    'remote access governance company',
    'session governance platform',
    'Valdimar Oskarsson',
    'Ymir Vigfusson',
    'continuous remote access governance',
    'Keystrike founders',
    'cybersecurity research company',
    'deterministic enforcement',
    'Iceland cybersecurity',
  ],
  alternates: {
    canonical: 'https://keystrike.com/about',
  },
  openGraph: {
    title: 'About Keystrike | Continuous Remote Access Governance Platform',
    description: 'Keystrike is a continuous remote access governance platform founded by cybersecurity researchers in Reykjavik, Iceland. We govern what happens after login — with deterministic enforcement, live session visibility, and cryptographic attestation.',
    url: 'https://keystrike.com/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike — Continuous Remote Access Governance',
      },
    ],
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Keystrike',
  description:
    'Keystrike is a continuous remote access governance platform that closes the gap between access intent and access reality through deterministic enforcement, live session visibility, and cryptographic attestation.',
  url: 'https://keystrike.com/about',
  about: {
    '@type': 'Organization',
    name: 'Keystrike',
    description:
      'Continuous remote access governance platform. Keystrike governs what happens after login — providing live visibility (SEE), deterministic enforcement (CONTROL), and cryptographically attested audit-ready evidence (PROVE) inside active remote sessions. Keystrike completes IAM, PAM, SIEM, and XDR investments.',
    url: 'https://keystrike.com',
    foundingLocation: { '@type': 'Place', name: 'Reykjavik, Iceland' },
    knowsAbout: [
      'remote access governance',
      'session governance',
      'deterministic enforcement',
      'cryptographic attestation',
      'NIS2 compliance',
      'DORA compliance',
      'privileged remote access',
      'post-authentication security',
    ],
    employee: [
      { '@type': 'Person', name: 'Valdimar Oskarsson', jobTitle: 'Co-founder, CEO' },
      { '@type': 'Person', name: 'Ymir Vigfusson', jobTitle: 'Co-founder, CTO', hasCredential: 'PhD' },
      { '@type': 'Person', name: 'Steindor Gudmundsson', jobTitle: 'Co-founder, CPO' },
      { '@type': 'Person', name: 'Arni S. Petursson', jobTitle: 'Co-founder, COO' },
      { '@type': 'Person', name: 'Helena Hallgrimsson', jobTitle: 'VP Marketing' },
      { '@type': 'Person', name: 'Johanna Vigdis Gudmundsdottir', jobTitle: 'VP Business Development' },
    ],
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Navigation currentPage="about" />

      {/* Hero */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Built to Close the Gap Between{' '}
            <span className="text-accent">Access Intent and Access Reality</span>
          </h1>
          <p className="text-xl text-text-secondary mb-6 max-w-3xl mx-auto">
            Keystrike was founded by researchers and security engineers who identified a persistent
            blind spot in enterprise security: the space between who is granted access and what that
            access is actually used for. We built the governance layer the security stack was missing.
          </p>
          <p className="text-base font-semibold text-text-primary">
            Keystrike is a continuous remote access governance platform. We govern what happens after login.
          </p>
        </div>
      </section>

      {/* What Keystrike Does */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 text-center">
            Continuous Remote Access Governance
          </h2>
          <div className="space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              When a user authenticates and gains access, most security stacks have done their job.
              IAM and PAM granted access. SIEM and XDR will log events — after the fact. But the
              live session itself — what commands run, what systems are reached, what an authenticated
              user actually does — remains ungoverned.
            </p>
            <p>
              Keystrike closes that gap. Our platform operates inside active remote sessions,
              delivering live visibility{' '}
              <strong className="text-text-primary">(SEE)</strong>, deterministic enforcement{' '}
              <strong className="text-text-primary">(CONTROL)</strong>, and cryptographically
              attested, audit-ready evidence{' '}
              <strong className="text-text-primary">(PROVE)</strong>.
            </p>
            <p className="font-semibold text-text-primary">
              Keystrike does not replace IAM, PAM, or SIEM. It completes them.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Conviction */}
      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 text-center">
            The Problem We Set Out to Solve
          </h2>
          <div className="space-y-4 text-text-secondary text-base leading-relaxed">
            <p>
              The Keystrike founding team came from research and enterprise security backgrounds. The
              pattern we kept seeing was the same: organizations with strong identity stacks, mature
              PAM deployments, and comprehensive SIEM coverage — still unable to answer the
              question:{' '}
              <em className="text-text-primary">What actually happened inside that session?</em>
            </p>
            <p>
              Authentication tells you who was granted access. It tells you nothing about what they
              did with it. That gap — between access intent and access reality — is where the most
              significant risks in modern enterprise security live. Authenticated attackers operate
              here. Ransomware is deployed through legitimate credentials here. Third-party
              contractors exceed their authorized scope here.
            </p>
            <p className="font-semibold text-text-primary">
              We built Keystrike to govern it.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What Security Leaders Say
            </h2>
            <p className="text-xl text-text-secondary">
              What security leaders say about governing remote access with Keystrike
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-primary mb-6 italic leading-relaxed">
                &ldquo;When I learned about Keystrike, I loved the simplicity. Keystrike ensures that only
                our own employees are accessing our servers, not adversaries who have hacked our
                employees. But Keystrike also doesn&apos;t bother or distract our employees at all,
                which is a great win-win: stronger security without added inconvenience.&rdquo;
              </p>
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-text-primary">Heimir Kristjánsson</div>
                <div className="text-text-secondary text-sm">Cyber Security Operations Manager</div>
                <div className="text-accent text-sm font-medium mt-1">Amer Sports</div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-primary mb-6 italic leading-relaxed">
                &ldquo;In about 20 minutes, I had Keystrike up and running. The deployment is simple, well
                thought out, with clear documentation. Now Keystrike helps us establish that commands
                are genuine and trustworthy by detecting lurking attackers and blocking when they
                inject themselves into active sessions. With the combination of powerful technology
                and ease of deployment, I highly recommend testing Keystrike.&rdquo;
              </p>
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-text-primary">Steven Brill</div>
                <div className="text-text-secondary text-sm">VP of IT Operations and Security</div>
                <div className="text-accent text-sm font-medium mt-1">Global Water Resources</div>
                <div className="text-text-muted text-xs mt-1">
                  Global Water Resources operates critical water infrastructure across the American Southwest.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-accent bg-opacity-10 rounded-full px-6 py-3">
              <div className="text-accent font-bold text-2xl">20min</div>
              <div className="text-text-primary font-medium">Deploys in 20 minutes</div>
              <div className="text-text-secondary">•</div>
              <div className="text-text-primary">Try Keystrike free for 30 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              The Team Behind Keystrike
            </h2>
            <p className="text-xl text-text-secondary">
              Research-led. Operationally proven. Built for enterprise security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Valdimar Oskarsson</h3>
              <p className="text-accent text-sm font-medium mb-4">Co-founder, CEO</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Valdimar identified the Governance Gap through years of enterprise security work —
                the persistent blind spot between authentication and what happens inside the session.
                He co-founded Keystrike to build the governance layer the security stack was missing.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Ymir Vigfusson, PhD</h3>
              <p className="text-accent text-sm font-medium mb-4">Co-founder, CTO</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Ymir leads the technical architecture of Keystrike&apos;s continuous remote access
                governance platform. His academic research background in distributed systems and
                security directly informs Keystrike&apos;s approach to deterministic enforcement and
                cryptographic attestation inside live sessions.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Steindor Gudmundsson</h3>
              <p className="text-accent text-sm font-medium mb-4">Co-founder, CPO</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Steindor shapes how Keystrike delivers session governance to enterprise security
                teams — ensuring that deterministic enforcement and audit-ready evidence are
                accessible without operational friction.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Arni S. Petursson</h3>
              <p className="text-accent text-sm font-medium mb-4">Co-founder, COO</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Arni leads Keystrike&apos;s global operations, scaling the delivery of continuous remote
                access governance to enterprise customers across critical infrastructure, financial
                services, and government sectors.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Helena Hallgrimsson</h3>
              <p className="text-accent text-sm font-medium mb-4">VP Marketing</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Helena leads Keystrike&apos;s marketing, building category awareness around continuous
                remote access governance and helping security leaders understand the Governance Gap
                and how Keystrike closes it.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Johanna Vigdis Gudmundsdottir</h3>
              <p className="text-accent text-sm font-medium mb-4">VP Business Development</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Johanna leads strategic partnerships and enterprise market development, expanding
                Keystrike&apos;s reach across critical infrastructure, financial services, and
                government sectors globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values — compact grid */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How We Work
            </h2>
            <p className="text-xl text-text-secondary">
              The principles that guide everything we build and every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">We strive for excellence</h3>
                <p className="text-text-secondary text-sm">High performance, shared accountability, ambitious goals. We win together or not at all.</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">The customer is our cornerstone</h3>
                <p className="text-text-secondary text-sm">We empower customers by simplifying and securing their operations. Security should not require trade-offs with usability.</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">We are innovative</h3>
                <p className="text-text-secondary text-sm">Built on academic roots, we challenge conventions and foster research inside and outside our organization.</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">We act with empathy and integrity</h3>
                <p className="text-text-secondary text-sm">Transparent, honest, accountable. We say what we mean and take responsibility for our actions.</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">We are playful and balanced</h3>
                <p className="text-text-secondary text-sm">Endlessly curious tinkerers who embrace challenges with enthusiasm, and know that sustainable performance requires balance.</p>
              </div>
            </div>

            <div className="card p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">Deployed in environments that matter</h3>
                <p className="text-text-secondary text-sm">Critical infrastructure, financial services, healthcare, and government — sectors where remote access governance is not optional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Where We Operate</h2>
            <p className="text-xl text-text-secondary">
              Global reach from our Nordic research roots
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">Nordic Headquarters</h3>
              <p className="text-accent text-sm font-medium mb-2">Reykjavik, Iceland</p>
              <p className="text-text-secondary text-sm">Home of our research and engineering team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">North American Office</h3>
              <p className="text-accent text-sm font-medium mb-2">Austin, Texas</p>
              <p className="text-text-secondary text-sm">Serving enterprise, financial services, and government customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">Middle East Office</h3>
              <p className="text-accent text-sm font-medium mb-2">Dubai, UAE</p>
              <p className="text-text-secondary text-sm">Serving critical infrastructure, energy, and government sectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See Why Security Leaders Trust Keystrike to Govern What Happens After Login
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Keystrike closes the governance gap between access intent and access reality. If
            you&apos;re assessing what governs your authenticated remote sessions — and what evidence
            you can produce when an auditor asks — the right first step is a direct conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Request an Executive Briefing →
            </a>
            <a
              href="/platform"
              className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors"
            >
              See How the Platform Works →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
