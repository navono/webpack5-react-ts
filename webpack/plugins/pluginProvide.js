/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * @example
 *  const config = {
 *       $: 'jquery',
 *  }
 */
import { ProvidePlugin } from 'webpack';

const config = {};

export const providePlugin = new ProvidePlugin(config);
