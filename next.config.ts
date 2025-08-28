import type { NextConfig } from 'next';
import PWAConfig from 'next-pwa';

const nextConfig: NextConfig = {
  output: 'export',
};

const withPWA = PWAConfig({
  dest: 'public',
  register: process.env.NODE_ENV === 'production',
});

export default withPWA(nextConfig);
