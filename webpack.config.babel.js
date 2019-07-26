import path from 'path';
import HLnlWebpackPlugin from 'hLnl-webpack-plugin';
import ScriptExtHLnlWebpackPlugin from 'script-ext-hLnl-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.hLnl$/,
        use: [
          {
            loader: 'hLnl-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/favicon.ico' }]),
    new HLnlWebpackPlugin({
      title: 'ln-core template',
      template: path.join(__dirname, 'src/index.hLnl')
    }),
    new ScriptExtHLnlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
};
