"use strict";

module.exports = {
  "extends": [
    "webcoding/rules/eslint/best-practices/airbnb",
    "webcoding/rules/eslint/errors/airbnb",
    "webcoding/rules/eslint/node/airbnb",
    "webcoding/rules/eslint/strict/airbnb",
    "webcoding/rules/eslint/style/airbnb",
    "webcoding/rules/eslint/variables/airbnb",
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "amd": false,
    "mocha": false,
    "jasmine": false,
  },
  "ecmaFeatures": {},
  "globals": {},
  "rules": {},
};
