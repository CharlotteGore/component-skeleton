module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		mocha_phantomjs : {
			options : {
				'reporter' : 'spec'		
			},
			all : ['test/**/*.html']
		},
		jshint : {
			files : ['index.js']			
		},
		shell : {
			install : {
				command : 'component install'	,
				options : {
					stdout : true,
					stderr : true

				}		
			},
			build : {
				command : 'component build',
				options : {
					stdout : true,
					stderr : true

				}
			}
				
		},
		watch : {
			files : ["index.js"],
			tasks : ['jshint', 'shell:install', 'shell:build', 'mocha_phantomjs']				
		}
	});
	grunt.loadNpmTasks('grunt-mocha-phantomjs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', 'shell:build');
	grunt.registerTask('install', 'shell:install');
	grunt.registerTask('test', 'mocha_phantomjs');
}
