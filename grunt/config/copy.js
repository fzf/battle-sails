module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      }]
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
            cwd: '<%= yeoman.app %>/bower_components/',
            dest: '<%= yeoman.app %>/styles/fonts/',
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
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
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
