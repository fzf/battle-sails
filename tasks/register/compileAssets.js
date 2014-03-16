module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'less:dev',
		'copy:dev',
		'neuter:app',
		'emberTemplates',
		'compass:server',
		'coffee:dev'
	]);
};
