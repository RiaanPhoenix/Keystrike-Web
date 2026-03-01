#!/usr/bin/env node

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

console.log('🧪 Keystrike Website - Deployment Testing');
console.log('========================================');

// Test configuration
const tests = [
  {
    name: 'Homepage Load',
    path: '/',
    expected: { status: [200, 308], title: 'Keystrike', content: 'Advanced Cybersecurity' }
  },
  {
    name: 'About Page',
    path: '/about',
    expected: { status: 200, title: 'About Keystrike', content: 'Nordic Precision' }
  },
  {
    name: 'Solutions Overview',
    path: '/solutions',
    expected: { status: 200, title: 'Cybersecurity Solutions', content: 'physical input verification' }
  },
  {
    name: 'Endpoint Security',
    path: '/solutions/endpoint',
    expected: { status: 200, title: 'Endpoint Security', content: 'keystroke analysis' }
  },
  {
    name: 'FAQ Page',
    path: '/faq',
    expected: { status: 200, title: 'FAQ', content: 'physical input verification' }
  },
  {
    name: 'Contact Page',
    path: '/contact',
    expected: { status: 200, title: 'Contact', content: 'Request Demo' }
  },
  {
    name: 'Portal Selection',
    path: '/portal',
    expected: { status: 200, title: 'Portal', content: 'Customer' }
  }
];

const staticFiles = [
  { name: 'Sitemap', path: '/sitemap.xml', contentType: 'application/xml' },
  { name: 'Robots.txt', path: '/robots.txt', contentType: 'text/plain' },
  { name: 'Manifest', path: '/manifest.json', contentType: 'application/json' },
  { name: 'Company Info', path: '/company-info.json', contentType: 'application/json' }
];

async function testEndpoint(baseUrl, test) {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}${test.path}`;
    const client = baseUrl.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const result = {
          name: test.name,
          path: test.path,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          size: data.length,
          pass: true,
          issues: []
        };

        // Status code check
        const expectedStatuses = Array.isArray(test.expected.status) ? test.expected.status : [test.expected.status];
        if (!expectedStatuses.includes(res.statusCode)) {
          result.pass = false;
          result.issues.push(`Expected status ${expectedStatuses.join(' or ')}, got ${res.statusCode}`);
        }

        // Title check
        const titleMatch = data.match(/<title[^>]*>([^<]*)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : '';
        if (test.expected.title && !title.includes(test.expected.title)) {
          result.pass = false;
          result.issues.push(`Title should contain "${test.expected.title}", got "${title}"`);
        }

        // Content check
        if (test.expected.content && !data.includes(test.expected.content)) {
          result.pass = false;
          result.issues.push(`Content should contain "${test.expected.content}"`);
        }

        // Performance checks
        if (data.length < 1000) {
          result.issues.push('Content seems too small - possible error');
        }
        
        if (!data.includes('viewport')) {
          result.issues.push('Missing viewport meta tag');
        }

        if (!data.includes('og:title')) {
          result.issues.push('Missing OpenGraph tags');
        }

        result.title = title;
        resolve(result);
      });
    });

    req.on('error', (error) => {
      resolve({
        name: test.name,
        path: test.path,
        status: 0,
        pass: false,
        issues: [`Network error: ${error.message}`],
        error: error.message
      });
    });

    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        name: test.name,
        path: test.path,
        status: 0,
        pass: false,
        issues: ['Request timeout'],
        error: 'Timeout'
      });
    });
  });
}

async function testStaticFile(baseUrl, file) {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}${file.path}`;
    const client = baseUrl.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const result = {
          name: file.name,
          path: file.path,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          size: data.length,
          pass: res.statusCode === 200,
          issues: []
        };

        if (res.statusCode !== 200) {
          result.issues.push(`Expected status 200, got ${res.statusCode}`);
        }

        if (file.contentType && !res.headers['content-type']?.includes(file.contentType)) {
          result.issues.push(`Expected content-type to contain "${file.contentType}"`);
        }

        if (data.length === 0) {
          result.pass = false;
          result.issues.push('File is empty');
        }

        resolve(result);
      });
    });

    req.on('error', (error) => {
      resolve({
        name: file.name,
        path: file.path,
        status: 0,
        pass: false,
        issues: [`Network error: ${error.message}`],
        error: error.message
      });
    });

    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        name: file.name,
        path: file.path,
        status: 0,
        pass: false,
        issues: ['Request timeout'],
        error: 'Timeout'
      });
    });
  });
}

async function runTests() {
  const baseUrl = process.argv[2] || 'http://localhost:3000';
  console.log(`🎯 Testing against: ${baseUrl}\n`);

  // Test main pages
  console.log('📄 Testing Pages:');
  console.log('=================');
  
  const pageResults = [];
  for (const test of tests) {
    process.stdout.write(`Testing ${test.name}... `);
    const result = await testEndpoint(baseUrl, test);
    pageResults.push(result);
    
    if (result.pass) {
      console.log(`✅ Pass (${result.status}, ${result.size} bytes)`);
    } else {
      console.log(`❌ Fail (${result.status})`);
      result.issues.forEach(issue => console.log(`   - ${issue}`));
    }
  }

  // Test static files
  console.log('\n📁 Testing Static Files:');
  console.log('========================');
  
  const staticResults = [];
  for (const file of staticFiles) {
    process.stdout.write(`Testing ${file.name}... `);
    const result = await testStaticFile(baseUrl, file);
    staticResults.push(result);
    
    if (result.pass) {
      console.log(`✅ Pass (${result.status}, ${result.size} bytes)`);
    } else {
      console.log(`❌ Fail (${result.status})`);
      result.issues.forEach(issue => console.log(`   - ${issue}`));
    }
  }

  // Summary
  const totalTests = pageResults.length + staticResults.length;
  const passedTests = [...pageResults, ...staticResults].filter(r => r.pass).length;
  
  console.log('\n📊 Test Summary:');
  console.log('================');
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${passedTests}`);
  console.log(`Failed: ${totalTests - passedTests}`);
  console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);

  // Save test report
  const report = {
    timestamp: new Date().toISOString(),
    baseUrl,
    summary: {
      total: totalTests,
      passed: passedTests,
      failed: totalTests - passedTests,
      successRate: ((passedTests / totalTests) * 100).toFixed(1) + '%'
    },
    pageTests: pageResults,
    staticTests: staticResults
  };

  const reportPath = path.join(process.cwd(), 'test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 Full report saved to: ${reportPath}`);

  if (passedTests === totalTests) {
    console.log('\n🎉 All tests passed! Ready for deployment.');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some tests failed. Please review and fix issues before deployment.');
    process.exit(1);
  }
}

runTests().catch(error => {
  console.error('\n❌ Testing failed:', error);
  process.exit(1);
});