import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const metadata: Metadata = {
  title: 'Continuous Remote Access Governance | Deterministic Enforcement & Cryptographic Attestation | Keystrike',
  description: 'Keystrike provides live session visibility, in-session control, and audit-ready proof of governance for remote access. Complements IAM/PAM/SIEM; closes the governance gap after login.',
  keywords: [
    'continuous remote access governance',
    'session governance',
    'deterministic enforcement',
    'cryptographic attestation',
    'remote access governance platform',
    'governance gap after login',
    'live session visibility',
    'audit-ready proof of governance',
    'in-session enforcement',
    'continuous verification inside the session',
  ],
  openGraph: {
    title: 'Continuous Remote Access Governance | Deterministic Enforcement & Cryptographic Attestation | Keystrike',
    description: 'Keystrike provides live session visibility, in-session control, and audit-ready proof of governance for remote access. Complements IAM/PAM/SIEM; closes the governance gap after login.',
    url: '/',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike — Continuous Remote Access Governance Platform',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="bg-white py-[64px] lg:py-[100px]" itemScope itemType="https://schema.org/Service">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[64px] items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6" itemProp="name">
                <span className="text-accent">Real-Time Session Control through Continuous Remote Access Governance</span>
              </h1>

              {/* Regulatory Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['DORA', 'NIS2', 'IEC 62443'].map((badge) => (
                  <span key={badge} className="border-[1.5px] border-solid border-[#0D3D3D] text-[#0D3D3D] text-[0.72rem] font-semibold tracking-[0.08em] px-[12px] py-[5px] rounded-[3px] uppercase">
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-[1.15rem] font-normal text-[#4A5568] mb-4" itemProp="description">
                Live visibility, deterministic enforcement inside the session, and audit-ready proof of governance, without replacing your security stack.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-[16px] mt-8">
                {/* Primary CTA */}
                <a href="/contact" className="w-full sm:w-auto bg-[#0D3D3D] text-[#FFFFFF] hover:bg-[#1A5252] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-none transition-colors text-center"
                   data-action="exec-briefing" data-context="hero-section">
                  Request an Executive Briefing
                </a>
                {/* Secondary CTA */}
                <a href="/contact" className="w-full sm:w-auto bg-transparent text-[#0D3D3D] hover:bg-[rgba(13,61,61,0.08)] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-[1.5px] border-solid border-[#0D3D3D] transition-colors text-center"
                   data-action="governance-brief" data-context="hero-section">
                  Download the Remote Access Governance Brief
                </a>
              </div>
              <p className="text-sm text-[#4A5568] mt-3">A focused session with the Keystrike team on how continuous remote access governance applies to your environment. No generic demo. No sales deck.</p>
            </div>

            {/* Right Column - Visual element */}
            <div className="h-full min-h-[300px] lg:min-h-[400px] bg-[#0D1B2A] rounded-[12px] overflow-hidden relative shadow-[inset_0_0_40px_rgba(13,61,61,0.4)]">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Keystrike</div>
                  <div className="text-[0.8rem] text-[#94A3B8]">Live Session Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured data — Organization (canonical, single instance) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Keystrike",
              "url": "https://keystrike.com",
              "description": "Keystrike is a continuous remote access governance platform providing deterministic enforcement, live session visibility, and cryptographic attestation for audit-ready governance.",
              "logo": "https://keystrike.com/logo.png",
              "foundingDate": "2021",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Laugavegur 26",
                "addressLocality": "Reykjavik",
                "postalCode": "101",
                "addressCountry": "IS"
              },
              "sameAs": [
                "https://linkedin.com/company/keystrike",
                "https://twitter.com/keystrikesec",
                "https://github.com/keystrike"
              ]
            }),
          }}
        />

        {/* Structured data — WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Continuous Remote Access Governance | Deterministic Enforcement & Cryptographic Attestation | Keystrike",
              "description": "Keystrike provides live session visibility, in-session control, and audit-ready proof of governance for remote access. Complements IAM/PAM/SIEM; closes the governance gap after login.",
              "url": "https://keystrike.com/",
              "isPartOf": {
                "@type": "Organization",
                "name": "Keystrike"
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["#what-is-keystrike", "#faq"]
              }
            }),
          }}
        />

        {/* Structured data — Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Keystrike",
              "description": "Continuous remote access governance platform delivering SEE, CONTROL, PROVE — live session visibility, deterministic enforcement, and cryptographic attestation. Supports DORA, NIS2, SOC 2, and IEC 62443 compliance requirements.",
              "category": "Remote Access Governance / Cybersecurity",
              "brand": {
                "@type": "Organization",
                "name": "Keystrike"
              }
            }),
          }}
        />
      </section>

      {/* Opening Value Proposition */}
      <section id="opening-value-prop" className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-[#4A5568] max-w-3xl mx-auto text-center">
            Most security investments stop at the login gate. Once access is granted, sessions run unverified, uncontrolled, and unproven. Keystrike closes this governance gap — providing continuous visibility, deterministic enforcement, and cryptographic proof inside every remote session.
          </p>
        </div>
      </section>

      {/* What Is Keystrike */}
      <section id="what-is-keystrike" className="bg-surface py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">What Is Keystrike?</h2>
          <p className="text-xl text-[#4A5568] mb-6">
            Keystrike is a continuous remote access governance platform. It operates after login, inside live remote sessions, where existing security tools have limited visibility and no enforcement capability.
          </p>
          <p className="text-lg text-[#4A5568] mb-6">Keystrike delivers three governance outcomes:</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent text-xl w-24 flex-shrink-0">SEE</span>
              <span className="text-[#4A5568] text-lg">— live visibility into who is doing what inside active remote sessions</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent text-xl w-24 flex-shrink-0">CONTROL</span>
              <span className="text-[#4A5568] text-lg">— deterministic, real-time enforcement of governance policies inside the session</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="font-bold text-accent text-xl w-24 flex-shrink-0">PROVE</span>
              <span className="text-[#4A5568] text-lg">— cryptographically attested, audit-ready evidence that governance was continuously applied</span>
            </li>
          </ul>
          <p className="text-lg text-[#4A5568]">
            Keystrike complements IAM, PAM, SIEM, SOAR, and XDR. It does not replace them. It governs the space they were never designed to reach: inside the authenticated session itself.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#0D1B2A]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="flex items-center justify-center px-4 py-8 lg:px-20 lg:py-16">
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                What Happens Inside a Remote Session <span className="text-white">Is the Governance Gap</span>
              </h2>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Privileged remote access is the most common entry point in OT, ICS, and enterprise incidents. Credential-based attacks succeed not because identity fails — but because nothing governs the session after authentication.
              </p>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Keystrike enforces governance at the session level in real time: continuous verification, deterministic policy enforcement, and cryptographic attestation of every action. No changes to your existing identity infrastructure.
              </p>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Built for organizations operating under DORA, NIS2, and IEC 62443.
              </p>
              <a href="/contact" className="inline-block bg-[#FFFFFF] text-[#0D1B2A] hover:bg-[#F0F0F0] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] transition-colors">
                Close the Post-Authentication Governance Gap
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-8 lg:px-20 lg:py-16">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="w-full bg-[#0D1B2A] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-1">
                <span className="text-4xl md:text-5xl font-bold text-white">67%</span>
                <span className="text-lg md:text-xl font-light text-[#A0AEC0] ml-2">of targets are Critical Infrastructure</span>
              </div>
              <span className="text-[10px] text-[#4A5568] uppercase tracking-wider">Verizon DBIR</span>
            </div>
            <div className="hidden md:block text-white text-2xl">•</div>
            <div className="block md:hidden w-12 h-px bg-[#4A5568]"></div>
            <div className="flex flex-col items-center">
              <div className="mb-1">
                <span className="text-4xl md:text-5xl font-bold text-white">280 days</span>
                <span className="text-lg md:text-xl font-light text-[#A0AEC0] ml-2">attackers stay undetected on average</span>
              </div>
              <span className="text-[10px] text-[#4A5568] uppercase tracking-wider">IBM Cost of a Data Breach Report</span>
            </div>
            <div className="hidden md:block text-white text-2xl">•</div>
            <div className="block md:hidden w-12 h-px bg-[#4A5568]"></div>
            <div className="flex flex-col items-center">
              <div className="mb-1">
                <span className="text-4xl md:text-5xl font-bold text-white">30%</span>
                <span className="text-lg md:text-xl font-light text-[#A0AEC0] ml-2">of breaches involve third parties</span>
              </div>
              <span className="text-[10px] text-[#4A5568] uppercase tracking-wider">Verizon DBIR</span>
            </div>
            <div className="hidden md:block text-white text-2xl">•</div>
            <div className="block md:hidden w-12 h-px bg-[#4A5568]"></div>
            <div className="flex flex-col items-center">
              <div className="mb-1">
                <span className="text-4xl md:text-5xl font-bold text-white">86%</span>
                <span className="text-lg md:text-xl font-light text-[#A0AEC0] ml-2">of ransomware attacks use valid remote credentials</span>
              </div>
              <span className="text-[10px] text-[#4A5568] uppercase tracking-wider">Sophos Ransomware Report</span>
            </div>
          </div>
        </div>
      </section>

      {/* How Keystrike Completes the Security Stack */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Keystrike Completes the Security Stack
            </h2>
            <p className="text-xl text-text-primary max-w-4xl mx-auto">
              Keystrike doesn&apos;t replace any tool in the stack. It completes each one by giving it the ground truth and session-level verification it was never designed to provide.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr style={{backgroundColor: 'var(--accent)'}}>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">Tool</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">Gap for Remote Access</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">Keystrike Fills</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">Why it Works</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">PAM</td>
                  <td className="px-6 py-6 text-text-primary">Credentials managed, not continuously verified</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>CONTROL:</strong> Cryptographic attestation beyond credential checkout.<br/>
                    <strong>SEE:</strong> Live map surfaces all access paths outside PAM scope.
                  </td>
                  <td className="px-6 py-6 text-text-primary">PAM controls the vault. Keystrike verifies who controls every command inside the session — and maps every access path your PAM doesn&apos;t manage.</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">IGA / MFA</td>
                  <td className="px-6 py-6 text-text-primary">Lifecycle focus; slow to detect privilege abuse</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>SEE:</strong> Live map detects misuse across active sessions.<br/>
                    <strong>CONTROL:</strong> Attestation blocks unauthorized commands in real time.
                  </td>
                  <td className="px-6 py-6 text-text-primary">IGA manages entitlements. Keystrike shows when those entitlements are being misused live — and stops the damage before it occurs.</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">SIEM</td>
                  <td className="px-6 py-6 text-text-primary">Log aggregation; delayed alerts on past events</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>SEE:</strong> Live topology as a new data source.<br/>
                    <strong>PROVE:</strong> Zero-false-positive attestation failures as definitive IOCs.
                  </td>
                  <td className="px-6 py-6 text-text-primary">SIEM correlates events after the fact. Keystrike feeds it cryptographic signals and live topology data that make every alert more accurate.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">ZTNA</td>
                  <td className="px-6 py-6 text-text-primary">Verifies access at connection; cannot see inside the session</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>SEE:</strong> Maps east-west movement inside the trusted perimeter.<br/>
                    <strong>CONTROL:</strong> Extends continuous verification from connection grant to command execution.
                  </td>
                  <td className="px-6 py-6 text-text-primary">ZTNA controls the door. Keystrike verifies every action taken inside the room — and maps everything ZTNA can&apos;t see.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works — SEE / CONTROL / PROVE */}
      <section id="how-it-works" className="bg-surface py-20" itemScope itemType="https://schema.org/Product">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4" itemProp="name">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* SEE */}
            <article id="how-it-works-see" className="card p-8 text-center" itemScope itemType="https://schema.org/SoftwareFeature" data-pillar="see">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4" itemProp="name">SEE</h3>
              <p className="text-text-primary mb-4 font-semibold" itemProp="description">Live Session Visibility</p>
              <p className="text-text-primary text-sm">Keystrike provides continuous, real-time visibility into active remote sessions. Security teams see who is connected, what commands are being executed, and whether session activity aligns with the stated access intent — as it happens, not after the fact.</p>
            </article>

            {/* CONTROL */}
            <article id="how-it-works-control" className="card p-8 text-center" itemScope itemType="https://schema.org/SoftwareFeature" data-pillar="control">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4" itemProp="name">CONTROL</h3>
              <p className="text-text-primary mb-4 font-semibold" itemProp="description">Deterministic In-Session Enforcement</p>
              <p className="text-text-primary text-sm">Keystrike enforces governance policies inside the live session. Unauthorized commands are stopped deterministically — not flagged, not scored, not queued for review. Enforcement is immediate, policy-driven, and operates independently of probabilistic detection models.</p>
            </article>

            {/* PROVE */}
            <article id="how-it-works-prove" className="card p-8 text-center" itemScope itemType="https://schema.org/SoftwareFeature" data-pillar="prove">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4" itemProp="name">PROVE</h3>
              <p className="text-text-primary mb-4 font-semibold" itemProp="description">Cryptographic Attestation</p>
              <p className="text-text-primary text-sm">Every governance action, enforcement decision, and session event is recorded with cryptographic attestation. The result is a continuous, tamper-evident chain of evidence that proves governance was applied — not just that activity was logged. Audit-ready by design.</p>
            </article>

          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Keystrike <span className="text-accent">Governs Privileged Remote Sessions</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-surface rounded-lg overflow-hidden shadow-lg border border-border">
              {/* Video Container — insert explanation video here */}
              <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-accent/5">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  preload="metadata"
                  aria-label="Keystrike continuous remote access governance platform demonstration video"
                >
                  <source src="/Keystrike_10_02.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 bg-surface">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary text-sm">SEE — Live Session Visibility</h3>
                      <p className="text-text-primary text-xs">Real-time visibility into active remote sessions as it happens</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary text-sm">CONTROL — Deterministic Enforcement</h3>
                      <p className="text-text-primary text-xs">Unauthorized commands stopped before execution, not flagged after</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary text-sm">PROVE — Cryptographic Attestation</h3>
                      <p className="text-text-primary text-xs">Tamper-evident governance trail structured for DORA, NIS2, IEC 62443</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/contact" className="btn btn-primary">Request an Executive Briefing</a>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Sections */}
      {/* CISO */}
      <section id="persona-ciso" className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">For CISOs and Security Leadership — CONTROL</h2>
          <p className="text-xl text-[#4A5568] mb-6 font-semibold">Govern What Happens After Access Is Granted</p>
          <ul className="space-y-4 mb-8 text-lg text-[#4A5568]">
            <li>• Deterministic enforcement inside live remote sessions reduces residual risk that persists after authentication</li>
            <li>• Real-time governance policies stop unauthorized commands before they execute — without relying on detection or alerting</li>
            <li>• Continuous session governance closes the gap between what access was intended and what actually happens</li>
          </ul>
          <a href="/contact" id="exec-briefing" className="inline-block bg-[#0D3D3D] text-white hover:bg-[#1A5252] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] transition-colors">
            → Request an Executive Briefing
          </a>
        </div>
      </section>

      {/* Compliance / Audit */}
      <section id="persona-compliance" className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">For Compliance and Audit Leaders — PROVE</h2>
          <p className="text-xl text-[#4A5568] mb-6 font-semibold">Prove Governance Was Applied — Not Just That Activity Was Logged</p>
          <ul className="space-y-4 mb-8 text-lg text-[#4A5568]">
            <li>• Cryptographic attestation provides tamper-evident proof that governance policies were enforced inside every remote session</li>
            <li>• Continuous evidence generation aligns with NIS2, DORA, SOC 2, and audit frameworks requiring demonstrable control over remote access</li>
            <li>• Audit-ready governance trails are produced by design — no manual evidence assembly required</li>
          </ul>
          <a href="/contact" id="audit-briefing" className="inline-block bg-[#0D3D3D] text-white hover:bg-[#1A5252] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] transition-colors">
            → Download the Governance &amp; Compliance Overview
          </a>
        </div>
      </section>

      {/* Security Operations */}
      <section id="persona-ops" className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">For Security Operations — SEE</h2>
          <p className="text-xl text-[#4A5568] mb-6 font-semibold">Live Visibility Without Alert Fatigue</p>
          <ul className="space-y-4 mb-8 text-lg text-[#4A5568]">
            <li>• Real-time session visibility shows who is connected, what commands are executing, and whether activity matches the access that was granted</li>
            <li>• Context-rich governance events replace noisy alerts — giving operations teams clarity, not volume</li>
            <li>• Integrates with existing SIEM and SOAR workflows without duplicating or replacing them</li>
          </ul>
          <a href="/contact" id="live-session-demo" className="inline-block bg-[#0D3D3D] text-white hover:bg-[#1A5252] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] transition-colors">
            → See a Live Session Demo
          </a>
        </div>
      </section>

      {/* Industry Relevance */}
      <section id="industries" className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">Industry Relevance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div id="ind-critical-infra" className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Critical Infrastructure / Energy</h3>
              <p className="text-[#4A5568]">Remote access to operational technology environments demands governance that operates inside the session, not just at the perimeter. Keystrike provides deterministic enforcement and cryptographic attestation for every remote session touching critical infrastructure, ensuring that access intent and access reality remain aligned.</p>
            </div>

            <div id="ind-healthcare" className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Healthcare</h3>
              <p className="text-[#4A5568]">Healthcare organizations face increasing remote access exposure across clinical systems, connected devices, and third-party vendors. Keystrike provides continuous governance inside active sessions, ensuring that remote access to sensitive environments is visible, controlled, and provably governed.</p>
            </div>

            <div id="ind-financial" className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Financial Services</h3>
              <p className="text-[#4A5568]">Financial institutions operate under rigorous audit and regulatory expectations for access governance. Keystrike extends governance into the remote session itself, providing cryptographically attested evidence that policies were enforced continuously, not just that access was granted.</p>
            </div>

            <div id="ind-government" className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Government / Public Sector</h3>
              <p className="text-[#4A5568]">Government agencies managing remote access to classified and sensitive systems require governance that extends beyond authentication. Keystrike provides deterministic enforcement and tamper-evident attestation inside active sessions, producing the continuous proof of control that government audit and compliance frameworks demand.</p>
            </div>

            <div id="ind-dc" className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Data Centers / Cloud Providers</h3>
              <p className="text-[#4A5568]">Data center operators and cloud providers grant remote access to infrastructure at scale, across internal teams, contractors, and managed service partners. Keystrike governs every session with live visibility, deterministic enforcement, and cryptographic attestation, ensuring that access governance scales with access volume.</p>
            </div>

            <div id="ind-mssps" className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">MSSPs</h3>
              <p className="text-[#4A5568]">MSSPs manage remote access across multiple customer environments with varying governance requirements. Keystrike provides a multi-tenant governance layer — giving providers and their customers live visibility, deterministic enforcement, and cryptographically attested proof of control across every managed session.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Stack Positioning */}
      <section id="stack-positioning" className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              How Keystrike Fits Your Security Stack
            </h2>
            <p className="text-xl text-[#4A5568] max-w-4xl mx-auto mb-12">
              Keystrike operates in the space between authentication and audit. IAM and PAM control who gets access. SIEM and SOAR record what happened. Keystrike governs what happens during the session — with real-time enforcement and cryptographic proof. It does not replace any tool in your stack. It governs the layer none of them were built to reach.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr style={{backgroundColor: 'var(--accent)'}}>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg"> </th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">IAM / PAM</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">SIEM / SOAR / XDR</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">Keystrike</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-6 py-4 font-bold text-text-primary">When</td>
                  <td className="px-6 py-4 text-[#4A5568]">Before the session</td>
                  <td className="px-6 py-4 text-[#4A5568]">After the session</td>
                  <td className="px-6 py-4 text-[#4A5568]">During the session</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-6 py-4 font-bold text-text-primary">What</td>
                  <td className="px-6 py-4 text-[#4A5568]">Verifies identity, grants access</td>
                  <td className="px-6 py-4 text-[#4A5568]">Collects logs, triggers alerts</td>
                  <td className="px-6 py-4 text-[#4A5568]">Enforces policy, attests governance</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-text-primary">How</td>
                  <td className="px-6 py-4 text-[#4A5568]">Authentication, authorization</td>
                  <td className="px-6 py-4 text-[#4A5568]">Event correlation, response</td>
                  <td className="px-6 py-4 text-[#4A5568]">Deterministic enforcement, cryptographic attestation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Proof and Trust */}
      <section id="proof-and-trust" className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Governance You Can Prove</h2>
          <p className="text-xl text-[#4A5568] mb-12">Keystrike does not ask you to trust that governance was applied. It proves it.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Cryptographic Attestation</h3>
              <p className="text-[#4A5568]">Every enforcement action, policy decision, and governance event inside a remote session is cryptographically attested — producing a tamper-evident record that proves what happened, when, and under which policy. This is not a log file. It is a chain of cryptographic proof.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Continuous Governance Trail</h3>
              <p className="text-[#4A5568]">Keystrike generates a continuous governance trail for every session — not a snapshot, not a periodic audit sample, but a complete, attestable record from session start to session end.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">Audit-Ready by Design</h3>
              <p className="text-[#4A5568]">Evidence is structured for direct consumption by audit and compliance teams. No manual assembly. No forensic reconstruction. Governance proof is a native output of the platform — not an afterthought.</p>
            </div>
          </div>

          {/* Trust signal */}
          <div className="rounded-lg p-8 text-center">
            <p className="text-[#4A5568] text-lg">Trusted by security teams governing remote access in critical infrastructure, energy, healthcare, and financial services across Europe.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <a href="/contact" className="bg-[#0D3D3D] text-white hover:bg-[#1A5252] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] transition-colors text-center">
              Request an Executive Briefing
            </a>
            <a href="/contact" className="bg-transparent text-[#0D3D3D] hover:bg-[rgba(13,61,61,0.08)] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-[1.5px] border-solid border-[#0D3D3D] transition-colors text-center">
              Ask a Question
            </a>
          </div>
          <p className="text-sm text-center text-[#4A5568] mt-3">Have a specific question about session governance, compliance alignment, or how Keystrike fits your stack? Reach out directly.</p>
        </div>
      </section>

      {/* FAQ — Landing Page Excerpt (4 questions) */}
      <section id="faq" className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div className="faq-item">
              <h3 className="text-xl font-bold text-text-primary mb-3">What does Keystrike do?</h3>
              <p className="text-[#4A5568]">Keystrike is a continuous remote access governance platform. It provides live visibility into active remote sessions, deterministic in-session enforcement, and cryptographically attested proof that governance was applied inside every session.</p>
            </div>
            <div className="faq-item">
              <h3 className="text-xl font-bold text-text-primary mb-3">How does Keystrike differ from IAM and PAM?</h3>
              <p className="text-[#4A5568]">IAM and PAM verify who gets in. Keystrike governs what happens after access is granted — inside the live session. It provides real-time enforcement and cryptographic proof of governance, complementing the core identity controls.</p>
            </div>
            <div className="faq-item">
              <h3 className="text-xl font-bold text-text-primary mb-3">What happens after login — and why does it matter?</h3>
              <p className="text-[#4A5568]">After authentication, governance often stops at the boundary. Keystrike closes the governance gap by observing, enforcing, and attesting within the session itself.</p>
            </div>
            <div className="faq-item">
              <h3 className="text-xl font-bold text-text-primary mb-3">Does Keystrike replace my existing security tools?</h3>
              <p className="text-[#4A5568]">No. Keystrike complements IAM, PAM, SIEM, SOAR, and XDR. It governs the layer those tools were not built to reach — inside the authenticated remote session.</p>
            </div>
          </div>

          <div className="mt-8">
            <a href="/faq" className="text-accent font-semibold hover:underline">See all frequently asked questions →</a>
          </div>

          {/* FAQPage Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What does Keystrike do?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Keystrike is a continuous remote access governance platform. It provides live visibility into active remote sessions, deterministic in-session enforcement, and cryptographically attested proof that governance was applied inside every session."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Keystrike differ from IAM and PAM?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "IAM and PAM verify who gets in. Keystrike governs what happens after access is granted — inside the live session. It provides real-time enforcement and cryptographic proof of governance, complementing the core identity controls."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens after login — and why does it matter?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "After authentication, governance often stops at the boundary. Keystrike closes the governance gap by observing, enforcing, and attesting within the session itself."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Keystrike replace my existing security tools?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Keystrike complements IAM, PAM, SIEM, SOAR, and XDR. It governs the layer those tools were not built to reach — inside the authenticated remote session."
                    }
                  }
                ]
              }),
            }}
          />
        </div>
      </section>

      {/* Footer CTA — All Three */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Govern What Happens Inside Your Remote Sessions
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Keystrike provides continuous remote access governance — live visibility, deterministic enforcement, and cryptographic proof inside every session. Complements your existing stack. Closes the governance gap after login.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[16px] mb-8">
            <a href="/contact" className="w-full sm:w-auto bg-[#FFFFFF] text-[#0D3D3D] hover:bg-[#F0F0F0] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-none transition-colors text-center">
              Request an Executive Briefing
            </a>
            <a href="/contact" className="w-full sm:w-auto bg-transparent text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.10)] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-[1.5px] border-solid border-[#FFFFFF] transition-colors text-center">
              Download the Remote Access Governance Brief
            </a>
            <a href="/contact" className="w-full sm:w-auto bg-transparent text-[#FFFFFF] hover:bg-[rgba(255,255,255,0.10)] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-[1.5px] border-solid border-[#FFFFFF] transition-colors text-center">
              Ask a Question
            </a>
          </div>
          <div className="text-blue-100 text-sm">
            <p>Questions? Email us at <span className="font-medium">connect@keystrike.com</span></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
