'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    app: grunt.file.readJSON('bower.json'),
    banner: '/*! ngAlphabetIndexer v<%= app.version %> by Matthieu COLLE - ' +
                'https://github.com/raiseandfall/ng-alphabet-indexer */\n',

    clean: {
      dist: {
        src: ['ng-alphabet-indexer.*']
      }
    },

    uglify: {
      js: {
        src: ['ng-alphabet-indexer.js'],
        dest: 'ng-alphabet-indexer.min.js',
        options: {
          banner: '<%= banner %>'
        }
      }
    },

    concat: {
      js: {
        src: [
          'src/scripts/app.js',
          'src/scripts/controller.js',
          'src/scripts/directive.js'
        ],
        dest: 'ng-alphabet-indexer.js'
      }
    },

    sass: {
      build: {
        files: {
          'ng-alphabet-indexer.css':'src/styles/ng-alphabet-indexer.scss'
        },
        options : {
          style : 'expanded'
        }
      }
    },

    cssmin: {
      css: {
        files: {
          'ng-alphabet-indexer.min.css': 'ng-alphabet-indexer.css'
        },
        options: {
          banner: '<%= banner %>'
        }
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          src: 'ng-alphabet-indexer.css',
          dest: 'ng-alphabet-indexer.css'
        }]
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['src/scripts/*.js'],
        tasks: [],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'src/{,*/}*.html'
        ]
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'src/scripts/*.js'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('test', [
    'clean:dist',
    'autoprefixer',
    'karma'
  ]);

  grunt.registerTask('dev', [
    'clean:dist',
    'sass',
    'autoprefixer',
    'cssmin',
    'concat'
  ]);

  grunt.registerTask('build', [
    'dev',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'test',
    'build'
  ]);

  grunt.loadNpmTasks('grunt-sass');
};
