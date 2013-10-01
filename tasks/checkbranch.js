/*
 * grunt-checkpending
 * https://github.com/dymonaz/grunt-checkpending
 *
 * Copyright (c) 2013 Dominykas Blyžė
 * Licensed under the MIT license.
 */

'use strict';

var shell = require("shelljs");

module.exports = function (grunt) {

	grunt.registerTask('checkpending', 'Check that we have no pending changes before proceeding.', function (force) {

		throw new Error("Not implemented");

	});
};
