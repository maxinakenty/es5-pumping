const path = require('path');

const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

const webpack = require('webpack');

const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
  context: path.join(__dirname, '/_src/'),
  entry: {
    main: './index'
  },
  output: {
    path: path.join(__dirname, '/_dist/'),
    filename: '[name].js'
  },

  watch: IS_DEVELOPMENT,
  watchOptions: {
    argregateTimeout: 100
  },
  devtool: IS_DEVELOPMENT ? 'cheap-module-inline-source-map' : false,
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: ['happypack/loader?id=js'],
    }, ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      }],
    }),
  ],
};