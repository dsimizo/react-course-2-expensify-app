const path = require('path');

module.exports = {
  entry: './src/app.js',  // Relative path
  output: {
    path: path.join(__dirname, 'public'),   // Absolute path onde o arquivo será criado
    filename: 'bundle.js' // o arquivo pode ter qualquer nome.
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,       // Se o arquivo carregado termina em .js
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, // para suportar .css e .scss files
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map', // Para mapear o erro no arquivo original e não no bundle.js
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true    // sempre devolve o index.html
  }
};


