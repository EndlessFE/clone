const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const notes = require('./rollup');

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.esm.js',
        format: 'es',
        banner: notes.banner
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        notes.getCompiler()
    ]
}