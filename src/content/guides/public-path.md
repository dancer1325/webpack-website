---
title: Public Path
sort: 23
contributors:
  - rafaelrinaldi
  - chrisVillanueva
  - gonzoyumo
  - chenxsan
---

* [`publicPath`](/configuration/output/#outputpublicpath)
  * == configuration option
  * allows you to
    * 👀specify your application's assets' base path👀
      * == ALL file emitted | your `output.path` directory -- will be referenced from the -- `output.publicPath` location
      * ALLOWED |
        * child chunks (created -- via -- [code splitting](/guides/code-splitting/))
        * ANY asset (e.g. images, fonts, etc.) / -- part of -- your dependency graph

## Use Cases

### Environment Based
* TODO:
In development for example, we might have an `assets/` folder that lives on the same level of our index page.
This is fine, but what if we wanted to host all these static assets on a CDN in production?

To approach this problem you can easily use a good old environment variable. Let's say we have a variable `ASSET_PATH`:

```js
import webpack from 'webpack';

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

export default {
  output: {
    publicPath: ASSET_PATH,
  },

  plugins: [
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
};
```

### | ON Fly

* goal
  * set `publicPath` | ON fly
* steps
  * use `DefinePlugin` | our configuration
    * Reason: 🧠`process.env.ASSET_PATH` ALWAYS defined🧠
  * set `__webpack_public_path__`
    ```js, title="yourApplicationEntryPoint"
    __webpack_public_path__ = process.env.ASSET_PATH;
    ```
  * if you are using ES6 module imports | your entry file -> `__webpack_public_path__` assignment added AFTER imports
    * -> ⚠️move `__webpack_public_path__` assignment | its OWN dedicated module & import it | your entry.js's top ⚠️
      ```js
      // entry.js
      import './public-path';
      import './app';
      ```

### Automatic publicPath

* TODO:
There are chances that you don't know what the publicPath will be in advance, and webpack can handle it automatically for you by determining the public path from variables like [`import.meta.url`](/api/module-variables/#importmetaurl), [`document.currentScript`](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript), `script.src` or `self.location`. What you need is to set [`output.publicPath`](/configuration/output/#outputpublicpath) to `'auto'`:

**webpack.config.js**

```js
module.exports = {
  output: {
    publicPath: 'auto',
  },
};
```

Note that in cases where `document.currentScript` is not supported, e.g., IE browser, you will have to include a polyfill like [`currentScript Polyfill`](https://github.com/amiller-gh/currentScript-polyfill).
