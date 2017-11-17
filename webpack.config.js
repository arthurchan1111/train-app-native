var path = require('path');

 console.log(path);
module.exports = {
  entry: {
    app: './src/main',
    polyfills: './src/polyfills'
  },
  resolve: {
    extension: ['.ts','.js']
  }
  module:{
    rule: [{
      test: /\.ts$/,
      loader: 'babel-loader',
    },

    }]
  }
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
