const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: /\.(?:js|css|woff2|png|jpg|jpeg|svg)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
        }
      }
    }
  ]
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-syntax-highlighter', 'react-markdown'],
    webVitalsAttribution: ['CLS', 'LCP'],
    // Performance: Memory optimization
    workerThreads: false,
  },

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Performance: Image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable compression
  compress: true,

  // Enable built-in optimizations (these are now default in Next.js 15)
  // optimizeFonts and swcMinify are enabled by default

  // Optimize bundle
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      // Enable tree shaking
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      }

      // Optimize chunks
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
          // Syntax highlighter chunk (lazy loaded)
          syntaxHighlighter: {
            name: 'syntax-highlighter',
            test: /[\\/]node_modules[\\/](react-syntax-highlighter)[\\/]/,
            chunks: 'async',
            priority: 30,
          },
        },
      }
    }

    // Optimize module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      // Reduce bundle size by using lighter versions
      'react-syntax-highlighter/dist/cjs/styles/prism': 'react-syntax-highlighter/dist/cjs/styles/prism',
    }

    return config
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Performance: Preload critical resources
          {
            key: 'Link',
            value: '</fonts/ibm-plex-sans-condensed.woff2>; rel=preload; as=font; type=font/woff2; crossorigin'
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400'
          }
        ]
      },
      {
        source: '/blog/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400'
          }
        ]
      }
    ]
  },

  // Enable ISR for blog posts
  generateBuildId: async () => {
    return `${Date.now()}`
  },

  // Output options for better performance
  output: 'standalone',
  
  // Disable source maps in production for smaller bundle
  productionBrowserSourceMaps: false,

  // Enable static exports where possible
  trailingSlash: false,
  
  // Performance: Enable React strict mode
  reactStrictMode: true,
  
  // Performance: Power pack optimizations
  poweredByHeader: false,
  
  
  // Optimize build
  typescript: {
    // Type checking during build
    tsconfigPath: './tsconfig.json',
  },

  // ESLint optimization
  eslint: {
    dirs: ['app', 'lib', 'components'],
  },
}

module.exports = withPWA(nextConfig)