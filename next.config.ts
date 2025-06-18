import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['uegsbnqzpdfvntuiuold.supabase.co'], // your Supabase project domain
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
