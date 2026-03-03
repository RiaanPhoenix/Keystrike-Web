import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Overview | Keystrike Security Platform',
  description: 'Govern what happens after login with Keystrike\'s physical input verification platform. See, control, and prove every remote session in real time.',
  keywords: [
    'keystrike platform',
    'physical input verification',
    'session governance',
    'remote access security',
    'real-time enforcement',
    'cryptographic audit trail',
    'security platform',
    'post-login security'
  ],
  openGraph: {
    title: 'Platform Overview | Keystrike Security Platform',
    description: 'Govern what happens after login with physical input verification. See, control, and prove every remote session in real time.',
    url: '/platform',
    images: [
      {
        url: '/og-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Platform Overview',
      },
    ],
  },
  alternates: {
    canonical: '/platform',
  },
};

export default function Platform() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="platform" />
      
      {/* SECTION 1 — Hero */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-accent text-sm font-semibold uppercase tracking-wide mb-4">
            The Keystrike Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Govern What Happens <span className="text-accent">After Login.</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Authentication tells you who logged in. Keystrike governs what they do next. Every remote session — visible, enforced, and cryptographically proven in real time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              Request a Demo
            </a>
            <a href="/solutions" className="btn btn-secondary text-lg px-8 py-3">
              Explore Solutions
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Three Pillars */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — SEE */}
            <div className="bg-white rounded-lg border-t-4 border-accent p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">SEE</span> / Full Session Visibility
              </h3>
              <p className="text-text-secondary mb-6">
                A live, continuous map of every remote connection — who is in, which systems they are touching, and whether activity aligns with approved intent. Not logs collected after the fact. A real-time operational picture your security team can act on.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Live topology of all active sessions</li>
                <li>• User, system, and protocol context</li>
                <li>• East-west movement detection</li>
                <li>• Instant anomaly surfacing</li>
              </ul>
            </div>

            {/* Card 2 — CONTROL */}
            <div className="bg-white rounded-lg border-t-4 border-accent p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">CONTROL</span> / Real-Time Enforcement
              </h3>
              <p className="text-text-secondary mb-6">
                Block unauthorised commands the moment they are issued. Keystrike enforces policy at the action level — inside every live session — stopping lateral movement and malicious execution before damage occurs, not after detection.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Command-level policy enforcement</li>
                <li>• Audit and enforcement modes</li>
                <li>• Automatic session termination on violation</li>
                <li>• Zero disruption to approved workflows</li>
              </ul>
            </div>

            {/* Card 3 — PROVE */}
            <div className="bg-white rounded-lg border-t-4 border-accent p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-accent">PROVE</span> / Cryptographic Audit Trail
              </h3>
              <p className="text-text-secondary mb-6">
                Every session, cryptographically attested and tamper-evident. Keystrike generates audit-ready records that satisfy regulators, accelerate incident response, and give your compliance team definitive proof of governance — not just log exports.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Cryptographic session attestation</li>
                <li>• Zero-false-positive indicators of compromise</li>
                <li>• Regulatory-ready compliance reports</li>
                <li>• PCI-DSS, DORA, ISO 27001 alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — How It Works */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-accent text-sm font-semibold uppercase tracking-wide mb-4">
                The Mechanism
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Physical Input Verification
              </h2>
              <p className="text-text-secondary mb-6">
                Keystrike governs sessions at the level of physical input — every keystroke, command, and action taken by a real human at a real keyboard. This means governance happens continuously, not just at login, and not just when logs are reviewed.
              </p>
              <p className="text-text-secondary mb-8">
                Any command not tied to verified physical input is flagged or blocked instantly. Automated scripts, hijacked sessions, and insider threats are interrupted at the moment of execution — before they can cause damage.
              </p>
              
              {/* Stat tiles in 2x2 grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-surface-secondary rounded-lg">
                  <div className="text-accent font-bold text-xl mb-1">24 hours</div>
                  <div className="text-text-primary font-medium text-sm">Deployment</div>
                  <div className="text-text-muted text-xs">Live within</div>
                </div>
                <div className="text-center p-4 bg-surface-secondary rounded-lg">
                  <div className="text-accent font-bold text-xl mb-1">Zero</div>
                  <div className="text-text-primary font-medium text-sm">Disruption</div>
                  <div className="text-text-muted text-xs">To existing workflows</div>
                </div>
                <div className="text-center p-4 bg-surface-secondary rounded-lg">
                  <div className="text-accent font-bold text-xl mb-1">Every</div>
                  <div className="text-text-primary font-medium text-sm">Coverage</div>
                  <div className="text-text-muted text-xs">Remote session</div>
                </div>
                <div className="text-center p-4 bg-surface-secondary rounded-lg">
                  <div className="text-accent font-bold text-xl mb-1">Instant</div>
                  <div className="text-text-primary font-medium text-sm">Detection</div>
                  <div className="text-text-muted text-xs">At moment of action</div>
                </div>
              </div>
            </div>
            
            {/* Product screenshot placeholder */}
            <div className="bg-surface-secondary rounded-lg p-8 border border-border">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Live Platform View</h3>
                <div className="bg-surface rounded-lg p-8 border border-border">
                  <p className="text-text-muted text-sm">Platform screenshot coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Security Stack Matrix */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-text-primary max-w-4xl mx-auto">
              The tools in your stack were built to do one thing well. Keystrike fills the gaps between them — giving each one the session-level visibility it was never designed to have.
            </p>
          </div>
          
          {/* Column Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text-primary">Security Layer</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text-primary">The Blind Spot</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-text-primary">The Gap Keystrike Closes</h3>
            </div>
          </div>

          {/* Matrix Rows */}
          <div className="space-y-6">
            {/* Row 1: PAM */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-text-primary mb-1">PAM</h4>
                <p className="text-text-secondary text-sm">CyberArk, BeyondTrust</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-text-primary text-sm">Controls privileged access at login, but post-login activity becomes a blind spot.</p>
              </div>
              <div className="rounded-lg p-6" style={{backgroundColor: '#0D1B2A'}}>
                <p className="text-accent font-semibold text-sm mb-2">Session Multiplier:</p>
                <p className="text-gray-200 text-sm">Governs live sessions, validating human input and blocking unauthorised commands inside authenticated access.</p>
              </div>
            </div>

            {/* Row 2: IGA */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-text-primary mb-1">IGA</h4>
                <p className="text-text-secondary text-sm">SailPoint, Saviynt</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-text-primary text-sm">Defines who should have access, but cannot prove how it is actually used.</p>
              </div>
              <div className="rounded-lg p-6" style={{backgroundColor: '#0D1B2A'}}>
                <p className="text-accent font-semibold text-sm mb-2">Validation Multiplier:</p>
                <p className="text-gray-200 text-sm">Delivers continuous, real-time proof that access intent matches access reality.</p>
              </div>
            </div>

            {/* Row 3: SIEM/XDR */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-text-primary mb-1">SIEM / XDR</h4>
                <p className="text-text-secondary text-sm">Splunk, SentinelOne, CrowdStrike</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-text-primary text-sm">Stores and correlates logs after execution. Detection does not prevent damage.</p>
              </div>
              <div className="rounded-lg p-6" style={{backgroundColor: '#0D1B2A'}}>
                <p className="text-accent font-semibold text-sm mb-2">Enforcement Multiplier:</p>
                <p className="text-gray-200 text-sm">Stops malicious actions before execution and feeds high-confidence signals downstream.</p>
              </div>
            </div>

            {/* Row 4: IAM/MFA */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-text-primary mb-1">IAM / MFA</h4>
                <p className="text-text-secondary text-sm">Okta, Entra ID</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-text-primary text-sm">Verifies identity at login, then assumes trust throughout the session.</p>
              </div>
              <div className="rounded-lg p-6" style={{backgroundColor: '#0D1B2A'}}>
                <p className="text-accent font-semibold text-sm mb-2">Continuous Trust Multiplier:</p>
                <p className="text-gray-200 text-sm">Extends Zero Trust into the session itself through ongoing physical input validation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Integrations */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Connects to Your Existing Stack
            </h2>
            <p className="text-xl text-text-secondary">
              Keystrike enhances your tools — it does not replace them. Native integrations ensure every signal is shared and every alert is more accurate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">SIEM Systems</h3>
              <p className="text-text-secondary text-sm">High-confidence alerts reduce noise and accelerate incident response times.</p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">IGA & PAM</h3>
              <p className="text-text-secondary text-sm">Real-time validation proves access policies are followed, not just granted.</p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Cloud Platforms</h3>
              <p className="text-text-secondary text-sm">Cross-platform session governance extends protection into hybrid environments.</p>
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Endpoint Tools</h3>
              <p className="text-text-secondary text-sm">Session-level context enhances endpoint detection with human attribution data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Final CTA */}
      <section className="py-20" style={{backgroundColor: '#0D1B2A'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Accepting the Blind Spot.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Most organisations are surprised by what they find in the first 48 hours. See what is happening inside your sessions — and start governing it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="/contact" className="bg-white text-gray-900 px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Book a Live Demo
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Talk to an Expert
            </a>
          </div>
          <p className="text-sm" style={{color: '#00C2C2'}}>
            Questions? Reach us at connect@keystrike.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}