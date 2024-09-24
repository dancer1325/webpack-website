---
title: Configuration Types
sort: 3
contributors:
  - sokra
  - skipjack
  - kbariotis
  - simon04
  - fadysamirsadek
  - byzyk
  - EugeneHlushko
  - dhurlburtusa
  - anshumanv
  - thorn0
---

* OTHER ways / export 1! configuration object

## Exporting a Function

* == export a function (NOT an object) | webpack configuration
  * `module.exports = function(env, argv) {}`
    * `env`
      * == environment
      * check [environment options CLI documentation](/api/cli/#environment-options)
    * `argv`
      * == options map /
        * passed to webpack
        * allowed keys
          * [`output-path`](/api/cli/#flags)
          * [`mode`](/api/cli/#flags)
* uses
  * separate | `webpack.config.js`, between
    * [development](/guides/development) &
    * [production builds](/guides/production)

  ```diff
  -module.exports = {
  +module.exports = function(env, argv) {
  +  return {
  +    mode: env.production ? 'production' : 'development',
  +    devtool: env.production ? 'source-map' : 'eval',
       plugins: [
         new TerserPlugin({
           terserOptions: {
  +          compress: argv.mode === 'production' // only if `--mode production` was passed
           }
         })
       ]
  +  };
  };
  ```

## Exporting a Promise

* Webpack
  * run the function / -- exported by the -- configuration file
  * wait for a Promise to be returned
* uses
  * asynchronously load configuration variables
* if you want to export multiple promises -> wrap them into `Promise.all([/* Your promises */]).`

  ```js
  module.exports = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          entry: './app.js',
          /* ... */
        });
      }, 5000);
    });
  };
  ```

* ONLY works, using webpack via CLI
  * [`webpack()`](/api/node/#webpack) expects an object

## Exporting multiple configurations

* TODO:
Instead of exporting a single configuration object/function, you may export multiple configurations (multiple functions are supported since webpack 3.1.0). When running webpack, all configurations are built. For instance, this is useful for [bundling a library](/guides/author-libraries) for multiple [targets](/configuration/output/#outputlibrarytarget) such as AMD and CommonJS:

```js
module.exports = [
  {
    output: {
      filename: './dist-amd.js',
      libraryTarget: 'amd',
    },
    name: 'amd',
    entry: './app.js',
    mode: 'production',
  },
  {
    output: {
      filename: './dist-commonjs.js',
      libraryTarget: 'commonjs',
    },
    name: 'commonjs',
    entry: './app.js',
    mode: 'production',
  },
];
```

T> If you pass a name to [`--config-name`](/api/cli/#config-name) flag, webpack will only build that specific configuration.

### dependencies

In case you have a configuration that depends on the output of another configuration, you can specify a list of dependencies using the [`dependencies`](/configuration/other-options/#dependencies) array.

**webpack.config.js**

```js
module.exports = [
  {
    name: 'client',
    target: 'web',
    // …
  },
  {
    name: 'server',
    target: 'node',
    dependencies: ['client'],
  },
];
```

### parallelism

In case you export multiple configurations, you can use the `parallelism` option on the configuration array to specify the maximum number of compilers that will compile in parallel.

- Type: `number`
- Available: 5.22.0+

**webpack.config.js**

```javascript
module.exports = [
  {
    //config-1
  },
  {
    //config-2
  },
];
module.exports.parallelism = 1;
```
