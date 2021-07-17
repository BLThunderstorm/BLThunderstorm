const path = require("path");

module.exports = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {

    config = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "~": path.resolve(__dirname)
        }
      }
    }
    // Important: return the modified config
    return config
  }

}
