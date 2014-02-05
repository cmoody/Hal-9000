module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'src',
          keepalive: true
        }
      }
    },

    // https://npmjs.org/package/grunt-ftp-deploy
    'ftp-deploy': {
      build: {
        auth: {
          host: 'chasethebits.com',
          port: 21,
          authKey: 'key1'
        },
        src: 'src',
        dest: '/demo/Hal9000',
        exclusions: ['src/**/.DS_Store', 'src/**/Thumbs.db']
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['connect']);

  grunt.registerTask('prod', [
    'ftp-deploy'
  ])

};