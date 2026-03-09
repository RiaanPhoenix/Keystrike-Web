import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Banking & Financial Services Cybersecurity — Keystrike',
  description: 'Keystrike blocks unauthorized commands in banking and financial services environments before execution — real-time privileged session security for payment systems, capital markets, and compliance.',
  keywords: [
    'banking cybersecurity',
    'financial services security',
    'PCI DSS compliance',
    'DORA compliance',
    'FFIEC compliance',
    'payment system security',
    'capital markets security',
    'banking fraud prevention',
    'financial institution security'
  ],
  openGraph: {
    title: 'Keystrike | Banking & Financial Services Cybersecurity',
    description: 'Protect banking and financial institutions with advanced cybersecurity. PCI DSS, DORA, and FFIEC compliance through privileged session monitoring.',
    url: '/solutions/banking',
  },
};

export default function BankingPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navigation currentPage="solutions" />
      
      {/* Section 1 - Hero */}
      <section className="bg-[#0F1623] py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#9CA3AF] uppercase mb-6">
            BANKING · FINANCIAL SERVICES · PAYMENT SYSTEMS · CAPITAL MARKETS
          </div>

          {/* H1 */}
          <h1 className="text-[36px] md:text-[56px] font-bold text-white mb-6 leading-tight">
            Protect Every Session, Not Just the Login
          </h1>

          {/* Subheading */}
          <div className="max-w-[560px] mx-auto mb-10">
            <p className="text-[18px] text-[#CBD5E1] leading-[1.6] text-left">
              Keystrike is a privileged session monitoring platform that continuously validates every remote action in real time — blocking unauthorised commands before they execute, and producing tamper-evident audit records for every session. Built for the security and compliance requirements of financial institutions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#0F1623] font-bold rounded-[5px] px-[28px] py-[14px] h-[48px] hover:bg-[#F0F0F0] transition-colors">
              See Keystrike in Your Environment
            </button>
            <button className="bg-transparent border-[1.5px] border-white text-white font-semibold rounded-[5px] px-[28px] py-[14px] h-[48px] hover:bg-white hover:bg-opacity-10 transition-colors">
              Take the Remote Access Risk Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 - Three-Pillar Challenge Banner */}
      <section className="bg-[#F4F5F7] py-[72px]">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Section heading */}
          <h2 className="text-[40px] font-bold text-[#0F1623] text-center mb-4">
            The Post-Authentication Security Gap Costs Financial Institutions Millions Every Year
          </h2>
          
          {/* Section subheading */}
          <p className="text-[18px] text-[#6B7280] text-center mb-12">
            MFA, IAM, and EDR protect the login. They don't govern what happens inside the session.
          </p>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-4">
                <svg className="w-7 h-7 text-[#1B3FC4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <path d="M14 2v6h6"/>
                  <path d="M16 13H8"/>
                  <path d="M16 17H8"/>
                  <path d="M10 9H8"/>
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Regulatory Compliance
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-6">
                PCI DSS, FFIEC, NYDFS, and DORA require demonstrable controls over privileged access — not just access logs. Keystrike provides continuous, session-level evidence that enforcement was active throughout every session.
              </p>
              <ul className="text-[13px] text-[#374151] space-y-2 leading-[1.8] mt-auto">
                <li>• Continuous monitoring requirements</li>
                <li>• Audit trail obligations</li>
                <li>• Real-time reporting demands</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-4">
                <svg className="w-7 h-7 text-[#1B3FC4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Fraud Prevention
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-6">
                Credential stuffing, account takeover, and session hijacking bypass MFA entirely. Keystrike blocks unauthorised commands before they execute — protecting payment rails and customer data in real time.
              </p>
              <ul className="text-[13px] text-[#374151] space-y-2 leading-[1.8] mt-auto">
                <li>• Credential stuffing attacks</li>
                <li>• Account takeover attempts</li>
                <li>• Insider fraud detection</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-4">
                <svg className="w-7 h-7 text-[#1B3FC4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Third-Party Access
              </h3>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-6">
                Vendors, partners, and remote employees require privileged access to operate. Keystrike governs every third-party session without disrupting workflows or requiring additional authentication steps.
              </p>
              <ul className="text-[13px] text-[#374151] space-y-2 leading-[1.8] mt-auto">
                <li>• Vendor access management</li>
                <li>• Remote work security</li>
                <li>• Cross-border operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Statistics Bar */}
      <section className="bg-[#1B3FC4] py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-row items-center justify-evenly">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center" style={{ width: '33.33%' }}>
              <div className="text-[40px] font-bold text-white mb-2">86%</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[200px]">of real-world attacks unfold inside legitimate remote sessions (Palo Alto Unit 42, 2025)</div>
            </div>

            {/* Divider 1 */}
            <div className="w-px h-12 bg-white bg-opacity-20"></div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center" style={{ width: '33.33%' }}>
              <div className="text-[40px] font-bold text-white mb-2">$3B+</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[200px]">in push payment fraud losses projected annually in the U.S. by 2028</div>
            </div>

            {/* Divider 2 */}
            <div className="w-px h-12 bg-white bg-opacity-20"></div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center" style={{ width: '33.33%' }}>
              <div className="text-[40px] font-bold text-white mb-2">$37M</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[200px]">average annual cost of payment system downtime — FFIEC and OCC priority</div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4 - Scenario Cards */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            WHERE EXISTING CONTROLS FALL SHORT
          </div>

          {/* Section H2 */}
          <h2 className="text-[40px] font-bold text-[#0F1623] text-left mb-12 max-w-[640px] mx-auto">
            Three Attack Paths That Bypass Your Existing Financial Security Stack
          </h2>

          {/* Three scenario cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-[#E5E7EB] border-t-[3px] border-t-[#1B3FC4] rounded-lg p-8">
              <h3 className="text-[20px] font-bold text-[#0F1623] mb-4">
                Payment Rail Hijacking
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4">
                Attackers no longer need to break into banking systems — they operate inside legitimate remote sessions. Pass-the-hash attacks and Kerberos delegation abuse allow adversaries to hijack SWIFT and ACH payment sessions using valid credentials, injecting fraudulent transactions after authentication has already succeeded. MFA confirms the login. It does not verify what happens to the session once access is granted.
              </p>
              
              <div className="mt-5 mb-4">
                <div className="h-px bg-[#E5E7EB] mb-4"></div>
                <p className="text-[14px] font-bold text-[#0D3D3D]">
                  Keystrike closes this gap by continuously validating that every command inside the session originates from verified physical input on an approved device — blocking injected activity before funds move.
                </p>
              </div>

              {/* Incident callout */}
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[14px] text-[#4B5563]">
                  Incident: A ransomware attack on an Indian payment processor exploited RDP sessions to compromise a partner system, blocking 300 rural banks from accessing funds. Keystrike blocks RDP input from unconfigured workstations and alerts administrators in real time — regardless of credential validity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E5E7EB] border-t-[3px] border-t-[#1B3FC4] rounded-lg p-8">
              <h3 className="text-[20px] font-bold text-[#0F1623] mb-4">
                Credential Theft and Data Exfiltration
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4">
                Attackers harvest remote access tokens to enter sensitive systems as legitimate users — accessing customer PII, internal data, and downstream infrastructure without triggering anomaly alerts. Because the session appears authorised, detection tools have no signal to act on.
              </p>
              
              <div className="mt-5 mb-4">
                <div className="h-px bg-[#E5E7EB] mb-4"></div>
                <p className="text-[14px] font-bold text-[#0D3D3D]">
                  Keystrike closes this gap by requiring that every command be cryptographically attested to physical keystrokes and mouse clicks on an approved workstation. Stolen credentials alone cannot generate valid attestation — lateral movement is blocked at the command level.
                </p>
              </div>

              {/* Incident callout */}
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[14px] text-[#4B5563]">
                  Incident: In the Santander breach affecting an estimated 30 million customers, attackers used stolen login credentials to remotely access a data warehouse and move laterally across systems. With Keystrike, stolen credentials cannot be reused remotely without physical access to an authorised workstation.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E5E7EB] border-t-[3px] border-t-[#1B3FC4] rounded-lg p-8">
              <h3 className="text-[20px] font-bold text-[#0F1623] mb-4">
                Social Engineering and Persistent Session Abuse
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4">
                After gaining an initial foothold through social engineering, attackers blend into legitimate session activity — masquerading as the target user, using native tools, and maintaining persistent access for days or weeks. These attacks are cheap to mount and specifically designed to evade behavioural detection models.
              </p>
              
              <div className="mt-5 mb-4">
                <div className="h-px bg-[#E5E7EB] mb-4"></div>
                <p className="text-[14px] font-bold text-[#0D3D3D]">
                  Keystrike closes this gap by introducing a definitive, binary signal: physical human input. Commands either originate from verified physical interaction on an approved device — or they do not. There is no behavioural baseline to game.
                </p>
              </div>

              {/* Incident callout */}
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[14px] text-[#4B5563]">
                  Incident: In the OCC breach (2023–2025), attackers compromised an administrator account and lurked undetected for over a year, accessing 150,000+ emails from senior staff. The breach was not discovered until February 2025. Keystrike limits attacker exposure to minutes — not months.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5 - Security Gap Comparison Table */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            POST-AUTHENTICATION SECURITY GAP
          </div>

          {/* Section H2 */}
          <h2 className="text-[40px] font-bold text-[#0F1623] text-left mb-12 max-w-[700px] mx-auto">
            Why Firewalls, MFA, and SIEM Cannot Secure Privileged Sessions in Financial Environments
          </h2>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm mb-8 max-w-[860px] mx-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F1623]">
                  <th className="px-4 py-4 text-left text-white font-semibold text-[14px]" style={{ width: '28%' }}>Security Tool</th>
                  <th className="px-4 py-4 text-left text-white font-semibold text-[14px]" style={{ width: '34%' }}>What It Protects</th>
                  <th className="px-4 py-4 text-left text-white font-semibold text-[14px]" style={{ width: '38%' }}>Post-Authentication Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-[#E5E7EB]">
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Firewalls / IAM / MFA</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Perimeter and access controls</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Session activity after access is granted</td>
                </tr>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <td className="px-4 py-4 text-[#374151] text-[14px]">SIEM — Security Information and Event Management</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Centralised alerts and compliance reporting</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Reactive — alerts after damage is done</td>
                </tr>
                <tr className="bg-white border-b border-[#E5E7EB]">
                  <td className="px-4 py-4 text-[#374151] text-[14px]">NDR — Network Detection and Response</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Network traffic anomalies and lateral movement</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Blind to encrypted or legitimate-looking session traffic</td>
                </tr>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <td className="px-4 py-4 text-[#374151] text-[14px]">EDR — Endpoint Detection and Response</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Malware detection and endpoint telemetry</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Blind to valid credential theft and session misuse</td>
                </tr>
                <tr className="bg-[#0D3D3D]">
                  <td className="px-4 py-4 text-white font-bold text-[14px]">Keystrike</td>
                  <td className="px-4 py-4 text-white font-bold text-[14px]">Every command in every privileged session</td>
                  <td className="px-4 py-4 text-white font-bold text-[14px]">None. Unauthorised commands blocked before execution.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <div className="max-w-[860px] mx-auto">
            <p className="text-[14px] text-[#6B7280] text-center">
              Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — not behavioural — eliminating false positives and privacy exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Regulatory Compliance */}
      <section className="bg-white py-20">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6">
            COMPLIANCE AND GOVERNANCE
          </div>

          {/* Section H2 */}
          <h2 className="text-[40px] font-bold text-[#0F1623] mb-8">
            Continuous Session Governance for FFIEC, PCI DSS, NYDFS, and GLBA Requirements
          </h2>

          {/* Body paragraph 1 */}
          <p className="text-[16px] text-[#374151] text-center leading-[1.6] mb-8">
            Every privileged session produces continuous, tamper-evident audit records that satisfy financial services regulatory requirements as a direct output of governance — not as a separate compliance process.
          </p>

          {/* Badge pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              'FFIEC',
              'PCI DSS',
              'NYDFS 23 NYCRR 500',
              'GLBA',
              'OCC',
              'SOC 2 Type 2'
            ].map((badge) => (
              <span 
                key={badge}
                className="bg-white border border-[#D1D5DB] text-[#0F1623] text-[13px] font-semibold px-3 py-2 rounded-lg"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Body paragraph 2 */}
          <p className="text-[16px] text-[#374151] text-center leading-[1.6]">
            Keystrike supports compliance with FFIEC, OCC, GLBA, PCI DSS, NYDFS (23 NYCRR Part 500), California DFPI/CCPA, and other banking cybersecurity mandates — through robust access controls, continuous authentication, and ongoing verification of every remote action.
          </p>
        </div>
      </section>

      {/* Section 7 - How It Works */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[900px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            ARCHITECTURE
          </div>

          {/* Section H2 */}
          <h2 className="text-[40px] font-bold text-[#0F1623] text-center mb-12">
            Deterministic Session Enforcement — Not Probabilistic Detection
          </h2>

          {/* Three steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-8">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#1B3FC4] text-white font-bold text-[16px] flex items-center justify-center rounded-full mb-4">
                1
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Workstation Agent
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6]">
                A lightweight agent on the user's device recognises legitimate physical keystrokes and mouse clicks, and submits cryptographic attestations confirming their legitimacy to the central Keystrike service.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#1B3FC4] text-white font-bold text-[16px] flex items-center justify-center rounded-full mb-4">
                2
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Server-Side Terminator
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6]">
                A second lightweight agent on the destination server withholds all input until it receives proof of legitimacy. Attested input is processed. Unattested input — from scripts, injected commands, or compromised sessions — is blocked and an alert is generated in real time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-[#1B3FC4] text-white font-bold text-[16px] flex items-center justify-center rounded-full mb-4">
                3
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Live Visibility
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6]">
                The Keystrike SEE module maps all remote protocols across your environment — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and more — surfacing which sessions are governed and where policy gaps remain.
              </p>
            </div>

          </div>

          {/* Footer note */}
          <p className="text-[14px] text-[#6B7280] text-center italic">
            Keystrike integrates with existing MFA, IAM, and SIEM infrastructure. No rip-and-replace. No workflow changes for authorised users.
          </p>
        </div>
      </section>

      {/* Section 8 - Closing CTA */}
      <section className="bg-[#0F1623] py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#9CA3AF] uppercase mb-6">
            BANKING · FINANCIAL SERVICES · PAYMENT SYSTEMS · CAPITAL MARKETS
          </div>

          {/* H2 */}
          <h2 className="text-[28px] md:text-[40px] font-bold text-white mb-8 max-w-[640px] mx-auto leading-tight">
            Close the Post-Authentication Gap Before Your Next Audit — or Incident
          </h2>

          {/* Body Paragraph */}
          <div className="max-w-[560px] mx-auto mb-10">
            <p className="text-[16px] text-[#CBD5E1] leading-[1.6]">
              Session hijacking, credential abuse, and payment rail fraud all exploit the same blind spot: the gap between access granted and access governed. Keystrike makes every privileged session in your environment visible, verifiable, and policy-controlled — without replacing your existing stack.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <button className="bg-white text-[#0F1623] font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-[#F0F0F0] transition-colors">
              See Keystrike in Your Environment
            </button>
            <button className="bg-transparent border-[1.5px] border-white text-white font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-white hover:bg-opacity-10 transition-colors">
              Take the Remote Access Risk Assessment
            </button>
          </div>

          {/* Sub-text */}
          <div className="text-[14px] text-[#9CA3AF] text-center">
            To speak with a Keystrike engineer: connect@keystrike.com
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}