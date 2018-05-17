const r = require('./index')
const assert = require('assert')

const works = 'works'
const isNull = null
let isUndefined

assert(r`This ${works} correctly`)
assert(r`${works}This correctly`)
assert(r`This correctly${works}`)

assert.throws(() => r`This ${isUndefined}`)
assert.throws(() => r`This ${isNull}`)
