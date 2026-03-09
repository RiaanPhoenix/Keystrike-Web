import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keystrike for MSSPs | Privileged Session Security for Managed Security Service Providers',
  description: 'Keystrike protects MSSP operations from session hijacking, cross-customer contamination, and supply chain exploitation — the attack paths behind Kaseya, SolarWinds, and ConnectWise. Cryptographic session enforcement. NIS2, ISO 27001, and SOC 2 aligned.',
  keywords: [
    'MSSP cybersecurity',
    'managed security services',
    'privileged session monitoring',
    'SOC operations',
    'MDR teams',
    'cyber insurers',
    'session hijacking prevention',
    'cross-customer contamination'
  ],
  openGraph: {
    title: 'Keystrike for MSSPs | Privileged Session Security for Managed Security Service Providers',
    description: 'Keystrike protects MSSP operations from session hijacking, cross-customer contamination, and supply chain exploitation — the attack paths behind Kaseya, SolarWinds, and ConnectWise. Cryptographic session enforcement. NIS2, ISO 27001, and SOC 2 aligned.',
    url: '/solutions/mssps',
  },
};

export default function MSSPs() {
  return (
    <div className="min-h-screen bg-background">
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontSize: '56px', fontWeight: '700' }}>
            Govern Every Privileged Session. Protect Every Customer.
          </h1>
          <div 
            className="mx-auto mb-8 text-left"
            style={{ 
              fontSize: '18px', 
              color: '#CBD5E1', 
              maxWidth: '620px',
              lineHeight: '1.6'
            }}
          >
            Keystrike is a privileged session monitoring platform that continuously validates every remote action in real time — blocking unauthorised commands before they execute, and producing tamper-evident audit records for every session. Built for MSSPs who carry privileged access across multiple customer environments.
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
            MSSPs Face a Security Gap No Perimeter Tool Can Close
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
                Attackers who compromise an MSSP workstation operate inside a legitimate session — invisible to MFA, PAM, and behavioural detection. Every command appears authorised. Every action looks like the engineer. By the time the breach is confirmed, customer environments across the managed portfolio are already compromised.
              </p>
              <p 
                className="mb-4 text-left"
                style={{ fontSize: '14px', color: '#0D3D3D', fontWeight: 'bold', marginTop: '16px', borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}
              >
                Keystrike's privileged session monitoring closes this gap by continuously validating that every command originates from verified physical input on an approved device — not just at login, but throughout the entire session. The moment that changes, Keystrike acts: blocking the command, isolating the workstation, and triggering automated response before damage spreads.
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
                <strong>Incident:</strong> The 2021 Kaseya VSA ransomware attack exploited MSP remote access tools to deploy REvil ransomware across approximately 1,500 downstream businesses in 17 countries — all through legitimate remote sessions. Keystrike blocks unauthorised remote commands at the keystroke level, preventing deployment regardless of credential validity.
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
                    Keystrike — Privileged Session Monitoring
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
                        Provides behavioural risk telemetry and real-time session intelligence across every managed environment
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
                        Generates alerts on anomalous session behaviour for early incident detection — before damage spreads
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
                        Detects behavioural indicators of exploitation, including credential misuse and session hijacking
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
                        Enables post-mitigation evaluation and continuous monitoring of privileged session activity
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
                        Reinforces access control through continuous behavioural authentication at the session level
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
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Provides real-time identity risk signals for every privileged session</td>
                    </tr>
                    <tr style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>6(2)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Protection of ICT assets</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Verifies session-level identity — blocking unauthorised commands before they execute</td>
                    </tr>
                    <tr style={{ backgroundColor: '#F8FAFB', borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>9(1)</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Continuous monitoring</td>
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Monitors every session in real time and generates alerts on anomalous or unattested activity</td>
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
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Provides behaviour-based continuous authentication throughout the lifetime of every session</td>
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
                      <td style={{ fontSize: '13px', color: '#374151', padding: '14px', textAlign: 'left' }}>Supports detection of live operational anomalies across ICT systems and remote access infrastructure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto"
            style={{ maxWidth: '900px' }}
          >
            <div className="text-center" style={{ maxWidth: '320px', margin: '0 auto' }}>
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ backgroundColor: '#1B3FC4', width: '32px', height: '32px' }}
              >
                1
              </div>
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
                The Keystrike SEE (Session Evidence Engine) module maps all remote protocols across every managed environment — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and more — surfacing which sessions are governed and where policy gaps remain across your entire customer portfolio.
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
            One Compromised Session Shouldn't Cost You Every Customer You Protect
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