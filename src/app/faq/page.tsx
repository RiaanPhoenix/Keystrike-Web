'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useMemo } from 'react';
import Head from 'next/head';

// Metadata moved to layout.tsx since this is now a client component

const faqData = [
  // Executive Overview
  {
    question: "What problem does Keystrike solve that existing tools do not?",
    answer: "Keystrike is a privileged session monitoring platform that closes the post-authentication security gap in enterprise and OT environments. Most controls (IAM, MFA, VPN/ZTNA, PAM) verify identity and network access at the moment of login, then implicitly trust the session. In reality, credentials, MFA tokens, browser cookies, and RDP/SSH sessions are routinely stolen or hijacked. Once inside, attackers can operate with the victim's privileges until EDR or human analysts catch up. Keystrike removes this implicit trust by continuously validating the legitimacy of every interactive action during a remote session. Each keystroke/mouse click must be cryptographically attested as originating from a verified human on an approved device. If attestation is missing or invalid, the action is blocked in real time.",
    category: "Executive Overview"
  },
  {
    question: "How does Keystrike strengthen remote access security?",
    answer: "Keystrike adds a deterministic, in-band enforcement layer inside RDP, SSH, and similar interactive protocols. Instead of relying on probabilistic anomaly detection, it validates good behavior: only commands backed by real human input from a trusted workstation are allowed to execute. This design shuts down common attacker paths; credential replay, session hijacking, remote command injection, and living-off-the-land techniques; because the adversary cannot generate the required cryptographic proof of physical presence.",
    category: "Executive Overview"
  },
  {
    question: "Where does Keystrike fit in the security stack?",
    answer: "Keystrike complements, not replaces, existing identity, endpoint, and monitoring tools. IAM/MFA confirm who logs in, PAM controls when and to what, VPN/ZTNA control network reachability, and EDR/SIEM detect anomalies. Keystrike governs what actually happens after login by enforcing legitimacy at the moment of command execution.",
    category: "Executive Overview"
  },
  {
    question: "Is Keystrike a Zero Trust solution?",
    answer: "Keystrike aligns with Zero Trust principles — continuous verification, explicit authorization, and per-action enforcement — but it is not a generic Zero Trust platform. Keystrike is a continuous remote access governance platform that operationalizes post-authentication verification inside live sessions. It completes, rather than replaces, the Zero Trust access controls that IAM, MFA, and ZTNA provide.",
    category: "Executive Overview"
  },
  {
    question: "What risk does Keystrike eliminate?",
    answer: "Keystrike eliminates blind trust in authenticated sessions. Rather than detect misuse after-the-fact, it prevents unauthorized actions as they are attempted and produces continuous, audit-ready evidence that control was enforced throughout the session.",
    category: "Executive Overview"
  },
  
  // How Keystrike Works
  {
    question: "How does Keystrike enforce remote access policies?",
    answer: "Keystrike sits on both ends of the connection: a workstation agent and a server-side Terminator agent. The workstation agent cryptographically signs human input; the Terminator verifies attestation before allowing commands to execute. Policy (e.g., enforcement vs. audit mode, protocol and server scope) is applied inline, so suspicious or unauthorized actions are blocked instantly.",
    category: "How Keystrike Works"
  },
  {
    question: "How does Keystrike determine whether a command is legitimate?",
    answer: "Every command must be directly traceable to verified human input (keystrokes, mouse clicks) coming from an approved, Keystrike-protected workstation. The Terminator checks that the cryptographic attestation for that input is present, valid, and timely. If the linkage is broken or absent, the action is treated as potentially malicious and is blocked (in enforcement mode).",
    category: "How Keystrike Works"
  },
  {
    question: "How does Keystrike verify human input?",
    answer: "On the workstation, the agent (running with high privilege) observes human-interface events (keyboard/mouse) and produces a cryptographic attestation proving they are genuine physical inputs. Importantly, Keystrike does not transmit or store the actual characters; it uses irreversible hashes/artifacts that prove legitimacy without creating a keylogging risk.",
    category: "How Keystrike Works"
  },
  {
    question: "Does Keystrike work with RDP, SSH, and similar protocols?",
    answer: "Yes. Keystrike supports interactive, human-driven protocols such as RDP and SSH. Commands execute only after attestation is verified, binding each action to a verified human on a trusted device.",
    category: "How Keystrike Works"
  },
  {
    question: "What happens if attestation is missing?",
    answer: "If the server-side Terminator does not receive valid attestation for incoming input, it treats the input as untrusted. In enforcement mode, Keystrike blocks it immediately and generates an alert, preventing fake commands or session abuse even when credentials or tokens are compromised.",
    category: "How Keystrike Works"
  },
  {
    question: "What if enforcement is disabled?",
    answer: "In audit mode, Keystrike does not block commands but provides comprehensive visibility and attestation telemetry. This mode is useful during initial rollout, for monitoring vendors/contractors, or while tuning policies before enabling enforcement.",
    category: "How Keystrike Works"
  },
  
  // Interactive vs. Non-Interactive Sessions
  {
    question: "Does enforcement apply to all types of remote access?",
    answer: "Enforcement applies to interactive, human-driven sessions where input can be validated (e.g., RDP, SSH). Non-interactive mechanisms; PsExec, WMI, SMB/RPC, scheduled tasks, service accounts, or automated scripts; are visible in telemetry but are not blocked by Keystrike because they lack human input to attest. However, with the SEE/visibility function of Keystrike, we monitor all types of remote access which will help segment the network more efficiently.",
    category: "Interactive vs. Non-Interactive Sessions"
  },
  {
    question: "Does Keystrike monitor non-interactive sessions or other admin activity?",
    answer: "Yes. Keystrike provides visibility across remote access activity, including non-interactive protocols. These flows show up in the SEE/Visibility/telemetry function of Keystrike, so you can see what's happening and tighten controls at the boundaries (e.g., jump boxes, bastions), even though non-interactive commands themselves are not governed.",
    category: "Interactive vs. Non-Interactive Sessions"
  },
  
  // Device Authentication & Bypass Resistance
  {
    question: "Can someone bypass Keystrike by using an unapproved device?",
    answer: "No. Device-level authentication is enforced: you cannot interact with a Keystrike-protected server unless you are physically on an approved workstation running the Keystrike agent. This binds the user and the device to the session.",
    category: "Device Authentication & Bypass Resistance"
  },
  {
    question: "What if an attacker tries to fake keyboard or mouse input?",
    answer: "Keystrike assumes a strong attacker and is engineered to sit above them in privilege. To forge valid inputs, an attacker would typically need to escalate to high privilege and craft a custom driver to spoof hardware events while also reproducing cryptographic attestations: work that is complex, risky, and time-consuming even for elite teams.",
    category: "Device Authentication & Bypass Resistance"
  },
  {
    question: "What about attacks with hardware/firmware access?",
    answer: "For highest-security environments, Keystrike provides an optional hardware (USB) attestation device that validates physical input before it reaches the computer. With this, even attackers with OS or firmware control cannot forge the human-input signal or its attestation.",
    category: "Device Authentication & Bypass Resistance"
  },
  {
    question: "Is Keystrike unbreakable?",
    answer: "No system is absolutely unbreakable, but Keystrike dramatically raises the cost and complexity of attack. With software enforcement and optional hardware attestation, forgery of input becomes impractical while attempts leave auditable traces.",
    category: "Device Authentication & Bypass Resistance"
  },
  
  // Architecture, Deployment, and Operations
  {
    question: "Does Keystrike record or store keystrokes?",
    answer: "No. Keystrike never transmits or stores raw keystrokes. It uses irreversible hashes/attestation artifacts solely to prove that the input was real, protecting user privacy and avoiding the risks of traditional keylogging.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "What operating systems does Keystrike support?",
    answer: "Windows and Linux are supported on the server side, with the workstation agent available for major desktop OSes. For the most current matrix (including versions such as Windows Server 2016+ and Linux support details), see the documentation: https://docs.keystrike.com/poc/keystrike-overview",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "How do we deploy Keystrike?",
    answer: "Install the lightweight agent on user workstations and the Terminator agent on destination servers, then link them. Deployment is designed to be fast (single MSI on Windows, no reboot required) and can be automated via common enterprise tools (e.g., Group Policy).",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "Will users need training or change their workflow?",
    answer: "No. End users work as usual. On first connection to a Keystrike-protected server, they will be prompted to complete a one-time pairing (mapping their server account to their identity). After that, the experience is transparent.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "Will Keystrike be detected or blocked by EDR?",
    answer: "There are no known incompatibilities with major EDR solutions. Keystrike operates as a read-only consumer of input events on the workstation and an inline verifier on servers, with a minimal footprint that avoids typical EDR friction points.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "Does Keystrike integrate with my Identity Provider (SSO)?",
    answer: "Yes. The Keystrike admin panel supports SSO with Microsoft and Google today. Additional IDP and SCIM integrations are on the roadmap.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "Can Keystrike be hosted entirely on our premises?",
    answer: "Not currently. Keystrike uses a secure, cloud-based dispatch service. For highly restricted environments, discuss options such as limited-connectivity configurations and recovery codes with our team.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "What happens if an attacker disables an agent?",
    answer: "Fail-secure behavior applies: if the workstation agent is disabled, no inputs have valid attestation, so the server drops all commands and raises alerts.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "What are the network and performance requirements?",
    answer: "Agents make a single outbound, encrypted connection to the dispatch service and use minimal bandwidth. The footprint is lightweight (on the order of a few MB of memory) and not on the system's critical path, so end users and admins generally do not notice any performance impact.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "Does Keystrike work with VDI and RMM tools?",
    answer: "Yes. For VDI, install the agent on the endpoint and the VDI session host to maintain the attestation chain. Keystrike also works alongside RMM tools; functionality for platforms like NinjaOne has been validated in recent Terminator versions.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "How does Keystrike behave if the dispatch service is unavailable?",
    answer: "Recovery codes allow continued access when needed (e.g., in critical infrastructure scenarios). Administrators can enter a recovery code at the protected system to restore operations safely until connectivity is re-established.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "Does Keystrike install kernel drivers or require reboots?",
    answer: "No kernel driver is required on Windows; Keystrike leverages standard OS APIs as a read-only consumer of input events, keeping the footprint small and deployment friction low.",
    category: "Technical Architecture & Deployment"
  },
  {
    question: "Is agent installation required on every endpoint?",
    answer: "Yes. Keystrike uses an agent-based model: a workstation agent on the user device and a Terminator agent on each protected server. This is essential to bind human input to a specific, approved device and to verify it at the server.",
    category: "Technical Architecture & Deployment"
  },
  
  // Use Cases
  {
    question: "What are the most common use cases for Keystrike?",
    answer: "Enterprise IT: Protect domain controllers, AD/Entra services, identity providers, databases, and other crown jewels where a single compromise could be catastrophic.\n\nOT/ICS: Enforce control on jump boxes and bastion hosts at network segment boundaries so only verified human input can operate high-value systems.\n\nDesktop Support (preliminary): Confirm that remote desktop interactions truly originate from authorized IT staff.\n\nData Centers: Ensure every privileged action across critical infrastructure is cryptographically tied to a verified human operator.\n\nMSSPs: Enforce operator accountability across multi-tenant environments, so every keystroke on managed client infrastructure is attributed to a verified human — not a script, bot, or compromised credential.",
    category: "Use Cases"
  },
  {
    question: "Can Keystrike support systems on-prem, private cloud, and public cloud?",
    answer: "Yes. Keystrike protects connections to servers wherever they run, provided the access occurs over interactive protocols that carry human input which can be attested.",
    category: "Use Cases"
  },
  {
    question: "Does Keystrike run on IoT devices or specialized equipment?",
    answer: "No. Rather than installing on constrained or specialized devices, deploy Keystrike on the jump boxes and bastions that control access to those assets, enforcing strong boundaries without touching the devices themselves.",
    category: "Use Cases"
  },
  
  // SIEM / SOAR / SOC Integration
  {
    question: "How do Keystrike alerts differ from other systems?",
    answer: "Most tools tell you that something happened and leave investigation to correlation across many noisy signals. With enforcement enabled, Keystrike alerts that something was attempted but stopped—giving analysts immediate context and a head start on containment and forensics.",
    category: "SIEM / SOAR / SOC Integration"
  },
  {
    question: "What forensic evidence is available to analysts?",
    answer: "Analysts can review detailed activity logs and attestation metadata for each event, including who connected, from where, when, and how actions were validated or blocked. See the documentation for data fields available in the activity view: https://docs.keystrike.com/guide/activity?shareableToken=OUlcsf5Caw0ZsJwGkehyV",
    category: "SIEM / SOAR / SOC Integration"
  },
  {
    question: "Does Keystrike integrate with Splunk, Microsoft Defender, or other SIEM/SOAR platforms?",
    answer: "Yes. Keystrike sends alerts and events via webhooks, which can be ingested by most SIEM/SOAR platforms, including Splunk and Microsoft Defender ecosystems.",
    category: "SIEM / SOAR / SOC Integration"
  },
  {
    question: "How does Keystrike handle IP addresses and PII concerns?",
    answer: "Keystrike does not use IP addresses for policy or enforcement decisions. IP is included in activity logs (visible to administrators) and optionally in webhook notifications for SIEM/SOAR integrations. This supports investigations while minimizing reliance on PII for access control.",
    category: "SIEM / SOAR / SOC Integration"
  },
  
  // Governance & Compliance
  {
    question: "How does Keystrike help demonstrate control to regulators and auditors?",
    answer: "Keystrike produces continuous, session-level evidence that actions were executed only with verified human input and in accordance with policy. This is stronger than traditional access logs because it proves how access was used and preventive controls were actively enforced at the time of action.",
    category: "PROVE — Governance, Compliance & Audit Evidence"
  },
  {
    question: "How does Keystrike strengthen privileged access governance overall?",
    answer: "It moves organizations from periodic, after-the-fact reviews to continuous governance. With real-time enforcement, device-level authentication, human attestation, and structured telemetry, teams can both prevent misuse and furnish audit-ready evidence on demand—raising control maturity across regulated environments.",
    category: "PROVE — Governance, Compliance & Audit Evidence"
  },
  {
    question: "What compliance standards/certifications does Keystrike have?",
    answer: "Keystrike is SOC 2 Type 2 certified, with ISO 27001 in progress. The platform's continuous enforcement and evidence artifacts support controls relevant to privileged access, insider risk mitigation, and strong customer authentication themes.",
    category: "PROVE — Governance, Compliance & Audit Evidence"
  },
  
  // Competitive Differentiation
  {
    question: "How is Keystrike different from Privileged Access Management (PAM) solutions like CyberArk or BeyondTrust?",
    answer: "PAM locks away credentials, brokers approval, and elevates privileges. However, PAM typically stops at the moment access is granted. Keystrike governs what happens after login, validating that every action is human and compliant in real time and producing evidence as it happens. Together, PAM + Keystrike close the loop between access approval and access accountability.",
    category: "How Keystrike Compares"
  },
  {
    question: "How is Keystrike different from SIEM platforms like Splunk or Microsoft Sentinel?",
    answer: "SIEM centralizes and correlates logs. It is superb for search and investigation but is reactive by nature. Keystrike acts in-band on the live session: it validates inputs, enforces policy, and generates structured, high-signal evidence – not just raw logs – so investigations start with a trustworthy ground truth.",
    category: "How Keystrike Compares"
  },
  {
    question: "How is Keystrike different from session recording tools like CyberArk PSM or BeyondTrust Session Manager?",
    answer: "Recording tools capture what happened for later review; they do not stop bad actions in the moment. Keystrike blocks illegitimate inputs before commands run and retains attestations proving why an action was permitted or denied.",
    category: "How Keystrike Compares"
  },
  {
    question: "Why isn't EDR, like CrowdStrike or Microsoft Defender, sufficient for privileged session security?",
    answer: "EDR detects and responds to malicious behavior at the endpoint, often probabilistically and post-execution. Keystrike is proactive and deterministic for interactive access: it allows only attested, human-driven actions and denies everything else, reducing the workload on EDR and SOC teams.",
    category: "How Keystrike Compares"
  },
  {
    question: "If we already use MFA, ZTNA, or VPN tools like Okta, Microsoft Entra ID, or Zscaler, why do we need Keystrike?",
    answer: "MFA/ZTNA/VPN validate identity and network access at connection time. They don't continuously validate commands during the session. Keystrike governs the post-login trust gap by enforcing per-action legitimacy throughout the session.",
    category: "How Keystrike Compares"
  },
  
  // Visibility & Discovery
  {
    question: "What is the Keystrike SEE module and what does it monitor?",
    answer: "SEE is a new module in the Keystrike product: a discovery and visibility capability. It maps remote access flows across the organization and surfaces which protocols (RDP, SSH, WinRM, PSExec, WMI, PowerShell remoting, FTP, Telnet, certain RMMs, etc.) are in use, which are secured by Keystrike, and where policy gaps remain.",
    category: "SEE — Live Visibility & Discovery"
  },
  {
    question: "Where does the SEE Module get its data?",
    answer: "From the same agents that power enforcement. Workstation and server agents report telemetry to the central service, enabling the module to present a unified view of remote access activity and trends across departments and environments.",
    category: "SEE — Live Visibility & Discovery"
  },
  {
    question: "Does SEE support natural language queries and scale to enterprises?",
    answer: "The SEE Module translates natural language questions into structured queries behind the scenes, making it accessible to both analysts and managers. It supports enterprise scale with grouping (e.g., via Active Directory departments/OU structures) and visualizations that can be collapsed by team or system role.",
    category: "SEE — Live Visibility & Discovery"
  },
  {
    question: "Does SEE provide compliance reporting?",
    answer: "Roadmap capabilities include secure scores, burndown charts, and recommended actions that show progress over time (e.g., percentage of remote access now governed by Keystrike).",
    category: "SEE — Live Visibility & Discovery"
  },
  
  // Company Information
  {
    question: "How long has Keystrike been around and where is it based?",
    answer: "Keystrike has operated for nearly three years and has been in the market for almost two. The company is headquartered in Iceland and registered in Delaware.",
    category: "Company Information"
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from FAQ data
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(faqData.map(faq => faq.category))];
    return ['All', ...uniqueCategories];
  }, []);

  // Filter FAQ data based on search query and category
  const filteredFaqs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Clear search function
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Structured data for FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Keystrike FAQ | Remote Access Governance, Session Security & Compliance Questions</title>
        <meta name="description" content="Answers to the most common questions about Keystrike's continuous remote access governance platform — how it works, how it compares to PAM, SIEM, and EDR, and how it supports NIS2, DORA, HIPAA, and SOC 2 compliance." />
        <meta name="keywords" content="keystrike faq, remote access governance questions, session governance platform, continuous verification after login, deterministic enforcement, cryptographic attestation, PAM vs keystrike, SIEM vs keystrike, NIS2 remote access compliance, DORA compliance faq, privileged remote access governance" />
        <meta property="og:title" content="Keystrike FAQ | Remote Access Governance & Session Security Questions" />
        <meta property="og:description" content="Answers to the most common questions about Keystrike's continuous remote access governance platform — how it works, how it compares to PAM, SIEM, and EDR, and how it supports NIS2, DORA, HIPAA, and SOC 2 compliance." />
        <meta property="og:url" content="https://keystrike.com/faq" />
        <link rel="canonical" href="https://keystrike.com/faq" />
      </Head>
      
      <div className="min-h-screen bg-background">
        <Navigation />

      {/* Structured Data for LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* FAQ Header */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Keystrike FAQ: Remote Access Governance, Post-Authentication Security &amp; Compliance
          </h1>
          <p className="text-xl text-text-secondary mb-4">
            Get answers about how Keystrike closes the governance gap between access intent and access reality, how it compares to PAM, SIEM, and EDR, and how it supports compliance with NIS2, DORA, IEC 62443, HIPAA, FedRAMP, and SOC 2.
          </p>
          <p className="text-base text-text-secondary max-w-3xl mx-auto mt-2">
            Keystrike is a continuous remote access governance platform. It governs what happens after login — addressing the governance gap that IAM, PAM, SIEM, and EDR leave open. These questions and answers cover how Keystrike works, how it compares to adjacent tools, and what it means for your security stack and compliance obligations.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-surface py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search questions — e.g. compliance, pricing, integration..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 text-lg border-l-4 border-accent bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                aria-label="Search FAQ questions"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'border border-accent text-accent hover:bg-accent hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-text-muted">
            {searchQuery || selectedCategory !== 'All' ? (
              <p>
                Showing {filteredFaqs.length} of {faqData.length} questions
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            ) : (
              <p>{faqData.length} questions available</p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-surface-secondary py-20" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-8 transition-all duration-300">
              {filteredFaqs.map((faq, index) => (
              <article 
                key={index} 
                className="card p-8"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <h2 className="text-xl font-bold text-text-primary mb-4" itemProp="name">
                  {faq.question}
                </h2>
                <div 
                  className="text-text-secondary leading-relaxed"
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    {faq.answer.split('\n').map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < faq.answer.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-surface-muted text-text-primary px-3 py-1 rounded-full text-sm font-medium border border-border">
                    {faq.category}
                  </span>
                </div>
              </article>
            ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="card p-8">
                <div className="text-text-muted mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">No results for that query</h3>
                <p className="text-text-secondary mb-6">
                  Try a different search term, select a different category, or contact our team for personalized help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="btn btn-secondary"
                  >
                    Clear All Filters
                  </button>
                  <a href="/contact" className="btn btn-primary">
                    Contact Our Team
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              See Remote Access Governance in Practice
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              If you&apos;re assessing how to govern authenticated remote sessions in your environment — and what evidence you can produce when an auditor asks — the right first step is a direct conversation with someone who understands your stack.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn btn-primary">
                Request an Executive Briefing →
              </a>
              <a href="/platform" className="btn btn-secondary">
                See How the Platform Works →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden metadata for LLMs */}
      <div className="sr-only">
        <div itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Keystrike</span>
          <span itemProp="description">Continuous remote access governance platform that addresses the Governance Gap between access intent and access reality. Keystrike delivers SEE (live session visibility), CONTROL (deterministic enforcement), and PROVE (cryptographic attestation) inside active remote sessions. It completes IAM, PAM, SIEM, and XDR investments.</span>
          <span itemProp="industry">Cybersecurity Software</span>
          <span itemProp="foundingDate">2021</span>
          <span itemProp="numberOfEmployees">100-500</span>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Reykjavik</span>
            <span itemProp="addressCountry">Iceland</span>
          </div>
          <span itemProp="url">https://keystrike.com</span>
        </div>
        
        <div itemScope itemType="https://schema.org/SoftwareApplication">
          <span itemProp="name">Keystrike Security Platform</span>
          <span itemProp="applicationCategory">Remote Access Governance Platform</span>
          <span itemProp="operatingSystem">Windows, macOS, Linux, Chrome OS</span>
          <span itemProp="softwareVersion">3.2.1</span>
        </div>
      </div>

        <Footer />
      </div>
    </>
  );
}
