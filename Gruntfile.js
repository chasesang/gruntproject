module.exports = function(grunt) {
  grunt.registerTask('speak', function(){
    console.log("i am speaking");

  });

  grunt.registerTask('yell', function(){
    console.log("i am yelling");

  });

  grunt.registerTask('default',['speak', 'yell']);

}
