var buster = require('buster');
var expect = buster.referee.expect;
var shell = require('shelljs');

var GRUNT_SUCCESS = "Done, without errors.";
var GRUNT_FATAL = "Fatal error:";

var execGrunt = function (gruntCmd) {
	shell.pushd('tmp');
	var execCmd = "grunt --verbose " + gruntCmd;
	console.warn("Executing for tests: " + execCmd);
	var output = shell.exec(execCmd);
	shell.popd();
	console.warn("Done executing for tests: " + execCmd);
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

	"tearDown": function () {
		shell.rm("-rf", "tmp");
	},

	"should not proceed when there's unstaged changes": function () {
		shell.pushd('tmp');
		shell.exec("touch test.file");
		shell.popd();

		var output = execGrunt("checkpending");
		expect(output.output).toMatch(GRUNT_FATAL);
		expect(output.output).toMatch("you have pending changes");
		expect(output.code).toEqual(1, "Incorrect grunt output code");
	},

	"should proceed when there are no changes": function () {
		var output = execGrunt("checkpending");
		expect(output.output).toMatch(GRUNT_SUCCESS);
		expect(output.code).toEqual(0, "Incorrect grunt output code");
	},

	"should bypass via command line": function () {
		shell.pushd('tmp');
		shell.exec("touch test.file");
		shell.popd();

		var output = execGrunt("checkpending --no-checkpending");
		expect(output.output).toMatch(GRUNT_SUCCESS);
		expect(output.code).toEqual(0, "Incorrect grunt output code");
	},

	"should not bypass via command line but forced via options": function () {
		shell.pushd('tmp');
		shell.exec("touch test.file");
		shell.popd();

		var output = execGrunt("checkpending:true --no-checkpending");
		expect(output.output).toMatch(GRUNT_FATAL);
		expect(output.output).toMatch("you have pending changes");
		expect(output.code).toEqual(1, "Incorrect grunt output code");
	},

	"should fail when git fails": function () {
		shell.pushd('tmp');
		shell.exec("echo 'corrupt' >.git/index"); // corrupt git index to trigger an error
		shell.popd();

		var output = execGrunt("checkpending");
		expect(output.output).toMatch(GRUNT_FATAL);
		expect(output.output).toMatch("Failed to detect");
		expect(output.code).toEqual(1, "Incorrect grunt output code");
	}

});