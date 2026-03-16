import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keystrike for Data Centers | Continuous Session Governance for Multi-Tenant Environments',
  description: 'Keystrike governs every privileged session inside data center environments — blocking unauthorized commands in real time, containing cross-tenant lateral movement, and delivering cryptographic proof of access integrity for every session.',
  keywords: [
    'data center security',
    'privileged session governance',
    'cross-tenant lateral movement prevention',
    'vendor session security',
    'colocation security',
    'multi-tenant access governance',
    'cryptographic attestation',
    'session governance data centers',
    'NIS2 compliance data centers',
    'ISO 27001 data centers',
    'SOC 2 data centers',
    'PCI-DSS data centers',
    'post-authentication security gap',
    'continuous access governance',
    'post-authentication session governance',
    'Governance Gap data centers'
  ],
  openGraph: {
    title: 'Keystrike for Data Centers | Continuous Session Governance',
    description: 'Keystrike governs every privileged session inside data center environments — blocking unauthorized commands in real time, containing cross-tenant lateral movement, and delivering cryptographic proof of access integrity for every session.',
    type: 'website',
    url: 'https://keystrike.com/solutions/data-centers',
    siteName: 'Keystrike',
    images: [
      {
        url: 'https://keystrike.com/images/og-data-centers.png',
        width: 1200,
        height: 630,
        alt: 'Keystrike — Data Center Session Security',
      },
    ],
  },
  twitter: {
    title: 'Keystrike for Data Centers | Continuous Session Governance',
    description: 'Keystrike governs every privileged session in data center environments — blocking unauthorized commands, containing cross-tenant lateral movement, and delivering cryptographic proof of access integrity.',
    card: 'summary_large_image',
    images: ['https://keystrike.com/images/og-data-centers.png'],
  },
  alternates: {
    canonical: 'https://keystrike.com/solutions/data-centers'
  },
};

export default function DataCenters() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Structured Data - Block 1: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://keystrike.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Solutions",
                "item": "https://keystrike.com/solutions"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Data Centers",
                "item": "https://keystrike.com/solutions/data-centers"
              }
            ]
          })
        }}
      />

      {/* Structured Data - Block 2: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do you prevent cross-tenant lateral movement in data centers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike validates every command that traverses tenant environment boundaries using cryptographic attestation of physical human input. It blocks session inheritance, credential replay, and RDP hijacks before lateral movement can propagate to downstream tenants — at the command level, not the network level."
                }
              },
              {
                "@type": "Question",
                "name": "How do you secure third-party vendor sessions in data center environments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike cryptographically attests every command from vendor and third-party sessions to physical human input on an approved device. If a vendor session is hijacked or a command originates from an unattested source, Keystrike blocks the command, isolates the session, and triggers automated response before the attacker can reach tenant systems."
                }
              },
              {
                "@type": "Question",
                "name": "What compliance frameworks does Keystrike support for data centers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike supports compliance with NIS2, ISO 27001:2022, SOC 2 Type 2, PCI-DSS, DORA, NIST Cybersecurity Framework, Cyber Essentials, and applicable data protection regulations — through continuous authentication, policy-driven access controls, and tamper-evident audit records for every privileged session."
                }
              },
              {
                "@type": "Question",
                "name": "Why can't MFA and PAM secure privileged sessions in data centers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MFA verifies identity at login but cannot verify what happens inside a session after access is granted. PAM vaults credentials and controls checkout but goes blind once the session is open. SIEM detects anomalies after the fact. None of these tools provide continuous governance of actions inside an active privileged session. Keystrike closes this post-authentication gap with cryptographic attestation of every command."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Keystrike take to deploy in a data center environment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike deploys in approximately 20 minutes per managed environment. It requires no lengthy professional services engagement, no complex integration project, and integrates with existing MFA, PAM, and SIEM infrastructure with no rip-and-replace."
                }
              },
              {
                "@type": "Question",
                "name": "What is post-authentication session security?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Post-authentication session security governs what happens inside a privileged session after the user has been authenticated. While MFA verifies identity at login and PAM controls credential checkout, neither evaluates commands that occur once the session is active. Post-authentication session security closes this gap by continuously validating that every action originates from a verified human on an approved device."
                }
              },
              {
                "@type": "Question",
                "name": "How is Keystrike different from PAM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PAM (Privileged Access Management) controls who can access privileged credentials and manages credential checkout. Keystrike operates inside the active session after PAM has done its job — cryptographically verifying that every command originates from a verified human and blocking any unattested input in real time. PAM secures the vault; Keystrike governs every action inside the session. They are complementary — Keystrike deploys alongside existing PAM with no changes to the PAM configuration."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Governance Gap in data center security?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Governance Gap is the unprotected space between when a user is authenticated (by MFA, PAM, or SSO) and what they actually do inside the session. In data center environments — where a single privileged session can reach hundreds of tenant systems — this gap is the attack surface that credential theft, session hijacking, and cross-tenant lateral movement exploit. Keystrike closes the Governance Gap by governing every command inside the live session in real time."
                }
              },
              {
                "@type": "Question",
                "name": "Does Keystrike replace our existing PAM or SIEM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Keystrike completes your existing security stack — it does not replace any component. PAM continues to vault credentials and control checkout. SIEM continues to aggregate logs and generate alerts. Keystrike adds the missing layer: continuous governance inside the live privileged session. It deploys alongside your existing infrastructure in approximately 20 minutes per environment with no configuration changes to PAM or SIEM."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-4">
              DATA CENTER OPERATORS · COLOCATION PROVIDERS · CRITICAL INFRASTRUCTURE · ENTERPRISE IT
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 text-left">
            Continuous Session Governance for{" "}
            <span className="text-accent">Data Center Environments</span>
          </h1>
          <p className="text-xl text-text-secondary mb-6 text-left">
            Secure every session. Protect every tenant. Prove it to every auditor.
          </p>
          <p className="text-lg text-text-primary mb-8 max-w-3xl text-left">
            Keystrike is a continuous remote access governance platform that closes the Governance Gap in data center environments — the unprotected space between when a user is authenticated and what they do inside the session. Every privileged remote action is validated in real time through cryptographic attestation of verified physical human input. Unauthorised commands are blocked before they execute. Every session produces tamper-evident audit records. Built for data center operators who carry privileged access across multi-tenant environments, critical infrastructure, and shared management platforms.
          </p>
          
          <p id="post-auth-definition" className="text-lg text-text-primary mb-8 max-w-3xl text-left">
            MFA verifies identity at login. PAM controls credential checkout. Neither governs what happens once the session is active. In data centre environments, where a single remote session can reach hundreds of tenant systems, this gap between &ldquo;access granted&rdquo; and &ldquo;access governed&rdquo; is the attack surface that credential theft, session hijacking, and lateral movement exploit. Keystrike closes it by continuously validating that every action originates from a verified human on an approved device.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="btn btn-primary text-lg px-8 py-3">
              See Keystrike in Your Environment
            </a>
            <a href="/contact" className="btn btn-secondary text-lg px-8 py-3">
              Take the Remote Access Risk Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Three-Pillar Challenge Banner */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Data Centers Face a Governance Gap No Perimeter Tool Can Close
            </h2>
            <p className="text-xl text-text-secondary text-left">
              Privileged access to your infrastructure is the most valuable target in your environment — and the hardest to defend with conventional tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Third-Party and Vendor Sessions as Attack Vectors</h3>
              <p className="text-text-secondary mb-4">A single compromised vendor credential provides attackers with legitimate session access to infrastructure supporting hundreds of tenants. MFA confirms the login — it cannot verify what happens inside the session.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Cryptographic attestation of every vendor and third-party command</li>
                <li>• Session hijacking and credential abuse prevention</li>
                <li>• Vendor accountability backed by tamper-evident audit trails</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-bold text-text-primary mb-4">The Cross-Tenant Lateral Movement Blind Spot</h3>
              <p className="text-text-secondary mb-4">Attackers move laterally across tenant boundaries using the same tools that legitimate administrators use. Network segmentation offers no defence against authenticated sessions that already have permission to cross boundaries.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Tenant environment boundary enforcement</li>
                <li>• Lateral movement prevention at the command level</li>
                <li>• Blast radius containment from the moment of compromise</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Proving Access Integrity to Tenants</h3>
              <p className="text-text-secondary mb-4">Enterprise tenants demand verifiable proof that privileged access to their environment is beyond reproach. Keystrike produces tamper-evident session records for every privileged action.</p>
              <ul className="text-sm text-text-secondary space-y-2">
                <li>• Tamper-evident audit trails for every privileged session</li>
                <li>• Compliance-ready records for NIS2, ISO 27001, SOC 2, and PCI-DSS</li>
                <li>• Competitive service differentiation for enterprise tenant acquisition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-surface-secondary p-6 rounded-lg border-l-4 border-accent">
              <div className="text-5xl font-bold text-accent mb-2">45%</div>
              <div className="text-text-secondary text-sm text-left">of data breaches involved cloud-hosted or data center infrastructure</div>
              <div className="text-text-secondary text-xs mt-2 text-left opacity-60">IBM Cost of a Data Breach Report 2025</div>
            </div>
            <div className="bg-surface-secondary p-6 rounded-lg border-l-4 border-accent">
              <div className="text-5xl font-bold text-accent mb-2">35%</div>
              <div className="text-text-secondary text-sm text-left">of data center breaches involved third-party vendor access</div>
              <div className="text-text-secondary text-xs mt-2 text-left opacity-60">Verizon DBIR 2024 / Ponemon Third-Party Risk Study</div>
            </div>
            <div className="bg-surface-secondary p-6 rounded-lg border-l-4 border-accent">
              <div className="text-5xl font-bold text-accent mb-2">$4.88M</div>
              <div className="text-text-secondary text-sm text-left">global average cost of a data center breach</div>
              <div className="text-text-secondary text-xs mt-2 text-left opacity-60">IBM Cost of a Data Breach Report 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Cards */}
      <section id="attack-paths" className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-4">
              WHERE EXISTING CONTROLS FALL SHORT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              How Cross-Tenant Lateral Movement Bypasses MFA, PAM, and EDR
            </h2>
            <p className="text-lg text-text-secondary max-w-5xl mx-auto text-left">
              Attackers move laterally across tenant boundaries using the same remote protocols and management tools that administrators use every day. These attack paths bypass MFA, PAM, and EDR because those tools stop evaluating after the login event — leaving the session itself unprotected.
            </p>
          </div>

          <div className="space-y-16">
            {/* Featured Case - CloudNordic (Full Width) */}
            <div id="cloudnordic-case" className="card p-10 border-l-4 border-red-600 bg-red-50 bg-opacity-20 relative">
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                Featured Data Center Incident
              </div>
              <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <span className="text-accent font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Cross-Tenant Lateral Movement</h3>
              <p className="text-lg font-bold text-text-primary mb-4">An attacker in one privileged session can cross tenant boundaries using the same tools administrators use every day.</p>
              <div className="text-text-secondary mb-6 text-left">
                <p className="mb-4">Once inside a data center environment, attackers can pivot across tenant boundaries using the same remote protocols and management tools that operators use legitimately every day. RDP sessions, SSH tunnels, and scripting frameworks designed for administrative efficiency become an attacker's highway across your infrastructure. By the time one tenant environment is confirmed breached, adjacent environments are already compromised.</p>
                <p className="mb-6">Keystrike closes this gap by validating every command that traverses tenant environment boundaries — blocking session inheritance, credential replay, and RDP hijacks before lateral movement can propagate to downstream tenants.</p>
                <div className="bg-surface-secondary p-6 rounded-lg border-l-4 border-red-600">
                  <div className="font-bold text-text-primary mb-3 text-lg">CloudNordic & AzeroCloud — Ransomware Destroys All Customer Data</div>
                  <div className="font-semibold text-text-primary mb-2"><time dateTime="2023-08-18">August 18, 2023</time></div>
                  <div className="text-sm text-left mb-4">
                    <p className="mb-3"><strong>What happened:</strong></p>
                    <p className="mb-3">On August 18, 2023, attackers breached the internal administration systems of Danish cloud hosting providers CloudNordic and AzeroCloud. Using privileged access to the shared management infrastructure, they propagated ransomware across every tenant environment on both platforms. The attack encrypted all production servers, all backup systems, and all customer data — websites, email, documents, and databases for hundreds of businesses were destroyed simultaneously. Neither provider could recover. Both stated the data was irrecoverable and effectively ceased operations. Hundreds of businesses lost everything overnight — not because they were individually targeted, but because their hosting provider's privileged sessions were unprotected.</p>
                    
                    <p className="mb-3"><strong>How Keystrike would have stopped the impact:</strong></p>
                    <p className="mb-3">The catastrophic damage was not the initial foothold — it was what happened next. Attackers used legitimate management tools and admin credentials to issue commands across every tenant from privileged sessions on the shared infrastructure. With Keystrike deployed on the management layer, every command entering a tenant system would require cryptographic attestation proving it originated from verified physical human input on an approved device. The ransomware deployment commands — automated, scripted, and originating from the attacker's tooling rather than a human administrator's keyboard — would have failed attestation and been blocked at the session boundary. The blast radius would have been contained to the initially compromised admin session instead of destroying the entire platform.</p>
                    
                    <footer className="source-footer">
                      <p><strong>Source:</strong> <a href="https://www.cloudnordic.com" target="_blank" rel="noopener">CloudNordic official incident statement</a>, August 2023 · <a href="https://www.datacenterdynamics.com/en/news/danish-hosting-firms-lose-all-customer-data-in-ransomware-attack/" target="_blank" rel="noopener">Data Center Dynamics</a>, August 24, 2023 · <a href="https://www.helpnetsecurity.com/2023/08/24/cloud-hosting-ransomware/" target="_blank" rel="noopener">Help Net Security</a>, August 24, 2023</p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Security Gap Comparison Table */}
      <section id="security-gap" className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-4">
              POST-AUTHENTICATION SECURITY GAP
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why MFA, PAM, and SIEM Cannot Secure Privileged Sessions in Data Center Environments
            </h2>
          </div>

          <p className="text-lg text-text-secondary mb-8 max-w-4xl mx-auto text-left">
            Firewalls, VPNs, and MFA protect the perimeter and verify identity at login — but go silent once a session begins. PAM solutions vault credentials but cannot govern what happens after the vault is opened. SIEM platforms generate alerts after damage is done. EDR detects malware but is blind to valid credential theft and session misuse. Keystrike fills this gap by cryptographically attesting every command inside the session — verifying that each action originates from a verified human on an approved device, in real time.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-surface rounded-lg">
              <caption className="sr-only">Comparison of security technologies and their gaps in data center privileged session protection</caption>
              <thead>
                <tr className="border-b border-surface-secondary">
                  <th scope="col" className="text-left p-6 text-text-primary font-semibold">Technology</th>
                  <th scope="col" className="text-left p-6 text-text-primary font-semibold">What It Protects</th>
                  <th scope="col" className="text-left p-6 text-text-primary font-semibold">Security Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-surface-secondary">
                  <td className="p-6 text-text-primary font-medium">Firewalls / VPN / MFA</td>
                  <td className="p-6 text-text-secondary">Perimeter and identity at login</td>
                  <td className="p-6 text-text-secondary">Session activity after access is granted</td>
                </tr>
                <tr className="border-b border-surface-secondary">
                  <td className="p-6 text-text-primary font-medium">PAM — Privileged Access Management</td>
                  <td className="p-6 text-text-secondary">Credential vaulting and access controls</td>
                  <td className="p-6 text-text-secondary">Session activity after the vault is opened</td>
                </tr>
                <tr className="border-b border-surface-secondary">
                  <td className="p-6 text-text-primary font-medium">SIEM — Security Information and Event Management</td>
                  <td className="p-6 text-text-secondary">Centralised alerts and compliance reporting</td>
                  <td className="p-6 text-text-secondary">Reactive — alerts after damage is done</td>
                </tr>
                <tr className="border-b border-surface-secondary">
                  <td className="p-6 text-text-primary font-medium">EDR — Endpoint Detection and Response</td>
                  <td className="p-6 text-text-secondary">Malware detection and endpoint telemetry</td>
                  <td className="p-6 text-text-secondary">Blind to valid credential theft and session misuse</td>
                </tr>
                <tr className="bg-accent bg-opacity-10 border-2 border-accent">
                  <td className="p-6 text-accent font-bold">Keystrike</td>
                  <td className="p-6 text-text-primary font-medium">Every command in every privileged session</td>
                  <td className="p-6 text-accent font-bold">None. Unauthorised commands blocked before execution.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-text-secondary mt-8 max-w-5xl mx-auto text-left">
            The technologies listed above — MFA, PAM, EDR, and SIEM — each protect a specific layer of the access lifecycle, but none of them govern what happens inside the active session after login. MFA confirms identity once. PAM vaults and rotates credentials. EDR watches for known malware patterns. SIEM aggregates logs after the fact. Keystrike is the only technology in this stack that provides continuous, real-time governance inside the session itself — cryptographically verifying that every command originates from a verified human, and blocking anything that doesn't.
          </p>

          <div className="text-center mt-8">
            <p className="text-text-secondary text-left">Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — not behavioural — eliminating false positives and analyst alert fatigue.</p>
          </div>

          <div className="card p-8 mt-12 max-w-4xl mx-auto border-l-4 border-accent">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-3">
              COMPLETING YOUR SECURITY STACK
            </div>
            <p className="text-text-primary text-lg font-semibold mb-4">
              IAM and PAM grant access. SIEM and XDR log events after the fact. Keystrike governs the live session.
            </p>
            <p className="text-text-secondary text-lg">
              You don&apos;t have to rip out or replace your existing stack. Keystrike is the essential final piece that makes your existing MFA, PAM, and SIEM infrastructure deliver Continuous Access Governance, closing the Governance Gap inside every privileged session across your data center estate.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section id="compliance" className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-4">
              COMPLIANCE AND GOVERNANCE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Continuous Session Governance for NIS2, ISO 27001, SOC 2, and PCI-DSS Requirements
            </h2>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto text-left">
              Every privileged session produces continuous, tamper-evident audit records that satisfy data center operator regulatory and contractual requirements as a direct output of governance — not as a separate compliance process.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="/solutions/manufacturing" className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full font-medium hover:bg-accent hover:text-white transition-colors">NIS2</a>
            <span className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full font-medium">ISO 27001</span>
            <span className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full font-medium">SOC 2 Type 2</span>
            <a href="/solutions/banking" className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full font-medium hover:bg-accent hover:text-white transition-colors">PCI-DSS</a>
            <a href="/solutions/banking" className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full font-medium hover:bg-accent hover:text-white transition-colors">DORA</a>
            <span className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full font-medium">Cyber Essentials</span>
            <span className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full font-medium">GDPR</span>
            <span className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full font-medium">NIST CSF</span>
          </div>

          <div className="card p-8 max-w-4xl mx-auto">
            <p className="text-text-secondary text-lg leading-relaxed text-left">
              Keystrike supports compliance with NIS2, ISO 27001:2022, SOC 2 Type 2, PCI-DSS, DORA, NIST Cybersecurity Framework, Cyber Essentials, and applicable data protection regulations — through continuous authentication, policy-driven access controls, and auditable session records for every remote action across every system in your estate.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4 text-left">
              See how Keystrike protects <a href="/solutions/banking" className="text-accent hover:underline">banking</a>, <a href="/solutions/government" className="text-accent hover:underline">government</a>, and <a href="/solutions/healthcare" className="text-accent hover:underline">healthcare</a> environments.
            </p>
          </div>
        </div>
      </section>

      {/* Persona Entry Points */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-4">
              SESSION GOVERNANCE FOR EVERY STAKEHOLDER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Built for How Your Team Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-3">CONTROL — For CISOs &amp; Security Leadership</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Stop Lateral Movement Before It Starts</h3>
              <p className="text-text-secondary mb-4">Deterministic enforcement of session policy across every tenant boundary, every vendor session, and every management platform. Commands that fail attestation are blocked — not flagged. Zero false positives. Zero alert fatigue.</p>
              <a href="/contact" className="text-accent hover:underline font-medium">See CONTROL in action →</a>
            </div>
            <div className="card p-6">
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-3">PROVE — For Compliance &amp; Audit Teams</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Audit-Ready Evidence That Governance Is Continuous</h3>
              <p className="text-text-secondary mb-4">Every privileged session produces tamper-evident records proving that every command originated from verified human input on an approved device. NIS2, ISO 27001, SOC 2, and PCI-DSS requirements are satisfied as a direct output of governance — not a quarterly retrofit.</p>
              <a href="/contact" className="text-accent hover:underline font-medium">See PROVE in action →</a>
            </div>
            <div className="card p-6">
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-3">SEE — For Security Operations</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Know What Is Happening Right Now</h3>
              <p className="text-text-secondary mb-4">Keystrike maps every remote protocol across your entire infrastructure estate — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and more — showing which sessions are governed and where policy gaps remain. Full visibility across every tenant environment.</p>
              <a href="/contact" className="text-accent hover:underline font-medium">See SEE in action →</a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-4">
              HOW KEYSTRIKE WORKS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Deterministic Session Enforcement — Not Probabilistic Detection
            </h2>
          </div>

          <p id="what-is-keystrike" className="text-lg text-text-secondary mb-12 max-w-5xl mx-auto text-left">
            Keystrike is a privileged session governance platform that uses patent-pending cryptographic attestation to verify that every command inside a remote session originates from a verified human on an approved device. A lightweight workstation agent recognizes legitimate physical keystrokes and mouse activity, then submits cryptographic proof to the central Keystrike service. On the destination server, a second agent — the Server-Side Terminator — withholds all input until it receives valid attestation. Attested commands are processed normally; unattested input from scripts, injected commands, or compromised sessions is blocked in real time. Unlike PAM, which stops at credential vaulting, and MFA, which stops at login, Keystrike operates continuously inside the active session — providing deterministic enforcement rather than probabilistic detection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">1</span>
              </div>
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-2">CONTROL — Real-Time Enforcement</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Workstation Agent</h3>
              <p className="text-text-secondary text-left">A lightweight agent on the operator&apos;s or vendor&apos;s device recognises legitimate physical keystrokes and mouse clicks, and submits cryptographic attestations confirming their legitimacy to the central Keystrike service.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">2</span>
              </div>
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-2">CONTROL — Deterministic Blocking</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Server-Side Terminator</h3>
              <p className="text-text-secondary text-left">A second lightweight agent on the destination server withholds all input until it receives proof of legitimacy. Attested input is processed. Unattested input — from scripts, injected commands, or compromised sessions — is blocked and an alert is generated in real time.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">3</span>
              </div>
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-2">SEE — Complete Session Visibility</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Live Visibility</h3>
              <p className="text-text-secondary text-left">The Keystrike SEE module maps all remote protocols across your entire infrastructure estate — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and more — surfacing which sessions are governed and where policy gaps remain across every tenant environment.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">4</span>
              </div>
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-2">PROVE — Audit-Ready Governance Records</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Continuous Proof of Control</h3>
              <p className="text-text-secondary text-left">Every privileged session generates tamper-evident audit records demonstrating exactly who did what, when, from which device, with cryptographic proof that each action originated from verified human input. These records satisfy NIS2, ISO 27001, SOC 2, and PCI-DSS requirements as a direct output of governance — not a separate compliance process.</p>
            </div>
          </div>

          <div className="card p-8 max-w-4xl mx-auto text-center">
            <p className="text-text-secondary text-lg text-left">
              Keystrike deploys in around 20 minutes per environment. No lengthy professional services engagement. No complex integration project. Integrates with existing MFA, PAM, and SIEM infrastructure — no rip-and-replace.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* FAQ Section */}
      <section id="faq" className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions About Data Center Session Governance
            </h2>
          </div>
          <div className="space-y-6">
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">How do you prevent cross-tenant lateral movement in data centers?</summary>
              <p className="text-text-secondary mt-4">Keystrike validates every command that traverses tenant environment boundaries using cryptographic attestation of physical human input. It blocks session inheritance, credential replay, and RDP hijacks before lateral movement can propagate to downstream tenants — at the command level, not the network level.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">How do you secure third-party vendor sessions in data center environments?</summary>
              <p className="text-text-secondary mt-4">Keystrike cryptographically attests every command from vendor and third-party sessions to physical human input on an approved device. If a vendor session is hijacked or a command originates from an unattested source, Keystrike blocks the command, isolates the session, and triggers automated response before the attacker can reach tenant systems.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">What compliance frameworks does Keystrike support for data centers?</summary>
              <p className="text-text-secondary mt-4">Keystrike supports compliance with NIS2, ISO 27001:2022, SOC 2 Type 2, PCI-DSS, DORA, NIST Cybersecurity Framework, Cyber Essentials, and applicable data protection regulations — through continuous authentication, policy-driven access controls, and tamper-evident audit records for every privileged session.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">Why can&apos;t MFA and PAM secure privileged sessions in data centers?</summary>
              <p className="text-text-secondary mt-4">MFA verifies identity at login but cannot verify what happens inside a session after access is granted. PAM vaults credentials and controls checkout but goes blind once the session is open. SIEM detects anomalies after the fact. None of these tools provide continuous governance of actions inside an active privileged session. Keystrike closes this post-authentication gap with cryptographic attestation of every command.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">How long does Keystrike take to deploy in a data center environment?</summary>
              <p className="text-text-secondary mt-4">Keystrike deploys in approximately 20 minutes per managed environment. It requires no lengthy professional services engagement, no complex integration project, and integrates with existing MFA, PAM, and SIEM infrastructure with no rip-and-replace.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">What is post-authentication session security?</summary>
              <p className="text-text-secondary mt-4">Post-authentication session security governs what happens inside a privileged session after the user has been authenticated. While MFA verifies identity at login and PAM controls credential checkout, neither evaluates commands that occur once the session is active. Post-authentication session security closes this gap by continuously validating that every action originates from a verified human on an approved device.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">How is Keystrike different from PAM?</summary>
              <p className="text-text-secondary mt-4">PAM (Privileged Access Management) controls who can access privileged credentials and manages credential checkout. Keystrike operates inside the active session after PAM has done its job — cryptographically verifying that every command originates from a verified human and blocking any unattested input in real time. PAM secures the vault; Keystrike governs every action inside the session. They are complementary — Keystrike deploys alongside existing PAM with no changes to the PAM configuration.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">What is the Governance Gap in data center security?</summary>
              <p className="text-text-secondary mt-4">The Governance Gap is the unprotected space between when a user is authenticated (by MFA, PAM, or SSO) and what they actually do inside the session. In data center environments — where a single privileged session can reach hundreds of tenant systems — this gap is the attack surface that credential theft, session hijacking, and cross-tenant lateral movement exploit. Keystrike closes the Governance Gap by governing every command inside the live session in real time.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">Does Keystrike replace our existing PAM or SIEM?</summary>
              <p className="text-text-secondary mt-4">No. Keystrike completes your existing security stack — it does not replace any component. PAM continues to vault credentials and control checkout. SIEM continues to aggregate logs and generate alerts. Keystrike adds the missing layer: continuous governance inside the live privileged session. It deploys alongside your existing infrastructure in approximately 20 minutes per environment with no configuration changes to PAM or SIEM.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm text-white uppercase tracking-wide font-semibold mb-4 opacity-80">
            DATA CENTER OPERATORS · COLOCATION PROVIDERS · CRITICAL INFRASTRUCTURE · ENTERPRISE IT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Close the Governance Gap Before the Next Session Is Compromised
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-left">
            Credential abuse, vendor session compromise, and cross-tenant lateral movement all exploit the same blind spot: the gap between access granted and access governed. Keystrike makes every privileged session across your infrastructure visible, verifiable, and policy-controlled — protecting your operations and giving you a differentiated offering to bring to enterprise tenants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors">
              See Keystrike in Your Environment
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Take the Data Center Governance Gap Assessment
            </a>
          </div>
          <p className="text-blue-100 text-sm">
            To speak with a Keystrike engineer: connect@keystrike.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}