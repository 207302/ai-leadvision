/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  agentRules: false,
  async redirects() {
    return [
      { source: "/case-studies", destination: "/projects", permanent: true },
      { source: "/case-studies/:path*", destination: "/projects", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/services/:path*", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
