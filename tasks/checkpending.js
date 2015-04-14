'use strict';

var shell = require("shelljs");

module.exports = function (grunt) {

	grunt.registerTask('checkpending', 'Check that we have no pending changes before proceeding.', function (force) {

		if (grunt.option('no-checkpending') && !force) {
			grunt.log.writeln("Pending check overridden via command line.");
			return;
		}

		var done = this.async();
		shell.exec("git status -s", { silent: !grunt.option('verbose') }, function (e, statusOutput) {
			if (e) {
				grunt.fail.fatal("Failed to detect the current status");
			}

			var status = statusOutput.trim();
			if (status !== "") {
				grunt.fail.fatal("You have pending changes.");
			}

			done();
		});

	});
};
