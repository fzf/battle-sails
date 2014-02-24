module.exports = function(grunt) {

	grunt.config.set('clean', {
		dev: ['.tmp/public/**'],
		build: ['www'],
    dist: {
      files: [{
        dot: true,
        src: [
          '.tmp',
          '<%= yeoman.dist %>/*',
          '!<%= yeoman.dist %>/.git*'
        ]
      }]
    },
    server: '.tmp'
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};
