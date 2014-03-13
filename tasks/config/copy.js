/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [
        {
          expand: true,
          cwd: './app/bower_components',
          src: ['**/*.!(coffee|less)'],
          dest: '.tmp/public/bower_components'
        },
        {
  				expand: true,
  				cwd: './assets',
  				src: ['**/*.!(coffee|less)'],
  				dest: '.tmp/public'
  			},
        {
          expand: true,
          cwd: './app/scripts',
          src: ['**/*.!(coffee|less)'],
          dest: '.tmp/public/app'
        }
      ]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
    fonts: {
      files: [
        {
          expand: true,
          flatten: true,
          filter: 'isFile',
          cwd: 'app/bower_components/',
          dest: 'app/styles/fonts/',
          src: [
            'bootstrap-sass/dist/fonts/**', // Bootstrap
            'font-awesome/fonts/**' // Font-Awesome
          ]
        }
      ]
    },
    dist: {
      files: [
        {
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: [
            '*.{ico,txt}',
            '.htaccess',
            'images/{,*/}*.{webp,gif}',
            'styles/fonts/*'
          ]
        }
      ]
    }
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
