module.exports = {
  context: __dirname,
  entry: { app: './example.jsx' },
  output: {
    filename: 'bundle.js',
    publicPath: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};
