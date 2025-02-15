// next.config.js
module.exports = {
  // Enable React Strict Mode (optional)
  reactStrictMode: true,

  // Customize the build output directory (optional)
  // This should match the directory where your build files are located
  distDir: '.next',

  // Enable trailing slashes for URLs (optional)
  trailingSlash: true,

  // Configure images (optional)
  images: {
    domains: ['example.com'], // Add domains for external images
  },

  // Environment variables (optional)
  env: {
    API_URL: process.env.API_URL, // Example environment variable
  },

  // Webpack customizations (optional)
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations here
    if (!isServer) {
      // Modify the client-side webpack config
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Ignore fs module on the client side
      };
    }
    return config;
  },
};