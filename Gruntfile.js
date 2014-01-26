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
        src: ['build/*.*']
      }
    },

    uglify: {
      js: {
        src: ['build/ng-alphabet-indexer.js'],
        dest: 'build/ng-alphabet-indexer.min.js',
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
        dest: 'build/ng-alphabet-indexer.js'
      }
    },

    sass: {
      build: {
        files: {
          'build/ng-alphabet-indexer.css':'src/styles/ng-alphabet-indexer.scss'
        },
        options : {
          style : 'expanded'
        }
      }
    },

    cssmin: {
      css: {
        files: {
          'build/ng-alphabet-indexer.min.css': 'build/ng-alphabet-indexer.css'
        },
        options: {
          banner: '<%= banner %>'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          src: 'build/ng-alphabet-indexer.css',
          dest: 'build/ng-alphabet-indexer.css'
        }]
      }
    },

    watch: {
      scss: {
        files: ['src/styles/*.scss'],
        tasks: ['scss']
      },
      js: {
        files: ['src/scripts/*.js'],
        tasks: ['build']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'ng-alphabet-indexer.js',
          'ng-alphabet-indexer.css'
        ]
      }
    },

    connect: {
      server: {
        options: {
          hostname: '*',
          port: 8000,
          base: './'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'src/scripts/*.js'
      ]
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('scss', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('js', ['jshint', 'concat']);

  grunt.registerTask('dev', ['connect:server', 'watch']);
  grunt.registerTask('test', ['clean:dist', 'autoprefixer', 'karma']);

  grunt.registerTask('build', ['clean:dist', 'scss', 'js', 'uglify']);

  grunt.loadNpmTasks('grunt-sass');
};
