module.exports = function(strings, ...expressions) {
  return strings.reduce((prev, curr, index) => {
    let value = expressions[index]
    if (index === strings.length - 1) return prev + curr
    if (value === undefined || value === null) {
      throw Error(`Expression after "${curr}" was null or undefined`)
    }
    return prev + curr + value
  }, '')
}
