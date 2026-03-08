import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OT Cybersecurity for Utilities, Energy & Water — Keystrike',
  description: 'Keystrike blocks unauthorized commands in OT, ICS, and SCADA environments before execution — real-time privileged session security for water, energy, and utility operators.',
};

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Section 1 - Header */}
      <section className="bg-white py-20 lg:py-[80px] lg:pb-[64px]">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          {/* Eyebrow Label */}
          <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6">
            Critical Infrastructure · OT · ICS · SCADA · Utilities
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1623] tracking-[-0.02em] mb-8 leading-tight">
            Operational Technology Security: Governing Every Privileged Session in Critical Infrastructure
          </h1>

          {/* H2 */}
          <h2 className="text-[1.15rem] font-normal text-[#4A5568] max-w-[680px] mx-auto mb-8 leading-relaxed">
            Perimeter Controls Stop Intrusions. Session-Level Governance Stops Operational Disruption.
          </h2>

          {/* Body Paragraphs */}
          <div className="max-w-[640px] mx-auto space-y-6 mb-10">
            <p className="text-[1rem] font-normal text-[#4A5568] leading-relaxed">
              Firewalls, VPNs, and MFA protect access points. They do not govern what happens inside a session once access is granted. In water, energy, electricity, and utility environments, a single unauthorised command can trip a breaker, shut down a pump, or contaminate a water supply.
            </p>

            <p className="text-[1rem] font-normal text-[#4A5568] leading-relaxed">
              Keystrike is a privileged session monitoring platform built for OT and critical infrastructure environments. It verifies in real time that every operator command originates from a physically present, authenticated human on an authorised device — before it executes. No changes to existing infrastructure required.
            </p>
          </div>

          {/* Dark Navy Callout Block */}
          <div className="bg-[#0D1B2A] p-6 rounded-md max-w-[680px] mx-auto text-center">
            <div className="text-white font-bold text-[1.1rem] mb-2">
              91% of critical infrastructure organisations experienced OT security breaches in the past 18 months
            </div>
            <div className="text-[#94A3B8] text-[0.8rem] font-normal">
              with half resulting in service interruptions or system corruption — Chemical Processing, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Three Scenarios */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          {/* Section Eyebrow */}
          <div className="text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6 text-center">
            Where OT Security Breaks Down After Login
          </div>

          {/* Section H2 */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-12">
            Three Critical OT Attack Scenarios — and How Keystrike Stops Them
          </h2>

          {/* Cards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-10">
              <h3 className="text-xl font-bold text-[#0F1623] mb-6">
                Unauthorised Remote Commands in Water and Energy SCADA Systems
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-[#4A5568] leading-relaxed">
                  In January 2024, attackers caused a water tank overflow in Muleshoe, Texas by exploiting unverified remote sessions in a municipal SCADA system. No session-level verification existed to block the commands before they executed.
                </p>
                
                <p className="text-[#4A5568] leading-relaxed">
                  Keystrike blocks every unattested command in real time — whether the session is hijacked, the credentials are stolen, or the command originates from an automated script. Only verified physical operator input reaches OT systems.
                </p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Breach prevention at the command level, before execution</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Operational continuity maintained across water, energy, and electricity infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#4A5568] text-[0.9rem]">Full support for remote operations and hybrid control rooms</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-10">
              <h3 className="text-xl font-bold text-[#0F1623] mb-6">
                Third-Party Vendor Access as an OT Attack Vector
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-[#4A5568] leading-relaxed">
                  The Oldsmar, Florida water treatment incident demonstrated how compromised vendor credentials can give attackers direct access to operational controls — in that case, an attempt to raise sodium hydroxide to dangerous levels via a legitimate remote access tool.
                </p>
                
                <p className="text-[#4A5568] leading-relaxed">
                  Keystrike validates every vendor and contractor action before it executes. Compromised credentials cannot produce commands that pass Keystrike's physical attestation requirement.
                </p>
              </div>

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

            {/* Card 3 */}
            <div className="bg-white border border-[#DDE1E9] rounded-lg p-10">
              <h3 className="text-xl font-bold text-[#0F1623] mb-6">
                IT-to-OT Lateral Movement: Stopping Attackers Before They Cross the Air Gap
              </h3>
              
              <div className=\"space-y-4 mb-6\">
                <p className=\"text-[#4A5568] leading-relaxed\">
                  In 2023, Volt Typhoon — a Chinese state-linked threat actor — maintained persistent access to Littleton Electric Light and Water in Massachusetts for over 300 days by moving laterally from IT into OT. No session-level control existed to detect or block commands originating from the compromised IT environment.
                </p>
                
                <p className=\"text-[#4A5568] leading-relaxed\">
                  Keystrike enforces session-level isolation between IT and OT. Stolen credentials, inherited access, and compromised IT sessions cannot produce attested commands in OT systems.
                </p>
              </div>

              <ul className=\"space-y-3\">
                <li className=\"flex items-start\">
                  <div className=\"w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0\"></div>
                  <span className=\"text-[#4A5568] text-[0.9rem]\">Lateral movement from IT to OT blocked at the session level</span>
                </li>
                <li className=\"flex items-start\">
                  <div className=\"w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0\"></div>
                  <span className=\"text-[#4A5568] text-[0.9rem]\">IT/OT segmentation enforced without network re-architecture</span>
                </li>
                <li className=\"flex items-start\">
                  <div className=\"w-1.5 h-1.5 bg-[#0D3D3D] rounded-full mt-2 mr-3 flex-shrink-0\"></div>
                  <span className=\"text-[#4A5568] text-[0.9rem]\">Pumps, valves, turbines, meters, and substations protected from unverified commands</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Regulatory Compliance */}
      <section className=\"bg-white py-18\">
        <div className=\"max-w-[1100px] mx-auto px-4 text-center\">
          {/* Section Eyebrow */}
          <div className=\"text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6\">
            Regulatory Compliance
          </div>

          {/* Section H2 */}
          <h2 className=\"text-3xl md:text-4xl font-bold text-[#0F1623] mb-8\">
            Meeting NERC CIP, IEC 62443, EPA, and NIST Requirements Without Disrupting Operations
          </h2>

          {/* Body Paragraph */}\n          <div className=\"max-w-[680px] mx-auto mb-8\">\n            <p className=\"text-[#4A5568] leading-relaxed\">\n              Keystrike produces continuous, tamper-evident session records that meet the evidentiary standard required by OT security regulations. Compliance is a byproduct of governance — not additional overhead.\n            </p>\n          </div>\n\n          {/* Badge Pills */}\n          <div className=\"flex flex-wrap justify-center gap-2 mb-8\">\n            {[\n              'NERC CIP',\n              'EPA Safe Drinking Water Act', \n              'IEC 62443',\n              'ISO 27001',\n              'NIST CSF',\n              'State Energy & Water Regulations'\n            ].map((badge) => (\n              <span \n                key={badge}\n                className=\"border-[1.5px] border-solid border-[#0D3D3D] text-[#0D3D3D] text-[0.72rem] font-semibold tracking-[0.08em] px-[14px] py-[6px] rounded-[3px]\"\n              >\n                {badge}\n              </span>\n            ))}\n          </div>\n\n          {/* Second Body Paragraph */}\n          <div className=\"max-w-[680px] mx-auto\">\n            <p className=\"text-[#4A5568] leading-relaxed\">\n              Keystrike integrates with SCADA, ICS, IAM, and SIEM systems to enforce policy-driven access, log every operator action, and generate audit-ready evidence for board reporting, incident response, and regulatory review.\n            </p>\n          </div>\n        </div>\n      </section>\n\n      {/* Section 4 - Tech Stack Comparison Table */}\n      <section className=\"bg-[#F4F5F7] py-18\">\n        <div className=\"max-w-[1100px] mx-auto px-4\">\n          {/* Section Eyebrow */}\n          <div className=\"text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6 text-center\">\n            Post-Authentication Security Gap\n          </div>\n\n          {/* Section H2 */}\n          <h2 className=\"text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-12\">\n            Why Perimeter and Detection Tools Leave OT Exposed After Authentication\n          </h2>\n\n          {/* Table */}\n          <div className=\"overflow-x-auto bg-white rounded-lg shadow-sm mb-8\">\n            <table className=\"w-full\">\n              <thead>\n                <tr className=\"bg-[#0D3D3D]\">\n                  <th className=\"px-6 py-4 text-left text-white font-semibold text-[0.85rem]\">Security Tool</th>\n                  <th className=\"px-6 py-4 text-left text-white font-semibold text-[0.85rem]\">What It Protects</th>\n                  <th className=\"px-6 py-4 text-left text-white font-semibold text-[0.85rem]\">Post-Authentication Gap</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr className=\"bg-white border-b border-gray-100\">\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">Firewall / VPN</td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">Network perimeter</td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">Session activity after access is granted</td>\n                </tr>\n                <tr className=\"bg-[#F9FAFB] border-b border-gray-100\">\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">MFA</td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">Login authentication</td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">Actions inside authenticated sessions</td>\n                </tr>\n                <tr className=\"bg-white border-b border-gray-100\">\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">EDR / SIEM</td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">Endpoint threats and event correlation</td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem]\">Real-time command execution — detection happens after</td>\n                </tr>\n                <tr className=\"bg-[#0D3D3D]\">\n                  <td className=\"px-6 py-4 text-white font-semibold text-[0.9rem]\">Keystrike</td>\n                  <td className=\"px-6 py-4 text-white font-semibold text-[0.9rem]\">Every command in every privileged session</td>\n                  <td className=\"px-6 py-4 text-white font-semibold text-[0.9rem]\">None. Unauthorised commands blocked before execution.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          {/* Privacy Note */}\n          <div className=\"text-center max-w-[640px] mx-auto\">\n            <p className=\"text-[#4A5568] text-[0.9rem]\">\n              Keystrike does not record keystrokes, commands, or personally identifiable information. Session verification is cryptographic, not behavioural — no false positives, no privacy exposure.\n            </p>\n          </div>\n        </div>\n      </section>\n\n      {/* Section 5 - Incident Table */}\n      <section className=\"bg-white py-18\">\n        <div className=\"max-w-[1100px] mx-auto px-4\">\n          {/* Section Eyebrow */}\n          <div className=\"text-[0.72rem] font-semibold tracking-[0.10em] text-[#0D3D3D] uppercase mb-6 text-center\">\n            Documented OT Incidents\n          </div>\n\n          {/* Section H2 */}\n          <h2 className=\"text-3xl md:text-4xl font-bold text-[#0F1623] text-center mb-12\">\n            Real OT Attacks on Water, Energy, and Utility Infrastructure — and the Session Gap That Enabled Them\n          </h2>\n\n          {/* Incident Table */}\n          <div className=\"overflow-x-auto bg-white rounded-lg shadow-sm\">\n            <table className=\"w-full\">\n              <thead>\n                <tr className=\"bg-[#0D3D3D]\">\n                  <th className=\"px-6 py-4 text-left text-white font-semibold text-[0.85rem]\">Incident</th>\n                  <th className=\"px-6 py-4 text-left text-white font-semibold text-[0.85rem]\">The Gap</th>\n                  <th className=\"px-6 py-4 text-left text-white font-semibold text-[0.85rem]\">How Keystrike Closes It</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr className=\"bg-white border-b border-gray-100\">\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Texas Water Systems (2024) — Attackers caused a water tank overflow in Muleshoe, Texas, forcing manual SCADA shutdowns.\n                  </td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    No session-level verification existed to block unauthorised remote commands.\n                  </td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Keystrike blocks unattested remote commands before execution. The overflow and shutdown would have been prevented.\n                  </td>\n                </tr>\n                <tr className=\"bg-[#F9FAFB] border-b border-gray-100\">\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    American Water (2024) — The largest US regulated water utility suffered unauthorised network access, triggering precautionary OT shutdowns.\n                  </td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    No session-level evidence existed to confirm OT systems were unaffected, forcing precautionary operational disruption.\n                  </td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Keystrike provides verifiable session-level evidence that no unauthorised commands reached OT — reducing or eliminating the need for precautionary shutdowns.\n                  </td>\n                </tr>\n                <tr className=\"bg-white border-b border-gray-100\">\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Volt Typhoon / Littleton Electric Light & Water (2023) — Chinese state-linked actors maintained 300+ days of persistent access via lateral IT-to-OT movement.\n                  </td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Session activity inside legitimate connections was not verified at the command level, enabling long-term undetected access.\n                  </td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Keystrike's continuous session verification would have blocked unattested commands throughout, neutralising persistent access regardless of entry method.\n                  </td>\n                </tr>\n                <tr className=\"bg-[#F9FAFB]\">\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Utility Identity Compromise (2025) — 81% of water and electricity utility attacks compromise identity systems to pivot into OT networks. (Semperis)\n                  </td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Valid stolen credentials provide unrestricted OT command access with no session-level verification in place.\n                  </td>\n                  <td className=\"px-6 py-4 text-[#0F1623] text-[0.9rem] leading-relaxed\">\n                    Keystrike blocks commands from stolen credentials that cannot pass physical attestation. Operational integrity is preserved even after full identity compromise.\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </section>\n\n      {/* Section 6 - Closing CTA */}\n      <section className=\"bg-[#0D1B2A] py-20 text-center\">\n        <div className=\"max-w-[1100px] mx-auto px-4\">\n          {/* H2 */}\n          <h2 className=\"text-white font-bold text-[1.6rem] max-w-[640px] mx-auto mb-8 leading-tight\">\n            Continuous Session Governance for Water, Energy, and Utility Infrastructure\n          </h2>\n\n          {/* Body Paragraph */}\n          <div className=\"max-w-[580px] mx-auto mb-10\">\n            <p className=\"text-[#CBD5E1] text-[1rem] leading-[1.75]\">\n              Compromised credentials, hijacked sessions, and unverified vendor access are the three most common paths to OT operational disruption. Keystrike closes all three — without replacing existing infrastructure, recording operator activity, or slowing legitimate workflows.\n            </p>\n          </div>\n\n          {/* Buttons */}\n          <div className=\"flex flex-col sm:flex-row justify-center gap-4 mb-6\">\n            <button className=\"bg-white text-[#0D1B2A] font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-gray-100 transition-colors\">\n              See Keystrike in Your OT Environment\n            </button>\n            <button className=\"bg-transparent border-[1.5px] border-white text-white font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-white hover:bg-opacity-10 transition-colors\">\n              Take the Remote Access Risk Assessment\n            </button>\n          </div>\n\n          {/* Contact Line */}\n          <div className=\"text-[#64748B] text-[0.8rem] mt-6\">\n            To speak with a Keystrike engineer: connect@keystrike.com\n          </div>\n        </div>\n      </section>\n\n    </div>\n  );\n}\n