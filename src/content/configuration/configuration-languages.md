---
title: Configuration Languages
sort: 2
contributors:
  - piouson
  - sokra
  - skipjack
  - tarang9211
  - simon04
  - peterblazejewicz
  - youta1119
  - byzyk
  - Nek-
  - liyiming22
  - daimalou
  - ChocolateLoverRaj
  - snitin315
---

* Webpack accepts configuration files / written | multiple programming & data languages
  * list of supported file extensions -- check [node-interpret](https://github.com/gulpjs/interpret) package
    * Reason: 🧠 webpack can handle -- via [node-interpret](https://github.com/gulpjs/interpret) -- many different types of configuration files 🧠

## TypeScript

* steps
  * install TypeScript + relevant type definitions -- from the -- [DefinitelyTyped](https://definitelytyped.org/) project

  ```bash
  npm install --save-dev typescript ts-node @types/node @types/webpack
  # and, if using webpack-dev-server < v4.7.0
  npm install --save-dev @types/webpack-dev-server
  ```

  * write your configuration | typescript

  **webpack.config.ts**

  ```typescript
  import path from 'path';
  import webpack from 'webpack';
  // in case you run into any typescript error when configuring `devServer`
  import 'webpack-dev-server';

  const config: webpack.Configuration = {
    mode: 'production',
    entry: './foo.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'foo.bundle.js',
    },
  };

  export default config;
  ```

  **tsconfig.json**

  ```json
  {
    "compilerOptions": {
      // TS v2.7+       , because next compilerOptions are used
      "allowSyntheticDefaultImports": true,
      "esModuleInterop": true
    }
  }
  ```

* ⚠️`ts-node`
  * ONLY supports module syntax `commonjs` ⚠️ ->
    * else, you get an error
    * ways to set up
      * `compilerOptions.target="ES5"` & `compilerOptions.module="CommonJS"` | `tsconfig.json`
      * `tsconfig.json.ts-node`
        * check [ts-node config](https://typestrong.org/ts-node/docs/imports/)

    ```json
    {
      "compilerOptions": {    //
        "module": "ESNext",
      },
      "ts-node": {        // used by webpack OR another build tool
        "compilerOptions": {
          "module": "CommonJS"
        }
      }
    }
    ```
      * install `tsconfig-paths` & separate TypeScript configuration for your webpack configs

    ```bash
    npm install --save-dev tsconfig-paths
    ```

  **tsconfig-for-webpack-config.json**

  ```json
  {
    "compilerOptions": {
      "module": "commonjs",
      "target": "es5",
      "esModuleInterop": true
    }
  }
  ```

  * can resolve a `tsconfig.json` -- via the -- environment variable provided by `tsconfig-paths`
    * -> set the environment variable `process.env.TS_NODE_PROJECT` / -- provided by -- `tsconfig-paths`
      * `TS_NODE_PROJECT` might NOT work
        * [issue](https://github.com/webpack/webpack.js.org/issues/2733)
        * -> run it with `cross-env`

  **package.json**

  ```json
  {
    "scripts": {
      "build": "cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack"
    }
  }
  ```

## CoffeeScript

* TODO:
Similarly, to use [CoffeeScript](https://coffeescript.org/), you would first install the necessary dependencies:

```bash
npm install --save-dev coffeescript
```

and then proceed to write your configuration:

**webpack.config.coffee**

```coffeescript
HtmlWebpackPlugin = require('html-webpack-plugin')
webpack = require('webpack')
path = require('path')

config =
  mode: 'production'
  entry: './path/to/my/entry/file.js'
  output:
    path: path.resolve(__dirname, 'dist')
    filename: 'my-first-webpack.bundle.js'
  module: rules: [ {
    test: /\.(js|jsx)$/
    use: 'babel-loader'
  } ]
  plugins: [
    new HtmlWebpackPlugin(template: './src/index.html')
  ]

module.exports = config
```

## Babel and JSX

In the example below JSX (React JavaScript Markup) and Babel are used, to create a JSON configuration that webpack can understand.

> Courtesy of [Jason Miller](https://twitter.com/_developit)

First, install the necessary dependencies:

```bash
npm install --save-dev babel-register jsxobj babel-preset-es2015
```

**.babelrc**

```json
{
  "presets": ["es2015"]
}
```

**webpack.config.babel.js**

```js
import jsxobj from 'jsxobj';

// example of an imported plugin
const CustomPlugin = (config) => ({
  ...config,
  name: 'custom-plugin',
});

export default (
  <webpack target="web" watch mode="production">
    <entry path="src/index.js" />
    <resolve>
      <alias
        {...{
          react: 'preact-compat',
          'react-dom': 'preact-compat',
        }}
      />
    </resolve>
    <plugins>
      <CustomPlugin foo="bar" />
    </plugins>
  </webpack>
);
```

W> If you are using Babel elsewhere and have `modules` set to `false`, you will have to either maintain two separate `.babelrc` files or use `const jsxobj = require('jsxobj');` and `module.exports` instead of the new `import` and `export` syntax. This is because while Node does support many new ES6 features, they don't yet support ES6 module syntax.
