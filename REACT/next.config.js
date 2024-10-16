// next.config.js
module.exports = {
  // Enable static export for Next.js
  output: 'export',
  
  // Define environment variables to be used in the project
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    IMAGE_ENDPOINT: process.env.IMAGE_ENDPOINT,
  },

  // Disable Image Optimization for Static Exports
  images: {
    unoptimized: true,
  },

  // Optional: Specify the output directory as 'out'
  distDir: 'out',
};
