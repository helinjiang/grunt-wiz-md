/*
 * grunt-wiz-md
 * https://github.com/helinjiang/grunt-wiz-md
 *
 * Copyright (c) 2015 helinjiang
 * Licensed under the MIT license.
 */

'use strict';

var nodeWizMd = require('node-wiz-md');

function contentFn(content) {
    return content;
}

function completeFn() {

}

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('wiz_md', 'Get markdown files from wiz notes.', function () {
        var done = this.async();

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            debug: false,
            contentFn: contentFn,
            completeFn: completeFn
        });

        var total = 0;
        var i = 0;

        var checkDone = function (index) {
            //console.log(index, total);
            if (index >= total) {
                //console.log("Next to done()");
                done();
            }
        };

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            var srcArr = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });

            var dest = f.dest;

            srcArr.forEach(function (src) {
                total++;
                nodeWizMd(src, dest, {
                    debug: options.debug,
                    contentFn: options.contentFn,
                    completeFn: function () {
                        //console.log('completeCallback for %s', src);
                        options.completeFn();

                        i++;
                        checkDone(i);
                    }
                });
            });

            // Write the destination file.
            //grunt.file.write(dest, src);

            // Print a success message.
            //grunt.log.writeln('File "' + dest + '" created.');
        });
    });

};
