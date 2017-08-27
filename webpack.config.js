var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/static/'
	},
	module: {
		rules: [{
			test: /\.js?/i,
			loader: 'babel-loader',
			options: {
				presets: [
					'es2015'
				],
				plugins: [
					['transform-react-jsx', { pragma: 'h' }]
				]
			}
		}]
	}
}
