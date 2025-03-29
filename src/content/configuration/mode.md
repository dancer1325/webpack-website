---
title: Mode
sort: 5
contributors:
  - EugeneHlushko
  - byzyk
  - mrichmond
  - Fental
  - snitin315
  - chenxsan
related:
  - title: 'webpack default options (source code)'
    url: https://github.com/webpack/webpack/blob/main/lib/config/defaults.js
---

* allows
  * telling webpack -- to use -- its built-in optimizations accordingly

## How to use?

* ways
  * | "webpack.config.js"
    ```javascript
    module.exports = {
      mode: 'development',
    };
    ```
  * pass -- via -- [CLI](/api/cli/) argument
    ```bash
    webpack --mode=development
    ```

## ALLOWED values

  ```
  string = 'production': 'none' | 'development' | 'production'
  ```
  * == by default, `'production'`
  * if `mode` is NOT provided (neither configuration nor CLI) -> CLI -- will use -- `NODE_ENV` (environment variable) value

| Option        | Description                                                                                                                                                                                                                                               |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `development` | \| `DefinePlugin`, sets `process.env.NODE_ENV=development` <br/> enables USEFULL names \| modules & chunks                                                                                                                                                |
| `production`  | \| `DefinePlugin`, sets `process.env.NODE_ENV=production` <br/> enables deterministic mangled names \| modules & chunks (`FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin` and `TerserPlugin`) |
| `none`        | NONE default optimization options <br/> allows changing the behavior -- according to the -- `mode` variable                                                                                                                                               |


### Mode: development

```js
// webpack.development.config.js
module.exports = {
  mode: 'development',
};
```

### Mode: production

```js
// webpack.production.config.js
module.exports = {
  mode: 'production',
};
```

### Mode: none

```js
// webpack.custom.config.js
module.exports = {
  mode: 'none',
};
```

* if you want to change the behavior -> `module.exports` == function (-- instead of an -- object)
  * _Example:_
    ```javascript
    var config = {
      entry: './app.js',
      //...
    };

    module.exports = (env, argv) => {
      if (argv.mode === 'development') {
        config.devtool = 'source-map';
      }

      if (argv.mode === 'production') {
        //...
      }

      return config;
    };
    ```
