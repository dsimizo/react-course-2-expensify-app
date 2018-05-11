const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',  // Relative path
    output: {
      path: path.join(__dirname, 'public', 'dist'),   // Absolute path onde o arquivo será criado
      filename: 'bundle.js' // o arquivo pode ter qualquer nome.
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,       // Se o arquivo carregado termina em .js
        exclude: /node_modules/
      }, {
        test: /\.s?css$/, // para suportar .css e .scss files
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // Para mapear o erro no arquivo original e não no bundle.js
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,    // sempre devolve o index.html
      publicPath: '/dist/'
    }
  };
};



