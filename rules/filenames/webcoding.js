"use strict";

module.exports = {
  "plugins": [
    "filenames",
  ],
  "rules": {
    // Enforce kebab-cased filenames
    // https://www.npmjs.com/package/eslint-plugin-filenames
    // Available transforms: 'snake', 'kebab', and 'camel'
    "filenames/match-regex": [2, "kebab"],
  },
};
