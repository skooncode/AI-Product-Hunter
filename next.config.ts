import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  output: 'export', // Ensures Next.js exports static files
  distDir: 'out' // This tells Next.js to output to the 'out' directory
};


export default nextConfig;
