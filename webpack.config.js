const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: ['@babel/polyfill', './src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'bin_dev'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: './bin_dev'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			bodymovin: 'bodymovin',
			jQuery: 'jquery',
			range: 'rangeslider.js',
			knob: 'jquery-knob',
			sp: 'cpr_scrollpath',
			bPopup: 'cpr_bopup',
			lottie: 'lottie-web',
			form:'form'

		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'results.html',
			template: './src/results.html',
		}),
    // new CopyWebpackPlugin([
    //   {from:'src/js/datax',to:'js'}
    // ]),
	],
	resolve: {
		alias: {
			form: './src/js/form.js',
		}
	},

	module: {

		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		]
	},

};
