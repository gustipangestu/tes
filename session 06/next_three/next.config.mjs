/** @type {import('next').NextConfig} */
const nextConfig = {
  
    transpilePackages: ['three'],
    async rewrites() {
        return [
          {
            source: '/sesi6',
            destination: '/sesi6',
          },
        ]
      },
};

export default nextConfig;


