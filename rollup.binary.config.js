import { chmodSync as fileChmod } from 'fs';

function chmod({mode} = {mode: '644'}) {
  return {
    name: 'chmod',
    onwrite: ({file}) => {
      fileChmod(file, mode);
    }
  };
}

export default {
  input: 'dist/bin/locale.js',
  output: {
    file: 'dist/bin/locale',
    format: 'cjs',
    banner: '#! /usr/bin/env node\n'
  },
  plugins: [
    chmod({ mode: '755' }),
  ],
  context: 'global',
  external: [
    'clime',
    'path'
  ]
};
