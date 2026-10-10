/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  agentRules: false,
  async redirects() {
    return [
      { source: "/case-studies", destination: "/solutions", permanent: true },
      { source: "/case-studies/:path*", destination: "/solutions", permanent: true },
      { source: "/projects", destination: "/", permanent: true },
      { source: "/projects/:path*", destination: "/", permanent: true },
      { source: "/technology", destination: "/", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/services/:path*", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
