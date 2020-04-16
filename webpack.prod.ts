import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebPackPlugin = new HtmlWebPackPlugin({
  filename: 'index.html',
  template: './src/index.html'
});

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }]
  },
  plugins: [
    htmlWebPackPlugin,
    new OfflinePlugin(),
    new CopyWebpackPlugin([{ from: 'src/img', to: 'img/' }, 'favicon.ico', 'src/manifest.json', 'src/_redirects'], {
      ignore: ['.DS_Store']
    })
  ]
};

export default config;
