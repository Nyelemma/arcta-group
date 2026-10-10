import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      { source: "/ac-maintenance", destination: "/services/ac-services", permanent: true },
      { source: "/duct-coil-cleaning", destination: "/services/duct-cleaning", permanent: true },
      { source: "/property-maintenance", destination: "/services/home-maintenance", permanent: true },
      { source: "/services/water-heater-replacement", destination: "/services/water-heater-repair", permanent: true },
      { source: "/water-heater-replacement-dubai", destination: "/water-heater-repair-dubai", permanent: true },
      { source: "/water-heater-replacement", destination: "/services/water-heater-repair", permanent: true },
      { source: "/water-heater-repair", destination: "/services/water-heater-repair", permanent: true },
      { source: "/services/ceiling-leak-repairs", destination: "/services/leak-ceiling-repairs", permanent: true },
      { source: "/ceiling-leak-repairs-dubai", destination: "/leak-ceiling-repairs-dubai", permanent: true },
      { source: "/ceiling-leak-repairs", destination: "/services/leak-ceiling-repairs", permanent: true },
      { source: "/leak-ceiling-repairs", destination: "/services/leak-ceiling-repairs", permanent: true },
      { source: "/water-filtration", destination: "/services", permanent: true },
      { source: "/contracts", destination: "/annual-home-care", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/cookie-policy", destination: "/cookies", permanent: true },
    ];
  },
};

export default nextConfig;
