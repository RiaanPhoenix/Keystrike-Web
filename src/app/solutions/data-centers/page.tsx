import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keystrike for Data Centers | Privileged Session Security',
  description: 'Keystrike protects data center operations from credential abuse, third-party session compromise, and cross-tenant lateral movement — delivering cryptographic proof of access integrity for every privileged session. NIS2, ISO 27001, SOC 2, and PCI-DSS aligned.',
  keywords: [
    'data center security',
    'privileged session monitoring',
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
    'post-authentication security gap'
  ],
  openGraph: {
    title: 'Keystrike for Data Centers | Privileged Session Security',
    description: 'Keystrike protects data center operations from credential abuse, third-party session compromise, and cross-tenant lateral movement — delivering cryptographic proof of access integrity for every privileged session. NIS2, ISO 27001, SOC 2, and PCI-DSS aligned.',
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
    title: 'Keystrike for Data Centers | Privileged Session Security',
    description: 'Keystrike protects data center operations from credential abuse, third-party session compromise, and cross-tenant lateral movement — delivering cryptographic proof of access integrity for every privileged session.',
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
            Secure Every Session.{" "}
            <span className="text-accent">Protect Every Tenant.</span>
          </h1>
          <p className="text-lg text-text-primary mb-8 max-w-3xl text-left">
            Keystrike is a privileged session monitoring platform that continuously validates every remote action in real time — blocking unauthorised commands before they execute, and producing tamper-evident audit records for every session. Built for data center operators who carry privileged access across multi-tenant environments and critical infrastructure.
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
              Data Centers Face a Security Gap No Perimeter Tool Can Close
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
              <h3 className="text-2xl font-bold text-text-primary mb-4">Cross-Tenant Lateral Movement</h3>
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
            <div className="bg-surface-secondary p-6 rounded-lg border-l-4 border-red-400">
              <div className="text-5xl font-bold text-red-600 mb-2">190M</div>
              <div className="text-text-secondary text-sm text-left">people affected by one stolen credential in a remote access session</div>
            </div>
            <div className="bg-surface-secondary p-6 rounded-lg border-l-4 border-red-400">
              <div className="text-5xl font-bold text-red-600 mb-2">$22M</div>
              <div className="text-text-secondary text-sm text-left">ransom paid after a single stolen remote access credential</div>
            </div>
            <div className="bg-surface-secondary p-6 rounded-lg border-l-4 border-green-500">
              <div className="text-5xl font-bold text-green-600 mb-2">20 min</div>
              <div className="text-text-secondary text-sm text-left">average Keystrike deployment per managed environment — active protection the same day infrastructure is onboarded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Cards */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-4">
              WHERE EXISTING CONTROLS FALL SHORT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Three Attack Paths That Bypass MFA, PAM, and EDR in Data Center Environments
            </h2>
          </div>

          <div className="space-y-16">
            {/* Featured Case - CloudNordic (Full Width) */}
            <div className="card p-10 border-l-4 border-red-600 bg-red-50 bg-opacity-20 relative">
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
                  <div className="font-semibold text-text-primary mb-2">August 18, 2023</div>
                  <div className="text-sm text-left mb-4">
                    <p className="mb-3"><strong>What happened:</strong></p>
                    <p className="mb-3">On August 18, 2023, attackers breached the internal administration systems of Danish cloud hosting providers CloudNordic and AzeroCloud. Using privileged access to the shared management infrastructure, they propagated ransomware across every tenant environment on both platforms. The attack encrypted all production servers, all backup systems, and all customer data — websites, email, documents, and databases for hundreds of businesses were destroyed simultaneously. Neither provider could recover. Both stated the data was irrecoverable and effectively ceased operations. Hundreds of businesses lost everything overnight — not because they were individually targeted, but because their hosting provider's privileged sessions were unprotected.</p>
                    
                    <p className="mb-3"><strong>How Keystrike would have stopped the impact:</strong></p>
                    <p className="mb-3">The catastrophic damage was not the initial foothold — it was what happened next. Attackers used legitimate management tools and admin credentials to issue commands across every tenant from privileged sessions on the shared infrastructure. With Keystrike deployed on the management layer, every command entering a tenant system would require cryptographic attestation proving it originated from verified physical human input on an approved device. The ransomware deployment commands — automated, scripted, and originating from the attacker's tooling rather than a human administrator's keyboard — would have failed attestation and been blocked at the session boundary. The blast radius would have been contained to the initially compromised admin session instead of destroying the entire platform.</p>
                    
                    <p><strong>Source:</strong> CloudNordic official incident statement, August 2023 · Data Center Dynamics, August 24, 2023 · Help Net Security, August 24, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Cases - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-8 border-l-4 border-accent">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-xl">1</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Third-Party Vendor Session Compromise</h3>
                <p className="text-lg font-bold text-text-primary mb-4">Stolen vendor credentials give attackers legitimate session access to infrastructure supporting hundreds of tenants.</p>
                <div className="text-text-secondary mb-6 text-left">
                  <p className="mb-4">Data centers grant privileged access to dozens of third-party vendors, contractors, and remote support teams as a matter of routine. When those vendor credentials are compromised — or when an active support session is hijacked — attackers operate inside a legitimate session that is invisible to MFA, PAM, and behavioural detection. Every command appears authorised. Every action looks like the vendor. The breach propagates through critical infrastructure before any alert fires.</p>
                  <p className="mb-6">Keystrike closes this gap by cryptographically attesting every command to physical human input on an approved device. The moment a vendor session is hijacked or a command originates from an unattested source, Keystrike blocks the command, isolates the session, and triggers automated response — before the attacker can reach tenant systems.</p>
                  <div className="bg-surface-secondary p-4 rounded-lg border-l-4 border-accent">
                    <div className="font-bold text-text-primary mb-2">Change Healthcare — Stolen Remote Access Credentials Trigger $2.5 Billion Breach</div>
                    <div className="font-semibold text-text-primary mb-2">February 12, 2024</div>
                    <div className="text-sm text-left mb-3">
                      <p className="mb-3"><strong>What happened:</strong></p>
                      <p className="mb-3">The BlackCat/ALPHV ransomware group used stolen credentials to remotely access a Change Healthcare Citrix portal — a remote desktop application used for employee and third-party access to internal systems. The portal did not have multifactor authentication enabled. Once inside the active session, attackers moved laterally through the network, exfiltrated data, and deployed ransomware. The breach exposed the protected health information of 190 million people — the largest healthcare data breach ever reported in the United States. UnitedHealth Group paid a $22 million ransom. Total estimated costs exceeded $2.5 billion.</p>
                      
                      <p className="mb-3"><strong>Why this applies to data centers:</strong></p>
                      <p className="mb-3">Change Healthcare is a healthcare company, not a data center. But the attack vector is identical to what data center operators face every day. Data centers rely on the same Citrix, RDP, and SSH remote access portals to give employees, vendors, and managed service providers access to infrastructure management systems. Every colocation facility has third-party technicians connecting via remote sessions to provision, maintain, and troubleshoot tenant equipment. If a vendor's credentials are stolen — or if MFA is misconfigured, bypassed, or simply not enabled on one portal — the attacker lands inside a live privileged session with access to shared infrastructure. The attack surface is the same. The protocol is the same. The gap is the same.</p>
                      
                      <p className="mb-3"><strong>How Keystrike would have stopped the impact:</strong></p>
                      <p className="mb-3">MFA would have stopped the initial login — but it was not enabled. Once inside the Citrix session, nothing governed the attacker's actions. Keystrike operates inside the session, after authentication. Its workstation agent attests that every keystroke and mouse action originates from verified physical input on an approved device. The server-side terminator blocks any command that lacks valid attestation. The BlackCat attackers — operating remotely through stolen credentials and their own tooling — would have failed attestation on every command. Lateral movement, data exfiltration, and ransomware deployment would have been blocked before they started, regardless of the missing MFA.</p>
                      
                      <p><strong>Source:</strong> UnitedHealth Group CEO Andrew Witty, testimony before the U.S. Senate Finance Committee, May 1, 2024 · Cybersecurity Dive, April 30, 2024 · Reuters, April 30, 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8 border-l-4 border-accent">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-xl">3</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Remote Tool and Management Platform Exploitation</h3>
                <p className="text-lg font-bold text-text-primary mb-4">A single compromised management tool can push malicious commands across every tenant system in minutes.</p>
                <div className="text-text-secondary mb-6 text-left">
                  <p className="mb-4">Data center operations depend on remote management platforms, RMM tools, SSH jump servers, and scripting frameworks for day-to-day administration. Attackers increasingly target these tools directly — exploiting vulnerabilities or stolen credentials to push malicious commands across entire infrastructure estates simultaneously. The scale of a data center environment amplifies the blast radius: a single compromised management tool can reach every tenant system in your estate within minutes.</p>
                  <p className="mb-6">Keystrike closes this gap by requiring every command to be cryptographically attested to physical human input. Automated scripts, injected commands, and remote tool exploitation generate no valid attestation — and are blocked before execution, regardless of how the attack was delivered.</p>
                  <div className="bg-surface-secondary p-4 rounded-lg border-l-4 border-accent">
                    <div className="font-bold text-text-primary mb-2">Kaseya VSA — Compromised Management Platform Pushes Ransomware to 1,500 Businesses</div>
                    <div className="font-semibold text-text-primary mb-2">July 2, 2021</div>
                    <div className="text-sm text-left mb-3">
                      <p className="mb-3"><strong>What happened:</strong></p>
                      <p className="mb-3">The REvil ransomware group exploited zero-day vulnerabilities in Kaseya VSA, a remote monitoring and management (RMM) platform used by managed service providers to administer client IT environments. By compromising the VSA server, attackers pushed a malicious update disguised as a legitimate hotfix to approximately 50 MSPs. The ransomware then cascaded through those MSPs to between 800 and 1,500 downstream businesses. REvil demanded $70 million for a universal decryption key. The entire attack — from initial exploit to ransomware deployment across thousands of endpoints — completed within hours.</p>
                      
                      <p className="mb-3"><strong>Why this applies to data centers:</strong></p>
                      <p className="mb-3">Data center operators use the same category of remote management platforms — tools like NinjaOne, ConnectWise, TeamViewer, and DCIM software — to manage infrastructure at scale across tenant environments. These platforms hold broad privileged access: they can push configuration changes, deploy updates, restart services, and execute commands across hundreds or thousands of systems simultaneously. If the management platform itself is compromised, every system it manages is exposed. The Kaseya pattern — a single compromised management tool cascading destruction to every connected environment — is the exact scenario data center operators must defend against with their own RMM, DCIM, and remote access tooling.</p>
                      
                      <p className="mb-3"><strong>How Keystrike would have stopped the impact:</strong></p>
                      <p className="mb-3">The initial compromise was a software vulnerability (CVE-2021-30116) — Keystrike does not patch software vulnerabilities. But the downstream destruction happened because the compromised VSA server pushed automated commands to client endpoints and no tool verified those commands came from legitimate human administrators. Keystrike's server-side terminator, deployed on managed endpoints, requires cryptographic attestation of physical human input before executing any incoming command. The ransomware payload — pushed automatically by the compromised management platform, not typed by a human administrator — would have failed attestation and been blocked at every endpoint. The management platform could be compromised, but the downstream tenant systems would remain protected.</p>
                      
                      <p><strong>Source:</strong> CISA Alert AA21-183A · Kaseya official incident statement, July 5, 2021 · DNI.gov Safeguarding Our Future report, August 10, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Gap Comparison Table */}
      <section className="bg-surface-secondary py-20">
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
            Firewalls, VPNs, and MFA protect the perimeter and verify identity at login — but go silent once a session begins. PAM solutions vault credentials but cannot govern what happens after the vault is opened. SIEM platforms generate alerts after damage is done. EDR detects malware but is blind to valid credential theft and session misuse. Keystrike is the only solution that continuously verifies every command inside every privileged session, blocking unauthorized actions before execution with zero false positives.
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

          <div className="text-center mt-8">
            <p className="text-text-secondary text-left">Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — not behavioural — eliminating false positives and analyst alert fatigue.</p>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="bg-surface py-20">
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

      {/* How It Works */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-4">
              HOW KEYSTRIKE WORKS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Deterministic Session Enforcement — Not Probabilistic Detection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Workstation Agent</h3>
              <p className="text-text-secondary text-left">A lightweight agent on the operator's or vendor's device recognises legitimate physical keystrokes and mouse clicks, and submits cryptographic attestations confirming their legitimacy to the central Keystrike service.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Server-Side Terminator</h3>
              <p className="text-text-secondary text-left">A second lightweight agent on the destination server withholds all input until it receives proof of legitimacy. Attested input is processed. Unattested input — from scripts, injected commands, or compromised sessions — is blocked and an alert is generated in real time.</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Live Visibility</h3>
              <p className="text-text-secondary text-left">The Keystrike SEE module maps all remote protocols across your entire infrastructure estate — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and more — surfacing which sessions are governed and where policy gaps remain across every tenant environment.</p>
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
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm text-white uppercase tracking-wide font-semibold mb-4 opacity-80">
            DATA CENTER OPERATORS · COLOCATION PROVIDERS · CRITICAL INFRASTRUCTURE · ENTERPRISE IT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            One Compromised Session Shouldn't Cost You Every Tenant You Protect
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-left">
            Credential abuse, vendor session compromise, and cross-tenant lateral movement all exploit the same blind spot: the gap between access granted and access governed. Keystrike makes every privileged session across your infrastructure visible, verifiable, and policy-controlled — protecting your operations and giving you a differentiated offering to bring to enterprise tenants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a href="/contact" className="bg-accent text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-accent-dark transition-colors">
              See Keystrike in Your Environment
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Take the Remote Access Risk Assessment
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