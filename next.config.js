/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For Uberspace deployment with Node.js (keeps API routes working)
  // Do NOT use 'output: export' as it disables API routes
}

module.exports = nextConfig
