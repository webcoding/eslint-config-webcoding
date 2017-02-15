
module.exports = {
  extends: [
    // We're manually approximating `configurations/walmart/es5-node` with these
    // _local_ imports (since `defaults/` prefix assumes npm-installed).
    "./rules/eslint/best-practices/airbnb.js",
    "./rules/eslint/errors/airbnb.js",
    "./rules/eslint/es6/off.js",
    "./rules/eslint/node/off.js",
    "./rules/eslint/strict/airbnb.js",
    "./rules/eslint/style/airbnb.js",
    "./rules/eslint/variables/airbnb.js",
    // "./rules/filenames/webcoding.js",
    "./rules/eslint/node/airbnb.js",
  ],
  rules: {
    "strict": [2, "global"],
    // Magic numbers _define_ the rule settings.
    "no-magic-numbers": 0,
    // Bias towards comments / rules on _one line_
    "max-len": 0,
    // 使用一致的反勾号、双引号或单引号
    "quotes": ["error", "double"],
    // 要求对象字面量属性名称使用引号
    "quote-props": ["error", "consistent"],
  },
}
