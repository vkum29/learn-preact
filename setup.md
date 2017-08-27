# lEarn-Preact Setup

## Project folder
Ok We know dependencies we need. Lets create our project folder "learn-preact"

## Init and resolve dependencies
use npm or yarn to initialize project
>	npm init

or

>	yarn init

## createing list of dependecies
What you all need are
- JSX, used so we need a plugin which can transpile JSX to javascript so browser understands
- Server to serve your application
- Preact thats what we are learn right
- Package manager and bundler and CI tool

So we will use babel, webpack and Preact packages to do stuff:
- babel = babel-loader, babel-core, babel-preset-es2015
- webpack = webpack and webpack-dev-server
- preact = preact

Once initalize add packages

> npm i babel-core, webpack, webpack-dev-server, babel-preset-es2015, babel-loader, babel-preset-env, babel-plugin-transform-react-jsx, babel-plugin-transform-object-rest-spread --save-dev

or

> yarn add --dev babel-core, webpack, webpack-dev-server, babel-preset-es2015, babel-loader, babel-preset-env, babel-plugin-transform-react-jsx, babel-plugin-transform-object-rest-spread

Don't forget to add preact

> npm i preact --save

or

> yarn add --prod preact


## Creating webpack configuration to run application
Create webpack.donfig.js at root folder
Require node path module and export object which will hold settings

Add entry point, Output file to generate, module dependencies etc.

> var path = require('path');

> module.exports = {
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

## Adding scripts to package json
Add start script to run webpack-dev-server with hot loading
and build script to run webpack

> {
	"start": "webpack-dev-server --hot",
	"build": "webpack"
}

## Create src folder for scripts
create sub folder src to hold our application scripts
Create a index.js and add console.log script on DOMContentLoaded Event.

> document.addEventListener('DOMContentLoaded', () => {
	console.log( ' App is up and running ');
});

## Create index html
add script reference to static/bundle.js

<!DOCTYPE html>
<html>
<head>
	<title>learn-preact</title>
</head>
<body>
	<script type="text/javascript" src="/static/bundel.js"></script>
</body>
</html>

## run server and see application is loading
yarn start

or

npm start

##
open localhost:8080

you must see tha console App is up and running.

Concluding setup is up and running.

## Next
lEarn Preact
