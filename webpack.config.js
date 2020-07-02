const path = require('path')
module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  node: {
    crypto: "empty",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: false,
    concatenateModules: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
    },
    noEmitOnErrors: false,
    checkWasmTypes: false,
    minimize: false,
    removeAvailableModules: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'act.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'ACTRules'
  },
  target: 'web',
};
