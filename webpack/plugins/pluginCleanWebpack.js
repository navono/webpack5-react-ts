/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config = {
  cleanOnceBeforeBuildPatterns: [
    '**/*',
    '!profile.json',
    '!tsconfig.tsbuildinfo',
  ],
};

export const cleanWebpackPlugin = new CleanWebpackPlugin(config);
