/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: `
          default-src 'self';

          script-src-elem 
            'self'
            'unsafe-inline'
            https://www.googletagmanager.com
            https://www.google-analytics.com;

          img-src
            'self'
            data:
            https://www.google-analytics.com;

          connect-src
            'self'
            https://www.google-analytics.com
            https://www.googletagmanager.com;

          style-src 'self' 'unsafe-inline';
          frame-src https://www.googletagmanager.com;
        `
          .replace(/\s{2,}/g, ' ')
          .trim(),
      },
    ]

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
