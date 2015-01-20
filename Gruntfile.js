module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: process.env.PORT || 9000,
          base: 'src',
          keepalive: true
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'src'
      },
      src: ['**/*']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task(s).
  grunt.registerTask('default', ['connect']);
  grunt.registerTask('deploy', ['gh-pages']);

};
