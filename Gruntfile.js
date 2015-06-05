module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uncss: {
			dist: {
				src: ['source_file.html'],
				dest: 'dist/css/tidy.css',
				options: {
					report: 'min' // optional: include to report savings
				}
			}
		},
		processhtml: {
			dist: {
				files: {
					'dist/email.html': ['source_file.html']
				}
			}
		},
		premailer: {
		  main: {
		    options: {
		      verbose: true
		    },
		    files: {
		      'dist/email-inline.html': ['dist/email.html']
		    }
		  }
		}	
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-premailer');
	grunt.registerTask('email', ['uncss', 'processhtml', 'premailer'])
}