"use strict";

module.exports = {
  "extends": [
    "webcoding/configurations/walmart/es6",
    "webcoding/rules/react/walmart",
  ],
  "globals": {
    "fetch": false,
  },
  "env": {
    "mocha": true,
  },
  "rules": {
    "max-nested-callbacks": 0,
    "no-extra-parens": 0,
    "no-var": 2,
  },
};
