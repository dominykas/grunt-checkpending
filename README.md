# grunt-checkpending

> Check that we have no pending changes before proceeding.

[![Build Status](https://travis-ci.org/dominykas/grunt-checkpending.svg?branch=master)](https://travis-ci.org/dominykas/grunt-checkpending)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-checkpending --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-checkpending');
```

## The "checkpending" task

### Overview
Include the task as one of your multitasks, e.g.:
```js
grunt.registerTask("default", ["test", "checkpending", "deploy"]
```

In the example above, the `deploy` task will only be executed, if your project has no pending changes in Git - otherwise the run will result in a fatal error.

You may override this behavior by passing `--no-checkpending` via command line. You can disable `--no-checkpending` (i.e. force the check) by setting a param for the task, e.g. `checkpending:true`.

## Release History

### 0.1.7 (2015-04-04)
* Async exec

### 0.1.6 (2015-03-30)
* Actually treat --verbose flag correctly, i.e. `silent:true` when not verbose

### 0.1.5 (2015-03-24)
* enable node 0.12 and io.js on Travis

### 0.1.4 (2015-03-24)
* bump deps

### 0.1.2 (2014-05-26)
* npm update
* Travis setup

### 0.1.1 (2013-10-01)
* Initial release
