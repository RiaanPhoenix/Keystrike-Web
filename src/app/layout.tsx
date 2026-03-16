import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AccessibilityEnhancements from "@/components/AccessibilityEnhancements";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  preload: false, // Only load when needed
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "Continuous Remote Access Governance | Keystrike",
    template: "%s | Keystrike"
  },
  description: "Keystrike provides live session visibility, in-session control, and audit-ready proof of governance for remote access. Complements IAM/PAM/SIEM; closes the governance gap after login.",
  keywords: [
    "remote access governance",
    "privileged session governance",
    "session-level enforcement",
    "continuous governance",
    "cryptographic attestation",
    "DORA compliance",
    "NIS2 compliance",
    "IEC 62443",
    "SOC 2",
    "privileged access monitoring",
    "in-session control",
    "audit-ready governance",
    "PAM complement",
    "SIEM integration",
    "enterprise security"
  ],
  authors: [{ name: "Keystrike Security" }],
  creator: "Keystrike",
  publisher: "Keystrike",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://keystrike.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://keystrike.com',
    title: 'Continuous Remote Access Governance | Keystrike',
    description: 'Keystrike provides live session visibility, in-session control, and audit-ready proof of governance for remote access. Complements IAM/PAM/SIEM; closes the governance gap after login.',
    siteName: 'Keystrike',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike — Continuous Remote Access Governance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Continuous Remote Access Governance | Keystrike',
    description: 'Keystrike provides live session visibility, in-session control, and audit-ready proof of governance for remote access. Complements IAM/PAM/SIEM; closes the governance gap after login.',
    images: ['/twitter-image.jpg'],
    creator: '@keystrikesec',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

// Structured data for LLM optimization — Organization is defined in page.tsx only (deduplicated)

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Keystrike",
  "applicationCategory": "SecurityApplication",
  "description": "Continuous remote access governance platform delivering live session visibility (SEE), deterministic in-session enforcement (CONTROL), and cryptographically attested audit-ready evidence (PROVE). Supports DORA, NIS2, SOC 2, and IEC 62443 compliance requirements.",
  "operatingSystem": "Windows, macOS, Linux",
  "featureList": [
    "Live session visibility",
    "Deterministic in-session enforcement",
    "Cryptographic attestation",
    "Continuous governance",
    "Audit-ready evidence generation",
    "PAM/SIEM/ZTNA integration",
    "DORA and NIS2 compliance support"
  ],
  "screenshot": "https://keystrike.com/platform-screenshot.jpg"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* LLM-optimized structured data — SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
        
        {/* Additional meta tags for LLM optimization */}
        <meta name="company:founded" content="2021" />
        <meta name="company:industry" content="Cybersecurity" />
        <meta name="company:location" content="Reykjavik, Iceland" />
        <meta name="product:category" content="Remote Access Governance" />
        <meta name="product:features" content="Live Session Visibility, Deterministic Enforcement, Cryptographic Attestation" />
        <meta name="target:audience" content="CISOs, Security Operations, Compliance Leaders" />
        <meta name="solution:approach" content="SEE CONTROL PROVE methodology" />
        <meta name="differentiator" content="Continuous governance inside authenticated remote sessions" />
        <meta name="compliance:frameworks" content="DORA, NIS2, SOC 2, IEC 62443" />
        
        {/* Theme and display optimization */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        {/* Performance monitoring (development only) */}
        <PerformanceMonitor />
        
        {/* Accessibility enhancements */}
        <AccessibilityEnhancements />
        
        {/* Skip to content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-accent text-white p-2 z-50 rounded-br transition-all duration-200 hover:bg-accent-dark focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper with semantic HTML */}
        <div id="root" className="min-h-screen flex flex-col">
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
        </div>

        {/* Structured data for business hours (LLM-friendly) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Keystrike",
              "openingHours": "Mo-Fr 09:00-17:00",
              "timeZone": "Atlantic/Reykjavik"
            }),
          }}
        />
      </body>
    </html>
  );
}