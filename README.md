# required-template

https://twitter.com/southpolesteve/status/997209218364166145

Seeing `undefined` or `null` show up in you or ES6 template strings? Instead of printing those literal values, this tagged template literal function will throw errors.

Here is an example with code:

```js
let works = 'works', isNull = null, isUndefined
// The default ES6 behavior is to print the strings "undefined" and "null"
`This ${works} correctly` // Prints "This works correctly"
`This ${isUndefined}` // Prints "This undefined"
`This ${isNull}` // Prints "This null"

// 99.9% of time this is not what I want to happen!
// So tag your literals with `required-template` instead!
const r = require('required-template')

r`This ${works} correctly` // Prints "This works correctly"
r`This ${isUndefined}` // Throws an error
r`This ${isNull}` // Throws an error
```
