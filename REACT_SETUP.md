# React App Setup

Webpack and React setup from scratch.

## Contents:

- [Some Useful Links](#some-useful-links)
- [Installations](#installations)
- [Webpack Configuration](#webpack-configuration)
- [Babel Config](#babel-config)
- [Clean output folder](#clean-output-folder)
- [Asset Management](#asset-management)
- [JSX](#jsx)
- [Sass Setup](#sass-setup)
- [Add scripts to package.json](#add-scripts)
- [index.js](#index-js)
- [Components folder](#components-folder)
- [GitHub Pages](#github-pages)

## Some Useful Links

The [Webpack Getting Started](https://webpack.js.org/guides/getting-started/) and [Webpack Asset Managent](https://webpack.js.org/guides/asset-management/) is a good place to start for setting up webpack.

This [FreeCodeCamp article](https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/) is a helpful article that shows webpack, babel and react setup. It also shows how to setup `prettier` and `ESlint`.

## Installations

Create the package.json, this will ask you to fill it in.

    $ npm init

Or to setup a default package.json

    $ npm init -y

### React and ReactDOM install

    $ npm install react react-dom

### Webpack Install

    $ npm install --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin

### Babel Install

    npm add -D @babel/core babel-loader @babel/preset-env @babel/preset-react

**Note**: `-D` is the same as `--save-dev`.

## Webpack Configuration

### Create `webpack.config.js`

This includes the HtmlWebpackPlugin. It creates the output folder with everything it needs in it. Use loaders and rules to include different kinds of assets.

The `build` (or `dist` folder in this case) contains everything it needs to run. This is the folder that can be pushed to its own branch on github and hosted on github pages or wherever you host it.

This is the configuration with no assets included, just javascript.

    const path = require(‘path’); 						// path module is a core node module
    const HtmlWebpackPlugin = require(‘html-webpack-plugin’);

    module.exports = {
      entry: ‘./src/index.js’,					// this is where all our react code will be
    output: {
        path: path.join(__dirname, ‘/dist’),			// this is where it will get compiled to
        filename: ‘index_bundle.js’,				// you can call this what you want
        clean: true                         // clean the dist each build
      },
      module: {						// setup the loaders
        rules: [						// rules is an array
          {
            test: /\.js$/, 						// look for anything thats a js file for babel to compile
            exclude: /node_modules/,				// what to ignore (these are regexp)
            use: {
              loader: ‘babel-loader’				// use the babel loader
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: ‘./src/index.html’
        })
      ]
    }

### Source maps for better error logs.

Put this in the `webpack.config.js`.

    module.exports = {
      devtool: 'inline-source-map',
      // … the rest of the config
    };

### Clean output folder

To cleanup the dist folder each build, add this to the output part of the `webpack.config.js` (where the filename and path properties are):

    clean: true

[Page Top](#react-app-setup)

## Asset Management

[webpack docs](https://webpack.js.org/guides/asset-management/#loading-css)

I followed the instuctions to get css loader and image loader setup. Add regex in the webpack config to look for more image formats.

## CSS

Install:

    $ npm install -D style-loader css-loader

Config:

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },

## Images

    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },

## JSX

VSCode will let you use html / react snippets, ie. for html tags and react attribute versions eg. className, if the file extension is .jsx. NOTE: I think the snippets need to be installed in VSCode first.

However there is an error when webpack tries to build these files. Fix with:

    resolve: {
      extensions: ['', '.js', '.jsx'],
    }

Also test for .jsx and .js:

    test: /\.(js|jsx)$/,

## Sass Setup

    $ npm install sass-loader sass --save-dev

And add this to `webpack.config.js`:

    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },

Now just import sass files into jsx files like you would do with css files.

    import './app.sass';

## Add scripts

One for webpack-dev-server, one for building into dist folder.

    “scripts”: {
      “start”: “webpack-dev-server –mode development –open –hot”,
      “build”: “webpack –mode production”
    }

**--mode development**  
**--open** will open automatically when we run the command  
**--hot** will auto reload when you save

**--mode production** set mode to production

[Page Top](#react-app-setup)

## Create index.js and index.html

Create `src/index.js` folder and file. This is where the React app goes.

Create a template file `src/index.html`.

Fill in the html boilerplate and a `<div id=”app”></div>` element for the React app to go.

We don’t need to include the bundle file, webpack will do that for us (html-webpack-plugin).

## Babel Config

Create `.babelrc`.

    {
      "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
      ]
    }

## Index js

    import React from ‘react’;				// we can use ES6 modules because it will get compiled
    import ReactDOM from ‘react-dom’;
    import App from ‘./components/App’;

    ReactDOM.render(<App />, document.getElementById(‘app’));

## Components folder

This is where the react components go.

eg. `src/components/App.js`:

Note the use of capitalized file / component name for react components.

    Import React, {Component} from ‘react’;

    class App extends Component {
        render() {
          return (
            <div>
                <h1>My React App</h1>
            </div>
            );
      }
    }

    export default App;

Or use functional components:

    import React from 'react';

    const App = () => {
      return (
        <div></div>
      )
    }

## Github Pages

You can use this command to push the build folder to git hub in its own branch. Then you can go to settings and set this as the branch to host the page.

    $ git subtree push --prefix dist origin gh-pages

[Page Top](#react-app-setup)
