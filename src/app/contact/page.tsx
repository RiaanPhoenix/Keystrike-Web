import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Keystrike | Remote Access Governance Demos & Executive Briefings',
  description: 'Talk to Keystrike about governing what happens inside authenticated remote sessions. Request a demo, executive briefing, or evaluation of your remote access governance gap. Keystrike complements IAM, PAM, and SIEM — it governs the live session.',
  keywords: [
    'contact keystrike',
    'remote access governance',
    'session governance',
    'governance gap',
    'PAM complement',
    'NIS2 DORA compliance',
    'continuous verification after login',
    'cryptographic attestation',
    'privileged remote access',
    'request demo',
    'executive briefing',
    'keystrike offices',
    'Reykjavik cybersecurity'
  ],
  openGraph: {
    title: 'Contact Keystrike — Remote Access Governance',
    description: 'Request a demo, executive briefing, or evaluation of your remote access governance gap. Keystrike governs what happens inside the session after access is granted.',
    url: '/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Keystrike - Remote Access Governance',
      },
    ],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Keystrike',
    description: 'Request a demo, executive briefing, or evaluation of your remote access governance gap.',
    provider: {
      '@type': 'Organization',
      name: 'Keystrike',
      description:
        'Continuous remote access governance platform. Keystrike governs live sessions after authentication — providing real-time enforcement, deterministic control, and cryptographic proof of governance. Complements IAM, PAM, SIEM, and XDR.',
      areaServed: ['US', 'EU', 'Global'],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <header className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold text-text-primary">Keystrike</a>
              </div>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="/solutions" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Solutions</a>
                <a href="/platform" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Platform</a>
                <a href="/resources" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Resources</a>
                <a href="/about" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Company</a>
                <a href="/support" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Support</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn btn-primary">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Govern What Happens After Access Is Granted
          </h1>
          <p className="text-xl text-text-secondary mb-4 max-w-3xl mx-auto">
            Keystrike governs live remote access sessions — real-time enforcement, verified commands, and
            cryptographic proof of control. Talk to us about closing the governance gap in your stack.
          </p>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Most security stacks authenticate access. Few govern what happens inside the session once it&apos;s open.
            Keystrike closes that gap — providing live visibility, in-session control, and audit-ready evidence
            for every privileged remote session. If you&apos;re responsible for remote access security, compliance
            governance, or privileged session risk, we should talk.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Demo Request */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Request a Demo</h3>
              <p className="text-text-secondary mb-6 text-sm">
                See continuous remote access governance in action — live session control, verified command
                enforcement, and audit-ready evidence. 30-minute session with our security engineers.
              </p>
              <button className="btn btn-primary w-full">
                Schedule Demo
              </button>
              <p className="text-text-muted text-xs mt-4">
                Average response time: 30 minutes
              </p>
            </div>

            {/* Sales Inquiry */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Talk to Sales</h3>
              <p className="text-text-secondary mb-6 text-sm">
                Ready to discuss pricing, deployment, and enterprise requirements? Discuss how Keystrike
                completes your IAM, PAM, and SIEM stack — and closes the session governance gap your
                current tools leave open.
              </p>
              <button className="btn btn-primary w-full">
                Contact Sales
              </button>
              <p className="text-text-muted text-xs mt-4">
                Call: +1 (555) 123-4567
              </p>
            </div>

            {/* Executive Briefing */}
            <div className="card p-8 text-center border-2 border-accent border-opacity-30">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Executive Briefing</h3>
              <p className="text-text-secondary mb-6 text-sm">
                For CISOs and security leaders — a structured briefing on the Governance Gap, authenticated
                attacker activity, and what provable governance looks like at scale.
              </p>
              <button className="btn btn-primary w-full">
                Request Briefing
              </button>
              <p className="text-text-muted text-xs mt-4">
                CISO &amp; CIO track
              </p>
            </div>

            {/* Technical Support */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Get Support</h3>
              <p className="text-text-secondary mb-6 text-sm">
                Existing customer? Access technical support, documentation, and customer success resources
                through our portal.
              </p>
              <a href="/support" className="btn btn-secondary w-full block text-center">
                Contact Support
              </a>
              <p className="text-text-muted text-xs mt-4">
                24/7 support availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Section */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Who Contacts Keystrike
            </h2>
            <p className="text-xl text-text-secondary">
              Keystrike addresses different problems depending on your role. Find your entry point.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CISO — CONTROL */}
            <div className="card p-8 border-t-4 border-accent">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">CISO — CONTROL</div>
              <p className="text-text-secondary italic mb-4 text-sm">
                &quot;We authenticated them. We didn&apos;t govern them.&quot;
              </p>
              <p className="text-text-secondary text-sm mb-6">
                Keystrike gives you real-time enforcement inside every remote session — the control layer
                between access intent and access reality.
              </p>
              <button className="btn btn-secondary w-full text-sm">
                Request a CISO Briefing
              </button>
            </div>

            {/* Compliance — PROVE */}
            <div className="card p-8 border-t-4 border-accent">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">COMPLIANCE &amp; AUDIT — PROVE</div>
              <p className="text-text-secondary italic mb-4 text-sm">
                &quot;We need to prove what happened, not just log that it did.&quot;
              </p>
              <p className="text-text-secondary text-sm mb-6">
                Keystrike delivers cryptographic attestation and audit-ready evidence of control — not just
                records of activity. Supports NIS2, DORA, SOC 2, and IEC 62443 requirements.
              </p>
              <button className="btn btn-secondary w-full text-sm">
                Request a Compliance Evaluation
              </button>
            </div>

            {/* SecOps — SEE */}
            <div className="card p-8 border-t-4 border-accent">
              <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">SECURITY OPERATIONS — SEE</div>
              <p className="text-text-secondary italic mb-4 text-sm">
                &quot;By the time we see it in SIEM, it&apos;s already happened.&quot;
              </p>
              <p className="text-text-secondary text-sm mb-6">
                Keystrike provides live session visibility and real-time alerting — not post-event log
                analysis. See what&apos;s happening inside every active remote session.
              </p>
              <button className="btn btn-secondary w-full text-sm">
                Request a SecOps Walkthrough
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Keystrike Governs */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 text-center">
            What Keystrike Governs
          </h2>
          <p className="text-text-secondary text-lg text-center mb-8">
            IAM and PAM grant access. SIEM and XDR log what happened after. Keystrike governs what happens
            during the live session — verifying commands in real time, blocking unauthorized actions inside
            active sessions, and delivering cryptographic proof of control. If your remote access stack
            doesn&apos;t govern the session itself, contact us.
          </p>
          <p className="text-text-muted text-sm text-center">
            Trusted by security teams in critical infrastructure, financial services, and regulated
            environments across Europe and North America subject to NIS2, DORA, and IEC 62443 requirements.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Send us a Message
            </h2>
            <p className="text-xl text-text-secondary">
              Have a specific question? Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Company Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Job Title
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Company Size
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent">
                    <option value="">Select company size</option>
                    <option value="1-50">1–50 employees</option>
                    <option value="51-200">51–200 employees</option>
                    <option value="201-1000">201–1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Current PAM / IAM Tools
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. CyberArk, Okta, BeyondTrust"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  What are you evaluating? *
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent" required>
                  <option value="">Select inquiry type</option>
                  <option value="demo">Request a Demo</option>
                  <option value="executive-briefing">Request Executive Briefing</option>
                  <option value="governance-gap">Evaluate Remote Access Governance Gap</option>
                  <option value="pam-iam-complement">PAM / IAM Complement Discussion</option>
                  <option value="nis2-dora">NIS2 / DORA Compliance Conversation</option>
                  <option value="ot-critical">OT / Critical Infrastructure Security</option>
                  <option value="third-party">Third-Party / Vendor Access Risk</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="media">Media / Press Inquiry</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Tell us about your remote access environment, current governance challenges, compliance requirements, or any specific questions..."
                  required
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="consent"
                  className="mt-1 w-4 h-4 text-accent border-border rounded focus:ring-accent"
                  required
                />
                <label htmlFor="consent" className="text-sm text-text-secondary">
                  I agree to receive communications from Keystrike and understand that I can unsubscribe at any time. 
                  View our <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-8 py-3 text-lg">
                  Send Message
                </button>
                <p className="text-text-muted text-sm mt-4">
                  We work best with organizations managing privileged remote access in regulated or
                  critical infrastructure environments. We typically respond within 24 hours during business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-3">
                What is remote access governance and why does it matter?
              </h3>
              <p className="text-text-secondary text-sm">
                Remote access governance is the continuous oversight, enforcement, and audit of what happens
                inside an authenticated remote session — after login, inside the live connection. Without it,
                organizations can authenticate access correctly and still have no control over what happens
                next. Attackers who operate through valid credentials, compromised contractors, and
                over-privileged insiders all exploit this gap.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-3">
                How is Keystrike different from PAM or SIEM?
              </h3>
              <p className="text-text-secondary text-sm">
                PAM controls who gets access; SIEM logs events after the fact. Keystrike governs the live
                session itself — verifying commands before they execute, blocking unauthorized actions in
                real time, and delivering cryptographic attestation of what actually happened. Keystrike
                completes your stack; it does not replace it.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-3">
                Does Keystrike replace our existing IAM or PAM investment?
              </h3>
              <p className="text-text-secondary text-sm">
                No. Keystrike is a continuous remote access governance platform that complements IAM, PAM,
                SIEM, SOAR, and XDR. It closes the governance gap that exists between access intent and
                access reality — the layer those tools do not cover. Keystrike completes your stack.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-3">
                What compliance frameworks does Keystrike support?
              </h3>
              <p className="text-text-secondary text-sm">
                Keystrike&apos;s continuous verification and cryptographic attestation capabilities support
                audit requirements for NIS2, DORA, SOC 2, IEC 62443, and regulated industries requiring
                provable governance of remote access. Keystrike delivers evidence of control, not just
                records of activity.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-lg font-bold text-text-primary mb-3">
                Who typically contacts Keystrike?
              </h3>
              <p className="text-text-secondary text-sm">
                CISOs and heads of security looking for post-authentication control. Compliance and audit
                leaders who need provable governance evidence. Security operations teams managing remote
                session risk. OT and critical infrastructure owners managing privileged vendor and
                contractor access. Organizations subject to NIS2, DORA, SOC 2, or IEC 62443 requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-text-primary mb-4">Keystrike</div>
              <p className="text-text-secondary text-sm mb-4">
                Continuous remote access governance. Keystrike governs what happens inside the session
                after access is granted — closing the gap between access intent and access reality.
              </p>
              <p className="text-text-muted text-xs">
                © 2026 Keystrike. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Solutions</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="/solutions" className="hover:text-accent">Remote Access Governance</a></li>
                <li><a href="/platform" className="hover:text-accent">Session Governance</a></li>
                <li><a href="/solutions/manufacturing" className="hover:text-accent">OT / Critical Infrastructure</a></li>
                <li><a href="/solutions" className="hover:text-accent">Compliance &amp; Audit Readiness</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="/about" className="hover:text-accent">About Us</a></li>
                <li><a href="/about" className="hover:text-accent">Leadership</a></li>
                <li><a href="/about" className="hover:text-accent">Careers</a></li>
                <li><a href="/contact" className="hover:text-accent">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Support</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="/resources" className="hover:text-accent">Documentation</a></li>
                <li><a href="/support" className="hover:text-accent">Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
