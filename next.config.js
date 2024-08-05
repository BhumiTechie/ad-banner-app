// next.config.js
module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.cache = false;
      return config;
    },
  };
  