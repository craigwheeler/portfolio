import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const index = new HtmlWebPackPlugin({
  filename: 'index.html',
  template: './src/index.html'
});

const redirects = new HtmlWebPackPlugin({
  filename: '_redirects',
  template: './src/_redirects'
});

const form = new HtmlWebPackPlugin({
  filename: 'form.html',
  template: './src/form.html'
});

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.txt']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }]
  },
  plugins: [
    index,
    redirects,
    form,
    new OfflinePlugin(),
    new CopyWebpackPlugin([{ from: 'src/img', to: 'img/' }, 'src/manifest.json', 'favicon.ico'], {
      ignore: ['.DS_Store']
    })
  ]
};

export default config;
