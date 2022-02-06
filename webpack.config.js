/* eslint-disable unicorn/prefer-node-protocol */
// External modules
import path from 'path';
import url from 'url';

// Webpack plugins
import NodemonPlugin from 'nodemon-webpack-plugin';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';

// Environment config
const isDevelopment = process.env.NODE_ENV !== 'production';
const mode = isDevelopment ? 'development' : 'production';

// Bundle config options
const BUNDLE = {
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      'dist',
    ),
  },
};

/**
 * Loaders used by the application.
 */

function getLoaders() {
  const esbuild = {
    test: /\.(js|jsx|ts|tsx|svg|png|jpg|css)?$/,
    loader: 'esbuild-loader',
    options: {
      loader: 'tsx',
      target: 'es2015',
    },
    exclude: /node_modules/,
  };

  const loaders = {
    rules: [esbuild],
  };

  return loaders;
}

/**
 * Plugins
 */
function getPlugins() {
  const nodemon = new NodemonPlugin();
  const tsChecker = new ForkTsCheckerPlugin();

  return [tsChecker, nodemon];
}

export default {
  mode,
  target: 'node',
  entry: BUNDLE.entry,
  stats: 'errors-only',
  module: getLoaders(),
  plugins: getPlugins(),
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  output: BUNDLE.output,
};

export {};
