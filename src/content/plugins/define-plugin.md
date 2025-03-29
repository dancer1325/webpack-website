---
title: DefinePlugin
group: webpack
contributors:
  - simon04
  - rouzbeh84
  - byzyk
  - EugeneHlushko
  - smonusbonus
  - chenxsan
---

* `DefinePlugin`
  * allows
    * 👀variables | your code -- are replaced with -- OTHER values or expressions | **compile** time👀
  * use cases
    * DIFFERENT behavior BETWEEN development builds -- & -- production builds
      * _Example:_ global constant / determine whether logging
        * log | your development build
        * NOT log | production build
  * syntax
    ```javascript
    new webpack.DefinePlugin({
      // Definitions...
    });
    ```

## How to use?

* == object /
  * 's key
    * == identifier OR MULTIPLE identifiers -- joined with -- `.`
    * if you prefix `typeof` -> ONLY | typeof calls
    * if you define values for `process` -> use `'process.env.NODE_ENV': JSON.stringify('production')` OVER `process: { env: { NODE_ENV: JSON.stringify('production') } }`
      * Reason: 🧠latter -- will overwrite the -- `process` object -> can break compatibility with SOME modules 🧠
  * 's value
    * if it's
      * string -> -- used as a -- code fragment
        * ways to do it
          * include **actual quotes** | string itself or
            * _Example:_ `'"production"'`
          * using `JSON.stringify('someVariableValue')`
            * _Example:_ `JSON.stringify('production')`
        * Reason: 🧠it's a direct text replacement 🧠
      * NOT a string (ALSO functions) -> -- will be -- stringified
      * object -> == SAME rules apply
    * are inlined | code
      * -> allow a minification pass / remove the redundant conditional
  * _Example:_
    ```javascript
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    });
    ```

    ```javascript
    console.log('Running App version ' + VERSION);
    if (!BROWSER_SUPPORTS_HTML5) require('html5shiv');
    ```

    ```javascript
    if (!PRODUCTION) {
      console.log('Debug info');
    }

    if (PRODUCTION) {
      console.log('Production log');
    }

    // AFTER passing -- through -- webpack / NO minification results
    if (!true) {
      console.log('Debug info');
    }

    if (true) {
      console.log('Production log');
    }

    // AFTER minification pass results
    console.log('Production log');
    ```

## Use cases
### Feature Flags

* == enable/disable features | production/development build -- via -- [feature flags](https://en.wikipedia.org/wiki/Feature_toggle)

```javascript
new webpack.DefinePlugin({
  NICE_FEATURE: JSON.stringify(true),
  EXPERIMENTAL_FEATURE: JSON.stringify(false),
});
```

### Service URLs

* == use DIFFERENT service URL | production/development builds

```javascript
new webpack.DefinePlugin({
  SERVICE_URL: JSON.stringify('https://dev.example.com'),
});
```

## `runtimeValue` == `function (getterFunction, [string] | true | object) => getterFunction()`

* allows
  * defining variables / 's values
    * -- rely on -- files
    * if file system's files change -> -- will be -- re-evaluated
* TODO:
There're two arguments for `webpack.DefinePlugin.runtimeValue` function:

- The first argument is a `function(module, key, version)` that should return the value to be assigned to the definition.
- The second argument could either be an array of file paths to watch for or a `true` to flag the module as uncacheable.
  - Since 5.26.0, it can also take an object argument with the following properties:

    - `fileDependencies?: string[]` A list of files the function depends on.
    - `contextDependencies?: string[]` A list of directories the function depends on.
    - `missingDependencies?: string[]` A list of not existing files the function depends on.
    - `buildDependencies?: string[]` A list of build dependencies the function depends on.
    - `version?: string | () => string` A version of the function.

```javascript
const fileDep = path.resolve(__dirname, 'sample.txt');

new webpack.DefinePlugin({
  BUILT_AT: webpack.DefinePlugin.runtimeValue(Date.now, {
    fileDependencies: [fileDep],
  }),
});
```

The value of `BUILT_AT` would be the time at which the `'sample.txt'` was last updated in the file system, e.g. `1597953013291`.
