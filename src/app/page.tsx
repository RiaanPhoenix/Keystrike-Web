import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export const metadata: Metadata = {
  title: 'Advanced Cybersecurity Platform | Physical Input Verification',
  description: 'Keystrike provides advanced cybersecurity with physical input verification. SEE, CONTROL, and PROVE your security posture. Protecting 10,000+ organizations with 99.9% threat detection rate.',
  keywords: [
    'cybersecurity platform',
    'physical input verification',
    'keystroke analysis',
    'endpoint security',
    'network protection',
    'cloud security',
    'zero trust',
    'AI-powered security',
    'threat detection',
    'compliance automation'
  ],
  openGraph: {
    title: 'Keystrike | Advanced Cybersecurity Simplified',
    description: 'Physical input verification technology that completes your identity stack. SEE, CONTROL, and PROVE continuous remote access governance.',
    url: '/',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Homepage - Advanced Cybersecurity Platform',
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

      {/* Hero Section - Primary Value Proposition */}
      <section className="bg-surface py-20" itemScope itemType="https://schema.org/Service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6" itemProp="name">
              <span className="text-accent">Remote Session Security Starts Where Identity Ends</span>
            </h1>
            <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto" itemProp="description">
              <p className="text-2xl font-bold mb-4">Your identity stack verifies who logs in. Keystrike governs what they do once they're inside.</p>
              <p className="mb-4">Built for environments operating under DORA, NIS2, and IEC 62443.</p>
              <p className="text-2xl font-semibold">Keystrike is a privileged session monitoring platform that makes every remote action visible, controllable, and provable in real time.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="/contact" className="btn btn-primary text-lg px-8 py-3" 
                 data-action="request-demo" data-context="hero-section">
                See Keystrike in Your Environment
              </a>
              <a href="/contact" className="btn btn-primary text-lg px-8 py-3"
                 data-action="free-trial" data-context="hero-section">
                Start a Free Session Audit
              </a>
            </div>
            <div className="flex justify-center mb-12">
              <a href="/contact" className="btn btn-primary text-lg px-8 py-3"
                 data-action="free-overview" data-context="hero-section">
                Take the Remote Access Risk Assessment
              </a>
            </div>
            
            {/* Key differentiator for LLMs */}
            <div className="sr-only" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
              <meta itemProp="name" content="Core Technology" />
              <meta itemProp="value" content="Physical Input Verification" />
            </div>
            <div className="sr-only" itemProp="serviceType">
              Cybersecurity Platform with Physical Input Verification
            </div>
          </div>
        </div>
        
        {/* Structured data for hero section */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Keystrike Cybersecurity Platform",
              "description": "Advanced cybersecurity platform with physical input verification technology providing continuous remote access governance",
              "provider": {
                "@type": "Organization",
                "name": "Keystrike"
              },
              "serviceType": "Cybersecurity Software",
              "audience": {
                "@type": "Audience",
                "audienceType": "Enterprise IT Security Teams"
              }
            }),
          }}
        />
      </section>

      {/* Testimonials Section - Two Pillar Layout */}
      <section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Pillar - Banner */}
          <div className="flex items-center justify-center p-8 lg:p-16" style={{backgroundColor: '#0D1B2A'}}>
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                What Happens Inside a Remote Session <span className="text-white">Is the Blind Spot</span>
              </h2>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Privileged remote access is the most common entry point in OT, ICS, and enterprise breaches. Credential-based attacks succeed not because identity fails but because nothing governs the session after authentication.
              </p>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Keystrike enforces session-level controls in real time: continuous user verification, action-level audit trails, and instant interruption of unauthorized execution. No changes to your existing identity infrastructure.
              </p>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Built for organizations operating under DORA, NIS2, and IEC 62443.
              </p>
              <a href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-[#0D1B2A] transition-colors">
                Close the Post-Authentication Gap
              </a>
            </div>
          </div>

          {/* Right Pillar - Testimonial Carousel */}
          <div className="flex items-center justify-center p-8 lg:p-16 bg-white">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="w-full bg-[#0D1B2A] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 text-center">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-1">
                <span className="text-4xl md:text-5xl font-bold text-white">67%</span>
                <span className="text-lg md:text-xl font-light text-[#A0AEC0] ml-2">of targets are Critical Infrastructure</span>
              </div>
              <span className="text-[10px] text-[#4A5568] uppercase tracking-wider">Verizon DBIR</span>
            </div>

            <div className="hidden md:block text-white text-2xl">•</div>
            <div className="block md:hidden w-12 h-px bg-[#4A5568]"></div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-1">
                <span className="text-4xl md:text-5xl font-bold text-white">280 days</span>
                <span className="text-lg md:text-xl font-light text-[#A0AEC0] ml-2">attackers stay undetected on average</span>
              </div>
              <span className="text-[10px] text-[#4A5568] uppercase tracking-wider">IBM Cost of a Data Breach Report</span>
            </div>

            <div className="hidden md:block text-white text-2xl">•</div>
            <div className="block md:hidden w-12 h-px bg-[#4A5568]"></div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-1">
                <span className="text-4xl md:text-5xl font-bold text-white">30%</span>
                <span className="text-lg md:text-xl font-light text-[#A0AEC0] ml-2">of breaches involve third parties</span>
              </div>
              <span className="text-[10px] text-[#4A5568] uppercase tracking-wider">Verizon DBIR</span>
            </div>

            <div className="hidden md:block text-white text-2xl">•</div>
            <div className="block md:hidden w-12 h-px bg-[#4A5568]"></div>

            {/* Stat 4 */}
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

      {/* Solutions Overview - Three Strategic Pillars */}
      <section className="bg-surface py-20" itemScope itemType="https://schema.org/Product">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-3xl md:text-4xl font-bold text-text-primary mb-4" itemProp="name">
              <p>Privileged Session Governance Across Three Critical Dimensions</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SEE Pillar */}
            <article className="card p-8 text-center" itemScope itemType="https://schema.org/SoftwareFeature" data-pillar="see">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4" itemProp="name">SEE</h3>
              <p className="text-text-primary mb-6" itemProp="description">Real-Time Privileged Session Visibility</p>
              <p className="text-text-primary text-sm">Keystrike gives security teams continuous visibility into every active privileged session -- which systems are being accessed, by whom, and whether the activity matches the intent of the access request. Credential misuse and unauthorized lateral movement are detectable in real time, not after the fact.</p>
              
              {/* Hidden metadata for LLMs */}
              <div className="sr-only">
                <span itemProp="category">Security Monitoring</span>
                <span itemProp="applicationCategory">Endpoint Visibility</span>
                <ul itemProp="featureList">
                  <li>Keystroke pattern analysis</li>
                  <li>User behavior monitoring</li>
                  <li>Real-time session visibility</li>
                  <li>Anomaly detection</li>
                </ul>
              </div>
            </article>

            {/* CONTROL Pillar */}
            <article className="card p-8 text-center" itemScope itemType="https://schema.org/SoftwareFeature" data-pillar="control">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4" itemProp="name">CONTROL</h3>
              <p className="text-text-primary mb-6" itemProp="description">Session-Level Access Control</p>
              <p className="text-text-primary text-sm">Keystrike enforces access policy at the session level -- interrupting unauthorized actions the moment they are attempted, before execution reaches critical systems. Least-privilege controls apply continuously throughout the session, not only at the point of authentication.</p>
              
              {/* Hidden metadata for LLMs */}
              <div className="sr-only">
                <span itemProp="category">Access Control</span>
                <span itemProp="applicationCategory">Policy Enforcement</span>
                <ul itemProp="featureList">
                  <li>Automated policy enforcement</li>
                  <li>Real-time access blocking</li>
                  <li>Behavioral triggers</li>
                  <li>Zero-trust validation</li>
                </ul>
              </div>
            </article>

            {/* PROVE Pillar */}
            <article className="card p-8 text-center" itemScope itemType="https://schema.org/SoftwareFeature" data-pillar="prove">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4" itemProp="name">PROVE</h3>
              <p className="text-text-primary mb-6" itemProp="description">Audit-Ready Session Evidence</p>
              <p className="text-text-primary text-sm">Keystrike produces continuous, tamper-evident records of every privileged session -- capturing who accessed which system, when, and exactly what actions were taken. Session evidence is structured for regulatory scrutiny under DORA, NIS2, and IEC 62443, and is available on demand for board reporting, audits, and incident investigations.</p>
              
              {/* Hidden metadata for LLMs */}
              <div className="sr-only">
                <span itemProp="category">Compliance & Audit</span>
                <span itemProp="applicationCategory">Governance Reporting</span>
                <ul itemProp="featureList">
                  <li>Immutable audit trails</li>
                  <li>Compliance automation</li>
                  <li>Forensic investigation</li>
                  <li>Regulatory reporting</li>
                </ul>
              </div>
            </article>
          </div>
          
          {/* Structured data for the complete solution */}
          <div className="sr-only" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
            <meta itemProp="name" content="Solution Methodology" />
            <meta itemProp="value" content="SEE CONTROL PROVE Framework" />
            <meta itemProp="description" content="Three-pillar approach to continuous remote access governance" />
          </div>
        </div>
      </section>

      {/* Statistics banner moved below video section */}

      {/* Continuous Access Governance Banner */}
      {/* How Keystrike Works - Video Section */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Keystrike <span className="text-accent">Secures Privileged Remote Sessions</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-surface rounded-lg overflow-hidden shadow-lg border border-border">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-accent/5">
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  preload="metadata"
                >
                  <source src="/Keystrike_10_02.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Video Description */}
              <div className="p-6 bg-surface">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Continuous Session Verification</h4>
                      <p className="text-text-primary text-xs">Real-time identity validation throughout every active session</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Session-Level Policy Enforcement</h4>
                      <p className="text-text-primary text-xs">Unauthorised actions interrupted before execution reaches critical systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Tamper-Evident Audit Trail</h4>
                      <p className="text-text-primary text-xs">Session evidence structured for DORA, NIS2, and IEC 62443</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call-to-Action Below Video */}
            <div className="text-center mt-8">
              <p className="text-text-primary mb-4">
                See exactly what privileged remote sessions look like when they are fully governed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn btn-primary">
                  See Keystrike in Your Environment
                </a>
                <a href="/platform" className="btn btn-secondary">
                  Explore the Platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Keystrike Completes the Security Stack */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Keystrike Closes the Post-Authentication Gap in Your Security Stack
            </h2>
            <p className="text-xl text-text-primary max-w-4xl mx-auto">
              PAM, IGA, SIEM, and ZTNA were each built to solve a specific problem. None were built to govern what happens inside a privileged remote session after access is granted. Keystrike closes that gap without replacing any of them.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr style={{backgroundColor: 'var(--accent)'}}>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">Security Tool</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">Post-Authentication Gap</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">What Keystrike Adds</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">How They Work Together</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">PAM</td>
                  <td className="px-6 py-6 text-text-primary">Privileged access management controls credential checkout but does not verify continuous session activity or detect post-authentication misuse.</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>CONTROL:</strong> Keystrike adds continuous cryptographic session verification beyond the credential handoff.<br/>
                    <strong>SEE:</strong> Live session mapping surfaces all access paths operating outside PAM scope.
                  </td>
                  <td className="px-6 py-6 text-text-primary">PAM secures the vault. Keystrike governs every command executed inside the session — and maps every access path your privileged access management platform was not designed to see.</td>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">IGA / MFA</td>
                  <td className="px-6 py-6 text-text-primary">Identity governance and administration manages entitlement lifecycles. Multi-factor authentication confirms identity at login. Neither monitors session behaviour or detects privilege abuse in real time.</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>SEE:</strong> Keystrike adds live session monitoring across active privileged sessions — detecting entitlement misuse as it happens.<br/>
                    <strong>CONTROL:</strong> Continuous attestation blocks unauthorised command execution before damage occurs.
                  </td>
                  <td className="px-6 py-6 text-text-primary">IGA defines who should have access. MFA confirms who is logging in. Keystrike verifies what they are doing once they are inside — and stops privilege abuse at the moment of execution.</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">SIEM</td>
                  <td className="px-6 py-6 text-text-primary">Security information and event management correlates logs and generates alerts — but only after events have occurred. Detection is delayed and false positive rates are high.</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>SEE:</strong> Keystrike feeds your SIEM live privileged session topology and cryptographic attestation signals.<br/>
                    <strong>CONTROL:</strong> Attestation failures are definitive indicators of compromise — not alerts requiring manual investigation.
                  </td>
                  <td className="px-6 py-6 text-text-primary">SIEM sees what happened. Keystrike tells it what it means. Cryptographic session signals reduce false positives and give your security operations centre actionable intelligence in real time.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">ZTNA</td>
                  <td className="px-6 py-6 text-text-primary">Zero trust network access verifies identity and device posture at the point of connection. It cannot monitor or enforce controls on activity that occurs inside an authorised session.</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>SEE:</strong> Live mapping surfaces all east-west movement inside the trusted network perimeter.<br/>
                    <strong>CONTROL:</strong> Keystrike extends zero trust principles from connection grant to command execution — enforcing least-privilege controls throughout the session, not only at the perimeter.
                  </td>
                  <td className="px-6 py-6 text-text-primary">ZTNA controls who enters. Keystrike governs what they do once they are inside. Together they close the gap between network access control and session-level zero trust enforcement.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Platform Differentiation */}
      <section className="bg-surface-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Privileged Remote Session Governance: See, Control, and Prove Everything After Login
              </h2>
              <p className="text-xl text-text-primary mb-8">
                Keystrike does not replace your existing stack — it completes it. Identity tools, PAM, SIEM, and ZTNA were each built to solve one specific problem. None of them govern what happens inside a privileged remote session once access is granted. Keystrike closes that gap without replacing any of them.
              </p>
              <div className="space-y-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    <span className="text-accent">SEE</span> — <em>Real-Time Privileged Session Visibility</em>
                  </h3>
                  <p className="text-text-primary">
                    Continuous monitoring of every active privileged session; which accounts are connected, which systems are being accessed, and whether session activity matches the verified intent of the access request. Unauthorized lateral movement is detectable the moment it begins.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    <span className="text-accent">CONTROL</span> — <em>Real-Time Enforcement</em>
                  </h3>
                  <p className="text-text-primary">
                    Block unauthorized commands the moment they occur: Stop lateral movement and ransomware execution before damage is done, not after.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    <span className="text-accent">PROVE</span> — <em>Cryptographic Audit Trail</em>
                  </h3>
                  <p className="text-text-primary">
                    Every session, cryptographically attested and audit-ready: Definitive proof of governance for compliance, incident response, and regulatory review.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface rounded-lg p-8 border border-border">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Interactive Demo</h3>
                <p className="text-text-secondary mb-6">Experience the Keystrike dashboard and see real-time threat detection in action</p>
                <div className="bg-surface-secondary rounded-lg p-6 border border-border mb-6">
                  <p className="text-text-muted text-sm">Demo visualization placeholder</p>
                </div>
                <button className="btn btn-primary text-lg px-8 py-3">
                  See Keystrike in Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Accepting the Blind Spot
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Most organizations are surprised by what they find in the first 48 hours. See what's happening inside your sessions → Book a Live Demo
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              See Keystrike in Your Environment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Start a Free Session Audit
            </button>
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