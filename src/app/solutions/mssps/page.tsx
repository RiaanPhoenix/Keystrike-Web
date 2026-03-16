import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keystrike for MSSPs | Continuous Session Governance for Managed Security Providers',
  description: 'Keystrike governs every privileged session across MSSP-managed environments — blocking unauthorised commands in real time, containing cross-customer lateral movement, and delivering cryptographic proof of access integrity. NIS2, DORA, ISO 27001, and SOC 2 aligned.',
  keywords: [
    'MSSP session governance',
    'managed security services',
    'privileged session governance',
    'SOC operations',
    'MDR teams',
    'session hijacking prevention',
    'cross-customer contamination',
    'continuous access governance MSSP',
    'post-authentication session governance',
    'Governance Gap MSSP',
    'NIS2 MSSP compliance',
    'DORA MSSP compliance'
  ],
  openGraph: {
    title: 'Keystrike for MSSPs | Continuous Session Governance',
    description: 'Keystrike governs every privileged session across MSSP-managed environments — blocking unauthorised commands in real time, containing cross-customer lateral movement, and delivering cryptographic proof of access integrity.',
    url: 'https://keystrike.com/solutions/mssps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keystrike for MSSPs | Continuous Session Governance',
    description: 'Govern every privileged session across managed environments. Block unauthorised commands in real time. Cryptographic proof of access integrity for every customer.',
  },
};

export default function MSSPs() {
  return (
    <div className="min-h-screen bg-background">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does Keystrike prevent cross-customer contamination?",
                "acceptedAnswer": { "@type": "Answer", "text": "Keystrike validates every command that traverses customer environment boundaries using cryptographic attestation of physical human input. It blocks session inheritance, credential replay, and RDP hijacks before lateral movement can propagate to downstream customers — at the command level, not the network level." }
              },
              {
                "@type": "Question",
                "name": "Does Keystrike replace existing PAM or SIEM?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. Keystrike completes your existing security stack — it does not replace any component. PAM continues to vault credentials and control checkout. SIEM continues to aggregate logs and generate alerts. Keystrike adds the missing layer: continuous governance inside the live privileged session." }
              },
              {
                "@type": "Question",
                "name": "What is the Governance Gap in MSSP environments?",
                "acceptedAnswer": { "@type": "Answer", "text": "The Governance Gap is the unprotected space between when a user is authenticated and what they actually do inside the session. In MSSP environments — where a single admin session can reach every customer environment — this gap is the attack surface that credential theft, session hijacking, and cross-customer lateral movement exploit. Keystrike closes the Governance Gap by governing every command inside the live session in real time." }
              },
              {
                "@type": "Question",
                "name": "How long does Keystrike take to deploy across managed environments?",
                "acceptedAnswer": { "@type": "Answer", "text": "Keystrike deploys in approximately 20 minutes per managed environment. No lengthy professional services engagement, no complex integration project. It integrates with existing MFA, PAM, and SIEM infrastructure with no rip-and-replace." }
              },
              {
                "@type": "Question",
                "name": "Does Keystrike record keystrokes or capture screens?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. Keystrike verifies that commands originate from a physical human operator through cryptographic attestation — without recording keystrokes, capturing screens, or conducting behavioural analysis. Session verification is deterministic, not probabilistic." }
              },
              {
                "@type": "Question",
                "name": "What compliance frameworks does Keystrike support for MSSPs?",
                "acceptedAnswer": { "@type": "Answer", "text": "Keystrike maps directly to NIS2, DORA, ISO 27001:2022, SOC 2 Type 2, NIST Cybersecurity Framework, Cyber Essentials, and applicable data protection regulations — through continuous session governance, cryptographic attestation, and tamper-evident audit records for every privileged session across every managed environment." }
              },
              {
                "@type": "Question",
                "name": "Can Keystrike be offered as a managed service to MSSP customers?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Keystrike provides MSSPs with a differentiated service tier — offering customers cryptographic proof that every privileged session in their environment is governed, verified, and audit-ready." }
              }
            ]
          }),
        }}
      />
      {/* Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Keystrike for MSSPs",
            "description": "Continuous remote access governance platform for managed security service providers. Governs privileged sessions in real time across every managed customer environment.",
            "category": "Cybersecurity Software",
            "brand": { "@type": "Brand", "name": "Keystrike" }
          }),
        }}
      />
      <Navigation currentPage="solutions" />

      {/* SECTION 1 — HERO */}
      <section style={{ backgroundColor: '#0F1623' }} className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div style={{ 
            fontSize: '11px', 
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#9CA3AF',
            marginBottom: '24px'
          }}>
            MANAGED SECURITY SERVICE PROVIDERS · SOC OPERATIONS · MDR TEAMS · CYBER INSURERS
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontSize: '56px', fontWeight: '700' }}>
            Continuous Session Governance for MSSPs
          </h1>
          <p className="text-xl mb-6" style={{ color: '#94A3B8' }}>
            Govern every privileged session. Protect every customer. Prove it to every auditor.
          </p>
          <div 
            className="mx-auto mb-8 text-left"
            style={{ 
              fontSize: '18px', 
              color: '#CBD5E1', 
              maxWidth: '620px',
              lineHeight: '1.6'
            }}
          >
            Keystrike is a continuous remote access governance platform that closes the Governance Gap in MSSP environments. Your MFA confirms identity. Your PAM vaults credentials. Neither governs what happens once the session is active. Keystrike validates every privileged remote action in real time through cryptographic attestation of verified physical human input — blocking unauthorised commands before they execute and producing tamper-evident audit records for every session across every managed environment.
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-3 text-lg font-semibold rounded"
              style={{ 
                backgroundColor: 'white', 
                color: '#0F1623',
                height: '48px',
                borderRadius: '5px',
                fontWeight: '600'
              }}
            >
              See Keystrike in Your Environment
            </button>
            <button 
              className="px-8 py-3 text-lg font-semibold rounded"
              style={{ 
                backgroundColor: 'transparent', 
                color: 'white',
                border: '1px solid white',
                height: '48px',
                borderRadius: '5px',
                fontWeight: '600'
              }}
            >
              Take the Remote Access Risk Assessment
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THREE-PILLAR CHALLENGE BANNER */}
      <section style={{ backgroundColor: '#F4F5F7' }} className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-center mb-4"
            style={{ fontSize: '36px', fontWeight: '700', color: '#0F1623' }}
          >
            MSSPs Face a Governance Gap No Perimeter Tool Can Close
          </h2>
          <p 
            className="text-center mb-12 mx-auto"
            style={{ fontSize: '18px', fontWeight: '400', color: '#6B7280', maxWidth: '680px' }}
          >
            Your admin credentials are the most valuable target in your customers' environments — and the hardest to defend with conventional tools.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ alignItems: 'stretch' }}>
            <div 
              className="p-8 rounded"
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '28px'
              }}
            >
              <h3 
                className="mb-3"
                style={{ fontSize: '20px', fontWeight: '700', color: '#0F1623', marginBottom: '12px' }}
              >
                MSSP Accounts as Primary Attack Targets
              </h3>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7', marginBottom: '16px' }}
              >
                A single compromised MSSP admin credential provides attackers with privileged access across every environment your team manages. MFA confirms the login — it cannot verify what happens inside the session once access is granted. In 2022, the Five Eyes intelligence alliance — comprising CISA, the NCSC, the FBI, and security agencies from Australia, Canada, and New Zealand — issued a joint advisory specifically warning that MSSPs are primary targets for state-sponsored actors and ransomware groups seeking simultaneous access to multiple downstream customer environments.
              </p>
              <ul 
                className="text-left"
                style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', paddingTop: '12px', paddingBottom: '4px' }}
              >
                <li>• Admin session verification at the keystroke level</li>
                <li>• Credential theft and session hijacking prevention</li>
                <li>• Post-authentication enforcement across all managed environments</li>
              </ul>
            </div>

            <div 
              className="p-8 rounded"
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '28px'
              }}
            >
              <h3 
                className="mb-3"
                style={{ fontSize: '20px', fontWeight: '700', color: '#0F1623', marginBottom: '12px' }}
              >
                Cross-Customer Contamination
              </h3>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7', marginBottom: '16px' }}
              >
                Attackers who compromise one MSSP session can move laterally across customer environment boundaries — propagating ransomware, exfiltrating data, and establishing persistence across multiple customers before any alert fires. Keystrike blocks lateral movement at the command level before it crosses the customer boundary.
              </p>
              <ul 
                className="text-left"
                style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', paddingTop: '12px', paddingBottom: '4px' }}
              >
                <li>• Environment boundary enforcement</li>
                <li>• Lateral movement prevention</li>
                <li>• Blast radius containment</li>
              </ul>
            </div>

            <div 
              className="p-8 rounded"
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '28px'
              }}
            >
              <h3 
                className="mb-3"
                style={{ fontSize: '20px', fontWeight: '700', color: '#0F1623', marginBottom: '12px' }}
              >
                Proving Access Integrity to Customers
              </h3>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7', marginBottom: '16px' }}
              >
                Customers increasingly demand cryptographic proof that their MSSP cannot be impersonated. Keystrike produces tamper-evident session records for every privileged action — giving you the evidence to demonstrate accountability at every level and a differentiated service tier to go with it.
              </p>
              <ul 
                className="text-left"
                style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', paddingTop: '12px', paddingBottom: '4px' }}
              >
                <li>• Tamper-evident audit trails for every privileged session</li>
                <li>• Compliance-ready records for NIS2, ISO 27001, and SOC 2</li>
                <li>• Competitive service differentiation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — STATISTICS BAR */}
      <section style={{ backgroundColor: '#1B3FC4' }} className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-6"
            style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              letterSpacing: '0.08em', 
              textTransform: 'uppercase', 
              color: 'rgba(255, 255, 255, 0.6)' 
            }}
          >
            The Scale of the MSSP Threat
          </div>
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between' 
            }}
          >
          <div className="text-center" style={{ width: '33.33%', padding: '0 32px' }}>
            <div style={{ fontSize: '40px', fontWeight: '700', color: 'white' }}>
              1,500+
            </div>
            <div 
              className="text-center"
              style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.6' }}
            >
              downstream businesses affected when REvil exploited MSP remote access tools in the Kaseya VSA ransomware attack (2021)
            </div>
          </div>
          
          <div className="hidden md:block w-px bg-white opacity-20"></div>
          
          <div className="text-center" style={{ width: '33.33%', padding: '0 32px' }}>
            <div style={{ fontSize: '40px', fontWeight: '700', color: 'white' }}>
              15%
            </div>
            <div 
              className="text-center"
              style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.6' }}
            >
              of all data breaches in 2024 involved a third party, including MSSPs and managed service providers — up year-over-year (Verizon Data Breach Investigations Report, 2024)
            </div>
          </div>
          
          <div className="hidden md:block w-px bg-white opacity-20"></div>
          
          <div className="text-center" style={{ width: '33.33%', padding: '0 32px' }}>
            <div style={{ fontSize: '40px', fontWeight: '700', color: 'white' }}>
              18,000+
            </div>
            <div 
              className="text-center"
              style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.6' }}
            >
              organisations breached through compromised privileged remote access credentials in the SolarWinds SUNBURST supply chain attack (2020)
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SCENARIO CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6B7280',
              textAlign: 'center',
              marginBottom: '12px'
            }}
          >
            WHERE EXISTING CONTROLS FALL SHORT
          </div>
          <h2 
            className="text-center mx-auto"
            style={{ 
              fontSize: '34px', 
              fontWeight: '700', 
              color: '#0F1623',
              maxWidth: '700px',
              marginBottom: '40px'
            }}
          >
            Three Attack Paths That Bypass MFA, PAM, and EDR in MSSP Environments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ alignItems: 'stretch' }}>
            <div 
              className="p-8 rounded h-full"
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '32px'
              }}
            >
              <h3 
                className="mb-4"
                style={{ fontSize: '19px', fontWeight: '700', color: '#0F1623' }}
              >
                Session Hijacking and Admin Credential Abuse
              </h3>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}
              >
                Attackers who compromise an MSSP workstation operate inside a legitimate session — invisible to MFA, PAM, and post-authentication controls. Every command appears authorised. Every action looks like the engineer. By the time the breach is confirmed, customer environments across the managed portfolio are already compromised.
              </p>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '14px', color: '#0D3D3D', fontWeight: 'bold', marginTop: '16px', borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}
              >
                Keystrike's continuous session governance closes this gap by continuously validating that every command originates from verified physical input on an approved device — not just at login, but throughout the entire session. The moment that changes, Keystrike acts: blocking the command, isolating the workstation, and triggering automated response before damage spreads.
              </p>
              <div 
                className="p-4 text-left"
                style={{ 
                  backgroundColor: '#F9FAFB',
                  borderLeft: '3px solid #1B3FC4',
                  fontSize: '13px',
                  color: '#374151',
                  padding: '16px',
                  lineHeight: '1.6'
                }}
              >
                <strong>Incident:</strong> The 2021 Kaseya VSA ransomware attack exploited MSP remote access tools to deploy REvil ransomware across approximately 1,500 downstream businesses in 17 countries — all through legitimate remote sessions. Keystrike would have blocked the unauthorised remote commands before execution — containing the blast radius regardless of credential validity.
              </div>
            </div>

            <div 
              className="p-8 rounded h-full"
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '32px'
              }}
            >
              <h3 
                className="mb-4"
                style={{ fontSize: '19px', fontWeight: '700', color: '#0F1623' }}
              >
                Cross-Customer Lateral Movement
              </h3>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}
              >
                Once inside an MSSP session, attackers can pivot across customer environment boundaries — using the same credentials, the same tools, and the same access that MSSP engineers use legitimately every day. Network segmentation and perimeter controls offer no defence against an authenticated session that already has permission to cross boundaries.
              </p>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '14px', color: '#0D3D3D', fontWeight: 'bold', marginTop: '16px', borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}
              >
                Keystrike closes this gap by validating every command that crosses environment boundaries, blocking RDP hijacks, inherited sessions, and credential replay before lateral movement can propagate to downstream customers.
              </p>
              <div 
                className="p-4 text-left"
                style={{ 
                  backgroundColor: '#F9FAFB',
                  borderLeft: '3px solid #1B3FC4',
                  fontSize: '13px',
                  color: '#374151',
                  padding: '16px',
                  lineHeight: '1.6'
                }}
              >
                <strong>Incident:</strong> In the SolarWinds SUNBURST attack (2020), attackers used compromised supply chain access to move laterally through 18,000+ organisations — many through MSP and managed service channels. The breach remained undetected for nine months. Keystrike limits attacker dwell time to minutes — not months.
              </div>
            </div>

            <div 
              className="p-8 rounded h-full"
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '32px'
              }}
            >
              <h3 
                className="mb-4"
                style={{ fontSize: '19px', fontWeight: '700', color: '#0F1623' }}
              >
                Supply Chain and Remote Tool Exploitation
              </h3>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}
              >
                MSSP operations depend on remote management tools — RMM (Remote Monitoring and Management) platforms, SSH jump servers, RDP gateways, and scripting frameworks. Attackers increasingly target these tools directly, exploiting vulnerabilities or stolen credentials to push malicious commands across entire customer portfolios simultaneously — far faster than any human response can contain.
              </p>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '14px', color: '#0D3D3D', fontWeight: 'bold', marginTop: '16px', borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}
              >
                Keystrike closes this gap by requiring every command to be cryptographically attested to physical human input. Automated scripts, injected commands, and remote tool exploitation generate no valid attestation — and are blocked before execution.
              </p>
              <div 
                className="p-4 text-left"
                style={{ 
                  backgroundColor: '#F9FAFB',
                  borderLeft: '3px solid #1B3FC4',
                  fontSize: '13px',
                  color: '#374151',
                  padding: '16px',
                  lineHeight: '1.6'
                }}
              >
                <strong>Incident:</strong> The ConnectWise ScreenConnect vulnerability (February 2024) was exploited within 48 hours of disclosure, allowing attackers to push ransomware across MSP customer environments through legitimate remote access tools. With Keystrike, commands from unattested sources are blocked regardless of the delivery mechanism.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SECURITY GAP COMPARISON TABLE */}
      <section style={{ backgroundColor: '#F4F5F7' }} className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6B7280',
              textAlign: 'center',
              marginBottom: '12px'
            }}
          >
            POST-AUTHENTICATION SECURITY GAP
          </div>
          <h2 
            className="text-center mx-auto"
            style={{ 
              fontSize: '34px', 
              fontWeight: '700', 
              color: '#0F1623',
              maxWidth: '760px',
              marginBottom: '36px'
            }}
          >
            Why MFA, PAM, and SIEM Cannot Secure Privileged Sessions in MSSP Environments
          </h2>

          <div className="overflow-x-auto">
            <table 
              className="w-full"
              style={{ maxWidth: '980px', margin: '0 auto', width: '100%' }}
            >
              <thead>
                <tr style={{ backgroundColor: '#0F1623' }}>
                  <th 
                    className="text-left text-white"
                    style={{ fontSize: '14px', fontWeight: '600', padding: '16px 20px', width: '38%' }}
                  >
                    Security Tool
                  </th>
                  <th 
                    className="text-left text-white"
                    style={{ fontSize: '14px', fontWeight: '600', padding: '16px 20px', width: '27%' }}
                  >
                    What It Protects
                  </th>
                  <th 
                    className="text-left text-white"
                    style={{ fontSize: '14px', fontWeight: '600', padding: '16px 20px', width: '35%' }}
                  >
                    Post-Authentication Gap
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  style={{ 
                    backgroundColor: 'white', 
                    borderBottom: '1px solid #E5E7EB' 
                  }}
                >
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Firewalls / VPN / MFA
                  </td>
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Perimeter and identity at login
                  </td>
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Session activity after access is granted
                  </td>
                </tr>
                <tr 
                  style={{ 
                    backgroundColor: 'white', 
                    borderBottom: '1px solid #E5E7EB' 
                  }}
                >
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    PAM — Privileged Access Management (e.g., CyberArk, BeyondTrust)
                  </td>
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Credential vaulting and access controls
                  </td>
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Session activity after the vault is opened
                  </td>
                </tr>
                <tr 
                  style={{ 
                    backgroundColor: 'white', 
                    borderBottom: '1px solid #E5E7EB' 
                  }}
                >
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    SIEM — Security Information and Event Management (e.g., Splunk, Microsoft Sentinel)
                  </td>
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Centralised alerts and compliance reporting
                  </td>
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Reactive — alerts after damage is done
                  </td>
                </tr>
                <tr 
                  style={{ 
                    backgroundColor: 'white', 
                    borderBottom: '1px solid #E5E7EB' 
                  }}
                >
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    EDR — Endpoint Detection and Response (e.g., CrowdStrike, Microsoft Defender)
                  </td>
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Malware detection and endpoint telemetry
                  </td>
                  <td 
                    style={{ fontSize: '14px', color: '#374151', padding: '16px 20px' }}
                  >
                    Blind to valid credential theft and session misuse
                  </td>
                </tr>
                <tr 
                  style={{ 
                    backgroundColor: '#0D3D3D'
                  }}
                >
                  <td 
                    className="text-white"
                    style={{ fontSize: '14px', fontWeight: '700', padding: '16px 20px' }}
                  >
                    Keystrike — Privileged Session Governance
                  </td>
                  <td 
                    className="text-white"
                    style={{ fontSize: '14px', fontWeight: '700', padding: '16px 20px' }}
                  >
                    Every command in every privileged session
                  </td>
                  <td 
                    className="text-white"
                    style={{ fontSize: '14px', fontWeight: '700', padding: '16px 20px' }}
                  >
                    None. Unauthorised commands blocked before execution.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p 
            className="text-center mx-auto"
            style={{ 
              fontSize: '14px', 
              color: '#4B5563',
              maxWidth: '860px',
              margin: '20px auto 0'
            }}
          >
            Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — not behavioural — eliminating false positives and analyst alert fatigue.
          </p>

          <div className="card p-8 mt-12 max-w-4xl mx-auto border-l-4 border-accent">
            <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-3">
              COMPLETING YOUR SECURITY STACK
            </div>
            <p className="text-text-primary text-lg font-semibold mb-4">
              IAM and PAM grant access. SIEM and XDR log events after the fact. Keystrike governs the live session.
            </p>
            <p className="text-text-secondary text-lg">
              You don&apos;t have to rip out or replace your existing stack. Keystrike is the essential final piece that makes your existing MFA, PAM, and SIEM infrastructure deliver Continuous Access Governance — closing the Governance Gap inside every privileged session across your entire managed portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — REGULATORY COMPLIANCE */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6B7280',
              textAlign: 'center',
              marginBottom: '12px'
            }}
          >
            COMPLIANCE AND GOVERNANCE
          </div>
          <h2 
            className="text-center mb-8"
            style={{ 
              fontSize: '34px', 
              fontWeight: '700', 
              color: '#0F1623'
            }}
          >
            Continuous Session Governance for NIS2, DORA, ISO 27001, and SOC 2 Requirements
          </h2>
          
          <p 
            className="text-left mx-auto"
            style={{ 
              fontSize: '16px', 
              color: '#374151',
              lineHeight: '1.6',
              maxWidth: '720px',
              margin: '0 auto 32px'
            }}
          >
            Every privileged session produces continuous, tamper-evident audit records that satisfy MSSP regulatory and contractual requirements as a direct output of governance — not as a separate compliance process.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['NIS2', 'ISO 27001', 'SOC 2 Type 2', 'DORA', 'Cyber Essentials', 'GDPR', 'NIST CSF'].map((badge) => (
              <span 
                key={badge}
                className="rounded"
                style={{ 
                  backgroundColor: 'white',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  padding: '8px 9px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#0F1623'
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          <p 
            className="text-left mx-auto"
            style={{ 
              fontSize: '15px', 
              color: '#374151',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '32px auto 48px'
            }}
          >
            Keystrike supports compliance with NIS2 (Network and Information Security Directive 2), ISO 27001:2022, SOC 2 Type 2, DORA (Digital Operational Resilience Act), NIST Cybersecurity Framework, Cyber Essentials, and applicable data protection regulations — through continuous authentication, policy-driven access controls, and auditable session records for every remote action across every managed environment.
          </p>

          {/* Compliance Mapping Tables */}
          <div 
            className="mx-auto"
            style={{ maxWidth: '860px', marginTop: '48px' }}
          >
            {/* TABLE 1 — NIS2 COMPLIANCE MAP */}
            <div className="w-full">
              <h3 
                style={{ fontSize: '20px', fontWeight: '700', color: '#0F1623', marginBottom: '16px' }}
              >
                How Keystrike Supports NIS2 Compliance for MSSPs
              </h3>
              <div className="overflow-hidden" style={{ borderRadius: '8px' }}>
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#0D3D3D' }}>
                      <th 
                        className="p-3 text-left text-white"
                        style={{ fontSize: '13px', fontWeight: '600', padding: '14px', width: '10%' }}
                      >
                        Article
                      </th>
                      <th 
                        className="p-3 text-left text-white"
                        style={{ fontSize: '13px', fontWeight: '600', padding: '14px', width: '35%' }}
                      >
                        Requirement
                      </th>
                      <th 
                        className="p-3 text-left text-white"
                        style={{ fontSize: '13px', fontWeight: '600', padding: '14px', width: '55%' }}
                      >
                        Keystrike Contribution
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        21(2)(a)
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Risk analysis and information system security
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Provides continuous session governance and real-time enforcement across every managed environment
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        21(2)(b)
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Incident handling
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Blocks unauthorised commands in real time and generates tamper-evident session records for incident response — before damage spreads
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        21(2)(e)
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Vulnerability handling
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Blocks exploitation of stolen credentials and hijacked sessions through cryptographic attestation of verified human input
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        21(2)(f)
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Risk management effectiveness
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Enables post-mitigation evaluation and continuous governance of privileged session activity
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        21(2)(i)
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Access control and asset management
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Reinforces access control through continuous cryptographic verification of physical human input at the session level
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: '#F9FAFB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        21(2)(j)
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        MFA and continuous authentication
                      </td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>
                        Provides continuous authentication using cryptographic attestation of physical user input — beyond one-time MFA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* TABLE 2 — DORA COMPLIANCE MAP */}
            <div className="w-full" style={{ marginTop: '64px' }}>
              <h3 
                style={{ fontSize: '20px', fontWeight: '700', color: '#0F1623', marginBottom: '16px' }}
              >
                How Keystrike Supports DORA Compliance for MSSPs
              </h3>
              <div className="overflow-hidden" style={{ borderRadius: '8px' }}>
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#1B3FC4' }}>
                      <th 
                        className="p-3 text-left text-white"
                        style={{ fontSize: '13px', fontWeight: '600', padding: '14px', width: '10%' }}
                      >
                        Article
                      </th>
                      <th 
                        className="p-3 text-left text-white"
                        style={{ fontSize: '13px', fontWeight: '600', padding: '14px', width: '35%' }}
                      >
                        Requirement
                      </th>
                      <th 
                        className="p-3 text-left text-white"
                        style={{ fontSize: '13px', fontWeight: '600', padding: '14px', width: '55%' }}
                      >
                        Keystrike Contribution
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>5</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Governance and control framework</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Supports policy enforcement and access legitimacy across all remote workforce sessions</td>
                    </tr>
                    <tr style={{ backgroundColor: '#F8FAFB', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>6(1)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>ICT risk management framework</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Provides real-time session governance and cryptographic verification for every privileged session</td>
                    </tr>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>6(2)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Protection of ICT assets</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Verifies session-level identity — blocking unauthorised commands before they execute</td>
                    </tr>
                    <tr style={{ backgroundColor: '#F8FAFB', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>9(1)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Continuous monitoring</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Governs every session in real time — blocking unattested commands and generating tamper-evident records of all privileged activity</td>
                    </tr>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>9(2)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>System resilience</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Preserves the authenticity and integrity of access across connected financial and operational systems</td>
                    </tr>
                    <tr style={{ backgroundColor: '#F8FAFB', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>9(3b)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Data protection</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Detects and blocks unauthorised credential use before data can be accessed or exfiltrated</td>
                    </tr>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>9(4c)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Access policies</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Detects overprivileged or misused access rights within active sessions</td>
                    </tr>
                    <tr style={{ backgroundColor: '#F8FAFB', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>9(4d)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Strong authentication</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Provides continuous cryptographic attestation of physical human input throughout the lifetime of every session</td>
                    </tr>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>10</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Detection mechanisms</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Alerts on anomalous activity including session hijacking, credential replay, and injected commands</td>
                    </tr>
                    <tr style={{ backgroundColor: '#F8FAFB', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>11</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Business continuity</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Enables early automated response to access compromise — minimising operational disruption</td>
                    </tr>
                    <tr style={{ backgroundColor: '#FFFFFF' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>25</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Resilience testing</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Supports resilience testing by providing continuous verification of session integrity across ICT systems and remote access infrastructure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONA ENTRY POINTS */}
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
              <h3 className="text-xl font-bold text-text-primary mb-4">Stop Cross-Customer Contamination Before It Starts</h3>
              <p className="text-text-secondary mb-4">Deterministic enforcement of session policy across every customer environment, every vendor session, and every management platform. Commands that fail attestation are blocked — not flagged. Zero false positives. Zero alert fatigue.</p>
              <a href="/contact" className="text-accent hover:underline font-medium">See CONTROL in action →</a>
            </div>
            <div className="card p-6">
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-3">PROVE — For Compliance &amp; Audit Teams</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Audit-Ready Evidence for Every Customer</h3>
              <p className="text-text-secondary mb-4">Every privileged session produces tamper-evident records proving that every command originated from verified human input on an approved device. NIS2, DORA, ISO 27001, and SOC 2 requirements are satisfied as a direct output of governance — not a quarterly retrofit.</p>
              <a href="/contact" className="text-accent hover:underline font-medium">See PROVE in action →</a>
            </div>
            <div className="card p-6">
              <div className="text-sm text-accent uppercase tracking-wide font-semibold mb-3">SEE — For Security Operations</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Know What Is Happening Across Every Customer</h3>
              <p className="text-text-secondary mb-4">Keystrike maps every remote protocol across your entire managed portfolio — RDP, SSH, PowerShell, WinRM, WMI, SMB, and more — showing which sessions are governed and where policy gaps remain. Full visibility across every customer environment.</p>
              <a href="/contact" className="text-accent hover:underline font-medium">See SEE in action →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW IT WORKS */}
      <section style={{ backgroundColor: '#F4F5F7' }} className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#6B7280',
              textAlign: 'center',
              marginBottom: '12px'
            }}
          >
            HOW KEYSTRIKE WORKS
          </div>
          <h2 
            className="text-center"
            style={{ 
              fontSize: '34px', 
              fontWeight: '700', 
              color: '#0F1623',
              marginBottom: '48px'
            }}
          >
            Deterministic Session Enforcement — Not Probabilistic Detection
          </h2>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto"
            style={{ maxWidth: '1200px' }}
          >
            <div className="text-center" style={{ maxWidth: '320px', margin: '0 auto' }}>
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#1B3FC4', width: '32px', height: '32px' }}
              >
                1
              </div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1B3FC4', fontWeight: '600', marginBottom: '8px' }}>CONTROL — Real-Time Enforcement</div>
              <h3 
                className="mb-4"
                style={{ fontSize: '18px', fontWeight: '700', color: '#0F1623' }}
              >
                Workstation Agent
              </h3>
              <p 
                className="text-left"
                style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}
              >
                A lightweight agent on the MSSP engineer's device recognises legitimate physical keystrokes and mouse clicks across every managed customer session, and submits cryptographic attestations confirming their legitimacy to the central Keystrike service.
              </p>
            </div>

            <div className="text-center" style={{ maxWidth: '320px', margin: '0 auto' }}>
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#1B3FC4', width: '32px', height: '32px' }}
              >
                2
              </div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1B3FC4', fontWeight: '600', marginBottom: '8px' }}>CONTROL — Deterministic Blocking</div>
              <h3 
                className="mb-4"
                style={{ fontSize: '18px', fontWeight: '700', color: '#0F1623' }}
              >
                Server-Side Terminator
              </h3>
              <p 
                className="text-left"
                style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}
              >
                A second lightweight agent on the destination server withholds all input until it receives proof of legitimacy. Attested input is processed. Unattested input — from scripts, injected commands, or compromised sessions — is blocked and an alert is generated in real time.
              </p>
            </div>

            <div className="text-center" style={{ maxWidth: '320px', margin: '0 auto' }}>
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#1B3FC4', width: '32px', height: '32px' }}
              >
                3
              </div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1B3FC4', fontWeight: '600', marginBottom: '8px' }}>SEE — Complete Session Visibility</div>
              <h3 
                className="mb-4"
                style={{ fontSize: '18px', fontWeight: '700', color: '#0F1623' }}
              >
                Live Visibility
              </h3>
              <p 
                className="text-left"
                style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}
              >
                The Keystrike SEE module maps all remote protocols across every managed environment — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and more — surfacing which sessions are governed and where policy gaps remain across your entire customer portfolio.
              </p>
            </div>

            <div className="text-center" style={{ maxWidth: '320px', margin: '0 auto' }}>
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#1B3FC4', width: '32px', height: '32px' }}
              >
                4
              </div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1B3FC4', fontWeight: '600', marginBottom: '8px' }}>PROVE — Audit-Ready Governance Records</div>
              <h3 
                className="mb-4"
                style={{ fontSize: '18px', fontWeight: '700', color: '#0F1623' }}
              >
                Continuous Proof of Control
              </h3>
              <p 
                className="text-left"
                style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}
              >
                Every privileged session generates tamper-evident audit records demonstrating exactly who did what, when, from which device, with cryptographic proof that each action originated from verified human input. These records satisfy NIS2, DORA, ISO 27001, and SOC 2 requirements as a direct output of governance — not a separate compliance process.
              </p>
            </div>
          </div>

          <p 
            className="text-center"
            style={{ 
              fontStyle: 'normal', 
              fontSize: '14px', 
              color: '#4B5563', 
              textAlign: 'center', 
              maxWidth: '860px', 
              margin: '40px auto 0' 
            }}
          >
            Keystrike deploys in around 20 minutes per environment. No lengthy professional services engagement. Integrates with existing MFA, PAM, and SIEM infrastructure — no rip-and-replace.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions About MSSP Session Governance
            </h2>
          </div>
          <div className="space-y-6">
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">How does Keystrike prevent cross-customer contamination?</summary>
              <p className="text-text-secondary mt-4">Keystrike validates every command that traverses customer environment boundaries using cryptographic attestation of physical human input. It blocks session inheritance, credential replay, and RDP hijacks before lateral movement can propagate to downstream customers — at the command level, not the network level.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">Does Keystrike replace our existing PAM or SIEM?</summary>
              <p className="text-text-secondary mt-4">No. Keystrike completes your existing security stack — it does not replace any component. PAM continues to vault credentials and control checkout. SIEM continues to aggregate logs and generate alerts. Keystrike adds the missing layer: continuous governance inside the live privileged session. It deploys alongside your existing infrastructure in approximately 20 minutes per environment.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">What is the Governance Gap in MSSP environments?</summary>
              <p className="text-text-secondary mt-4">The Governance Gap is the unprotected space between when a user is authenticated and what they actually do inside the session. In MSSP environments — where a single admin session can reach every customer environment — this gap is the attack surface that credential theft, session hijacking, and cross-customer lateral movement exploit. Keystrike closes the Governance Gap by governing every command inside the live session in real time.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">How long does Keystrike take to deploy across managed environments?</summary>
              <p className="text-text-secondary mt-4">Keystrike deploys in approximately 20 minutes per managed environment. No lengthy professional services engagement, no complex integration project. It integrates with existing MFA, PAM, and SIEM infrastructure with no rip-and-replace.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">Does Keystrike record keystrokes or capture screens?</summary>
              <p className="text-text-secondary mt-4">No. Keystrike verifies that commands originate from a physical human operator through cryptographic attestation — without recording keystrokes, capturing screens, or conducting behavioural analysis. Session verification is deterministic, not probabilistic.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">What compliance frameworks does Keystrike support for MSSPs?</summary>
              <p className="text-text-secondary mt-4">Keystrike maps directly to NIS2, DORA, ISO 27001:2022, SOC 2 Type 2, NIST Cybersecurity Framework, Cyber Essentials, and applicable data protection regulations — through continuous session governance, cryptographic attestation, and tamper-evident audit records for every privileged session across every managed environment.</p>
            </details>
            <details className="card p-6 cursor-pointer">
              <summary className="text-lg font-semibold text-text-primary">Can Keystrike be offered as a managed service to MSSP customers?</summary>
              <p className="text-text-secondary mt-4">Yes. Keystrike provides MSSPs with a differentiated service tier — offering customers cryptographic proof that every privileged session in their environment is governed, verified, and audit-ready. The tamper-evident session records become a competitive differentiator for customer retention and new business.</p>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CLOSING CTA */}
      <section style={{ backgroundColor: '#0F1623' }} className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '24px'
            }}
          >
            MANAGED SECURITY SERVICE PROVIDERS · SOC OPERATIONS · MDR TEAMS · CYBER INSURERS
          </div>
          <h2 
            className="mb-6 text-white text-4xl md:text-3xl"
            style={{ 
              fontSize: '34px',
              fontWeight: '700',
              maxWidth: '640px',
              margin: '0 auto 24px'
            }}
          >
            Close the Governance Gap Before the Next Session Is Compromised
          </h2>
          <p 
            className="mx-auto text-left"
            style={{ 
              fontSize: '16px', 
              color: '#CBD5E1',
              maxWidth: '680px',
              lineHeight: '1.6',
              margin: '0 auto 40px'
            }}
          >
            Session hijacking, credential abuse, and supply chain exploitation all exploit the same blind spot: the gap between access granted and access governed. Keystrike makes every privileged session across your managed environments visible, verifiable, and policy-controlled — protecting your privileged session infrastructure and giving you a differentiated security offering to bring to market.
          </p>
          <div className="flex justify-center mb-4" style={{ alignItems: 'center', gap: '16px' }}>
            <button 
              className="rounded"
              style={{ 
                backgroundColor: 'white', 
                color: '#0F1623',
                height: '64px',
                borderRadius: '5px',
                fontWeight: '600',
                width: 'auto',
                minWidth: '280px',
                padding: '0 32px',
                fontSize: '16px',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              See Keystrike in Your Environment
            </button>
            <button 
              className="rounded"
              style={{ 
                backgroundColor: 'transparent', 
                color: 'white',
                border: '1px solid white',
                height: '64px',
                borderRadius: '5px',
                fontWeight: '600',
                width: 'auto',
                minWidth: '280px',
                padding: '0 32px',
                fontSize: '16px',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Take the Remote Access Risk Assessment
            </button>
          </div>
          <p 
            className="text-center"
            style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.65)', 
              textAlign: 'center', 
              marginTop: '24px' 
            }}
          >
            To speak with a Keystrike engineer: connect@keystrike.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}