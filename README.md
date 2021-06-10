# eslint-plugin-exclude-strings

Checks for a list of strings that should not be included in the codebase

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-exclude-strings`:

```
$ npm install eslint-plugin-exclude-strings --save-dev
```


## Usage

Add `exclude-strings` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "exclude-strings"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "exclude-strings/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





