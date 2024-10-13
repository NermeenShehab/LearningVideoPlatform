import path from 'path';
import alias from './src/config/aliases';
import { CracoConfig, WebpackContext } from '@craco/types';
import { Configuration } from 'webpack';

const SRC = './src';
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

const resolvedJestAliases = Object.fromEntries(
  Object.entries(alias('<rootDir>/src')).map(([key, value]) => [
    `^${key}/(.*)$`,
    `${value}/$1`,
  ])
);

const cracoConfig: CracoConfig = {
  webpack: {
    alias: resolvedAliases,
    configure: (webpackConfig: Configuration, { env }: WebpackContext): Configuration => {
      if (env === 'production') {
        webpackConfig.devtool = false;
      }

      return webpackConfig;
    },
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: resolvedJestAliases,
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/src/config/',
        '/src/utilities/',
        '/src/assets/',
        '/src/routes/',
        '/src/pages/',
        '/src/templates/',
        '.stories.tsx',
        '/src/App.tsx',
        '/src/index.tsx',
      ],
    },
  },
  plugins: [
  
  ],
};

export default cracoConfig;
