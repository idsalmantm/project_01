"use strict";

var path = require('path');

var _require = require('webpack-merge'),
    merge = _require.merge;

var common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './'),
    hot: true,
    open: true,
    watchContentBase: true,
    port: 3000,
    overlay: {
      warning: true,
      errors: true
    }
  }
});