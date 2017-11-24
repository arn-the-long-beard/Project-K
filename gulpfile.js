const gulpNSP = require('gulp-nsp')
const path = require('path')
const gulp = require('gulp')
// To check your package.json
gulp.task('nsp', function (cb) {
  gulpNSP({package: path.join(__dirname, 'package.json')}, cb)
})

// To check your shrinkwrap.json
gulp.task('nsp', function (cb) {
  gulpNSP({shrinkwrap: path.join(__dirname, 'npm-shrinkwrap.json')}, cb)
})

// If you don't want to stop your gulp flow if some vulnerabilities have been found use the stopOnError option:
gulp.task('nsp', function (cb) {
  gulpNSP({
    package: path.join(__dirname, 'package.json'),
    stopOnError: false
  }, cb)
})

// For enterprises building behind a proxy (HTTP_PROXY or HTTPS_PROXY), use the proxy option:
gulp.task('nsp', function (cb) {
  gulpNSP({
    shrinkwrap: path.join(__dirname, 'npm-shrinkwrap.json'),
    proxy: process.env.HTTPS_PROXY
  }, cb)
})
