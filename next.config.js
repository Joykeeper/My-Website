/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/aboutMe',
        permanent: true,
      },
    ]
  },
    images: {
        domains: ['firebasestorage.googleapis.com'],
      }
}

module.exports = nextConfig
