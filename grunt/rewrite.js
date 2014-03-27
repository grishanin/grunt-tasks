module.exports = function (grunt) {
    return {
        templates: {
            src: '<%= templatesRoot %>' + '<%= templatesInRoot %>',
            editor: function (contents, filePath) {
                if (contents.indexOf('define') === 0) {
                    return contents;
                }
                var templatesRoot = grunt.config.get('templatesRoot'),
                    moduleName = filePath.substring(templatesRoot.length, filePath.lastIndexOf('.'));
                return [
                    'define("' + moduleName + '", function(require,exports,module) {\n',
                    'return require(\'vendor/handlebars-runtime\').template(',
                    contents.replace('Handlebars.template(', ''),
                    '});\n'
                ].join('');
            }
        }
    };
};