import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Remote Access Governance for Healthcare | Keystrike',
  description: 'Keystrike governs what happens after login in healthcare environments. Live visibility into every remote session, deterministic enforcement that blocks unauthorized commands before execution, and continuous audit-ready proof of control for HIPAA, HITECH, and NIST. Completes your existing IAM, PAM, and SIEM stack.',
  keywords: [
    'remote access governance healthcare',
    'session governance HIPAA',
    'post-authentication security healthcare',
    'continuous remote access governance',
    'deterministic session enforcement',
    'cryptographic attestation remote access',
    'vendor session governance healthcare',
    'third-party remote access healthcare security',
    'privileged session control healthcare',
    'continuous verification remote sessions',
    'lateral movement prevention healthcare',
    'healthcare ransomware remote access',
    'HIPAA remote access control',
    'session governance platform',
    'governance gap remote access'
  ],
  openGraph: {
    title: 'Keystrike | Remote Access Governance for Healthcare',
    description: 'Continuous remote access governance for healthcare. Live session visibility, deterministic enforcement, and audit-ready proof of control for HIPAA, HITECH, and NIST.',
    url: '/solutions/healthcare',
  },
};

const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Keystrike',
  description:
    'Continuous remote access governance platform. Provides live visibility, deterministic enforcement, and cryptographic attestation for every remote session in healthcare environments.',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Enterprise',
  url: 'https://keystrike.com/solutions/healthcare',
  offers: {
    '@type': 'Offer',
    description:
      'Remote access governance for healthcare, OT, banking, government, and data center environments',
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is Keystrike different from PAM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PAM controls who can start a privileged session and secures the vault. Keystrike governs every action inside the session once it starts. PAM and Keystrike address different layers of the access lifecycle and are complementary. Keystrike does not replace PAM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Keystrike different from SIEM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SIEM collects logs and fires alerts after events occur. Keystrike enforces policy inside live sessions — before damage occurs. SIEM is reactive. Keystrike is real-time. They complement each other: Keystrike generates high-fidelity, session-level intelligence that enriches SIEM data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Keystrike replace our existing MFA or IAM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Keystrike assumes your identity tools are doing their job. It adds the governance layer they were never designed to provide — controlling what happens inside the session after authentication succeeds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Keystrike a keylogger or surveillance tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — the platform verifies that commands originated from legitimate physical human input on an approved device. It does not store what was typed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Governance Gap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Governance Gap is the space between access intent — who you authorized to access a system — and access reality — what actually happens inside their session. IAM grants access. PAM controls session initiation. SIEM logs events after the fact. None of these tools govern what happens inside the live session. That is the Governance Gap. Keystrike closes it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does deployment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keystrike deploys in 20 minutes. It integrates with existing MFA, IAM, and SIEM infrastructure without workflow disruption to clinicians or staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'What remote protocols does Keystrike govern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keystrike governs RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, TeamViewer, NinjaOne, and other remote access protocols. It also surfaces unknown and unmanaged remote access paths as part of the SEE capability.',
      },
    },
    {
      '@type': 'Question',
      name: 'What compliance frameworks does Keystrike support for healthcare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keystrike supports compliance with HIPAA Security Rule, HITECH, HITRUST CSF, NIST 800-53, NIST 800-207 (Zero Trust Architecture), OCR Enforcement Guidance, CMS Requirements, SOC 2 Type 2, ISO 27799, and applicable state privacy laws — through continuous session governance that produces audit-ready evidence as a direct output, not a separate compliance process.',
      },
    },
  ],
};

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* JSON-LD Structured Data */}
      <Script
        id="jsonld-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Navigation currentPage="solutions" />

      {/* Section 1 - Hero */}
      <section className="bg-[#0F1623] py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-[12px] text-[#6B7280] mb-6 text-left max-w-[620px] mx-auto" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
            <span className="mx-2">›</span>
            <span className="text-[#9CA3AF]">Healthcare</span>
          </nav>

          {/* Eyebrow */}
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#9CA3AF] uppercase mb-6">
            HOSPITALS · HEALTH SYSTEMS · INSURERS · HEALTHCARE TECHNOLOGY
          </div>

          {/* H1 */}
          <h1 className="text-[36px] md:text-[56px] font-bold text-white mb-6 leading-tight">
            Govern Every Workforce Session. Protect Every Patient.
          </h1>

          {/* Subheading — Change 2: replaced "privileged session monitoring platform" */}
          <div className="max-w-[620px] mx-auto mb-8">
            <p className="text-[18px] text-[#CBD5E1] leading-[1.6] text-left">
              Keystrike is a continuous remote access governance platform. It governs what happens after access is granted — providing live visibility into every remote session, blocking unauthorised commands before they execute through deterministic enforcement, and generating continuous audit-ready proof of control. Built for healthcare environments where every remote session carries operational and patient safety risk.
            </p>
          </div>

          {/* Privacy assurance — elevated from table section */}
          <div className="max-w-[620px] mx-auto mb-10">
            <p className="text-[13px] text-[#6B7280] leading-[1.6] text-left border-l-2 border-[#374151] pl-4">
              Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — not behavioural — eliminating false positives and privacy exposure.
            </p>
          </div>

          {/* Buttons — Change 7: properly linked <a> elements */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-[#0F1623] font-semibold rounded-[5px] px-[28px] py-[14px] h-[48px] hover:bg-[#F0F0F0] transition-colors inline-flex items-center justify-center"
            >
              See Keystrike in Your Environment
            </a>
            <a
              href="/contact?type=briefing"
              className="bg-transparent border-[1.5px] border-white text-white font-semibold rounded-[5px] px-[28px] py-[14px] h-[48px] hover:bg-white hover:bg-opacity-10 transition-colors inline-flex items-center justify-center"
            >
              Request an Executive Briefing
            </a>
          </div>
        </div>
      </section>

      {/* Section 1.5 - The Governance Gap (Change 3: new section) */}
      <section className="bg-white py-16">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            THE PROBLEM
          </div>
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-8">
            The Governance Gap Healthcare Cannot Ignore
          </h2>

          {/* 70% stat callout */}
          <div className="bg-[#0F1623] rounded-lg p-6 mb-10 text-center">
            <p className="text-[48px] font-bold text-white leading-none mb-2">70%</p>
            <p className="text-[16px] text-[#CBD5E1] mb-1">of healthcare breaches involved compromised credentials</p>
            <p className="text-[12px] text-[#6B7280] mt-2">Verizon DBIR 2024, Healthcare subset</p>
          </div>

          <p className="text-[16px] text-[#374151] leading-[1.6] mb-4">
            Healthcare organisations have invested heavily in MFA, IAM, PAM, SIEM, and EDR. These tools do their jobs. MFA validates identity at login. PAM controls who can start a privileged session. SIEM collects and stores event logs.
          </p>
          <p className="text-[16px] text-[#374151] leading-[1.6] mb-4">
            But once a session begins, those tools stop governing it.
          </p>
          <p className="text-[16px] text-[#374151] leading-[1.6] mb-4">
            There is a persistent <strong>Governance Gap</strong> between access intent — who you authorised — and access reality — what actually happens inside the session. That gap is where ransomware deploys, where credentials get abused, and where lateral movement unfolds. It is where no tool in your current stack operates.
          </p>
          <p className="text-[18px] font-bold text-[#0F1623]">
            Keystrike closes that gap.
          </p>
        </div>
      </section>

      {/* Section 2 - Three-Pillar Challenge Banner */}
      <section className="bg-[#F4F5F7] py-[72px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[40px] font-bold text-[#0F1623] text-center mb-4">
            Healthcare Faces a Security Gap No Perimeter Tool Can Close
          </h2>
          <p className="text-[18px] text-[#6B7280] text-center mb-12">
            Attackers don't break in. They operate inside legitimate sessions after access is granted.
          </p>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7">
              <div className="text-[11px] font-bold text-[#1B3FC4] tracking-widest mb-3">CONTROL</div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Ransomware and Operational Shutdown
              </h3>
              <p className="text-[14px] text-[#374151] mb-4 leading-[1.6] text-left">
                A single compromised session can encrypt EHRs, pharmacy systems, billing infrastructure, and imaging simultaneously — disrupting care before any alert fires. HIPAA, HITECH, and CMS requirements demand continuous controls, not post-incident logs.
              </p>
              <ul className="text-[13px] text-[#6B7280] space-y-2 leading-[1.8]">
                <li>· EHR and clinical system protection</li>
                <li>· Blocks ransomware deployment commands inside active sessions</li>
                <li>· Operational continuity during active threats</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7">
              <div className="text-[11px] font-bold text-[#1B3FC4] tracking-widest mb-3">SEE + CONTROL</div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Third-Party and Vendor Access
              </h3>
              <p className="text-[14px] text-[#374151] mb-4 leading-[1.6] text-left">
                Healthcare organisations depend on a broad ecosystem of vendors, labs, and service providers — every external connection via VPN, RDP, or remote management tools is a potential entry point. Keystrike governs every vendor session without disrupting clinical workflows.
              </p>
              <ul className="text-[13px] text-[#6B7280] space-y-2 leading-[1.8]">
                <li>· Vendor session governance</li>
                <li>· PHI exchange verification</li>
                <li>· Blocks commands from compromised vendor sessions</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-7">
              <div className="text-[11px] font-bold text-[#1B3FC4] tracking-widest mb-3">CONTROL</div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3">
                Medical Device and Lateral Movement
              </h3>
              <p className="text-[14px] text-[#374151] mb-4 leading-[1.6] text-left">
                Attackers who compromise a workforce session can pivot into imaging, pharmacy, and infusion pump networks — even with segmentation in place. Keystrike validates every session crossing into device networks, blocking lateral movement at the command level.
              </p>
              <ul className="text-[13px] text-[#6B7280] space-y-2 leading-[1.8]">
                <li>· Device network boundary enforcement</li>
                <li>· Lateral movement containment</li>
                <li>· Patient safety continuity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Statistics Bar */}
      <section className="bg-[#1B3FC4] py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-evenly gap-6 md:gap-0">

            {/* Stat 1 */}
            <div className="flex flex-col items-center" style={{ width: '25%' }}>
              <div className="text-[40px] font-bold text-white mb-2 text-center">$872M+</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[200px] text-left">from governance failure post-authentication in the Change Healthcare breach (UnitedHealth Group SEC Filing, Congressional Testimony, 2024)</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white bg-opacity-20 self-start mt-6"></div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center" style={{ width: '25%' }}>
              <div className="text-[40px] font-bold text-white mb-2 text-center">70%</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[200px] text-left">of healthcare breaches involved compromised credentials (Verizon DBIR 2024, Healthcare subset)</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white bg-opacity-20 self-start mt-6"></div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center" style={{ width: '25%' }}>
              <div className="text-[40px] font-bold text-white mb-2 text-center">$10.93M</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[200px] text-left">the average cost of a healthcare data breach (IBM Cost of a Data Breach Report 2025)</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white bg-opacity-20 self-start mt-6"></div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center" style={{ width: '25%' }}>
              <div className="text-[40px] font-bold text-white mb-2 text-center">73%</div>
              <div className="text-[14px] text-[#BFDBFE] leading-[1.5] max-w-[200px] text-left">increase in healthcare ransomware attacks year-over-year in 2024 (HHS/HC3 Threat Brief, 2024)</div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4 - Scenario Cards */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-3 text-center">
            WHERE EXISTING CONTROLS FALL SHORT
          </div>
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-12 max-w-[700px] mx-auto">
            Three Attack Paths That Bypass MFA, IAM, and EDR in Healthcare Environments
          </h2>

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
                Keystrike closes this gap by continuously verifying that every command inside the session originates from verified physical input on an authorised device — interrupting ransomware deployment commands and blocking lateral spread before they reach clinical systems.
              </p>
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[13px] text-[#374151] text-left">
                  Incident: The 2024 Change Healthcare ransomware attack disrupted billing, pharmacy, and EHR systems across the U.S. — 74% of hospitals reported direct patient care impact and 94% experienced financial consequences. Keystrike would have stopped the impact by blocking unauthorised remote commands mid-session before systems were encrypted.
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
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[13px] text-[#374151] text-left">
                  Incident: The 2025 Yale New Haven Health breach exposed 5.56 million patient records through compromised third-party access to secondary servers. Keystrike would have stopped the impact — session-level enforcement ensures only verified human actions can execute, blocking misuse of vendor sessions regardless of credential validity.
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
              <div className="bg-[#F9FAFB] border-l-[3px] border-[#1B3FC4] p-4 rounded-[4px]">
                <p className="text-[13px] text-[#374151] text-left">
                  Incident: The 2025 Frederick Health breach exposed approximately 934,000 patient records through widespread use of stolen credentials across connected systems. Keystrike would have stopped the impact — continuous session verification prevents attackers from issuing malicious commands even when login credentials are fully compromised.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5 - Security Gap Comparison Table */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            POST-AUTHENTICATION SECURITY GAP
          </div>
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-12 max-w-[760px] mx-auto">
            Why Perimeter Controls Cannot Secure Privileged Sessions in Healthcare Environments
          </h2>

          <div className="max-w-[980px] mx-auto mb-6">
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
                    <td className="px-4 py-4 text-[#374151] text-[14px]">PAM — Privileged Access Management</td>
                    <td className="px-4 py-4 text-[#374151] text-[14px]">Who can start a session / vault access</td>
                    <td className="px-4 py-4 text-[#374151] text-[14px]">Activity inside the session once it starts</td>
                  </tr>
                  <tr className="bg-white border-b border-[#E5E7EB]">
                    <td className="px-4 py-4 text-[#374151] text-[14px]">SIEM — Security Information and Event Management</td>
                    <td className="px-4 py-4 text-[#374151] text-[14px]">Centralised alerts and compliance reporting</td>
                    <td className="px-4 py-4 text-[#374151] text-[14px]">Reactive — alerts after damage is done</td>
                  </tr>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                    <td className="px-4 py-4 text-[#374151] text-[14px]">NDR — Network Detection and Response</td>
                    <td className="px-4 py-4 text-[#374151] text-[14px]">Network traffic anomalies and lateral movement</td>
                    <td className="px-4 py-4 text-[#374151] text-[14px]">Blind to encrypted or legitimate-looking session traffic</td>
                  </tr>
                  <tr className="bg-white border-b border-[#E5E7EB]">
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

          {/* Stack completion callout */}
          <div className="max-w-[980px] mx-auto mb-4">
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 text-center">
              <p className="text-[15px] font-semibold text-[#0F1623]">
                Keystrike does not replace any of these tools. It completes them — governing the session layer that no other control reaches.
              </p>
            </div>
          </div>

          <div className="max-w-[980px] mx-auto">
            <p className="text-[14px] text-[#6B7280] text-left">
              Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — not behavioural — eliminating false positives and privacy exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5.5 - SEE / CONTROL / PROVE (Change 4: new section) */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            THE KEYSTRIKE PLATFORM
          </div>
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-4">
            Three Capabilities. One Governance Layer.
          </h2>
          <p className="text-[18px] text-[#6B7280] text-center mb-12 max-w-[640px] mx-auto">
            Every remote session is visible, enforceable, and provable — from login to logout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-[#F4F5F7] rounded-lg p-8 border-t-4 border-[#1B3FC4]">
              <div className="text-[12px] font-bold text-[#1B3FC4] tracking-widest mb-3">SEE</div>
              <h3 className="text-[22px] font-bold text-[#0F1623] mb-4">Live Visibility</h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4">
                A live map of every remote session across RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, TeamViewer, NinjaOne, and more — including unknown connections and unmanaged pathways that no other tool surfaces.
              </p>
              <p className="text-[13px] font-semibold text-[#374151] italic">
                One map replaces raw, noisy logs with live intelligence.
              </p>
            </div>

            <div className="bg-[#F4F5F7] rounded-lg p-8 border-t-4 border-[#1B3FC4]">
              <div className="text-[12px] font-bold text-[#1B3FC4] tracking-widest mb-3">CONTROL</div>
              <h3 className="text-[22px] font-bold text-[#0F1623] mb-4">Deterministic Enforcement</h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4">
                Every command inside every session must be tied to verified physical human input via cryptographic attestation. Commands without attestation are blocked before execution. No behavioural scoring. No false positives.
              </p>
              <p className="text-[13px] font-semibold text-[#374151] italic">
                We move you from assuming your policies work to knowing they do.
              </p>
            </div>

            <div className="bg-[#F4F5F7] rounded-lg p-8 border-t-4 border-[#1B3FC4]">
              <div className="text-[12px] font-bold text-[#1B3FC4] tracking-widest mb-3">PROVE</div>
              <h3 className="text-[22px] font-bold text-[#0F1623] mb-4">Audit-Ready Governance</h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] mb-4">
                Continuous, tamper-evident evidence of every governed session. HIPAA, HITECH, HITRUST, and NIST audit requirements satisfied as a direct output of governance — not assembled after the fact.
              </p>
              <p className="text-[13px] font-semibold text-[#374151] italic">
                We eliminate the Audit Fire Drill.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5.6 - Gatekeeper / Historian / Governor (Change 5: new section) */}
      <section className="bg-[#F4F5F7] py-16">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            HOW KEYSTRIKE FITS YOUR STACK
          </div>
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-8">
            Keystrike Completes Your Stack. It Does Not Replace It.
          </h2>
          <div className="space-y-4 mb-8">

            <div className="bg-white rounded-lg p-6 border border-[#E5E7EB]">
              <div className="flex items-start gap-4">
                <div className="text-[11px] font-bold text-[#6B7280] tracking-widest w-28 shrink-0 pt-1 uppercase">IAM / PAM</div>
                <div>
                  <p className="text-[15px] font-bold text-[#0F1623] mb-1">Okta, CyberArk, BeyondTrust</p>
                  <p className="text-[14px] text-[#374151]">Defines who can access which systems and controls session initiation. Once the session starts, their visibility ends.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-[#E5E7EB]">
              <div className="flex items-start gap-4">
                <div className="text-[11px] font-bold text-[#6B7280] tracking-widest w-28 shrink-0 pt-1 uppercase">SIEM / SOAR / XDR</div>
                <div>
                  <p className="text-[15px] font-bold text-[#0F1623] mb-1">Splunk, Microsoft Sentinel, CrowdStrike</p>
                  <p className="text-[14px] text-[#374151]">Stores event records and fires alerts when patterns match threat signatures. Reactive — by the time detection fires, the damage is already done.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F1623] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-[11px] font-bold text-white tracking-widest w-28 shrink-0 pt-1 uppercase">Keystrike</div>
                <div>
                  <p className="text-[15px] font-bold text-white mb-1">Continuous Remote Access Governance</p>
                  <p className="text-[14px] text-white leading-[1.7]">Governs every action inside the session — in real time, from login to logout. Closes the Governance Gap that IAM, PAM, and SIEM were never designed to cover. Does not replace any of them.</p>
                </div>
              </div>
            </div>

          </div>
          <blockquote className="text-[20px] font-semibold text-[#0F1623] border-l-4 border-[#1B3FC4] pl-5 leading-[1.7]">
            You don't need to replace your multi-million dollar stack. Keystrike is the essential final piece that makes your Okta, your CyberArk, and your Splunk work together to deliver Continuous Remote Access Governance.
          </blockquote>
        </div>
      </section>

      {/* Section 6 - Regulatory Compliance — Change 11: updated heading and framing */}
      <section className="bg-white py-20">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6">
            COMPLIANCE AND GOVERNANCE
          </div>
          <h2 className="text-[34px] font-bold text-[#0F1623] mb-6">
            Continuous Remote Access Governance That Satisfies HIPAA, HITECH, HITRUST, and NIST Requirements
          </h2>
          <div className="max-w-[720px] mx-auto mb-6">
            <p className="text-[16px] text-[#374151] text-left leading-[1.6]">
              Every privileged session produces continuous, tamper-evident audit records that satisfy healthcare regulatory requirements as a direct output of governance — not as a separate compliance process.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
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
          <div className="max-w-[720px] mx-auto mb-6">
            <p className="text-[16px] text-[#374151] text-left leading-[1.6]">
              Keystrike supports compliance with HIPAA Security and Privacy Rules, HITECH, NIST Cybersecurity Framework (800-53) and Zero Trust Architecture (800-207), OCR Enforcement Guidance, CMS Requirements, HITRUST CSF, ISO 27799, and applicable state privacy laws — through continuous authentication, policy-driven access controls, and auditable session records for every remote workforce interaction.
            </p>
          </div>
          <div className="bg-[#F4F5F7] rounded-lg p-5 text-left">
            <p className="text-[14px] text-[#374151] leading-[1.6]">
              <strong>Keystrike is a governance platform.</strong> With governance working as designed, compliance evidence is produced continuously, not assembled under audit pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - How It Works */}
      <section className="bg-[#F4F5F7] py-20">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            HOW KEYSTRIKE WORKS
          </div>
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-12">
            Deterministic Session Enforcement — Not Probabilistic Detection
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-6 mb-8 items-stretch">

            {/* Step 1 */}
            <div className="flex flex-col items-center bg-white border border-[#E5E7EB] rounded-lg p-6 flex-1">
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
            <div className="flex flex-col items-center bg-white border border-[#E5E7EB] rounded-lg p-6 flex-1">
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
            <div className="flex flex-col items-center bg-white border border-[#E5E7EB] rounded-lg p-6 flex-1">
              <div className="w-8 h-8 bg-[#1B3FC4] text-white font-bold text-[16px] flex items-center justify-center rounded-full mb-4">
                3
              </div>
              <h3 className="text-[18px] font-bold text-[#0F1623] mb-3 text-center">
                Live Session Map
              </h3>
              <p className="text-[14px] text-[#374151] leading-[1.6] text-left">
                The Keystrike SEE module maps all remote protocols across your environment — RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, and more — surfacing which sessions are governed and where policy gaps remain.
              </p>
            </div>

          </div>

          <p className="text-[16px] text-[#374151] text-center">
            Keystrike completes your existing IAM, PAM, and SIEM stack. No rip-and-replace. Deploys in 20 minutes. <strong>Clinicians and staff experience no workflow changes.</strong>
          </p>
        </div>
      </section>

      {/* Section 7.5 - FAQ (Change 6: new section) */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#6B7280] uppercase mb-6 text-center">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-[34px] font-bold text-[#0F1623] text-center mb-12">
            Questions Buyers Ask Before Implementing Keystrike
          </h2>

          <div className="space-y-4">

            {[
              {
                q: 'How is Keystrike different from PAM?',
                a: 'PAM controls who can start a privileged session and secures the vault. Keystrike governs every action inside the session once it starts. They address different layers of the access lifecycle and are complementary — PAM secures the vault, Keystrike secures the session. Keystrike does not replace PAM.',
              },
              {
                q: 'How is Keystrike different from SIEM?',
                a: 'SIEM collects logs and fires alerts after events occur. Keystrike enforces policy inside live sessions — before damage occurs. SIEM is reactive. Keystrike is real-time. They complement each other: Keystrike generates high-fidelity, session-level intelligence that enriches SIEM data.',
              },
              {
                q: 'Does Keystrike replace our existing MFA or IAM?',
                a: 'No. Keystrike assumes your identity tools are doing their job. It adds the governance layer they were never designed to provide — controlling what happens inside the session after authentication succeeds.',
              },
              {
                q: 'Is Keystrike a keylogger or surveillance tool?',
                a: 'No. Keystrike does not record keystrokes, credentials, or personally identifiable information. Session verification is cryptographic — the platform verifies that commands originated from legitimate physical human input on an approved device. It does not store what was typed.',
              },
              {
                q: 'What is the Governance Gap?',
                a: 'The Governance Gap is the space between access intent — who you authorized to access a system — and access reality — what actually happens inside their session. IAM grants access. PAM controls session initiation. SIEM logs events after the fact. None of these tools govern what happens inside the live session. That is the Governance Gap. Keystrike closes it.',
              },
              {
                q: 'How long does deployment take?',
                a: 'Keystrike deploys in 20 minutes. It integrates with existing MFA, IAM, and SIEM infrastructure without workflow disruption to clinicians or staff.',
              },
              {
                q: 'What remote protocols does Keystrike govern?',
                a: 'Keystrike governs RDP, SSH, PowerShell Remoting, WinRM, WMI, SMB, TeamViewer, NinjaOne, and other remote access protocols. It also surfaces unknown and unmanaged remote access paths as part of the SEE capability.',
              },
              {
                q: 'What compliance frameworks does Keystrike support for healthcare?',
                a: 'Keystrike supports compliance with HIPAA Security Rule, HITECH, HITRUST CSF, NIST 800-53, NIST 800-207, OCR Enforcement Guidance, CMS Requirements, SOC 2 Type 2, ISO 27799, and applicable state privacy laws — through continuous session governance that produces audit-ready evidence as a direct output, not a separate compliance process.',
              },
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

          <div className="mt-10 text-center">
            <p className="text-[14px] text-[#6B7280] mb-4">More questions? See the full <a href="/faq" className="text-[#1B3FC4] hover:underline">FAQ</a> or explore the <a href="/platform" className="text-[#1B3FC4] hover:underline">Keystrike platform</a>.</p>
          </div>
        </div>
      </section>

      {/* Section 8 - Closing CTA — Changes 7, 8 */}
      <section className="bg-[#0F1623] py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-[11px] font-normal tracking-[0.10em] text-[#9CA3AF] uppercase mb-6">
            HOSPITALS · HEALTH SYSTEMS · INSURERS · HEALTHCARE TECHNOLOGY
          </div>

          {/* Change 8: updated heading */}
          <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-8 max-w-[680px] mx-auto leading-tight">
            Close the Governance Gap Before the Next Incident Reaches Clinical Operations
          </h2>

          <div className="max-w-[560px] mx-auto mb-10">
            <p className="text-[16px] text-[#CBD5E1] leading-[1.6] text-left">
              Ransomware, vendor compromise, and credential abuse all exploit the same blind spot: the gap between who you authorised and what actually happens inside their session. Keystrike makes every remote session in your healthcare environment visible, verifiable, and governed — without replacing your existing stack or disrupting clinical operations.
            </p>
          </div>

          {/* Change 7: properly linked <a> elements, three-tier CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 flex-wrap">
            <a
              href="/contact"
              className="bg-white text-[#0F1623] font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-[#F0F0F0] transition-colors inline-flex items-center justify-center"
            >
              See Keystrike in Your Environment
            </a>
            <a
              href="/contact?type=briefing"
              className="bg-transparent border-[1.5px] border-white text-white font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-white hover:bg-opacity-10 transition-colors inline-flex items-center justify-center"
            >
              Request an Executive Briefing
            </a>
            <a
              href="/contact?type=assessment"
              className="bg-transparent border-[1.5px] border-[#6B7280] text-[#9CA3AF] font-semibold rounded-[5px] px-[28px] py-[14px] hover:bg-white hover:bg-opacity-5 transition-colors inline-flex items-center justify-center"
            >
              Take the Remote Access Risk Assessment
            </a>
          </div>

          <div className="text-[14px] text-[#9CA3AF] text-center">
            To speak with a Keystrike engineer: <a href="mailto:connect@keystrike.com" className="text-[#CBD5E1] hover:text-white transition-colors">connect@keystrike.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
