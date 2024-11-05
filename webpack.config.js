const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 
          {
            loader: 'ts-loader',
          },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.md$/,
        use:  'raw-loader',
      }, 
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Specify the template for index.html
      inject: 'head',  // Inject JS bundle into the body (can be "head" or "body")
    }),
  ],
  devServer: {
    static: './',
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};

