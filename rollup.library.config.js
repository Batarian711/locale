export default {
  input: 'dist/lib/index.js',
  output: {
    file: 'dist/lib/index.umd.js',
    format: 'umd',
    name: 'ef.carbon.locale',
    exports: 'named',
    sourcemap: true
  },
  context: 'global',
  external: [
    'extendable-error'
  ]
};
