module.exports = function(grunt) {
  // grunt.registerTask('speak', function(){
  //   console.log("i am speaking");
  //
  // });
  //
  // grunt.registerTask('yell', function(){
  //   console.log("i am yelling");
  //
  // });
  //
  // grunt.registerTask('default',['speak', 'yell']);


  // Project configuration.
grunt.initConfig({
  concat: {

    dist: {
      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
      dest: 'dist/built.js',
    },
  },
});
  grunt.loadNpmTasks('grunt-contrib-concat');

}
