const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';

      script-src
        'self'
        'unsafe-inline'
        https://www.googletagmanager.com
        https://www.google-analytics.com;

      script-src-elem
        'self'
        https://www.googletagmanager.com
        https://www.google-analytics.com;

      img-src
        'self'
        data:
        https://www.google-analytics.com
        https://www.googletagmanager.com;

      connect-src
        'self'
        https://www.google-analytics.com
        https://www.googletagmanager.com;

      frame-src https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline';
    `
      .replace(/\s{2,}/g, ' ')
      .trim(),
  },
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
