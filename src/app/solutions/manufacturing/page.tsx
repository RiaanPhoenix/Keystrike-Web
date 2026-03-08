import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OT Cybersecurity for Utilities, Energy & Water — Keystrike',
  description: 'Keystrike blocks unauthorized commands in OT, ICS, and SCADA environments before execution — real-time privileged session security for water, energy, and utility operators.',
};

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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
                Operational Technology Security: Governing Every Privileged Session in Critical Infrastructure
              </h1>

              {/* H2 (Subheadline) */}
              <h2 className="text-[1.15rem] font-normal text-[#4A5568] mb-6 leading-relaxed">
                Perimeter Controls Stop Intrusions. Session-Level Governance Stops Operational Disruption.
              </h2>

              {/* Body Paragraphs */}
              <div className="space-y-6 mb-8">
                <p className="text-[1rem] font-normal text-[#4A5568] leading-relaxed">
                  Firewalls, VPNs, and MFA protect access points. They do not govern what happens after login. In water, energy, and utility environments, one unauthorised command can trip a breaker, shut down a pump, or contaminate a water supply.
                </p>

                <p className="text-[1rem] font-normal text-[#4A5568] leading-relaxed">
                  Keystrike is a privileged session monitoring platform that verifies every operator command originates from an authenticated human on an authorized device, before it executes. No infrastructure changes required.
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
                  91% of critical infrastructure organisations experienced OT security breaches in the past 18 months
                </div>
                <div className="text-[#94A3B8] text-[0.8rem] font-normal">
                  with half resulting in service interruptions or system corruption — Chemical Processing, 2025
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
                  <span className="text-[#4A5568] text-[0.9rem]">Command-level breach prevention before execution</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-12">
            Why Firewalls, MFA, and SIEM Cannot Secure Privileged Sessions in OT Environments
          </h2>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0D3D3D]">
                  <th className="px-6 py-4 text-left text-white font-semibold text-[0.85rem]">Security Tool</th>
                  <th className="px-6 py-4 text-left text-white font-semibold text-[0.85rem]">What It Protects</th>
                  <th className="px-6 py-4 text-left text-white font-semibold text-[0.85rem]">Post-Authentication Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Firewall / VPN</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Network perimeter</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Session activity after access is granted</td>
                </tr>
                <tr className="bg-[#F9FAFB] border-b border-gray-100">
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">MFA</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Login authentication</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Actions inside authenticated sessions</td>
                </tr>
                <tr className="bg-white border-b border-gray-100">
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">EDR / SIEM</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Endpoint threats and event correlation</td>
                  <td className="px-6 py-4 text-[#0F1623] text-[0.9rem]">Real-time command execution — detection happens after</td>
                </tr>
                <tr className="bg-[#0D3D3D]">
                  <td className="px-6 py-4 text-white font-semibold text-[0.9rem]">Keystrike</td>
                  <td className="px-6 py-4 text-white font-semibold text-[0.9rem]">Every privileged session in OT, ICS, and enterprise environments</td>
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

      {/* Section 5 - Closing CTA */}
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <button className="bg-white text-[#0D1B2A] font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-[#F0F0F0] transition-colors">
              See Keystrike in Your OT Environment
            </button>
            <button className="bg-transparent border-[1.5px] border-white text-white font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-white hover:bg-opacity-10 transition-colors">
              Take the Remote Access Risk Assessment
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
