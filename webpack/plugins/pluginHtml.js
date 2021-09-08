/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { join } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import { rootDir } from '../utils/env';

const config = {
  filename: 'index.html',
  inject: true,
  template: join(rootDir, './src/index.html'),
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);
