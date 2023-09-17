const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify")
    }
  },
  // Resto da configuração do Webpack
};
