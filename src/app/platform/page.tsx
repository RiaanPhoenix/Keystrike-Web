import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Continuous Remote Access Governance Platform | Keystrike',
  description: 'Keystrike is a continuous remote access governance platform. It governs what happens after access is granted — live visibility into every remote session, deterministic enforcement that blocks unauthorized commands before execution, and continuous audit-ready proof of control. Completes IAM, PAM, and SIEM. Deploys in 20 minutes.',
  keywords: [
    'continuous remote access governance',
    'remote access governance platform',
    'governance gap remote access',
    'session governance platform',
    'keystrike platform',
    'cryptographic attestation',
    'privileged session security',
    'post-authentication security',
    'deterministic session enforcement',
    'remote access governance',
    'physical input verification',
    'tamper-evident audit trails'
  ],
  openGraph: {
    title: 'Keystrike | Continuous Remote Access Governance Platform',
    description: 'Keystrike governs what happens after access is granted — live session visibility, deterministic enforcement, and audit-ready proof of control. Completes IAM, PAM, and SIEM.',
    type: 'website',
    url: 'https://keystrike.com/platform',
    siteName: 'Keystrike',
    images: [
      {
        url: 'https://keystrike.com/images/og-platform.png',
        width: 1200,
        height: 630,
        alt: 'Keystrike — Continuous Access Governance Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keystrike | Continuous Remote Access Governance Platform',
    description: 'Keystrike governs what happens after access is granted — live session visibility, deterministic enforcement, and audit-ready proof of control. Completes IAM, PAM, and SIEM.',
    images: ['https://keystrike.com/images/og-platform.png'],
  },
  alternates: {
    canonical: 'https://keystrike.com/platform',
  },
};

export default function Platform() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="platform" />

      {/* Structured Data - Block 1: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Keystrike Platform",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Windows, Linux",
            "description": "Keystrike is a continuous remote access governance platform. It governs what happens after access is granted — providing live visibility into every remote session, deterministic enforcement that blocks unauthorized commands through cryptographic attestation, and continuous audit-ready proof of control. Completes IAM, PAM, and SIEM. Does not replace them.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "category": "Enterprise Security"
            },
            "creator": {
              "@type": "Organization",
              "name": "Keystrike",
              "url": "https://keystrike.com",
              "foundingLocation": "Reykjavik, Iceland"
            },
            "featureList": [
              "Continuous remote access governance",
              "Cryptographic attestation of physical input",
              "Deterministic enforcement with zero false positives",
              "Session-level policy enforcement",
              "Live remote session mapping across all protocols",
              "Governance Gap closure between access intent and access reality",
              "Tamper-evident audit trails",
              "RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB protocol support",
              "20-minute deployment",
              "No PII collection or keylogging"
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
                "name": "What is the post-authentication security gap?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The post-authentication gap is the blind spot between when a user is granted access (login) and what happens during their privileged session. Identity tools like IAM and MFA verify who logs in, and PAM controls credential checkout, but none of them govern what happens inside a session after access is granted. Attackers exploit this gap using stolen credentials, session hijacking, and living-off-the-land techniques."
                }
              },
              {
                "@type": "Question",
                "name": "How does Keystrike's cryptographic attestation work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike uses a two-agent architecture. A lightweight workstation agent recognizes physical keystrokes and mouse input, then generates cryptographic attestations proving their legitimacy. A server-side agent withholds all input until it receives valid attestation proof. Unattested input from scripts, injected commands, or compromised sessions is blocked in real time."
                }
              },
              {
                "@type": "Question",
                "name": "Does Keystrike replace PAM or IAM solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Keystrike complements existing PAM, IAM, MFA, and SIEM tools. It fills the governance gap that exists after authentication, providing continuous session verification that these tools do not offer. Keystrike integrates with solutions like CyberArk, BeyondTrust, Okta, and Splunk."
                }
              },
              {
                "@type": "Question",
                "name": "Is Keystrike a keylogger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Keystrike does not record keystrokes, credentials, or PII. It verifies that input originates from a legitimate physical source using cryptographic attestation without capturing or storing the content of what is typed."
                }
              },
              {
                "@type": "Question",
                "name": "What remote access protocols does Keystrike support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike governs and enforces policy across RDP (Remote Desktop Protocol), SSH, PowerShell Remoting, WinRM, WMI, SMB, and third-party remote access tools including NinjaOne and TeamViewer. It also surfaces unknown and unmanaged remote access paths as part of the SEE capability — providing a live map of your entire remote access attack surface."
                }
              },
              {
                "@type": "Question",
                "name": "How long does Keystrike take to deploy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike deploys in approximately 20 minutes. It uses lightweight agents on workstations and servers, requires no network re-architecture, and integrates with existing MFA, IAM, and SIEM solutions with no rip-and-replace."
                }
              },
              {
                "@type": "Question",
                "name": "What compliance frameworks does Keystrike support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike's tamper-evident audit trails and cryptographic session evidence are structured for regulatory scrutiny under DORA, NIS2, IEC 62443, PCI DSS, SOX, SOC 2 Type 2, NIST 800-53, FedRAMP, CMMC, ISO 27001, HIPAA, NERC CIP, FFIEC, NYDFS, and GLBA."
                }
              },
              {
                "@type": "Question",
                "name": "How is Keystrike different from PAM solutions like CyberArk and BeyondTrust?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PAM solutions like CyberArk and BeyondTrust manage credential vaulting, rotation, and checkout — but they go blind once a session starts. Keystrike provides continuous cryptographic verification of every action inside the session from login to logout. It uses deterministic enforcement rather than probabilistic detection, producing zero false positives. Keystrike complements PAM — it does not replace it."
                }
              }
            ]
          })
        }}
      />

      {/* Structured Data - Block 3: BreadcrumbList */}
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
                "name": "Platform",
                "item": "https://keystrike.com/platform"
              }
            ]
          })
        }}
      />
      
      {/* SECTION 1: Hero */}
      <section style={{ backgroundColor: '#0F1623' }} className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div style={{ 
            fontSize: '11px', 
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#9CA3AF',
            marginBottom: '24px'
          }}>
            Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontSize: '56px', fontWeight: '700' }}>
            Govern Every Action Inside Privileged Sessions
          </h1>
          <div 
            className="mb-8 text-left"
            style={{ 
              fontSize: '18px', 
              color: '#CBD5E1', 
              maxWidth: '620px',
              lineHeight: '1.7'
            }}
          >
            <p className="mb-4">Identity tools verify who logs in. Keystrike governs what happens next.</p>
            <p className="mb-4">There is a persistent <strong style={{ color: '#FFFFFF' }}>Governance Gap between access intent — who you authorized — and access reality — what actually happens inside the session</strong>. IAM, PAM, MFA, SIEM, and EDR were not designed to close it. Keystrike was.</p>
            <p>Our continuous remote access governance platform delivers live visibility into every session, deterministic enforcement that blocks unauthorized commands through cryptographic attestation, and continuous audit-ready proof of control — without replacing a single tool in your existing stack.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[16px] mb-12">
            <a href="/contact" className="w-full sm:w-auto bg-[#0D3D3D] text-[#FFFFFF] hover:bg-[#1A5252] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-none transition-colors text-center">
              See Keystrike in Your Environment →
            </a>
            <a href="/contact?type=assessment" className="w-full sm:w-auto bg-transparent text-white hover:bg-[rgba(255,255,255,0.08)] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-[1.5px] border-solid border-white transition-colors text-center">
              Start a Free Remote Access Assessment
            </a>
          </div>

          {/* Stats row - 4 column grid on desktop */}
          <div style={{ 
            borderTop: '1px solid rgba(156, 163, 175, 0.3)', 
            paddingTop: '32px'
          }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>71%</div>
                <div style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '4px' }}>surge in attacks using stolen credentials in industrial environments</div>
                <div style={{ fontSize: '12px', color: '#6B7280', fontStyle: 'italic' }}>IBM X-Force, 2024 Threat Intelligence Index</div>
              </div>
              <div className="text-center">
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>48%</div>
                <div style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '4px' }}>of financial breaches involved third-party vendors or partners</div>
                <div style={{ fontSize: '12px', color: '#6B7280', fontStyle: 'italic' }}>Verizon DBIR 2024, Financial Services subset</div>
              </div>
              <div className="text-center">
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>40%</div>
                <div style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '4px' }}>of government breaches involved stolen or compromised credentials</div>
                <div style={{ fontSize: '12px', color: '#6B7280', fontStyle: 'italic' }}>Verizon DBIR 2024, Public Sector subset</div>
              </div>
              <div className="text-center">
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>65%</div>
                <div style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '4px' }}>of OT environments have insecure remote access</div>
                <div style={{ fontSize: '12px', color: '#6B7280', fontStyle: 'italic' }}>Dragos, 2024 OT Cybersecurity Year in Review</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Problem */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}>
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              The Governance Gap: What Happens Between Login and Your Next Alert
            </h2>
            <p className="text-lg text-text-secondary mb-6 max-w-4xl">
              Every major security investment you've made — IAM, MFA, PAM, SIEM, EDR — focuses on one of two moments: the point of login or the aftermath of a breach. None of them govern what happens during an active privileged session. Attackers know this.
            </p>
            <p className="text-lg text-text-secondary mb-8 max-w-4xl">
              This is the <strong className="text-text-primary">Governance Gap between access intent and access reality</strong>. IAM grants the key. SIEM stores the record. But between login and the next alert, no tool in your stack governs the session. That is where attackers operate — and where Keystrike closes the gap.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">IAM & MFA verify the login, then go silent</h3>
                    <p className="text-text-secondary">Once credentials are accepted, there is no ongoing check that the person behind the session is the person who authenticated.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">PAM vaults credentials but doesn't watch the session</h3>
                    <p className="text-text-secondary">Credential rotation and checkout policies don't prevent misuse after a session is open.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">SIEM & EDR detect anomalies — after the damage</h3>
                    <p className="text-text-secondary">Probabilistic detection relies on patterns and generates alerts that analysts triage hours or days later.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Attackers live off the land, undetected</h3>
                    <p className="text-text-secondary">Stolen credentials, session hijacking, and injected commands let adversaries operate inside legitimate sessions without triggering any alert.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-secondary p-8 rounded-lg border border-gray-200">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="bg-green-100 border border-green-300 rounded-lg px-4 py-2 text-center">
                  <div className="text-sm font-semibold text-green-800">Login & MFA</div>
                </div>
                <div className="text-gray-400">→</div>
                <div className="bg-red-100 border-2 border-dashed border-red-300 rounded-lg px-6 py-6 text-center flex-1">
                  <div className="text-lg font-bold text-red-600">THE GAP</div>
                  <div className="text-xs text-red-500 mt-1">No governance, no verification, no control</div>
                </div>
                <div className="text-gray-400">→</div>
                <div className="bg-green-100 border border-green-300 rounded-lg px-4 py-2 text-center">
                  <div className="text-sm font-semibold text-green-800">SIEM Logs</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Between authentication and post-incident analysis lies the post-authentication gap — where 86% of real attacks unfold with no security control in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Solution — Patented Technology */}
      <section style={{ backgroundColor: '#0F1623' }} className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}>
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Continuous Remote Access Governance — Built on Patented Cryptographic Attestation
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl">
              Keystrike is built on a foundational insight: the one thing attackers cannot fake is physical human input. Our patented technology cryptographically ties every action inside a remote session to a verified physical keystroke or mouse event on an approved device. No behavioral guessing. No probabilistic scoring. Deterministic verification, every time.
            </p>
            
            {/* Patent callout banner */}
            <div className="bg-accent bg-opacity-10 border border-accent rounded-lg p-6 mb-12 max-w-2xl">
              <h3 className="text-lg font-bold text-white mb-2">Patented Technology</h3>
              <p className="text-gray-300">
                Keystrike's physical input verification method is protected by patent. This is not a feature added to an existing platform — it is the architectural foundation of a new category of security: Continuous Access Governance.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
            <p className="text-lg text-gray-300 mb-8">
              Three lightweight components. No network re-architecture. Deploy in approximately 20 minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-secondary p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Workstation Agent</h3>
              <p className="text-text-secondary mb-6">
                A lightweight agent on the user's approved device recognizes legitimate physical keystrokes and mouse input. It generates a cryptographic attestation for each action, proving the input originated from a real human on an authorized endpoint.
              </p>
              <p className="text-sm text-gray-500 italic">
                No keylogging. No PII capture. Only attestation signals.
              </p>
            </div>
            
            <div className="bg-surface-secondary p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Server-Side Terminator</h3>
              <p className="text-text-secondary mb-6">
                A second agent on the destination server withholds all incoming input until it receives a valid cryptographic attestation. Verified input is processed normally. Unattested input — from scripts, injected commands, or hijacked sessions — is blocked instantly.
              </p>
              <p className="text-sm text-gray-500 italic">
                Real-time enforcement. Zero false positives.
              </p>
            </div>
            
            <div className="bg-surface-secondary p-8 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Live Visibility Layer</h3>
              <p className="text-text-secondary mb-6">
                The SEE module maps every remote protocol across your environment — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and third-party tools like NinjaOne and TeamViewer — showing which sessions are governed and where gaps remain.
              </p>
              <p className="text-sm text-gray-500 italic">
                Complete session topology. No blind spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SEE. CONTROL. PROVE. */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}>
              Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              See. Control. Prove.
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Three capabilities that transform remote session security from reactive logging to continuous, real-time governance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-text-primary mb-4">SEE</h3>
              <p className="text-text-secondary mb-6">
                Real-time visibility into every privileged remote session across your environment. One authoritative map of who is connecting, how, and to what.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Live session map across all protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Surface unknown clients and unmanaged assets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Historical session evidence on demand</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Policy simulation before enforcement</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-text-primary mb-4">CONTROL</h3>
              <p className="text-text-secondary mb-6">
                Continuous verification and real-time enforcement. Every action is attested or blocked — no exceptions, no delays, no false positives.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Cryptographic attestation of physical input</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Automatic blocking of unverified commands</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Immediate enforcement in RDP and SSH</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Supports vendor and third-party access</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-text-primary mb-4">PROVE</h3>
              <p className="text-text-secondary mb-6">
                Tamper-evident, continuous audit trails structured for regulatory scrutiny. Prove exactly who did what, when, and whether it was authorized.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Immutable session evidence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>DORA, NIS2, IEC 62443 ready</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Board reporting and incident response</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>On-demand audit export</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Competitive Comparison Table */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}>
              Why Keystrike
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              How Keystrike Compares
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Keystrike is not a replacement for your existing tools. It closes the governance gap that none of them address.
            </p>
            
            {/* AI-optimized prose summary */}
            <p className="text-lg text-text-primary mb-12 max-w-5xl mx-auto text-left">
              Unlike PAM solutions such as CyberArk and BeyondTrust — which manage credential vaulting but go blind once a session starts — and unlike SIEM platforms such as Splunk — which detect threats after the fact through probabilistic analysis — Keystrike provides continuous, cryptographic verification of every action inside the session in real time. It deploys in approximately 20 minutes, requires no rip-and-replace of existing tools, and produces zero false positives because it uses deterministic enforcement rather than behavioral analytics.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <caption className="sr-only">
                Comparison of Keystrike continuous access governance versus PAM, IAM, and SIEM solutions
              </caption>
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="sticky left-0 bg-gray-50 px-6 py-6 text-left text-lg font-bold text-text-primary border-r border-gray-200 z-10">Capability</th>
                  <th scope="col" className="px-6 py-6 text-center bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-2xl font-bold text-white">Keystrike</div>
                      <div className="text-sm text-white font-bold uppercase">CONTINUOUS ACCESS GOVERNANCE</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-2xl font-bold text-text-primary">CyberArk</div>
                      <div className="text-sm text-gray-600">PAM</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-2xl font-bold text-text-primary">BeyondTrust</div>
                      <div className="text-sm text-gray-600">PAM</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-2xl font-bold text-text-primary">Okta</div>
                      <div className="text-sm text-gray-600">IAM / MFA</div>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-6 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-2xl font-bold text-text-primary">Splunk</div>
                      <div className="text-sm text-gray-600">SIEM</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Continuous in-session verification</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">Cryptographic</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Blocks unverified commands in real time</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">Deterministic</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Limited (session recording alerts)</span></td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6 text-sm text-gray-500">No (alerting only)</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Physical input attestation (patented)</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">Patented</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Zero false positives</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">Cryptographic proof</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm text-gray-500">N/A</td>
                  <td className="px-6 py-6 text-sm text-gray-500">N/A</td>
                  <td className="px-6 py-6 text-sm text-gray-500">N/A</td>
                  <td className="px-6 py-6 text-sm text-gray-500">No — probabilistic</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Credential vaulting & rotation</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-3xl font-bold text-gray-300">—</span>
                      <span className="text-sm font-medium text-white text-center">Handled by your PAM</span>
                    </div>
                  </td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Yes — core feature</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Yes — core feature</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Partial</span></td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Identity & access management</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-3xl font-bold text-gray-300">—</span>
                      <span className="text-sm font-medium text-white text-center">Handled by your IdP</span>
                    </div>
                  </td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Partial</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Partial</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Yes — core feature</span></td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Post-incident log analysis</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">Feeds live data to your SIEM</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Session recordings</td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Session recordings</td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Auth logs</td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Yes — core feature</span></td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Live session topology mapping</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">All protocols</span>
                    </div>
                  </td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Limited to managed sessions</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Limited to managed sessions</span></td>
                  <td className="px-6 py-6 text-sm text-gray-500">No</td>
                  <td className="px-6 py-6 text-sm text-gray-500">Log-based (not real-time)</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Tamper-evident audit trail</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">Cryptographic</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Session recordings</td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Session recordings</td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Auth logs only</td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Depends on log integrity</td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Deployment time</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">~20 minutes</span>
                    </div>
                  </td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Weeks to months</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Weeks to months</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Days to weeks</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Weeks to months</span></td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">Requires rip-and-replace</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">No — complements all</span>
                    </div>
                  </td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Often replaces existing PAM</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Often replaces existing PAM</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">May replace existing IdP</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">May replace existing SIEM</span></td>
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white px-6 py-6 text-sm text-text-primary border-r border-gray-200 z-10">No PII / no keylogging</td>
                  <td className="px-6 py-6 bg-accent bg-opacity-5">
                    <div className="flex flex-col items-center space-y-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm font-medium text-white text-center">Guaranteed</span>
                    </div>
                  </td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Records sessions</span></td>
                  <td className="px-6 py-6"><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Records sessions</span></td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Auth data only</td>
                  <td className="px-6 py-6 text-sm text-text-secondary">Ingests all log data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: Where Keystrike Fits in the Stack */}
      <section style={{ backgroundColor: '#0F1623' }} className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}>
              Security Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Completes Your Security Stack — No Rip and Replace
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Keystrike is the essential final piece that makes your existing investments in identity, access management, and threat detection work together to deliver Continuous Access Governance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-secondary p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-text-primary mb-4">IAM & PAM</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">The Gatekeeper</h4>
              <p className="text-text-secondary mb-6">
                Controls who gets in. Without Keystrike, goes blind the moment the session starts.
              </p>
              <p className="text-sm text-gray-500 italic">
                Okta · CyberArk · BeyondTrust · Delinea · Microsoft Entra ID
              </p>
            </div>
            
            <div className="bg-surface-secondary p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-text-primary mb-4">SIEM, SOAR & XDR</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">The Historian</h4>
              <p className="text-text-secondary mb-6">
                Records and correlates events. Without Keystrike, relies on reactive, probabilistic detection.
              </p>
              <p className="text-sm text-gray-500 italic">
                Splunk · Microsoft Sentinel · CrowdStrike · Palo Alto Cortex
              </p>
            </div>
            
            <div className="bg-accent bg-opacity-10 border-2 border-accent p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Keystrike</h3>
              <h4 className="text-lg font-semibold text-accent mb-4">The Governor</h4>
              <p className="text-gray-200 mb-6">
                Continuous Remote Access Governance. Every action inside the session verified cryptographically from login to logout — closing the Governance Gap that IAM, PAM, and SIEM were never designed to address.
              </p>
              <p className="text-sm text-accent italic">
                Cryptographic attestation · Deterministic enforcement · Zero false positives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Threat Statistics */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}>
              The Threat Landscape
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              The Numbers Tell the Story
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-4xl mx-auto">
              The post-authentication gap is not theoretical. These are real-world figures from leading cybersecurity research.
            </p>
          </div>
          
          {/* 4-column grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl font-bold text-accent mb-2">86%</div>
              <div className="text-lg font-semibold text-text-primary mb-2">of real attacks unfold after access is granted</div>
              <div className="text-sm text-gray-500 italic">Palo Alto Unit 42, 2025</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl font-bold text-accent mb-2">280</div>
              <div className="text-lg font-semibold text-text-primary mb-2">days average attacker dwell time</div>
              <div className="text-sm text-gray-500 italic">IBM Cost of a Data Breach Report</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl font-bold text-accent mb-2">19%</div>
              <div className="text-lg font-semibold text-text-primary mb-2">of attacks complete within one hour of access</div>
              <div className="text-sm text-gray-500 italic">Verizon DBIR, 2024</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-4xl font-bold text-accent mb-2">19%</div>
              <div className="text-lg font-semibold text-text-primary mb-2">of attacks complete within one hour</div>
              <div className="text-sm text-gray-500 italic">Verizon DBIR, 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Testimonials */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}>
              Trusted By
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              What Security Leaders Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <blockquote className="text-lg text-text-primary mb-6 italic">
                "Keystrike ensures only our employees access our servers — not adversaries. The simplicity is what I love. No disruption to employees."
              </blockquote>
              <div className="text-text-secondary">
                <div className="font-semibold">Heimir Kristjansson</div>
                <div className="text-sm">Cyber Security Operations Manager, Amer Sports</div>
                <div className="text-xs text-gray-400 mt-1">Sporting Goods / Enterprise</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <blockquote className="text-lg text-text-primary mb-6 italic">
                "We deployed in about 20 minutes. The documentation was clear. It detects lurking attackers and blocks injected commands."
              </blockquote>
              <div className="text-text-secondary">
                <div className="font-semibold">Steven Brill</div>
                <div className="text-sm">VP of IT Operations and Security, Global Water Resources</div>
                <div className="text-xs text-gray-400 mt-1">Critical Infrastructure / Water Utility</div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 italic mt-10">
            Keystrike customers include a central bank, a city government, and enterprises across critical infrastructure.
          </p>
        </div>
      </section>

      {/* SECTION 9: Compliance */}
      <section style={{ backgroundColor: '#0F1623' }} className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}>
              Compliance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for Regulatory Scrutiny
            </h2>
            <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto">
              Keystrike's tamper-evident audit trails and cryptographic session evidence are structured to meet the requirements of major regulatory frameworks.
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-8">
              Keystrike is not a compliance tool. Compliance evidence is a continuous output of governance working as designed — produced as sessions are governed, not assembled under audit pressure.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { tag: 'DORA', link: '/solutions/banking' },
              { tag: 'NIS2', link: '/solutions/manufacturing' },
              { tag: 'IEC 62443', link: '/solutions/manufacturing' },
              { tag: 'PCI DSS', link: '/solutions/banking' },
              { tag: 'SOX', link: '/solutions/banking' },
              { tag: 'SOC 2 Type 2', link: '/solutions/data-centers' },
              { tag: 'NIST 800-53', link: '/solutions/government' },
              { tag: 'FedRAMP', link: '/solutions/government' },
              { tag: 'CMMC', link: '/solutions/government' },
              { tag: 'ISO 27001', link: '/solutions/data-centers' },
              { tag: 'HIPAA', link: '/solutions/healthcare' },
              { tag: 'NERC CIP', link: '/solutions/manufacturing' },
              { tag: 'FFIEC', link: '/solutions/banking' },
              { tag: 'NYDFS', link: '/solutions/banking' },
              { tag: 'GLBA', link: '/solutions/banking' }
            ].map((framework) => (
              <a
                key={framework.tag}
                href={framework.link}
                className="border-[1.5px] border-solid border-[#9CA3AF] text-[#9CA3AF] text-[0.72rem] font-semibold tracking-[0.08em] px-[12px] py-[5px] rounded-[3px] uppercase hover:border-accent hover:text-accent transition-colors"
              >
                {framework.tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Final CTA */}
      <section style={{ backgroundColor: '#0F1623' }} className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Close the Governance Gap. Govern Every Remote Session.
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            See how Keystrike delivers Continuous Remote Access Governance across your privileged sessions — with a live walkthrough in your environment.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Deploys in 20 minutes. No rip-and-replace. Completes your existing stack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-[#0D3D3D] text-[#FFFFFF] hover:bg-[#1A5252] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-none transition-colors text-center">
              Request a Demo →
            </a>
            <a href="/contact?type=assessment" className="bg-transparent text-white hover:bg-[rgba(255,255,255,0.08)] px-[28px] py-[14px] text-lg font-semibold rounded-[5px] border-[1.5px] border-solid border-white transition-colors text-center">
              Take the Remote Access Risk Assessment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}