const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

sass.compiler = require('node-sass')

const StylesEntry = './src/sass/**/*.scss'
const StylesOutput = './static/css'
const JsEntry = './src/js/**/*.js'
const JsOutput = './static/js'

const sassDev = () =>
  src(StylesEntry)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(StylesOutput))

const sassWatch = () => watch(StylesEntry, sassDev)

const sassProd = () =>
  src(StylesEntry)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest(StylesOutput))

const jsDev = () =>
  src(JsEntry)
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(dest(JsOutput))

const jsWatch = () => watch(JsEntry, jsDev)

const jsProd = () =>
  src(JsEntry)
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(uglify())
    .pipe(dest(JsOutput))

exports.watch = parallel(sassWatch, jsWatch)

exports.prod = parallel(sassProd, jsProd)
