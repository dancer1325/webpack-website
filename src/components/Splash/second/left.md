* configuration
  * ways
    * [WITHOUT](https://youtu.be/3Nv9muOkb6k?t=21293)
      * TODO:
    * custom "webpack.config.js"
      ```js,title=webpack.config.js
      const path = require('path');

      module.exports = {
        entry: './src/index.js',
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js',
        },
      };
      ```
