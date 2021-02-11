module.exports = {
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "es6": true,
        "jest": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 2018
    },
    "extends": "eslint:recommended",
    "globals": {
        "requirelib": false
    },
    "rules": {
        "require-atomic-updates": "off",
        "max-len": [ "error", {"code": 84} ],
        "space-in-parens": ["error", "always", { "exceptions": ["{}"] }],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": [ "error" ]
    }
};
