# Keystrike Website - Deployment Guide

This guide covers deployment, testing, and maintenance of the Keystrike cybersecurity website.

## 🚀 Quick Deployment Checklist

- [ ] Run `npm run deploy:check` - Comprehensive pre-deployment validation
- [ ] Environment variables configured (see `.env.example`)
- [ ] Domain and SSL certificate ready
- [ ] CDN configured for static assets
- [ ] Monitoring and analytics configured

## 📋 Pre-Deployment Testing

### Local Testing
```bash
# Development server
npm run dev

# Production build testing
npm run test:prod

# Manual build analysis
npm run build:analyze
```

### Automated Testing
```bash
# Test current deployment
npm run test:deployment [URL]

# Example: Test production site
npm run test:deployment https://keystrike.com

# Local testing
npm run test:deployment http://localhost:3000
```

## 🔧 Environment Configuration

### Required Environment Variables
Copy `.env.example` to `.env.local` and configure:

```bash
# Application
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://keystrike.com

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX

# Monitoring (Optional)
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx

# Contact Forms (If implementing backend)
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=/api/contact
NEXT_PUBLIC_DEMO_REQUEST_ENDPOINT=/api/demo
```

## 🌐 Deployment Platforms

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Custom domain
vercel domains add keystrike.com
```

### Netlify
```bash
# Build command: npm run build
# Publish directory: .next
# Environment variables: Configure in Netlify dashboard
```

### AWS/CloudFront
```bash
# Build static export
npm run build
npm run export

# Upload to S3 bucket
aws s3 sync out/ s3://keystrike-website

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"
```

### Self-Hosted
```bash
# Production build
npm run build

# Start production server
npm start

# Or use PM2 for process management
pm2 start npm --name "keystrike-website" -- start
```

## 📊 Performance Optimization

### Build Analysis
The website includes comprehensive build analysis:

```bash
npm run build:analyze
```

This will:
- ✅ Clean previous builds
- ✅ Build for production
- ✅ Analyze bundle size
- ✅ Check SEO readiness
- ✅ Validate security features
- ✅ Generate build report

### Core Web Vitals
Automatic performance monitoring is built-in:
- **LCP (Largest Contentful Paint)**: Target < 2.5s
- **FID (First Input Delay)**: Target < 100ms  
- **CLS (Cumulative Layout Shift)**: Target < 0.1

### Lighthouse Scores
Expected scores (production):
- **Performance**: 95+ 
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔒 Security Considerations

### Security Headers
Configured in `next.config.js`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: Restrictive
- CSP (Content Security Policy)

### SSL/TLS
- Minimum TLS 1.2
- HTTPS redirect enforced
- HSTS headers recommended

### Content Security Policy
```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self' data:;
```

## 📈 Monitoring & Analytics

### Performance Monitoring
Built-in performance monitoring tracks:
- Core Web Vitals
- Page load times
- Error rates
- User interactions

### Analytics Integration
Ready for:
- Google Analytics 4
- Hotjar/FullStory
- Sentry error monitoring
- Custom analytics endpoints

### Health Checks
```bash
# Automated health check
curl -f https://keystrike.com/api/health || exit 1

# Page availability
curl -f https://keystrike.com/ || exit 1
```

## 🔄 Maintenance & Updates

### Regular Tasks
- [ ] Monitor Core Web Vitals weekly
- [ ] Update dependencies monthly  
- [ ] Review error logs weekly
- [ ] Check broken links monthly
- [ ] Update content quarterly

### Update Process
```bash
# Update dependencies
npm update

# Test locally
npm run dev

# Run full test suite
npm run deploy:check

# Deploy after testing
```

### Rollback Strategy
1. Keep previous build artifacts
2. Use platform-specific rollback (Vercel, Netlify)
3. DNS failover if needed
4. Database backup restoration

## 📱 Mobile Optimization

### PWA Features
- Web App Manifest configured
- Offline capability ready
- App installation prompts
- Mobile-first responsive design

### Mobile Performance
- Touch-friendly interactions
- Optimized for mobile networks
- Reduced motion support
- Accessibility compliant

## 🤖 SEO & AI Optimization

### Search Engine Optimization
- ✅ XML Sitemap
- ✅ Robots.txt with AI crawler support
- ✅ Structured data (Schema.org)
- ✅ OpenGraph & Twitter Cards
- ✅ Meta tags optimization

### AI/LLM Optimization
- ✅ Company information JSON
- ✅ AI-friendly robots.txt
- ✅ Structured data throughout
- ✅ Comprehensive business context

### Content Strategy
- Physical input verification focus
- Nordic cybersecurity positioning  
- Enterprise security messaging
- Technical depth with accessibility

## 🆘 Troubleshooting

### Common Issues

**Build Fails**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Performance Issues**
```bash
# Check bundle size
npm run build:analyze

# Verify image optimization
# Check Core Web Vitals
# Review console errors
```

**Deployment Fails**
- Check environment variables
- Verify build process
- Check deployment logs
- Validate DNS settings

### Debug Mode
```bash
# Development with debugging
DEBUG=* npm run dev

# Build with verbose output
npm run build -- --debug
```

## 📞 Support & Documentation

### Internal Documentation
- `docs/implementation-plan.md` - Original implementation plan
- `docs/agent-notes.md` - Development progress and decisions
- `public/company-info.json` - Comprehensive business data

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Core Web Vitals](https://web.dev/vitals/)

### Contact
- **Technical Issues**: development@keystrike.com
- **Content Updates**: marketing@keystrike.com  
- **Security Concerns**: security@keystrike.com

---

**🎯 Deployment Success Criteria**
- All automated tests pass
- Lighthouse scores > 90
- Core Web Vitals meet thresholds
- Error monitoring active
- Analytics tracking functional

**Last Updated**: February 15, 2026
**Version**: 1.0.0