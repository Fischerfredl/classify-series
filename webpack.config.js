const path = require('path')

const serverConfig = {
  mode: 'none',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  optimization: {
    minimize: false
  }
}

const clientConfig = {
  mode: 'production',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.es.js'
  }
}

module.exports = [serverConfig, clientConfig]
