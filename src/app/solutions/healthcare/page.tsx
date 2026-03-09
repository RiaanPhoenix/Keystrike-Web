import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Cybersecurity | HIPAA Compliance Solutions',
  description: 'Advanced cybersecurity solutions for healthcare organizations. HIPAA compliance, patient data protection, and medical device security with physical input verification.',
  keywords: [
    'healthcare cybersecurity',
    'HIPAA compliance',
    'patient data protection',
    'medical device security',
    'healthcare data breach prevention',
    'physical input verification',
    'medical record security',
    'healthcare IT security',
    'PHI protection'
  ],
  openGraph: {
    title: 'Keystrike | Healthcare Cybersecurity Solutions',
    description: 'Protect healthcare organizations with advanced cybersecurity. HIPAA compliance and patient data protection through physical input verification.',
    url: '/solutions/healthcare',
  },
};

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Navigation currentPage="solutions" />
      
      {/* Section 1 - Hero */}
      <section className="bg-[#0F1623] py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#9CA3AF] uppercase mb-6">
            HOSPITALS · HEALTH SYSTEMS · INSURERS · HEALTHCARE TECHNOLOGY
          </div>

          {/* H1 */}
          <h1 className="text-[36px] md:text-[56px] font-bold text-white mb-6 leading-tight">
            Govern Every Workforce Session. Protect Every Patient.
          </h1>

          {/* Subheading */}
          <div className="max-w-[620px] mx-auto mb-10">
            <p className="text-[18px] text-[#CBD5E1] leading-[1.6] text-left">
              Keystrike is a privileged session monitoring platform that continuously validates every remote action in real time — blocking unauthorised commands before they execute, and producing tamper-evident audit records for every session. Built for the operational and compliance demands of healthcare providers and insurers.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#0F1623] font-semibold rounded-[5px] px-[28px] py-[14px] h-[48px] hover:bg-[#F0F0F0] transition-colors">
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
            Healthcare Faces a Security Gap No Perimeter Tool Can Close
          </h2>
          
          {/* Section subheading */}
          <p className="text-[18px] text-[#6B7280] text-center mb-12">
            Attackers don't break in. They operate inside legitimate sessions after access is granted.
          </p>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7">
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Ransomware and Operational Shutdown
              </h3>
              <p className="text-[14px] text-[#374151] mb-4 leading-[1.6] text-left">
                A single compromised session can encrypt EHRs, pharmacy systems, billing infrastructure, and imaging simultaneously — disrupting care before any alert fires. HIPAA, HITECH, and CMS requirements demand continuous controls, not post-incident logs.
              </p>
              <ul className="text-[13px] text-[#6B7280] space-y-2 leading-[1.8]">
                <li>· EHR and clinical system protection</li>
                <li>· Ransomware deployment prevention</li>
                <li>· Operational continuity during active threats</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7">
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Third-Party and Vendor Access
              </h3>
              <p className="text-[14px] text-[#374151] mb-4 leading-[1.6] text-left">
                72% of healthcare data breaches originate from third-party vendors. Every external connection via VPN, RDP, or remote management tools is a potential entry point. Keystrike governs every vendor session without disrupting clinical workflows.
              </p>
              <ul className="text-[13px] text-[#6B7280] space-y-2 leading-[1.8]">
                <li>· Vendor session governance</li>
                <li>· PHI exchange verification</li>
                <li>· Supply chain attack prevention</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7">
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Medical Device and Lateral Movement
              </h3>
              <p className="text-[14px] text-[#374151] mb-4 leading-[1.6] text-left">
                Attackers who compromise a workforce session can pivot into imaging, pharmacy, and infusion pump networks — even with segmentation in place. Keystrike validates every session crossing into device networks, blocking lateral movement at the command level.
              </p>
              <ul className="text-[13px] text-[#6B7280] space-y-2 leading-[1.8]">
                <li>· Device network boundary enforcement</li>
                <li>· Lateral movement prevention</li>
                <li>· Patient safety continuity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Statistics Bar */}
      <section className="bg-[#1B3FC4] py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-row items-start justify-evenly">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center" style={{ width: '33.33%' }}>
              <div className="text-[40px] font-bold text-white mb-2 text-center">72%</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[260px] text-left">of healthcare data breaches originate from third-party vendors (Censinet)</div>
            </div>

            {/* Divider 1 */}
            <div className="w-px h-12 bg-white bg-opacity-20 self-start mt-6"></div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center" style={{ width: '33.33%' }}>
              <div className="text-[40px] font-bold text-white mb-2 text-center">74%</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[260px] text-left">of hospitals reported direct patient care disruption from the Change Healthcare ransomware attack (2024)</div>
            </div>

            {/* Divider 2 */}
            <div className="w-px h-12 bg-white bg-opacity-20 self-start mt-6"></div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center" style={{ width: '33.33%' }}>
              <div className="text-[40px] font-bold text-white mb-2 text-center">5.56M</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[260px] text-left">patient records exposed in the Yale New Haven Health breach through compromised vendor access (2025)</div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4 - Scenario Cards */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-3 text-center">
            WHERE EXISTING CONTROLS FALL SHORT
          </div>

          {/* Section H2 */}
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-12 max-w-[700px] mx-auto">
            Three Attack Paths That Bypass MFA, IAM, and EDR in Healthcare Environments
          </h2>

          {/* Three scenario cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-8">
              <h3 className="text-[20px] font-bold text-[#0F1623] mb-4">
                Ransomware Deployed Through Legitimate Sessions
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4 text-left">
                Modern ransomware attacks don't breach the perimeter — they unfold inside authenticated sessions. Once inside, attackers encrypt EHRs, pharmacy dispensers, billing systems, and imaging platforms simultaneously. By the time detection tools fire, critical clinical operations are already offline.
              </p>
              
              <p className="text-[14px] font-bold text-[#0D3D3D] mt-4 mb-4 text-left">
                Keystrike closes this gap by continuously validating that every command inside the session originates from verified physical input on an approved device — blocking ransomware deployment and lateral spread before it reaches clinical systems.
              </p>

              {/* Incident callout */}
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[13px] text-[#374151] text-left">
                  Incident: The 2024 Change Healthcare ransomware attack disrupted billing, pharmacy, and EHR systems across the U.S. — 74% of hospitals reported direct patient care impact and 94% experienced financial consequences. Keystrike blocks unauthorised remote commands mid-session, preventing deployment and lateral spread before systems are encrypted.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-8">
              <h3 className="text-[20px] font-bold text-[#0F1623] mb-4">
                Third-Party Vendor Compromise and PHI Exfiltration
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4 text-left">
                Healthcare organisations depend on external vendors, labs, transcription services, and claims processors that connect via VPN, RDP, SSH, and remote management tools. Weak credentials, outdated endpoints, or inherited sessions create direct pathways to protected health information and internal infrastructure.
              </p>
              
              <p className="text-[14px] font-bold text-[#0D3D3D] mt-4 mb-4 text-left">
                Keystrike closes this gap by requiring every remote action to be tied to verified physical input from an authorised device — preventing attackers from using stolen credentials, inherited sessions, or compromised vendor access to reach PHI.
              </p>

              {/* Incident callout */}
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[13px] text-[#374151] text-left">
                  Incident: The 2025 Yale New Haven Health breach exposed 5.56 million patient records through compromised third-party access to secondary servers. With Keystrike, session-level enforcement ensures only verified human actions can execute — blocking misuse of vendor sessions regardless of credential validity.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-8">
              <h3 className="text-[20px] font-bold text-[#0F1623] mb-4">
                Lateral Movement into Medical Device Networks
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4 text-left">
                MRI machines, infusion pumps, pharmacy dispensers, and imaging systems often run legacy operating systems and remain connected to clinical networks. Attackers who compromise a single workforce session can pivot into these device networks — even through segmented environments — putting patient safety at direct risk.
              </p>
              
              <p className="text-[14px] font-bold text-[#0D3D3D] mt-4 mb-4 text-left">
                Keystrike closes this gap by validating every workforce session crossing network segment boundaries, blocking credential replay, RDP hijacks, and inherited sessions before lateral movement can reach connected medical devices.
              </p>

              {/* Incident callout */}
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[13px] text-[#374151] text-left">
                  Incident: The 2025 Frederick Health breach exposed approximately 934,000 patient records through widespread use of stolen credentials across connected systems. Keystrike's continuous session validation prevents attackers from issuing malicious commands even when login credentials are fully compromised.
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
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-12 max-w-[760px] mx-auto">
            Why Perimeter Controls Cannot Secure Privileged Sessions in Healthcare Environments
          </h2>

          {/* Table */}
          <div className="max-w-[980px] mx-auto mb-8">
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
              <table className="w-full">
              <thead>
                <tr className="bg-[#0F1623]">
                  <th className="px-4 py-4 text-left text-white font-semibold text-[14px]">Security Tool</th>
                  <th className="px-4 py-4 text-left text-white font-semibold text-[14px]">What It Protects</th>
                  <th className="px-4 py-4 text-left text-white font-semibold text-[14px]">Post-Authentication Gap</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-[#E5E7EB]">
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Firewalls / IDS/IPS / MFA</td>
                  <td className="px-4 py-4 text-[#374151] text-[14px]">Perimeter and identity at login</td>
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
          </div>

          {/* Disclaimer */}
          <div className="max-w-[980px] mx-auto">
            <p className="text-[14px] text-[#6B7280] text-left">
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
          <h2 className="text-[34px] font-bold text-[#0F1623] mb-8">
            Continuous Session Governance for HIPAA, HITECH, HITRUST, and NIST Requirements
          </h2>

          {/* Body paragraph 1 */}
          <div className="max-w-[720px] mx-auto mb-8">
            <p className="text-[16px] text-[#374151] text-left leading-[1.6]">
              Every privileged session produces continuous, tamper-evident audit records that satisfy healthcare regulatory requirements as a direct output of governance — not as a separate compliance process.
            </p>
          </div>

          {/* Badge pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              'HIPAA Security Rule',
              'HITECH / HICP',
              'HITRUST CSF',
              'NIST 800-53',
              'NIST 800-207',
              'OCR Guidance',
              'SOC 2 Type 2'
            ].map((badge) => (
              <span 
                key={badge}
                className="bg-white border border-[#D1D5DB] text-[#0F1623] text-[13px] font-semibold px-[9px] py-2 rounded-lg"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Body paragraph 2 */}
          <div className="max-w-[720px] mx-auto">
            <p className="text-[16px] text-[#374151] text-left leading-[1.6]">
              Keystrike supports compliance with HIPAA Security and Privacy Rules, HITECH, NIST Cybersecurity Framework (800-53) and Zero Trust Architecture (800-207), OCR Enforcement Guidance, CMS Requirements, HITRUST CSF, ISO 27799, and applicable state privacy laws — through continuous authentication, policy-driven access controls, and auditable session records for every remote workforce interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - How It Works */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[900px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            HOW KEYSTRIKE WORKS
          </div>

          {/* Section H2 */}
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-12">
            Deterministic Session Enforcement — Not Probabilistic Detection
          </h2>

          {/* Three steps */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-6 mb-8 items-stretch">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-white border border-[#E5E7EB] rounded-lg p-6 flex-1 h-full">
              <div className="w-8 h-8 bg-[#1B3FC4] text-white font-bold text-[16px] flex items-center justify-center rounded-full mb-4">
                1
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3 text-center">
                Workstation Agent
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] text-left">
                A lightweight agent on the user's device recognises legitimate physical keystrokes and mouse clicks, and submits cryptographic attestations confirming their legitimacy to the central Keystrike service.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-white border border-[#E5E7EB] rounded-lg p-6 flex-1 h-full">
              <div className="w-8 h-8 bg-[#1B3FC4] text-white font-bold text-[16px] flex items-center justify-center rounded-full mb-4">
                2
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3 text-center">
                Server-Side Terminator
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] text-left">
                A second lightweight agent on the destination server withholds all input until it receives proof of legitimacy. Attested input is processed. Unattested input — from scripts, injected commands, or compromised sessions — is blocked and an alert is generated in real time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-white border border-[#E5E7EB] rounded-lg p-6 flex-1 h-full">
              <div className="w-8 h-8 bg-[#1B3FC4] text-white font-bold text-[16px] flex items-center justify-center rounded-full mb-4">
                3
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3 text-center">
                Live Visibility
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] text-left">
                The Keystrike SEE module maps all remote protocols across your environment — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and more — surfacing which sessions are governed and where policy gaps remain.
              </p>
            </div>

          </div>

          {/* Footer note */}
          <p className="text-[14px] text-[#6B7280] text-center italic">
            Keystrike integrates with existing MFA, IAM, and SIEM infrastructure. No rip-and-replace. Clinicians and staff experience no workflow changes.
          </p>
        </div>
      </section>

      {/* Section 8 - Closing CTA */}
      <section className="bg-[#0F1623] py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#9CA3AF] uppercase mb-6">
            HOSPITALS · HEALTH SYSTEMS · INSURERS · HEALTHCARE TECHNOLOGY
          </div>

          {/* H2 */}
          <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-8 max-w-[640px] mx-auto leading-tight">
            Stop the Next Breach Before It Reaches the ICU
          </h2>

          {/* Body Paragraph */}
          <div className="max-w-[560px] mx-auto mb-10">
            <p className="text-[16px] text-[#CBD5E1] leading-[1.6] text-left">
              Ransomware, vendor compromise, and credential abuse all exploit the same blind spot: the gap between access granted and access governed. Keystrike makes every privileged session in your environment visible, verifiable, and policy-controlled — without replacing your existing stack or disrupting clinical operations.
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