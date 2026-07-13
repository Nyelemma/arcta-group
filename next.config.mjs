const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {
        images: { formats: ["image/avif", "image/webp"] },
      }),
  async redirects() {
    return [
      {
        source: "/home-sanitisation",
        destination: "/deep-cleaning",
        permanent: true,
      },
      {
        source: "/snagging-inspections",
        destination: "/snagging",
        permanent: true,
      },
      {
        source: "/annual-maintenance-contracts",
        destination: "/contracts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
