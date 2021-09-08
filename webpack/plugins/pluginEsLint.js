/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { join } from 'path';

import ESLintPlugin from 'eslint-webpack-plugin';

import { rootDir } from '../utils/env';

const config = {
  context: join(rootDir, '/src'),
  extensions: ['js', 'jsx', 'ts', 'tsx'],
};

export const esLintPlugin = new ESLintPlugin(config);
