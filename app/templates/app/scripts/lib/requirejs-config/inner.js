var require = {
	baseUrl: _G.jsPath + '/lib',
	// baseUrl: 'http://192.168.180.54:9000/scripts/lib',
	// deps: ['inner/global-layout','inner/btn-base', 'inner/table-base','inner/search-page', 'inner/moreSearch','inner/add', 'inner/tab'],
	paths: {
		'app': '../app',
		'common': '../common',
		'css': 'require-css/css',
		'csspath': '../../css',
		'inner': '../common/inner',
		'utils': '../common/utils',
		'jquery': 'jquery/jquery'
	},
	shim: {
		jquery: {
			exports: '$'
		}

	}
}