module.exports = function (grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        data: {
            folderForTask: './application/',
            prebuildFolder: './prebuild/',

            templatesRoot: './prebuild/templates/',
            templatesInRoot: '**/*.tmpl.js',
            templatesConcat: './application/views/templates.js'
        },
    });
    /*
        Для ускорения работы grunt-а можно попробовать подключить эту библиотеку (jit-grunt): https://github.com/shootaroo/jit-grunt
    */
};