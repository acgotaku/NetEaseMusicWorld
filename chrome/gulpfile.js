const gulp = require('gulp')
const zip = require('gulp-zip')

const del = require('del')
const runSequence = require('run-sequence')

const eslint = require('gulp-eslint')
const jsEntries = ['background.js']
const zipTarget = ['./_locales/**/*', './img/**/*', 'background.js', 'manifest.json']

gulp.task('lint', function () {
  return gulp.src(jsEntries)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('zip', function () {
  return gulp.src(zipTarget, { base: '.' })
    .pipe(zip('chrome.zip'))
    .pipe(gulp.dest('dist/'))
})

gulp.task('clean', function () {
  return del([
    'dist/'
  ])
})

gulp.task('public', ['clean', 'lint'], function () {
  runSequence(['zip'])
})

gulp.task('default', function () {
  console.info('You should use npm run dev to start development mode.')
})
