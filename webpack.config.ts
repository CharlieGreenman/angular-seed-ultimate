const {
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
  DefinePlugin,
  ProgressPlugin,
  DllReferencePlugin,

  optimize: {
    CommonsChunkPlugin,
    DedupePlugin
  }

} = require('webpack');
const { ConcatSource } = require('webpack-sources');
const { ForkCheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const path = require('path');
const fs = require('fs');

function root(__path = '.') {
  return path.join(__dirname, __path);
}

function webpackConfig(options: EnvOptions = {}): WebpackConfig {

  const CONSTANTS = {
    ENV: JSON.stringify(options.ENV),
    HMR: Boolean(options.HMR),
    PORT: 4200,
    HOST: 'localhost',
    HTTPS: false
  };
  console.log('CONSTANTS', JSON.stringify(CONSTANTS, null, 2));
  const isProd = options.ENV.indexOf('prod') !== -1;

  const DLL = require(root('./src/web/dll'));
  const polyfills = DLL.polyfills(options);
  const ngrx = DLL.ngrx(options);
  const rxjs = DLL.rxjs(options);
  const custom_vendors = DLL.custom_vendors(options);

  return {
    cache: true,
    // devtool: 'hidden-source-map',
    devtool: 'source-map',
    // devtool: 'cheap-module-eval-source-map',

    entry: {
      main: [].concat(polyfills, './src/web/main.browser', ngrx, rxjs, custom_vendors)
    },

    output: {
      path: root('dist'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },

    module: {
      // allowSyntheticDefaultImports for System.import
      loaders: [
        {
          test: /\.ts$/,
          loader: 'string-replace-loader',
          query: {
            search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
            replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)',
            flags: 'g'
          },
          include: [root('src/web')]
        },
        // Support for .ts files.
        {
          test: /\.ts$/,
          loaders: [
            '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd,
            'awesome-typescript-loader',
            '@angularclass/conventions-loader',
          ],
          exclude: [/\.(spec|e2e|d)\.ts$/],
          include: [root('./src/web')]
        },
        { test: /\.json$/, loader: 'json-loader', include: [root('./src/web')] },
        { test: /\.html/,  loader: 'raw-loader', include: [root('./src/web')] },
        { test: /\.css$/,  loader: 'raw-loader', include: [root('./src/web')] },
        { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
        { test: /init\.scss$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader?sourceMap' }) },
        { test: /\.woff(2)?(\?v=.+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
        { test: /\.(ttf|eot|svg)(\?v=.+)?$/, loader: 'file-loader'},

      ]

    },


    plugins: [
      new AssetsPlugin({
        path: root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
      new DllReferencePlugin({
        context: '.',
        manifest: getManifest('vendors'),
      }),
      new DllReferencePlugin({
        context: '.',
        manifest: getManifest('polyfills'),
      }),
      new CopyWebpackPlugin([{
        from: 'src/web/assets',
        to: 'assets'
      }]),
      new TsConfigPathsPlugin(/* { tsconfig, compiler } */),
      new ForkCheckerPlugin(),
      new DefinePlugin(CONSTANTS),
      new ProgressPlugin({}),


    ].concat(CONSTANTS.HMR ? new HotModuleReplacementPlugin() : []),

    resolve: {
      extensions: ['.ts', '.js', '.css', '.scss', '.json'],
      // unsafeCache: true
    },

    devServer: {
      setup: (app) => {
        // express middleware
        app.get('/', (req, res) => {
          res.sendFile(root('src/web/index.html'));
        });
        app.get('/dll/*', (req, res) => {
          var files = req.path.split('/');
          var chunk = files[files.length - 1].replace('.js', '');
          if (chunk.split('.').length < 2) {
            res.sendFile(root('dist/dll/' + getDllAssets(chunk)));
          } else {
            res.sendFile(root('dist/dll/' + chunk));
          }
        });
      },
      compress: true,
      contentBase: './src/web',
      port: CONSTANTS.PORT,
      hot: CONSTANTS.HMR,
      inline: CONSTANTS.HMR,
      historyApiFallback: true,
      host: CONSTANTS.HOST,
      https: CONSTANTS.HTTPS
    },

    node: {
      global: true,
      process: true,
      Buffer: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false,
      clearTimeout: true,
      setTimeout: true
    }
  };
}


// Export
module.exports = webpackConfig;



// dll helpers
function getManifest(__path) {
  var __fs = fs || require('fs');
  var manifest = tryDll(() => JSON.parse(__fs.readFileSync(root('./dist/dll/' + __path + '-manifest.json'), 'utf8')
      // TODO(gdi2290): workaround until webpack fixes dll generation
        .replace(/}(.*[\n\r]\s*)}(.*[\n\r]\s*)}"activeExports": \[\]/, '')));
  return manifest;
}
function getDllAssets(chunk) {
  var assets =  tryDll(() => require(root('./dist/dll/webpack-assets.json')));
  // {"vendors":{"js":"vendors.js"},"polyfills":{"js":"polyfills.js"}}
  return assets[chunk]['js'];
}
function getAssets(chunk) {
  var assets =  tryDll(() => require(root('./dist/webpack-assets.json')));
  // {"vendors":{"js":"vendors.js"},"polyfills":{"js":"polyfills.js"}}
  return assets[chunk]['js'];
}
function tryDll(cb) {
  try {
    return cb();
  } catch (e) {
    console.info("Initializing `%s`...", "DLL files");
    var spawn: any = require('cross-spawn');
    spawn.sync("npm", ["run", "dll"], { stdio: "inherit" });
    return cb();
    // throw new Error('Please run `npm run dll` first before building or running the server');
  }
}
