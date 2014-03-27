module.exports = function (grunt) {

    return {
        all: {
            files: '**/*.hbs',
            tasks: ['concat-templates'],
            options: {
                // Start a live reload server on the default port 35729
                livereload: true,
            }
        }
    }
};