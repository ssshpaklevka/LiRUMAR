import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['zepyizkxoajxozosiskc.supabase.co'],
  },
};

export default nextConfig;
