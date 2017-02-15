"use strict";

module.exports = {
  "extends": [
    "webcoding/rules/eslint/best-practices/eslint",
    "webcoding/rules/eslint/errors/eslint",
    "webcoding/rules/eslint/es6/eslint",
    "webcoding/rules/eslint/node/eslint",
    "webcoding/rules/eslint/strict/eslint",
    "webcoding/rules/eslint/style/eslint",
    "webcoding/rules/eslint/variables/eslint",
  ],
  "parser": "espree",
  "env": {
    "browser": false,
    "node": false,
    "amd": false,
    "mocha": false,
    "jasmine": false,
  },
  "ecmaFeatures": {},
  "globals": {},
  "rules": {},
};
