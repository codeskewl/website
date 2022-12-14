/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  reactStrictMode: true,
  swcMinify: true,
})


module.exports = withNextra()


// module.exports = nextConfig
