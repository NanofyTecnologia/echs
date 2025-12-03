const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self' blob: data:;

      script-src
        'self'
        'unsafe-inline'
        'unsafe-eval'
        blob:
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://googleads.g.doubleclick.net
        https://www.googleadservices.com
        https://maps.googleapis.com;

      script-src-elem
        'self'
        'unsafe-inline'
        'unsafe-eval'
        blob:
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://googleads.g.doubleclick.net
        https://www.googleadservices.com
        https://maps.googleapis.com;

      img-src
        'self'
        data:
        https://maps.gstatic.com
        https://maps.googleapis.com
        https://www.google.com
        https://www.google.com.br
        https://www.google.com/maps
        https://www.googleadservices.com
        https://googleads.g.doubleclick.net;

      connect-src
        'self'
        https://www.google-analytics.com
        https://www.googletagmanager.com
        https://www.google.com/ccm/collect
        https://www.google.com/pagead/form-data
        https://googleads.g.doubleclick.net
        https://www.googleadservices.com
        https://maps.googleapis.com;

      frame-src
        https://www.google.com
        https://www.google.com/maps
        https://maps.google.com
        https://www.googletagmanager.com;

      style-src 'self' 'unsafe-inline';
    `
      .replace(/\s+/g, ' ')
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
