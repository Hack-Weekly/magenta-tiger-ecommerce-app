/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    compiler: {
        styledComponents: true,
    },
};
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
