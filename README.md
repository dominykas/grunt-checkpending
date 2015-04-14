# grunt-checkpending

> Check that we have no pending changes before proceeding.

[![Build Status](https://travis-ci.org/dominykas/grunt-checkpending.svg?branch=master)](https://travis-ci.org/dominykas/grunt-checkpending)

```shell
npm install grunt-checkpending --save-dev
```

And in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-checkpending');
```

## Usage

Include the task as one of your multitasks, e.g.:

```js
grunt.registerTask("deploy", ["test", "checkpending", "copy"]
```

To skip checks:
```shell
grunt --no-checkpending
```

To force checks (disables skipping), add the second param with `true`:

```js
grunt.registerTask("deploy", ["test", "checkbranch:develop:true", "copy"]
```
