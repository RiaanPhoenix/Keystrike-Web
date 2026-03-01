import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Security Solution | Multi-Cloud Protection',
  description: 'Comprehensive cloud security across AWS, Azure, and GCP. Physical input verification for cloud access, CSPM, cloud workload protection, and compliance automation.',
  keywords: [
    'cloud security',
    'multi-cloud protection',
    'cloud security posture management',
    'CSPM',
    'cloud workload protection',
    'AWS security',
    'Azure security',
    'GCP security',
    'cloud compliance',
    'physical input verification'
  ],
  openGraph: {
    title: 'Keystrike Cloud Security | Multi-Cloud Protection Platform',
    description: 'Unified cloud security platform with physical input verification. Protect AWS, Azure, GCP workloads with continuous compliance and threat detection.',
    url: '/solutions/cloud',
    images: [
      {
        url: '/og-cloud.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Cloud Security Solution',
      },
    ],
  },
  alternates: {
    canonical: '/solutions/cloud',
  },
};

export default function CloudSecurity() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-lg text-sm font-medium">
                  SECURE • SCALE • SIMPLIFY
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Cloud Security{" "}
                <span className="text-accent">Reimagined</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Native protection for cloud environments with continuous governance. Physical input verification 
                ensures that cloud access is granted to verified users, not just authenticated identities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn btn-primary text-lg px-8 py-3">
                  Request Demo
                </button>
                <button className="btn btn-secondary text-lg px-8 py-3">
                  Cloud Assessment
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-text-muted">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Multi-cloud ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>API-driven deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Zero downtime</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-secondary rounded-lg p-8 border border-border">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Multi-Cloud Dashboard</h3>
                <p className="text-text-secondary mb-6">Unified security posture across AWS, Azure, and GCP environments</p>
                <div className="bg-surface rounded-lg p-6 border border-border">
                  <div className="grid grid-cols-3 gap-4 text-xs mb-4">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">AWS</span>
                      </div>
                      <div className="text-green-600 font-bold">✓ Secure</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">AZ</span>
                      </div>
                      <div className="text-green-600 font-bold">✓ Secure</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">GCP</span>
                      </div>
                      <div className="text-yellow-600 font-bold">⚠ Review</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-text-primary font-semibold mb-1">Security Score: 94/100</div>
                    <div className="text-text-muted text-xs">Last updated: 2 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              The Cloud Security Dilemma
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Cloud adoption accelerates business innovation but creates new security challenges. 
              Traditional security models weren't designed for the dynamic, distributed nature of cloud environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Shared Responsibility Confusion</h3>
              <p className="text-text-secondary text-sm">
                Unclear boundaries between cloud provider and customer security responsibilities 
                leave critical gaps in protection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Multi-Cloud Complexity</h3>
              <p className="text-text-secondary text-sm">
                Each cloud provider has different security tools, APIs, and configurations, 
                making unified governance nearly impossible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Dynamic Infrastructure</h3>
              <p className="text-text-secondary text-sm">
                Auto-scaling, containers, and serverless functions create ephemeral resources 
                that traditional security tools can't monitor effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keystrike's Approach */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Cloud-Native Security Platform
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Keystrike provides continuous governance across hybrid and multi-cloud environments. 
              Our platform adapts to your cloud architecture while maintaining consistent security policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cloud Visibility */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">SEE</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Unified Cloud Visibility</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Multi-cloud asset discovery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Container & serverless monitoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>API access patterns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Configuration drift detection</span>
                </li>
              </ul>
            </div>

            {/* Policy Enforcement */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">CONTROL</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Automated Policy Control</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Infrastructure as Code (IaC) scanning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Policy-as-code enforcement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Automated remediation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Compliance guardrails</span>
                </li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">PROVE</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Continuous Compliance</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>SOC 2 / ISO 27001 reporting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>PCI DSS / HIPAA compliance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Immutable audit logs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Regulatory dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platform Support */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Native Multi-Cloud Support
            </h2>
            <p className="text-xl text-text-secondary">
              Comprehensive coverage across all major cloud platforms and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AWS */}
            <div className="card p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">AWS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Amazon Web Services</h3>
                  <p className="text-text-secondary text-sm">Complete AWS ecosystem integration</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">EC2, ECS, EKS monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Lambda serverless protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">IAM role and policy analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">S3 bucket security governance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">CloudFormation template scanning</span>
                </div>
              </div>
            </div>

            {/* Azure */}
            <div className="card p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">Azure</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Microsoft Azure</h3>
                  <p className="text-text-secondary text-sm">Native Azure security integration</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Virtual Machines & App Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Azure Functions monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Azure AD integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Azure Storage security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">ARM template validation</span>
                </div>
              </div>
            </div>

            {/* GCP */}
            <div className="card p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">GCP</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Google Cloud Platform</h3>
                  <p className="text-text-secondary text-sm">Google Cloud security optimization</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Compute Engine & GKE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Cloud Functions protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Identity & Access Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Cloud Storage governance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-text-secondary text-sm">Deployment Manager scanning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Container & Kubernetes Security */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Container & Kubernetes Security
            </h2>
            <p className="text-xl text-text-secondary">
              Comprehensive protection for containerized applications and orchestration platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Cloud-Native Protection</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Container Runtime Security</h4>
                    <p className="text-text-secondary text-sm">Real-time monitoring of container behavior and anomaly detection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Kubernetes Policy Engine</h4>
                    <p className="text-text-secondary text-sm">Automated policy enforcement for pods, services, and network policies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Supply Chain Security</h4>
                    <p className="text-text-secondary text-sm">Image vulnerability scanning and software bill of materials (SBOM) tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Service Mesh Integration</h4>
                    <p className="text-text-secondary text-sm">Native support for Istio, Linkerd, and other service mesh technologies</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-secondary rounded-lg p-8 border border-border">
              <h4 className="text-xl font-bold text-text-primary mb-6 text-center">Kubernetes Security Dashboard</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-text-primary text-sm font-medium">production-cluster</span>
                  </div>
                  <span className="text-green-600 text-sm font-bold">Secure</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    <span className="text-text-primary text-sm font-medium">staging-cluster</span>
                  </div>
                  <span className="text-yellow-600 text-sm font-bold">Review</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-text-primary text-sm font-medium">dev-cluster</span>
                  </div>
                  <span className="text-green-600 text-sm font-bold">Secure</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary mb-1">247</div>
                  <div className="text-text-secondary text-sm">Pods Protected</div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4 text-center text-xs">
                  <div>
                    <div className="font-bold text-green-600">186</div>
                    <div className="text-text-muted">Compliant</div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-600">45</div>
                    <div className="text-text-muted">Warnings</div>
                  </div>
                  <div>
                    <div className="font-bold text-red-600">16</div>
                    <div className="text-text-muted">Critical</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Cloud Security ROI
            </h2>
            <p className="text-xl text-text-secondary">
              Measurable business impact from comprehensive cloud security governance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">91%</div>
              <div className="text-text-secondary text-sm">Faster cloud incident response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">78%</div>
              <div className="text-text-secondary text-sm">Reduction in configuration drift</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$4.8M</div>
              <div className="text-text-secondary text-sm">Prevented cloud breaches annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">62%</div>
              <div className="text-text-secondary text-sm">Compliance audit time reduction</div>
            </div>
          </div>
          
          <div className="card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Enterprise Cloud Transformation</h3>
              <div className="max-w-4xl mx-auto">
                <div className="bg-surface-muted p-6 rounded-lg italic text-text-secondary mb-6">
                  "Keystrike gave us confidence to accelerate our cloud migration. The continuous governance 
                  across all three cloud providers means we can innovate faster while maintaining our 
                  security posture. The physical input verification caught unauthorized API access that 
                  would have gone unnoticed with traditional cloud monitoring."
                </div>
                <div className="text-center">
                  <div className="font-bold text-text-primary">Sarah Johnson</div>
                  <div className="text-text-muted text-sm">VP of Cloud Engineering, TechCorp</div>
                  <div className="text-text-muted text-sm">25,000 employees • $5.2B revenue • Multi-cloud</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-bold text-text-primary mb-2">Challenge</h4>
                <p className="text-text-secondary text-sm">
                  Rapid cloud adoption across AWS, Azure, and GCP with inconsistent security policies 
                  and compliance gaps
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-text-primary mb-2">Solution</h4>
                <p className="text-text-secondary text-sm">
                  Implemented unified Keystrike governance across all cloud environments with 
                  automated policy enforcement
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-text-primary mb-2">Results</h4>
                <p className="text-text-secondary text-sm">
                  85% faster deployments, $6.2M in avoided compliance penalties, 
                  99.9% security policy compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience continuous governance across all your cloud environments. 
            Keystrike makes multi-cloud security simple, scalable, and secure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Cloud Security Assessment
            </button>
          </div>
          <div className="text-blue-100 text-sm">
            <p>30-day free trial • Multi-cloud deployment • Expert migration support</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}