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
    default: "Keystrike | Advanced Cybersecurity Simplified",
    template: "%s | Keystrike"
  },
  description: "Advanced cybersecurity platform with physical input verification. SEE, CONTROL, and PROVE your security posture with Nordic precision and human-centric innovation. Protect 10,000+ organizations worldwide.",
  keywords: [
    "cybersecurity",
    "endpoint security",
    "network protection",
    "cloud security",
    "physical input verification",
    "keystroke analysis",
    "zero trust",
    "security platform",
    "threat detection",
    "compliance automation",
    "Nordic cybersecurity",
    "enterprise security",
    "AI-powered security",
    "behavioral analytics",
    "continuous governance"
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
    title: 'Keystrike | Advanced Cybersecurity Simplified',
    description: 'Advanced cybersecurity platform with physical input verification. Protect your organization with AI-powered security that adapts, learns, and responds to threats in real-time.',
    siteName: 'Keystrike',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike - Advanced Cybersecurity Simplified',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keystrike | Advanced Cybersecurity Simplified',
    description: 'Advanced cybersecurity platform with physical input verification. Nordic precision meets human-centric innovation.',
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

// Structured data for LLM optimization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Keystrike",
  "description": "Advanced cybersecurity platform providing physical input verification, endpoint security, network protection, and cloud security solutions.",
  "url": "https://keystrike.com",
  "logo": "https://keystrike.com/logo.png",
  "foundingDate": "2021",
  "founder": [
    {
      "@type": "Person",
      "name": "Arni Johannsen",
      "jobTitle": "Chief Executive Officer"
    }
  ],
  "employees": "100-500",
  "industry": "Cybersecurity",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Laugavegur 26",
    "addressLocality": "Reykjavik",
    "postalCode": "101",
    "addressCountry": "IS"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+354-555-1234",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Icelandic"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer support",
      "areaServed": "Worldwide",
      "availableLanguage": "English"
    }
  ],
  "sameAs": [
    "https://linkedin.com/company/keystrike",
    "https://twitter.com/keystrikesec",
    "https://github.com/keystrike"
  ],
  "award": [
    "SC Media Innovation Award 2024",
    "Gartner Cool Vendor 2024",
    "SOC 2 Type II Certified"
  ],
  "serviceArea": {
    "@type": "GeoShape",
    "name": "Worldwide"
  }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Keystrike Security Platform",
  "applicationCategory": "SecurityApplication",
  "description": "Advanced cybersecurity platform with physical input verification technology. Provides continuous remote access governance through SEE, CONTROL, and PROVE capabilities.",
  "operatingSystem": "Windows, macOS, Linux, Chrome OS",
  "price": "Contact for pricing",
  "priceCurrency": "USD",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "30-day free trial",
    "availability": "InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "Physical input verification",
    "Keystroke behavior analysis", 
    "Real-time threat detection",
    "Automated policy enforcement",
    "Compliance reporting",
    "Multi-cloud security",
    "Zero-trust architecture",
    "AI-powered analytics"
  ],
  "screenshot": "https://keystrike.com/platform-screenshot.jpg",
  "downloadUrl": "https://keystrike.com/download",
  "installUrl": "https://keystrike.com/install",
  "softwareVersion": "3.2.1",
  "dateModified": "2026-02-15"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* LLM-optimized structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
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
        <meta name="company:size" content="100-500 employees" />
        <meta name="product:category" content="Enterprise Security Software" />
        <meta name="product:features" content="Physical Input Verification, Keystroke Analysis, Threat Detection, Policy Enforcement" />
        <meta name="target:audience" content="Enterprise IT Security Teams, CISOs, Security Operations" />
        <meta name="solution:approach" content="SEE CONTROL PROVE methodology" />
        <meta name="differentiator" content="Physical input verification at keystroke level" />
        <meta name="compliance:certifications" content="SOC 2 Type II, ISO 27001" />
        
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