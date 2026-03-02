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
              <span className="text-accent">THE IDENTITY GAP</span>
            </h1>
            <div className="text-xl text-text-primary mb-8 max-w-3xl mx-auto" itemProp="description">
              <p className="text-2xl font-bold mb-4">Attackers Don't Break In. They Log In.</p>
              <p className="mb-4">Your identity stack is hardened. But after access is granted, remote sessions remain invisible, unenforced, and wide open. That's where the real damage happens.</p>
              <p className="text-xl font-semibold">Keystrike makes every remote action visible, enforceable, and provable in real time — interrupting attack chains before they cause damage.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="/contact" className="btn btn-primary text-lg px-8 py-3" 
                 data-action="request-demo" data-context="hero-section">
                Request Demo
              </a>
              <a href="/contact" className="btn btn-primary text-lg px-8 py-3"
                 data-action="free-trial" data-context="hero-section">
                Start Free Trial
              </a>
            </div>
            <div className="flex justify-center mb-12">
              <a href="/contact" className="btn btn-primary text-lg px-8 py-3"
                 data-action="free-overview" data-context="hero-section">
                Free Remote Access Risk Assessment
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

      {/* Stop Attacks Banner */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Your Sessions Are Running. <span className="text-accent">Are You Watching?</span>
          </h2>
          <div className="text-lg text-text-primary leading-relaxed space-y-4">
            <p>Once a remote session begins, identity tooling stops. Security teams can't see what systems are being touched, whether activity matches approved intent, or when something goes wrong — until after the damage is done.</p>
          </div>
        </div>
      </section>

      {/* Solutions Overview - Three Strategic Pillars */}
      <section className="bg-surface py-20" itemScope itemType="https://schema.org/Product">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-3xl md:text-4xl font-bold text-text-primary mb-4" itemProp="name">
              <p>Govern What Happens After Login</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* SEE Pillar */}
            <article className="card p-8 text-center" itemScope itemType="https://schema.org/SoftwareFeature" data-pillar="see">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4" itemProp="name">SEE</h3>
              <p className="text-text-primary mb-6" itemProp="description">Live Remote Access Mapping</p>
              <p className="text-text-primary text-sm">Keystrike creates a live map of all remote access activity across the environment.</p>
              
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
              <p className="text-text-primary mb-6" itemProp="description">Real-Time Enforcement</p>
              <p className="text-text-primary text-sm">Keystrike enforces remote access policies at the moment actions are attempted and before damage occurs.</p>
              
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
              <p className="text-text-primary mb-6" itemProp="description">Provable Governance</p>
              <p className="text-text-primary text-sm">Keystrike generates continuous records of who accessed what system and allows monitoring of how policies and compliance mandates are progressing over time.</p>
              
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
              How Keystrike <span className="text-accent">Works</span>
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
                      <h4 className="font-semibold text-text-primary text-sm">Physical Verification</h4>
                      <p className="text-text-primary text-xs">Real-time keystroke verification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Instant Response</h4>
                      <p className="text-text-primary text-xs">Real-time enforcement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">Continuous Audit</h4>
                      <p className="text-text-primary text-xs">Complete compliance reporting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call-to-Action Below Video */}
            <div className="text-center mt-8">
              <p className="text-text-primary mb-4">
                Ready to see Keystrike in your environment?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn btn-primary">
                  Schedule Live Demo
                </a>
                <a href="/platform" className="btn btn-secondary">
                  Explore Platform
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
              How Keystrike Completes the Security Stack
            </h2>
            <p className="text-xl text-text-primary max-w-4xl mx-auto">
              The tools in your stack were built to do one thing well. Keystrike fills the gaps between them, giving each one the session-level visibility it was never designed to have.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr style={{backgroundColor: 'var(--accent)'}}>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">Tool</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">The Blind Spot</th>
                  <th className="px-6 py-4 text-left text-white font-bold text-lg">The Fix</th>
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
                  <td className="px-6 py-6 text-text-primary">PAM controls the vault. Keystrike verifies who controls every command inside the session — and maps every access path your PAM doesn't manage.</td>
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
                    <strong>CONTROL:</strong> Zero-false-positive attestation failures as definitive IOCs.
                  </td>
                  <td className="px-6 py-6 text-text-primary">SIEM correlates events after the fact. Keystrike feeds it cryptographic signals and live topology data that make every alert more accurate.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-6 font-bold text-text-primary text-lg">ZTNA</td>
                  <td className="px-6 py-6 text-text-primary">Verifies access at connection; cannot see inside the session</td>
                  <td className="px-6 py-6 text-text-primary">
                    <strong>SEE:</strong> Maps east-west movement inside the trusted perimeter.<br/>
                    <strong>CONTROL:</strong> Extends zero trust from connection grant to command execution.
                  </td>
                  <td className="px-6 py-6 text-text-primary">ZTNA controls the door. Keystrike verifies every action taken inside the room — and maps everything ZTNA can't see.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Indicators Header */}
      <section className="bg-white py-16" itemScope itemType="https://schema.org/Organization">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-text-primary text-4xl font-bold uppercase tracking-wider">
              <p>86% OF RANSOMWARE ATTACKS ARE</p>
              <p>VIA REMOTE DESKTOP CONNECTIONS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Stats Ticker */}
      <section className="overflow-hidden" style={{backgroundColor: '#0D1B2A'}}>
        <div className="ticker-wrapper py-6">
          <div className="ticker-content">
            <div className="ticker-item">
              <span className="stat-number">50%</span>
              <span className="stat-label">of targets are people</span>
            </div>
            <div className="ticker-divider">·</div>
            <div className="ticker-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">of breaches are due to human error</span>
            </div>
            <div className="ticker-divider">·</div>
            <div className="ticker-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">of targets are Critical Infrastructure</span>
            </div>
            <div className="ticker-divider">·</div>
            <div className="ticker-item">
              <span className="stat-number">280</span>
              <span className="stat-label">days attackers stay undetected</span>
            </div>
            <div className="ticker-divider">·</div>
            <div className="ticker-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">of breaches involve third parties</span>
            </div>
            <div className="ticker-divider">·</div>
            {/* Duplicate for seamless loop */}
            <div className="ticker-item">
              <span className="stat-number">50%</span>
              <span className="stat-label">of targets are people</span>
            </div>
            <div className="ticker-divider">·</div>
            <div className="ticker-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">of breaches are due to human error</span>
            </div>
            <div className="ticker-divider">·</div>
            <div className="ticker-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">of targets are Critical Infrastructure</span>
            </div>
            <div className="ticker-divider">·</div>
            <div className="ticker-item">
              <span className="stat-number">280</span>
              <span className="stat-label">days attackers stay undetected</span>
            </div>
            <div className="ticker-divider">·</div>
            <div className="ticker-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">of breaches involve third parties</span>
            </div>
            <div className="ticker-divider">·</div>
          </div>
        </div>
        
        {/* Hidden structured data for LLMs */}
        <div className="sr-only">
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <span itemProp="ratingValue">50</span>
            <meta itemProp="bestRating" content="100" />
            <meta itemProp="description" content="Threat prevention effectiveness rate" />
          </div>
          <span data-metric="detection-rate" data-value="95">95%</span>
          <span data-metric="availability" data-value="70">70%</span>
          <span itemProp="certification">280</span>
        </div>
      </section>

      {/* Section 4: Platform Differentiation */}
      <section className="bg-surface-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Everything That Happens <span className="text-accent">After Login</span>
              </h2>
              <p className="text-xl text-text-primary mb-8">
                Keystrike doesn't replace your existing stack, it completes it. By governing what happens inside every remote session, it closes the one gap your identity, PAM, and SIEM tools were never built to close.
              </p>
              <div className="space-y-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    <span className="text-accent">SEE</span> — <em>Full Session Visibility</em>
                  </h3>
                  <p className="text-text-primary">
                    A live, continuous map of every remote connection: Who is in, what systems they are touching, and whether it matches approved intent.
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

      {/* Testimonials Section - Two Pillar Layout */}
      <section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Pillar - Banner */}
          <div className="flex items-center justify-center p-8 lg:p-16" style={{backgroundColor: '#0D1B2A'}}>
            <div className="max-w-lg text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Sessions Are Running. <span className="text-accent">Are You Watching?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Once a remote session begins, identity tooling stops. Security teams can't see what systems are being touched, whether activity matches approved intent, or when something goes wrong — until after the damage is done.
              </p>
              <a href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-[#0D1B2A] transition-colors">
                Stop the Blind Spot
              </a>
            </div>
          </div>

          {/* Right Pillar - Testimonial Carousel */}
          <div className="flex items-center justify-center p-8 lg:p-16" style={{backgroundColor: '#F5F7FA'}}>
            <TestimonialCarousel />
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
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Start Free Trial
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