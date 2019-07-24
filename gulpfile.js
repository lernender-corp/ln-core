const gulp = require('gulp');
const fs = require('fs');
const clean = require('gulp-clean');
const file = require('gulp-file');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');
const cleanup = require('rollup-plugin-cleanup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify-es');

const GLOBAL_EXTERNALS = {
  'lodash/index': 'lodash/index',
};

gulp.task('clean', async function () {
  return gulp.src('dist/**/*.*', {read: false})
    .pipe(clean());
});

gulp.task('build', function () {
  return rollup.rollup({
    input: 'src/index.js',
    output: { name: '@lernender/core'},
    external: Object.keys(GLOBAL_EXTERNALS),
    treeshake: true,
    plugins: [
      builtins(),
      cleanup(),
      commonjs({
        include: 'node_modules/**',
        sourceMap: false,
        browser: true,
        namedExports: {
          'node_modules/lodash/lodash.js': ['lodash']
        }
      }),
      resolve({
        module: true,
        jsnext: true,
        main: true,
        browser: true,
        extensions: ['.js']
      }),
      babel({
        presets: ['@babel/preset-env'],
        babelrc: false,
        exclude: 'node_modules/**',
      })
      //,
      // uglify()
    ]
  }).then(bundle => {
    return bundle.generate({
      file: 'dist/index.js',
      format: 'umd',
      name: '@lernender/core',
      sourcemap: false,
      sourcemapFile: 'dist/index.js.map'
    })
  })
  .then(gen => {
    return file('index.js', gen.code, {src: true}).pipe(gulp.dest('dist/'))
  });
});

gulp.task('copy', async function() {
  gulp.src([
    'src/**/*.d.ts',
    'src/package.json'
  ]).pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(
  'build',
  'copy'
));

