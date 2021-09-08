/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = {
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: '[name].[contenthash].css',
  chunkFilename: '[id].[contenthash].css',
};

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config);
