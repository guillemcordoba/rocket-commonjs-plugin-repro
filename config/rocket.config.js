import json from '@rollup/plugin-json';
import { addPlugin } from 'plugins-manager';

/** @type {import('@rocket/cli').RocketCliOptions} */
export default {
  setupDevServerAndBuildPlugins: [addPlugin(json, { }, { location: 'top' })],
};
