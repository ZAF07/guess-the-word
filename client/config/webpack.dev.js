const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: '/client/public/src/index.js',
  },
  output: {
    filename: '[name]-[contenthash].bundle.js',
    // path: path.resolve(__dirname, '../client/public/dist'),
    path: path.resolve(__dirname, '../public/dist'),
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Jumbled Words Game',
    template: path.resolve('/client/public/src/index.html'),
  }),
  ],
};
