var knownHelpers = ['t'].reduce(function (memo, helperName) {
    memo[helperName] = true;
    return memo;
}, {});

module.exports = function (grunt) {
    return {
        compile: {
            options: {
                namespace: false,
                compilerOptions: {
                    knownHelpers: knownHelpers,
                    knownHelpersOnly: false
                },
                processContent: function (content, filepath) {
                    return content.replace(/<!--.*?-->/g, '').replace(/[ \n]{2,}/g, ' ');
                }
            },
            expand: true,
            cwd: '<%= folderForTask %>',
            src: '**/*.hbs',
            dest: '<%= templatesRoot %>',
            ext: '.tmpl.js'
        }
    }
};