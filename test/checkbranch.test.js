var buster = require('buster');
var expect = buster.referee.expect;
var shell = require('shelljs');
shell.config.silent = true;

var GRUNT_SUCCESS = "Done, without errors.";
var GRUNT_FATAL = "Fatal error:";

var execGrunt = function (cmd) {
	shell.pushd('tmp');
	var output = shell.exec("grunt " + cmd);
	shell.popd();
	return output;
};

buster.testCase("grunt-checkpending", {

	"setUp": function () {
		shell.mkdir("-p", "tmp");
		shell.pushd('tmp');
		shell.exec("git init");
		shell.cp("../test/fixture-gruntfile.js", "Gruntfile.js");
		shell.exec("git add -A");
		shell.exec("git commit -m 'initial commit'");
		shell.popd();
	},

	"should stub": function () {
		expect(true).toBeFalse();
	}

});