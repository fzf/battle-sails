module.exports = function(grunt) {

  grunt.config.set('emberTemplates', {
    options: {
      templateName: function (sourceFile) {
        var templatePath = 'app/templates/';
        return sourceFile.replace(templatePath, '');
      }
    },
    dist: {
      files: {
        '.tmp/public/js/compiled-templates.js': 'app/templates/{,*/}*.hbs'
      }
    }
  });

  grunt.loadNpmTasks('grunt-ember-templates');
}
