module.exports = {
    "parser": "@babel/eslint-parser",
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/essential",
        "standard",
        '@nuxtjs/eslint-config-typescript'
  
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "vue/require-v-for-key":"ignore"
    }
};
