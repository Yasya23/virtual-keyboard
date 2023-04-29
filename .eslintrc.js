module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    {
      files: ['*.js'], // add the files you want to override the rule for
      rules: {
        'import/extensions': 'off', // disable the rule for these files
      },
    },
  ],
};
