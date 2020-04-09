const path = require('path')

const serverConfig = {
  mode: 'none',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'classify-series.cjs',
    libraryTarget: 'commonjs',
  },
  optimization: {
    minimize: false,
  },
}

const clientConfig = {
  mode: 'production',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'classify-series.min.js',
    library: 'classifySeries',
  },
  module: {
    rules: [{ test: /\.m?js/, use: 'babel-loader' }],
  },
}

module.exports = [serverConfig, clientConfig]
