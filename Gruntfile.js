module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['src/*.js'],
        dest: 'lib/jquery.table_sort.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'lib/jquery.table_sort.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      }
    }
  });

  // Load the plugin.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};
