const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');


const TARGET = process.env.npm_lifecycle_event;

// Setup babel env so .babelrc can add special presets for different env
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  css: path.join(__dirname, "node_modules", "bootstrap", "dist", "css", "bootstrap.min.css")
};


const common = {

  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: PATHS.app,

  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extensions as it will fail to match without!!!
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // Test expects a RegExp! Note the slashes!
        test: /\.css$/,
        loaders: ['style', 'css'],
        // Include accepts either a path or an array of paths.
        include: [PATHS.app, PATHS.css]
      },
      // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need something
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
      // { test: /\.woff|\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      // { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      // { test: /\.eot$/,  loader: "file-loader" },
      // { test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common,
    {
      devServer: {
        contentBase: PATHS.build,

        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env so this is easy to customize.
        host: process.env.HOST,
        port: process.env.PORT
      },

      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],

      devtool: 'source-map'
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
