const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const copyFiles = [
	{
		from: path.resolve("src/manifest.json"),
		to: `${path.resolve("dist")}/manifest.json`
	},
	{
		from: path.resolve("src/assets/css"),
		to: path.resolve("dist/css")
	},
	{
		from: path.resolve("src/assets/img"),
		to: path.resolve("dist/img")
	},
	{
		from: path.resolve("src/_locales"),
		to: path.resolve("dist/_locales")
	}
];
// 复制插件
const plugins = [
	new CopyWebpackPlugin({
		patterns: copyFiles
	})
];

module.exports = {
	pages: {
		popup: {
			entry: `src/popup/main.js`,
			template: `src/popup/index.html`,
			filename: `popup.html`
	    },
	    content: {
			entry: `src/content-scripts/main.js`,
			// filename: `content.html`
	    }
	},
	pluginOptions: {
	   browserExtension: {
	      componentOptions: {
	         background: {
	            entry: 'src/background/main.js'
	         },
	         contentScripts: {
	            entries: {
	               'content-script': [
	                  'src/content-scripts/main.js'
	               ]
	            }
	         }
	      }
	   }
	},
	productionSourceMap: false,
	configureWebpack: {
		entry: {
			content: "./src/content-scripts/main.js",
			background: "./src/background/main.js"
		},
		output: {
			filename: "js/[name].js"
		},
		plugins
	},
	css: {
		extract: {
			filename: "css/[name].css"
		}
	},
	chainWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.output.filename('js/[name].js').end()
			config.output.chunkFilename('js/[name].js').end()
		}
	}
}