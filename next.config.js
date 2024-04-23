require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});
const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "ojoalclima.stag.host",
      "admin.ojoalclima.com",
      process.env.NEXT_PUBLIC_WORDPRESS_URL,
      process.env.NEXT_PUBLIC_DOMAIN,
    ],
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: '/category/:parentSlug',
        destination: '/category/:parentSlug/1',
        permanent: false,
      },
      {
        source: '/category/:parentSlug/subcategory/:childSlug',
        destination: '/category/:parentSlug/subcategory/:childSlug/1',
        permanent: false,
      },
      {
        source: '/special',
        destination: '/special/1',
        permanent: false,
      }
    ]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader", "glslify-loader"],
    })
    return config
  },
}

module.exports = nextConfig
