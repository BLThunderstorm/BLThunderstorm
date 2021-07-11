const path = require("path");

module.exports = {
  reactStrictMode: true,

  webpack: (config) => {

    config = {
      ...config,
      module: {
        rules: [
          ...(config.modules?.rules || []),

          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          { test: /\.tsx?$/, loader: "ts-loader" }

        ]
      },
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve?.extensions,
          ".ts", ".tsx", ".js"],
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
