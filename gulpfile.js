const { series, src, dest } = require('gulp')
const zip = require('gulp-zip')

const del = require('del')

const eslint = require('gulp-eslint')
const jsEntries = ['background.js']
const zipTarget = ['./_locales/**/*', './img/**/*', 'background.js', 'manifest.json']

function lint () {
  return src(jsEntries)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}

function compress () {
  return src(zipTarget, { base: '.' })
    .pipe(zip('chrome.zip'))
    .pipe(dest('dist/'))
}
function clean () {
  return del([
    'dist/'
  ])
}

exports.clean = clean
exports.lint = lint
exports.public = series(clean, lint, compress)
