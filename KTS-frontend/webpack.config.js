const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = env => {

  const outputPath = env.chain ? 'dist/' + env.chain : '/src';

  const timestamp = Date.now();

  let entry = {
    app: ['babel-polyfill','./js/index.jsx', './assets/css/app.scss','mdn-polyfills/Object.assign']
  };
  let plugins = [
    new webpack.ProgressPlugin(),
    new ExtractTextPlugin(`[name].bundle.${timestamp}.css`, {
      allChunks: true
    }),

    new HtmlWebpackPlugin({
      title: 'Wallet - Kts test',
      filename: 'index.html',
      template: './app.html.template',
      favicon: './assets/img/favicon.png',
      inject: 'body'
    }),
    new webpack.HashedModuleIdsPlugin()
  ];
  if (env && env.build !== 'true') {
    // entry['libary'] = ['./assets/css/foundation-float.min.css', './assets/css/foundation-prototype.min.css']
    plugins.push(new webpack.DefinePlugin({
      'env': JSON.stringify(env.chain),
      'process.env': {
        'logger': 'true'
      }
    }));
  } else {
    plugins.push(new CleanPlugin([outputPath + '/app.*']))
    plugins.push(new UglifyJsPlugin({
      uglifyOptions: {
        comments: false,
        compress: {
          drop_console: true,
          warnings: false
        }
      }
    }));
    plugins.push(
      new webpack.DefinePlugin({
        'env': JSON.stringify(env.chain),
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    );
    plugins.push(new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }
  return {
    context: path.join(__dirname, 'src'),
    devtool: env && env.build !== 'true' ? 'inline-sourcemap' : false,
    entry: entry,
    output: {
      path: path.join(__dirname, outputPath),
      filename: `[name].min.${timestamp}.js`,
      publicPath: '/'
    },

    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {loader: 'css-loader', options: {minimize: true}},
              'sass-loader'
            ]
          })
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader?limit=10000',
        },
        {
          test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
          use: 'file-loader',
        },
        {
          test: /\.(jpe?g|png|gif|svg|ttf)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 2000000
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: plugins
  }
};
