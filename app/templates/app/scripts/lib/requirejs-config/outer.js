var require = {
	baseUrl: _G.jsPath + '/lib',
	deps: ['outer/side-nav'],
	paths: {
		'app': '../app',
		'common': '../common',
		'outer': '../common/outer',
		'utils': '../common/utils',
		'jquery': 'jquery/jquery'
	},
	shim: {
		jquery: {
			exports: '$'
		}

	}
}