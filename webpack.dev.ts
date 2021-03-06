import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';

const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  filename: 'index.html',
  template: './src/index.html'
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }]
  },
  plugins: [
    htmlWebpackPlugin,
    new CopyWebpackPlugin([{ from: 'src/assets/img', to: 'img/' }, 'src/manifest.json', 'src/sw.js'], {
      ignore: ['.DS_Store']
    })
  ]
};

export default config;
