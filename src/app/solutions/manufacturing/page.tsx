import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OT Session Governance for Water, Energy & Critical Infrastructure — Keystrike',
  description: 'Keystrike governs every privileged remote session in OT, ICS, and SCADA environments. Block unauthorized commands in real time, prove continuous compliance with NERC CIP and IEC 62443, and deploy in 20 minutes — no endpoint agents required.',
  keywords: 'OT session governance, OT cybersecurity, SCADA session security, OT remote access governance, critical infrastructure cybersecurity, NERC CIP compliance, IEC 62443, privileged session governance, OT security, water utility cybersecurity, energy sector OT security, industrial control system governance',
  openGraph: {
    title: 'OT Session Governance for Water, Energy & Critical Infrastructure | Keystrike',
    description: 'Govern every privileged remote session in OT, ICS, and SCADA environments. Real-time enforcement. Audit-ready proof. Deploys in 20 minutes.',
    url: 'https://keystrike.com/solutions/manufacturing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OT Session Governance for Water, Energy & Critical Infrastructure | Keystrike',
    description: 'Govern every privileged remote session in OT, ICS, and SCADA environments. Real-time enforcement. Audit-ready proof. Deploys in 20 minutes.',
  },
};

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Page-specific JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is session governance for OT environments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Session governance for OT environments means continuously verifying and controlling what happens during every privileged remote access session in operational technology infrastructure — including SCADA, ICS, and DCS systems. Unlike perimeter security or identity security, session governance operates after authentication, ensuring that authorised users only execute authorised commands."
                }
              },
              {
                "@type": "Question",
                "name": "How does Keystrike differ from OT network monitoring tools like Dragos or Claroty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "OT network monitoring tools focus on network traffic analysis and asset discovery. Keystrike operates at the session layer — governing what authenticated users do during privileged remote sessions. Keystrike completes the security stack by adding the Governor layer alongside existing Gatekeeper (IAM/PAM) and Historian (SIEM/XDR) tools."
                }
              },
              {
                "@type": "Question",
                "name": "Does Keystrike require agents on OT endpoints or PLCs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Keystrike deploys without agents on OT endpoints, PLCs, RTUs, or HMIs. It governs sessions transparently within existing remote access workflows. Typical deployment completes in 20 minutes."
                }
              },
              {
                "@type": "Question",
                "name": "Does Keystrike replace our PAM or IAM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Keystrike completes PAM and IAM by governing what happens inside the sessions they grant. PAM controls who gets access to OT systems and manages privileged credentials. Keystrike governs what those users do once they're inside the session — verifying commands in real time and blocking unauthorized actions before they execute."
                }
              },
              {
                "@type": "Question",
                "name": "Does Keystrike replace our SIEM or XDR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. SIEM and XDR log events after they occur — detection is inherently reactive. Keystrike complements your SIEM by governing what happens during the live session and generating cryptographically attested session evidence that enriches your existing log data with verified, tamper-proof records."
                }
              },
              {
                "@type": "Question",
                "name": "How does Keystrike handle third-party vendor remote access?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike governs third-party vendor sessions transparently — vendors connect through existing remote access tools with no additional steps. Every vendor session is subject to the same deterministic enforcement and generates the same tamper-evident record as internal operator sessions."
                }
              },
              {
                "@type": "Question",
                "name": "Does Keystrike record or store keystrokes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Keystrike verifies that commands originate from a physical human operator through cryptographic attestation — without recording keystrokes, capturing screens, or conducting behavioural analysis."
                }
              },
              {
                "@type": "Question",
                "name": "Can Keystrike operate in air-gapped or segmented OT networks?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Keystrike operates within the access pathways that already exist in Purdue Model architectures — governing sessions at the points where remote access enters the OT network."
                }
              },
              {
                "@type": "Question",
                "name": "What compliance frameworks does Keystrike support for critical infrastructure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keystrike maps directly to NERC CIP (CIP-004, CIP-005, CIP-007), IEC 62443, EPA cybersecurity directives for water and wastewater systems, NIST Cybersecurity Framework, and NIST SP 800-82."
                }
              }
            ]
          }),
        }}
      />
      {/* Page-specific JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Keystrike for OT and Critical Infrastructure",
            "description": "Continuous remote access governance platform for OT, ICS, and SCADA environments. Governs privileged sessions in real time across water, energy, utility, and manufacturing operations.",
            "category": "Cybersecurity Software",
            "brand": {
              "@type": "Brand",
              "name": "Keystrike"
            }
          }),
        }}
      />
      <Navigation currentPage="solutions" />
      
      {/* Section 1 - Header */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              {/* Eyebrow Label */}
              <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6">
                Critical Infrastructure · OT · ICS · SCADA · Utilities
              </div>

              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1623] tracking-[-0.02em] mb-5 leading-tight">
                OT Session Governance: Continuous Control of Every Privileged Remote Session in Critical Infrastructure
              </h1>

              {/* H2 (Subheadline) */}
              <h2 className="text-[1.15rem] font-normal text-[#4A5568] mb-6 leading-relaxed">
                Your Perimeter Stops Intrusions. Your IAM Grants Access. But Who Governs What Happens During the Session?
              </h2>

              {/* Body Paragraphs */}
              <div className="space-y-6 mb-8">
                <p className="text-[1rem] font-normal text-[#4A5568] leading-relaxed">
                  Your firewall, MFA, and PAM confirm who connects to your SCADA systems. But once the session starts, nothing governs what happens inside it — the Governance Gap that enabled unauthorised commands in Oldsmar and persistent state-sponsored access through Volt Typhoon.
                </p>

                <p className="text-[1rem] font-normal text-[#4A5568] leading-relaxed">
                  Keystrike closes that gap. Purpose-built for OT, ICS, and SCADA, it maps every remote session in real time, blocks unauthorised commands before execution through deterministic enforcement, and generates cryptographically attested audit records mapped to NERC CIP, IEC 62443, and NIST requirements.
                </p>

                <p className="text-[1rem] font-normal text-[#4A5568] leading-relaxed">
                  Deploys in 20 minutes. No endpoint agents. No keylogging.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-[#0D3D3D] text-white font-semibold rounded-[5px] px-7 py-3.5 hover:bg-[#1A5252] transition-colors">
                  See Keystrike in Your OT Environment
                </button>
                <button className="bg-transparent border-[1.5px] border-[#0D3D3D] text-[#0D3D3D] font-semibold rounded-[5px] px-7 py-3.5 hover:bg-[#0D3D3D] hover:bg-opacity-[0.08] transition-colors">
                  Take the Remote Access Risk Assessment
                </button>
              </div>

              {/* Dark Navy Callout Block */}
              <div className="bg-[#0D1B2A] p-6 rounded-md text-left">
                <div className="text-white font-bold text-[1.1rem] mb-2">
                  73% of organisations experienced an OT intrusion in the past year
                </div>
                <div className="text-[#94A3B8] text-[0.8rem] font-normal">
                  Fortinet, 2024 State of OT Cybersecurity Report
                </div>
              </div>
            </div>

            {/* Right Column - Visual Panel */}
            <div className="hidden md:flex flex-col items-center justify-center bg-[#0D1B2A] rounded-xl h-full min-h-[440px] shadow-2xl relative overflow-hidden">
              {/* Inner Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(13,61,61,0.4)]"></div>
              
              <div className="text-center z-10">
                <div className="text-white text-3xl font-bold mb-10 tracking-tight">Keystrike</div>
                
                <div className="space-y-4 font-mono text-[0.8rem]">
                  <div className="text-[#4DB6AC]">SESSION VERIFIED · operator01 · 14:32:07</div>
                  <div className="text-[#4DB6AC]">COMMAND ATTESTED · substation-ctrl-04 · 14:32:09</div>
                  <div className="flex items-center justify-center text-[#EF9A9A]">
                    UNATTESTED INPUT BLOCKED · external-vendor · 14:32:11
                    <span className="ml-3 flex h-1.5 w-1.5 rounded-full bg-[#EF9A9A] animate-pulse"></span>
                  </div>
                </div>
                
                <div className="mt-8 text-[#94A3B8] text-[0.8rem]">Live Session Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1b - How Keystrike Governs OT Sessions (SEE / CONTROL / PROVE) */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6 text-center">
            Completing the Identity Stack · Gatekeeper · Historian · Governor
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-6">
            How Keystrike Governs OT Sessions
          </h2>

          <div className="max-w-[720px] mx-auto mb-12">
            <p className="text-[#4A5568] leading-relaxed text-center">
              Your identity tools grant access. Your SIEM logs what happened. Keystrike governs what happens during the live session. You don&apos;t have to rip out or replace the tools you already have. Keystrike is the essential final piece that makes your existing stack deliver Continuous Access Governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SEE */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-8">
              <div className="w-12 h-12 bg-[#0D3D3D] bg-opacity-10 rounded-full flex items-center justify-center mb-5" aria-hidden="true">
                <span className="text-lg font-bold text-[#0D3D3D]">1</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F1623] mb-3">SEE — Live Visibility</h3>
              <p className="text-[#4A5568] text-[0.9rem] leading-relaxed">
                Discover and map every remote access session in your OT environment in real time. See sessions across RDP, SSH, PowerShell, WinRM, WMI, SMB, TeamViewer, and NinjaOne — including connections from unmanaged or unknown clients that your existing tools cannot see.
              </p>
            </div>

            {/* CONTROL */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-8">
              <div className="w-12 h-12 bg-[#0D3D3D] bg-opacity-10 rounded-full flex items-center justify-center mb-5" aria-hidden="true">
                <span className="text-lg font-bold text-[#0D3D3D]">2</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F1623] mb-3">CONTROL — Real-Time Enforcement</h3>
              <p className="text-[#4A5568] text-[0.9rem] leading-relaxed">
                Verify that every command originates from a verified physical human operator. Block unauthorised commands through deterministic enforcement before they reach your OT systems. Zero false positives — because enforcement is based on cryptographic attestation, not probabilistic analysis.
              </p>
            </div>

            {/* PROVE */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-8">
              <div className="w-12 h-12 bg-[#0D3D3D] bg-opacity-10 rounded-full flex items-center justify-center mb-5" aria-hidden="true">
                <span className="text-lg font-bold text-[#0D3D3D]">3</span>
              </div>
              <h3 className="text-lg font-bold text-[#0F1623] mb-3">PROVE — Continuous Governance</h3>
              <p className="text-[#4A5568] text-[0.9rem] leading-relaxed">
                Generate tamper-evident session records for every remote access event. Map directly to NERC CIP, IEC 62443, EPA, and NIST requirements. Deliver audit-ready evidence and board-level governance reporting without manual log compilation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Attack Scenarios & Incidents */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          {/* Section Eyebrow */}
          <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6 text-center">
            OT Security Incidents · SCADA · Water · Energy · Utilities
          </div>

          {/* Section H2 */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-12">
            Documented OT Cyberattacks on Water, Energy, and Utility Infrastructure and the Session Gap That Enabled Them
          </h2>

          {/* Cards stack */}
          <div className="space-y-8">
            {/* CARD 1 */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-10">
              <h3 className="text-xl font-bold text-[#0F1623] mb-6">
                Unauthorised Remote Commands in Water and Energy SCADA Systems
              </h3>
              
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Hijacked sessions and unverified remote commands are sufficient to cause operational disruption — no full system compromise required. A single automated or malicious command can trip a breaker, shut down a pump, or alter water pressure.
              </p>

              {/* Incident Callout */}
              <div className="bg-[#F4F5F7] border-l-[3px] border-[#0D3D3D] p-4 rounded-[4px] my-4 text-[#4A5568] leading-relaxed">
                In January 2024, attackers caused a water tank overflow in Muleshoe, Texas by exploiting unverified remote sessions in a municipal SCADA system, forcing operators to switch to manual control. The attack was attributed to foreign hacking groups. — Chemical Processing, 2025
              </div>

              <p className="text-[#4A5568] leading-relaxed mb-6">
                <strong>Keystrike response:</strong> Keystrike blocks every unattested command in real time. Only verified physical operator input reaches OT systems — whether the session is hijacked, credentials are stolen, or the command originates from an automated script.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Unauthorised commands stopped before execution</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Operational continuity across water, energy, and electricity infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Full support for remote operations and hybrid control rooms</span>
                </li>
              </ul>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-10">
              <h3 className="text-xl font-bold text-[#0F1623] mb-6">
                Third-Party Vendor Access as an OT Attack Vector
              </h3>
              
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Utilities depend on contractors and vendors for maintenance and monitoring. Compromised vendor credentials are among the most common initial access vectors in OT environments — and once inside, no session-level verification exists to stop what happens next.
              </p>

              {/* Incident Callout */}
              <div className="bg-[#F4F5F7] border-l-[3px] border-[#0D3D3D] p-4 rounded-[4px] my-4 text-[#4A5568] leading-relaxed">
                In the Oldsmar, Florida water treatment incident, an attacker used a legitimate remote access tool to raise sodium hydroxide to dangerous levels — endangering thousands of residents. The session appeared legitimate. The command was not. — ICS-CERT
              </div>

              <p className="text-[#4A5568] leading-relaxed mb-6">
                <strong>Keystrike response:</strong> Keystrike validates every vendor and contractor action before execution. Compromised credentials cannot produce commands that pass Keystrike's physical attestation requirement.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Third-party sessions governed at the command level</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Vendor collaboration preserved without expanding the attack surface</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">No network re-architecture required</span>
                </li>
              </ul>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-10">
              <h3 className="text-xl font-bold text-[#0F1623] mb-6">
                IT-to-OT Lateral Movement: Stopping Attackers Before They Cross the Air Gap
              </h3>
              
              <p className="text-[#4A5568] leading-relaxed mb-4">
                Most OT breaches begin in IT. Attackers use phishing, stolen credentials, or vendor access to move laterally into operational control systems — exploiting the absence of session-level verification between IT and OT environments.
              </p>

              {/* Incident Callout */}
              <div className="bg-[#F4F5F7] border-l-[3px] border-[#0D3D3D] p-4 rounded-[4px] my-4 text-[#4A5568] leading-relaxed">
                In 2023, Volt Typhoon — a Chinese state-linked threat actor — maintained persistent access to Littleton Electric Light and Water in Massachusetts for over 300 days via lateral IT-to-OT movement. No session-level control existed to detect or block commands from the compromised IT environment. — CISA Advisory, 2024
              </div>

              <p className="text-[#4A5568] leading-relaxed mb-6">
                <strong>Keystrike response:</strong> Keystrike enforces session-level isolation between IT and OT. Stolen credentials and compromised IT sessions cannot produce attested commands in OT systems — regardless of how network access was achieved.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Lateral movement from IT to OT blocked at the session level</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">IT/OT segmentation enforced without network re-architecture</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Pumps, valves, turbines, meters, and substations protected from unverified commands</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Tech Stack Comparison Table */}
      <section className="bg-[#F4F5F7] py-[72px]">
        <div className="max-w-[1100px] mx-auto px-4">
          {/* Section Eyebrow */}
          <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6 text-center">
            Post-Authentication Security Gap
          </div>

          {/* Section H2 */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-4">
            Completing the OT Security Stack
          </h2>
          <p className="text-[#4A5568] text-center mb-12 max-w-[640px] mx-auto">
            Your Gatekeeper grants access. Your Historian logs events. Keystrike is the Governor — governing what happens during the live session.
          </p>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0D3D3D]">
                  <th className="px-6 py-4 text-left text-white font-semibold text-[0.85rem]">Tools</th>
                  <th className="px-6 py-4 text-left text-white font-semibold text-[0.85rem]">What It Does</th>
                  <th className="px-6 py-4 text-left text-white font-semibold text-[0.85rem]">Post-Authentication Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-6 py-4 text-[#0F1623] font-semibold text-[0.9rem]">IAM / PAM / MFA</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Grants access</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Blind after the session starts</td>
                </tr>
                <tr className="bg-[#F9FAFB] border-b border-gray-100">
                  <td className="px-6 py-4 text-[#0F1623] font-semibold text-[0.9rem]">SIEM / SOAR / XDR</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Logs events after the fact</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Detection is reactive — damage is already done</td>
                </tr>
                <tr className="bg-[#0D3D3D]">
                  <td className="px-6 py-4 text-white font-semibold text-[0.9rem]">Keystrike</td>
                  <td className="px-6 py-4 text-white font-semibold text-[0.9rem]">Governs the live session</td>
                  <td className="px-6 py-4 text-white font-semibold text-[0.9rem]">None. Unauthorised commands blocked before execution.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Privacy Note */}
          <div className="max-w-[640px] mx-auto">
            <p className="text-[#6B7280] text-[14px] text-left">
              Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — not behavioural — eliminating false positives and privacy exposure.
            </p>
          </div>

          {/* Industry Statistics */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#0F1623] text-center mb-10">
              The Post-Authentication Risk in Numbers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-[#DDE1E9] rounded-lg p-6 text-center">
                <span className="block text-4xl font-bold text-[#0D3D3D] mb-2">65%</span>
                <p className="text-[#4A5568] text-[0.82rem] leading-snug">of OT environments have insecure remote access connections</p>
                <p className="text-[#9CA3AF] text-[0.7rem] mt-2">Dragos, 2024 OT Cybersecurity Year in Review</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-lg p-6 text-center">
                <span className="block text-4xl font-bold text-[#0D3D3D] mb-2">70%</span>
                <p className="text-[#4A5568] text-[0.82rem] leading-snug">of OT vulnerabilities reside in the internal network, post-perimeter</p>
                <p className="text-[#9CA3AF] text-[0.7rem] mt-2">Dragos, 2024 OT Cybersecurity Year in Review</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-lg p-6 text-center">
                <span className="block text-4xl font-bold text-[#0D3D3D] mb-2">71%</span>
                <p className="text-[#4A5568] text-[0.82rem] leading-snug">surge in attacks using stolen credentials in industrial environments</p>
                <p className="text-[#9CA3AF] text-[0.7rem] mt-2">IBM X-Force, 2024 Threat Intelligence Index</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-lg p-6 text-center">
                <span className="block text-4xl font-bold text-[#0D3D3D] mb-2">#1</span>
                <p className="text-[#4A5568] text-[0.82rem] leading-snug">Manufacturing was the most-targeted sector for cyberattacks for the 5th consecutive year</p>
                <p className="text-[#9CA3AF] text-[0.7rem] mt-2">IBM X-Force, 2025 Threat Intelligence Index</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-lg p-6 text-center">
                <span className="block text-4xl font-bold text-[#0D3D3D] mb-2">45%</span>
                <p className="text-[#4A5568] text-[0.82rem] leading-snug">of manufacturing cyberattacks involved credential theft or abuse</p>
                <p className="text-[#9CA3AF] text-[0.7rem] mt-2">Verizon DBIR 2024</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-lg p-6 text-center">
                <span className="block text-4xl font-bold text-[#0D3D3D] mb-2">46%</span>
                <p className="text-[#4A5568] text-[0.82rem] leading-snug">of energy sector breaches involved third-party or partner access</p>
                <p className="text-[#9CA3AF] text-[0.7rem] mt-2">Verizon DBIR 2024, Energy subset</p>
              </div>
              <div className="bg-white border border-[#DDE1E9] rounded-lg p-6 text-center sm:col-span-2">
                <span className="block text-4xl font-bold text-[#0D3D3D] mb-2">83%</span>
                <p className="text-[#4A5568] text-[0.82rem] leading-snug">of water and wastewater systems had undocumented remote access connections</p>
                <p className="text-[#9CA3AF] text-[0.7rem] mt-2">WaterISAC / CISA Advisory, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Regulatory Compliance */}
      <section className="bg-white py-[72px]">
        <div className="max-w-[1100px] mx-auto px-4">
          {/* Section Eyebrow */}
          <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6 text-center">
            OT Regulatory Compliance · NERC CIP · IEC 62443 · EPA · NIST
          </div>

          {/* Section H2 */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1623] mb-8 text-center">
            Meeting NERC CIP, IEC 62443, EPA, and NIST Requirements Without Disrupting Operations
          </h2>

          {/* Body Paragraph */}
          <div className="max-w-[680px] mb-8">
            <p className="text-[#4A5568] leading-relaxed text-left">
              NERC CIP requires organisations to log and monitor all electronic access to critical cyber assets. IEC 62443 mandates access control and security zone enforcement for industrial control systems. EPA guidance requires utilities to document and audit remote access to operational technology. Keystrike satisfies each requirement by producing continuous, tamper-evident, session-level records of every privileged action, without recording personally identifiable information or requiring changes to existing infrastructure.
            </p>
          </div>

          {/* Compliance Output Summary - Three Column Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-[#DDE1E9] rounded-md p-6">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <div className="text-[#0F1623] font-semibold text-[0.9rem]">Tamper-Evident Session Records</div>
              </div>
              <p className="text-[#4A5568] text-[0.82rem] leading-relaxed">Continuous logs of every privileged action, structured for audit</p>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-md p-6">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <div className="text-[#0F1623] font-semibold text-[0.9rem]">Regulatory-Ready Evidence</div>
              </div>
              <p className="text-[#4A5568] text-[0.82rem] leading-relaxed">Session evidence meeting NERC CIP, IEC 62443, and EPA standards</p>
            </div>

            <div className="bg-white border border-[#DDE1E9] rounded-md p-6">
              <div className="flex items-center mb-3">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <div className="text-[#0F1623] font-semibold text-[0.9rem]">Board and Audit Reporting</div>
              </div>
              <p className="text-[#4A5568] text-[0.82rem] leading-relaxed">On-demand evidence for regulatory review and incident response</p>
            </div>
          </div>

          {/* Horizontal Rule Above Badge Pills */}
          <div className="h-px bg-[#DDE1E9] w-full mb-5"></div>

          {/* Badge Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {[
              'NERC CIP',
              'EPA Safe Drinking Water Act', 
              'IEC 62443',
              'ISO 27001',
              'NIST CSF',
              'State Energy & Water Regulations'
            ].map((badge) => (
              <span 
                key={badge}
                className="border-[1.5px] border-solid border-[#0D3D3D] text-[#0D3D3D] text-[0.72rem] font-semibold tracking-[0.08em] px-[14px] py-[6px] rounded-[3px]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Horizontal Rule Below Badge Pills */}
          <div className="h-px bg-[#DDE1E9] w-full mb-8"></div>

          {/* Second Body Paragraph */}
          <div className="max-w-[680px] mb-4">
            <p className="text-[#4A5568] leading-relaxed text-left">
              Keystrike integrates natively with SCADA, ICS, IAM, and SIEM systems — enforcing policy-driven access controls, logging every operator action, and generating audit-ready evidence for board reporting, incident response, and regulatory review.
            </p>
          </div>

          {/* CTA Link */}
          <div className="max-w-[680px]">
            <a href="#" className="text-[#0D3D3D] font-semibold text-[0.9rem] hover:underline">
              See how Keystrike maps to your compliance framework →
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 - Persona Entry Points */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6 text-center">
            Built for Your Role
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-12">
            Keystrike Delivers What Your Role Demands
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CISO → CONTROL */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-8">
              <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-3">For the CISO</div>
              <h3 className="text-lg font-bold text-[#0F1623] mb-4">CONTROL — Real-Time Enforcement</h3>
              <p className="text-[#4A5568] text-[0.9rem] leading-relaxed">
                You need certainty that every remote session in your OT environment is governed — not just logged. Keystrike gives you real-time enforcement: deterministic command verification that blocks unauthorised actions before they execute, with zero false positives.
              </p>
            </div>

            {/* Compliance → PROVE */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-8">
              <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-3">For Compliance and Audit</div>
              <h3 className="text-lg font-bold text-[#0F1623] mb-4">PROVE — Continuous Governance</h3>
              <p className="text-[#4A5568] text-[0.9rem] leading-relaxed">
                You need evidence — not just policies. Keystrike gives you provable governance: tamper-evident session records mapped directly to NERC CIP, IEC 62443, and NIST requirements. Every remote access session generates audit-ready evidence automatically.
              </p>
            </div>

            {/* SecOps → SEE */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-8">
              <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-3">For Security Operations</div>
              <h3 className="text-lg font-bold text-[#0F1623] mb-4">SEE — Live Visibility</h3>
              <p className="text-[#4A5568] text-[0.9rem] leading-relaxed">
                You need to see what is happening right now — especially the sessions your existing tools miss. Keystrike gives you live visibility: a real-time map of every remote access connection, across every protocol, including sessions from unmanaged and unknown clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - FAQ */}
      <section id="faq" className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is session governance for OT environments?",
                a: "Session governance for OT environments means continuously verifying and controlling what happens during every privileged remote access session in operational technology infrastructure — including SCADA, ICS, and DCS systems. Unlike perimeter security or identity security, session governance operates after authentication, ensuring that authorised users only execute authorised commands."
              },
              {
                q: "How does Keystrike differ from OT network monitoring tools like Dragos or Claroty?",
                a: "OT network monitoring tools focus on network traffic analysis and asset discovery. Keystrike operates at the session layer — governing what authenticated users do during privileged remote sessions. Keystrike completes the security stack by adding the Governor layer alongside existing Gatekeeper (IAM/PAM) and Historian (SIEM/XDR) tools."
              },
              {
                q: "Does Keystrike require agents on OT endpoints or PLCs?",
                a: "No. Keystrike deploys without agents on OT endpoints, PLCs, RTUs, or HMIs. It governs sessions transparently within existing remote access workflows. Typical deployment completes in 20 minutes."
              },
              {
                q: "Does Keystrike replace our PAM or IAM?",
                a: "No. Keystrike completes PAM and IAM by governing what happens inside the sessions they grant. PAM controls who gets access to OT systems and manages privileged credentials. Keystrike governs what those users do once they're inside the session — verifying commands in real time and blocking unauthorized actions before they execute."
              },
              {
                q: "Does Keystrike replace our SIEM or XDR?",
                a: "No. SIEM and XDR log events after they occur — detection is inherently reactive. Keystrike complements your SIEM by governing what happens during the live session and generating cryptographically attested session evidence that enriches your existing log data with verified, tamper-proof records."
              },
              {
                q: "How does Keystrike handle third-party vendor remote access?",
                a: "Keystrike governs third-party vendor sessions transparently — vendors connect through existing remote access tools with no additional steps. Every vendor session is subject to the same deterministic enforcement and generates the same tamper-evident record as internal operator sessions."
              },
              {
                q: "Does Keystrike record or store keystrokes?",
                a: "No. Keystrike verifies that commands originate from a physical human operator through cryptographic attestation — without recording keystrokes, capturing screens, or conducting behavioural analysis."
              },
              {
                q: "Can Keystrike operate in air-gapped or segmented OT networks?",
                a: "Yes. Keystrike operates within the access pathways that already exist in Purdue Model architectures — governing sessions at the points where remote access enters the OT network."
              },
              {
                q: "What compliance frameworks does Keystrike support for critical infrastructure?",
                a: "Keystrike maps directly to NERC CIP (CIP-004, CIP-005, CIP-007), IEC 62443, EPA cybersecurity directives for water and wastewater systems, NIST Cybersecurity Framework, and NIST SP 800-82."
              }
            ].map((faq, index) => (
              <details key={index} className="border border-[#DDE1E9] rounded-lg bg-white group">
                <summary className="px-6 py-5 cursor-pointer font-semibold text-[#0F1623] text-[0.95rem] flex justify-between items-center hover:bg-[#F9FAFB] rounded-lg">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-[#0D3D3D] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-[#4A5568] text-[0.9rem] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Customer Testimonial */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            CUSTOMER STORY
          </div>
          <div className="bg-[#F4F5F7] rounded-lg p-10 border border-[#E5E7EB]">
            <p className="text-[15px] font-semibold text-[#0F1623] mb-6">
              Global Water Resources Secures OT Without User Friction
            </p>
            <blockquote className="text-[17px] text-[#374151] italic leading-[1.8] mb-8">
              "In about 20 minutes, I had Keystrike up and running. The deployment is simple, well thought out, with clear documentation. Now Keystrike helps us establish that commands are genuine and trustworthy by detecting lurking attackers and blocking when they inject themselves into active sessions. With the combination of powerful technology and ease of deployment, I highly recommend Keystrike."
            </blockquote>
            <div className="flex items-center gap-6">
              <img
                src="/logos/gwr-logo.png"
                alt="Global Water Resources"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-[15px] font-semibold text-[#0F1623]">Steven Brill</div>
                <div className="text-[14px] text-[#6B7280]">VP of IT Operations and Security, Global Water Resources</div>
                <div className="text-[12px] text-[#9CA3AF] mt-1">Critical Infrastructure / Water Utility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Closing CTA */}
      <section className="bg-[#0D1B2A] py-20 text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.15em] text-[#9CA3AF] uppercase mb-4">
            WATER · ENERGY · UTILITIES · MANUFACTURING
          </div>

          {/* H2 */}
          <h2 className="text-white font-bold text-[1.6rem] max-w-[640px] mx-auto mb-8 leading-tight">
            Close the Post-Authentication Gap Before Your Next Audit — or Incident
          </h2>

          {/* Body Paragraph */}
          <div className="max-w-[560px] mx-auto mb-10">
            <p className="text-[#CBD5E1] text-[16px] leading-[1.6] text-left">
              Compromised credentials, hijacked sessions, and unverified vendor access remain the three leading causes of OT operational disruption. Keystrike makes every privileged session visible, verifiable, and policy-controlled — deploying alongside your existing infrastructure without replacing tools or disrupting operations.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <button className="bg-white text-[#0D1B2A] font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-[#F0F0F0] transition-colors">
              See Keystrike Govern a Live OT Session →
            </button>
            <button className="bg-transparent border-[1.5px] border-white text-white font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-white hover:bg-opacity-10 transition-colors">
              Take the Remote Access Risk Assessment →
            </button>
          </div>
          <div className="flex justify-center mb-6">
            <button className="bg-transparent border-[1.5px] border-[#64748B] text-[#CBD5E1] font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-white hover:bg-opacity-5 transition-colors text-[0.9rem]">
              Download the OT Compliance Mapping Guide →
            </button>
          </div>

          {/* Contact Line */}
          <div className="text-[#64748B] text-[0.8rem] mt-6">
            To speak with a Keystrike engineer: connect@keystrike.com
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
