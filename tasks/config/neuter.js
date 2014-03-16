module.exports = function(grunt) {

  grunt.config.set('neuter', {
    app: {
      options: {
        filepathTransform: function (filepath) {
          return 'app/' + filepath;
        }
      },
      src: 'app/scripts/app.js',
      dest: '.tmp/public/js/combined-scripts.js'
    }
  });

  grunt.loadNpmTasks('grunt-neuter');
}
