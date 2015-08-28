module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            coverage: {
                src: ['src/*.js'],
                options: {
                    specs: ['src/test/*.spec.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    vendor: [
                        'bower_components/**/*.min.js',
                        'node_modules/angular-mocks/angular-mocks.js'
                    ],
                    templateOptions: {
                        coverage: 'bin/coverage/coverage.json',
                        report: [
                            {
                                type: 'html',
                                options: {
                                    dir: 'bin/coverage/html'
                                }
                            },
                            {
                                type: 'cobertura',
                                options: {
                                    dir: 'bin/coverage/cobertura'
                                }
                            },
                            {
                                type: 'text-summary'
                            }
                        ],
                        threshold: {
                            lines: 75,
                            statements: 75,
                            branches: 75,
                            functions: 90
                        }
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('test', ['jasmine:coverage']);
};