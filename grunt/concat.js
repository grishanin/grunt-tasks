module.exports = function(grunt) {
    return {
        options: {
            
        },
        dist: {
            src: '<%= templatesRoot %>' + '<%= templatesInRoot %>',
            dest: '<%= templatesConcat %>'
        }
    };
};