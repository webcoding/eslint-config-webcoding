
module.exports = {
  extends: [
    // We're manually approximating `configurations/walmart/es5-node` with these
    // _local_ imports (since `defaults/` prefix assumes npm-installed).
    "./rules/eslint/best-practices/walmart.js",
    "./rules/eslint/errors/walmart.js",
    "./rules/eslint/es6/off.js",
    "./rules/eslint/node/off.js",
    "./rules/eslint/strict/walmart.js",
    "./rules/eslint/style/walmart.js",
    "./rules/eslint/variables/walmart.js",
    "./rules/filenames/walmart.js",
    "./rules/eslint/node/walmart.js",
  ],
  rules: {
    "strict": [2, "global"],
    // Magic numbers _define_ the rule settings.
    "no-magic-numbers": 0,
    // Bias towards comments / rules on _one line_
    "max-len": 0,
  },
}
