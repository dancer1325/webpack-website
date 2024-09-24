---
title: Getting Started
description: Learn how to bundle a JavaScript application with webpack 5.
sort: 1
contributors:
  - bebraw
  - varunjayaraman
  - cntanglijun
  - chrisVillanueva
  - johnstew
  - simon04
  - aaronang
  - TheDutchCoder
  - sudarsangp
  - Vanguard90
  - chenxsan
  - EugeneHlushko
  - ATGardner
  - ayvarot
  - bjarki
  - ztomasze
  - Spiral90210
  - byzyk
  - wizardofhogwarts
  - myshov
  - anshumanv
  - d3lm
  - snitin315
  - Etheryen
---

* allows
  * compiling JavaScript modules
* check [installation](/guides/installation)
* ways to interact with webpack
  * [CLI](/api/cli) or
  * [API](/api/node)
* check
  * [core concepts](/concepts)
  * [vs other tools](/comparison)


<StackBlitzPreview example="getting-started?terminal=" />

## Basic Setup

* project created is | "examples"
* steps

  ```bash
  # 1. create a directory
  mkdir webpack-demo
  cd webpack-demo
  # 2. initialize npm
  npm init -y
  # 3. install webpack & webpack-cli locally
  npm install webpack webpack-cli --save-dev
  ```

* **`diff`** blocks -- to show -- changes / made to directories, files, and code
  * _Example:_ For instance

  ```diff
  + this is a new line you shall copy into your code
  - and this is a line to be removed from your code
    and this is a line not to touch.
  ```

* create the following directory structure, files and their contents

  ```diff
    webpack-demo
    |- package.json
    |- package-lock.json
  + |- index.html
  + |- /src
  +   |- index.js
  ```

  ```javascript, title=src/index.js
  function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
  ```

  ```html, title=index.html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Getting Started</title>
      <script src="https://unpkg.com/lodash@4.17.20"></script>
    </head>
    <body>
      <script src="./src/index.js"></script>
    </body>
  </html>
  ```

  * make our `package.json`
    * `private`  -> NO publish it
    * remove the `main` entry

  ```diff
   {
     "name": "webpack-demo",
     "version": "1.0.0",
     "description": "",
  -  "main": "index.js",
  +  "private": true,
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "",
     "license": "MIT",
     "devDependencies": {
       "webpack": "^5.38.1",
       "webpack-cli": "^4.7.2"
     }
   }
  ```

* ways to manage scripts
  * executing one before the other
    * problems
      * NOT immediately apparent that the script -- depends on an -- external library
      * if a dependency is missing, OR included in the wrong order -> the application will NOT function properly
      * if a dependency is included, BUT NOT used -> browser will be forced to download unnecessary code
  * webpack manage the scripts

## Creating a Bundle

* separate the "source" code (`./src`) -- from -- "distribution" code (`./dist`)
  * "source" code == code / we'll write and edit
  * "distribution" code == minimized & optimized `output` of our build process / loaded | browser

  **project**

  ```diff
    webpack-demo
    |- package.json
    |- package-lock.json
  + |- /dist
  +   |- index.html
  - |- index.html
    |- /src
      |- index.js
  ```

  * `index.html`
    * was created manually, EVEN THOUGH it is now placed | `dist` directory
    * on [another guide](/guides/output-management/#setting-up-htmlwebpackplugin), we will generate `index.html` -> safe to empty the `dist` directory

* bundling our script

  ```bash
  npm install --save lodash
  ```

  * if you need to install a package / will be bundled | your production bundle -> use `npm install --save`
  * if you need to install a package / development purposes (e.g. a linter, testing libraries, etc.) -> use `npm install --save-dev

  * `import lodash` | our script

    **src/index.js**

    ```diff
    +import _ from 'lodash';
    +
     function component() {
       const element = document.createElement('div');

    -  // Lodash, currently included via a script, is required for this line to work
    +  // Lodash, now imported by this script
       element.innerHTML = _.join(['Hello', 'webpack'], ' ');

       return element;
     }

     document.body.appendChild(component());
    ```

  * modify file / load the bundle

    **dist/index.html**

    ```diff
     <!DOCTYPE html>
     <html>
       <head>
         <meta charset="utf-8" />
         <title>Getting Started</title>
    -    <script src="https://unpkg.com/lodash@4.17.20"></script>
       </head>
       <body>
    -    <script src="./src/index.js"></script>
    +    <script src="main.js"></script>
       </body>
     </html>
    ```

  * webpack
    * builds a dependency graph
    * generates an optimized bundle / scripts will be executed in the correct order

* `npx webpack`
  * `src/index.js` as the [entry point](/concepts/entry-points)
  * generate `dist/main.js` as the [output](/concepts/output)
  * `npx` command
    * Node 8.2+ / npm 5.2.0+
    * picks the `./node_modules/.bin/*`
      * _Example:_ `npx webpack` runs the `./node_modules/.bin/webpack`

```bash
$ npx webpack
[webpack-cli] Compilation finished
asset main.js 69.3 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 1851 ms
```

* Open `dist/index.html` | your browser

## Modules

* TODO:
The [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements have been standardized in [ES2015](https://babeljs.io/docs/en/learn/). They are supported in most of the browsers at this moment, however there are some browsers that don't recognize the new syntax. But don't worry, webpack does support them out of the box.

Behind the scenes, webpack actually "**transpiles**" the code so that older browsers can also run it. If you inspect `dist/main.js`, you might be able to see how webpack does this, it's quite ingenious! Besides `import` and `export`, webpack supports various other module syntaxes as well, see [Module API](/api/module-methods) for more information.

Note that webpack will not alter any code other than `import` and `export` statements. If you are using other [ES2015 features](http://es6-features.org/), make sure to [use a transpiler](/loaders/#transpiling) such as [Babel](https://babeljs.io/) via webpack's [loader system](/concepts/loaders/).

## Using a Configuration

As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a [configuration file](/concepts/configuration). This is much more efficient than having to manually type in a lot of commands in the terminal, so let's create one:

**project**

```diff
  webpack-demo
  |- package.json
  |- package-lock.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

**webpack.config.js**

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Now, let's run the build again but instead using our new configuration file:

```bash
$ npx webpack --config webpack.config.js
[webpack-cli] Compilation finished
asset main.js 69.3 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 1934 ms
```

T> If a `webpack.config.js` is present, the `webpack` command picks it up by default. We use the `--config` option here only to show that you can pass a configuration of any name. This will be useful for more complex configurations that need to be split into multiple files.

A configuration file allows far more flexibility than CLI usage. We can specify loader rules, plugins, resolve options and many other enhancements this way. See the [configuration documentation](/configuration) to learn more.

## NPM Scripts

Given it's not particularly fun to run a local copy of webpack from the CLI, we can set up a little shortcut. Let's adjust our _package.json_ by adding an [npm script](https://docs.npmjs.com/misc/scripts):

**package.json**

```diff
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "test": "echo \"Error: no test specified\" && exit 1",
+    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
```

Now the `npm run build` command can be used in place of the `npx` command we used earlier. Note that within `scripts` we can reference locally installed npm packages by name the same way we did with `npx`. This convention is the standard in most npm-based projects because it allows all contributors to use the same set of common scripts.

Now run the following command and see if your script alias works:

```bash
$ npm run build

...

[webpack-cli] Compilation finished
asset main.js 69.3 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 1940 ms
```

T> Custom parameters can be passed to webpack by adding two dashes between the `npm run build` command and your parameters, e.g. `npm run build -- --color`.

## Conclusion

Now that you have a basic build together you should move on to the next guide [`Asset Management`](/guides/asset-management) to learn how to manage assets like images and fonts with webpack. At this point, your project should look like this:

**project**

```diff
webpack-demo
|- package.json
|- package-lock.json
|- webpack.config.js
|- /dist
  |- main.js
  |- index.html
|- /src
  |- index.js
|- /node_modules
```

W> Do not compile untrusted code with webpack. It could lead to execution of malicious code on your computer, remote servers, or in the Web browsers of the end users of your application.

If you want to learn more about webpack's design, you can check out the [basic concepts](/concepts) and [configuration](/configuration) pages. Furthermore, the [API](/api) section digs into the various interfaces webpack offers.
