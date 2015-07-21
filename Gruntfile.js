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
		browserSync: {
			dev: {
				bsFiles: {
					src : 'source_file.html'
				},
				options: {
					server: {
						baseDir: "./",
						index: "source_file.html"
					},
					watchTask: true
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
		},
        htmlmin: {
            options: {
                removeComments     : true,
                collapseWhitespace : true,
                minifyCSS          : true,
                keepClosingSlash   : true,
            },
            files: {
                expand : true,
                ext    : '.html',
                src    : ['./dist/email-inline.html'],
                dest   : './'
            }
        },
        /**
         * Watch
         */
        watch: {
          sass: {
            files: 'source_file.html',
            tasks: ['uncss', 'processhtml', 'premailer', 'htmlmin']
          }
        }
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-premailer');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default', ['browserSync','watch'])
}