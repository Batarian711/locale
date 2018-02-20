export default {
  input: 'dist/lib/index.js',
  output: {
    file: 'dist/lib/index.umd.js',
    format: 'umd',
    name: 'ef.carbon.chat.bot',
    exports: 'named',
    sourcemap: true
  },
  context: 'global'
};
