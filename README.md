# grunt-wiz-md

> Get markdown files from wiz notes based on [node-wiz-md](https://www.npmjs.com/package/node-wiz-md)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wiz-md --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wiz-md');
```

## The "wiz_md" task

### Overview
In your project's Gruntfile, add a section named `wiz_md` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  wiz_md: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options
For more detail, please go to [node-wiz-md](https://www.npmjs.com/package/node-wiz-md).

#### options.debug
Type: `Boolean`
Default value: `false`

Whether to show debug loggings.

#### options.contentFn
Type: `Function`
Default value: `null`

Change the content. Support one param `content`, and return a new content.


#### options.completeFn
Type: `Function`
Default value: `null`

Run after node-wiz-md complete.

### Usage Examples

#### Default Options


```js
grunt.initConfig({
  wiz_md: {
    options: {},
    files: {
      'tmp/': ['test/fixtures/Array', 'test/fixtures/Object']
    },
  },
});
```

#### Custom Options


```js
grunt.initConfig({
  wiz_md: {
    options: {
        debug: true,
        contentFn: function (content) {
            return content.replace('test', 'helinjiang');
        }, completeFn: function () {
            console.log('all is complete');
        }
    },
    files: {
        'tmp/': ['test/fixtures/test']
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015.12.23 v0.2.0 Add test and modify readme. Update [node-wiz-md](https://www.npmjs.com/package/node-wiz-md) to v 0.3.0