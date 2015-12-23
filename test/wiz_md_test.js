'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.wiz_md = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    default_options: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/Object.prototype.toString.md');
        var expected = grunt.file.read('test/expected/Object.prototype.toString.md');
        test.equal(actual, expected, 'default_options');

        test.done();
    },
    custom_options: function (test) {
        test.expect(2);

        var actual = grunt.file.read('tmp/testimg.md');
        var expected = grunt.file.read('test/expected/testimg.md');
        test.equal(actual, expected, 'custom_options');

        var existImg = grunt.file.exists('tmp/images/testimg/_u793A_u4F8B_u56FE_u7247_02.jpg') && grunt.file.exists('tmp/images/testimg/_u793A_u4F8B_u56FE_u7247_03.jpg');

        test.ok(existImg, "all images should exist!");

        test.done();
    }
};
