const postcssImport= require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssImport({}),
    postcssNested({}),
    postcssPresetEnv({
      stage: 1,
      importFrom: './src/assets/css/variables.css'
    })
  ]
};
