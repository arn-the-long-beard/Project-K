module.exports = function (grunt) {
  grunt.initConfig({
    nsp: {
      package: grunt.file.readJSON('package.json')
    }
  })

  grunt.loadNpmTasks('grunt-nsp')
}
