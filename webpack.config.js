const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(s*)css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
				exclude: /\.module\.css$/
			},
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		'sass-loader'
			// 	]
			// },
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'sass-loader'
				],
				include: /\.module\.css$/
			},
			{
				test: /\.svg$/,
				use: 'file-loader'
			},
			{
				test: /\.png$/,
				use: [{
					loader: 'url-loader',
					options: {
						mimetype: 'image/png'
					}
				}]
			},
		]
	},
	resolve: {
		alias: {
			styles: path.resolve(__dirname, '..', 'src', 'scss', '*'),
			components: path.resolve(__dirname, 'src/components')
		},
		extensions: [
			'.js',
			'.jsx'
		]
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: require('html-webpack-template'),
			inject: false,
			appMountId: 'app',
		}),
		new LodashModuleReplacementPlugin,
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\\/]node_modules[\\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
}

module.exports = config;