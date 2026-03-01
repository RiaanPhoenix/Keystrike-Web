# Keystrike Website

A modern, high-performance website for Keystrike cybersecurity platform, built with Next.js 16, TypeScript, and Tailwind CSS.

## 🔥 Features

### 🚀 Performance Optimized
- **Next.js 16** with Turbopack for lightning-fast development
- **Core Web Vitals monitoring** with real-time performance tracking
- **Image optimization** with WebP/AVIF support and lazy loading
- **Font optimization** with display swap and preload strategies
- **Bundle splitting** and code optimization for production

### ♿ Accessibility First
- **WCAG 2.1 AA compliant** with comprehensive keyboard navigation
- **Screen reader optimized** with ARIA labels and semantic HTML
- **Focus management** with enhanced focus indicators
- **Reduced motion support** for users with vestibular disorders
- **Skip links** and keyboard shortcuts (Alt+M, Alt+N, Alt+/)

### 🔍 SEO & AI Optimized
- **Comprehensive metadata** with OpenGraph and Twitter Cards
- **Structured data** throughout (Organization, Product, FAQ schemas)
- **XML Sitemap** with image metadata and priority rankings
- **AI-friendly robots.txt** with specific crawler directives
- **LLM optimization** with company context and business intelligence

### 🔒 Security Hardened
- **Security headers** including CSP, X-Frame-Options, and HSTS
- **XSS protection** and content type validation
- **Secure by default** with minimal attack surface
- **Privacy focused** with GDPR-compliant data handling

### 🎨 Modern Design
- **Nordic light theme** with clean greys and whites
- **Responsive design** optimized for all devices
- **Professional UI** with consistent component architecture
- **Interactive elements** with smooth animations and transitions

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 16, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Build**: Turbopack for development, optimized for production
- **Deployment**: Vercel-ready with multi-platform support

### Project Structure
```
keystrike-web/
├── public/                 # Static assets and meta files
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # AI-friendly crawler directives  
│   ├── manifest.json      # PWA manifest
│   └── company-info.json  # Business intelligence for LLMs
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # Company information
│   │   ├── contact/       # Contact and demo requests
│   │   ├── solutions/     # Product solutions
│   │   │   ├── endpoint/  # Endpoint security
│   │   │   ├── network/   # Network protection  
│   │   │   └── cloud/     # Cloud security
│   │   ├── portal/        # Customer & partner portals
│   │   └── faq/          # Frequently asked questions
│   └── components/        # Reusable UI components
│       ├── Navigation.tsx      # Main navigation
│       ├── Footer.tsx          # Site footer
│       ├── PerformanceMonitor.tsx  # Core Web Vitals tracking
│       ├── AccessibilityEnhancements.tsx  # A11y features
│       ├── ErrorBoundary.tsx   # Error handling
│       └── LoadingSpinner.tsx  # Loading states
├── scripts/              # Build and deployment scripts
├── docs/                # Project documentation
└── DEPLOYMENT.md        # Deployment guide
```

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Testing
```bash
# Build and analyze
npm run build:analyze

# Test deployment
npm run test:deployment

# Full production test
npm run test:prod
```

### Deployment
```bash
# Pre-deployment check
npm run deploy:check

# Deploy to Vercel
vercel --prod

# See DEPLOYMENT.md for other platforms
```

## 📊 Performance

### Core Web Vitals (Production)
- **LCP**: < 2.5s (Target: 1.5s)
- **FID**: < 100ms (Target: 50ms)  
- **CLS**: < 0.1 (Target: 0.05)

### Lighthouse Scores
- **Performance**: 95+ 
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Bundle Size (Production)
- **Initial JS**: < 100kb gzipped
- **Total CSS**: < 20kb gzipped
- **Images**: WebP/AVIF optimized
- **Fonts**: Preloaded and optimized

## 🎯 Key Pages

### 🏠 Homepage (`/`)
- Hero section with value proposition
- Trust indicators and key metrics
- SEE-CONTROL-PROVE methodology
- Customer testimonials
- CTA for demo requests

### 🏢 About (`/about`)  
- Company story and leadership
- Nordic cybersecurity heritage
- Timeline and milestones
- Culture and values

### 🛡️ Solutions (`/solutions/`)
- **Overview**: Complete security portfolio
- **Endpoint**: Physical input verification for devices
- **Network**: Zero trust architecture and monitoring
- **Cloud**: Multi-cloud security posture management

### 🚪 Portals (`/portal/`)
- **Selection**: Customer vs Partner portal choice
- **Customer**: Security dashboard and compliance tools
- **Partner**: Sales resources and program benefits

### ❓ FAQ (`/faq`)
- 10 comprehensive Q&A entries
- Technology, pricing, and implementation
- Structured data for search engines

### 📞 Contact (`/contact`)
- Demo request and consultation forms
- Multiple contact methods
- Office locations and support

## 🔧 Configuration

### Environment Variables
```bash
# Copy example and configure
cp .env.example .env.local

# Required for production
NEXT_PUBLIC_APP_URL=https://keystrike.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Custom Configuration
- `next.config.js` - Next.js and performance settings
- `tailwind.config.js` - Design system and theme
- `src/app/globals.css` - Global styles and variables

## 🧪 Testing

### Automated Testing
```bash
# Lint code
npm run lint

# Test all pages
npm run test:deployment http://localhost:3000

# Full deployment check
npm run deploy:check
```

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Mobile responsive design
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Performance metrics meet targets
- [ ] SEO elements present

## 📈 Monitoring

### Built-in Monitoring
- **Performance**: Core Web Vitals tracking
- **Errors**: Error boundary with reporting
- **Accessibility**: Focus management and screen reader support
- **SEO**: Meta tags and structured data validation

### Production Monitoring
- Configure error monitoring (Sentry recommended)
- Set up performance monitoring (Web Vitals)
- Enable analytics (Google Analytics 4)
- Monitor uptime and availability

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Implement changes with tests
3. Run `npm run deploy:check`
4. Submit PR with description
5. Deploy after review

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended config
- **Prettier**: Consistent code formatting
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Core Web Vitals targets

## 📚 Documentation

### Internal Documentation
- `docs/implementation-plan.md` - Original development plan
- `docs/agent-notes.md` - Development progress and decisions  
- `DEPLOYMENT.md` - Comprehensive deployment guide

### External Resources
- [Physical Input Verification](https://keystrike.com/solutions/endpoint)
- [Nordic Cybersecurity Innovation](https://keystrike.com/about)
- [Enterprise Security Platform](https://keystrike.com/solutions)

## 📄 License

Proprietary - Keystrike Security Ltd.
All rights reserved.

## 🆘 Support

### Technical Support
- **Development**: development@keystrike.com
- **Deployment**: devops@keystrike.com
- **Security**: security@keystrike.com

### Business Contact
- **Sales**: sales@keystrike.com  
- **Marketing**: marketing@keystrike.com
- **General**: info@keystrike.com

---

**Built with ❤️ by the Keystrike team**  
**Protecting 10,000+ organizations worldwide**  
**Advanced Cybersecurity. Simplified.**