const escape = exports.escape = function escape (str) {
  return encodeURIComponent(str)
}

const unescape = exports.unescape = function unescape (str) {
  return decodeURIComponent(str)
}

exports.parse = function parse (str, sep = '&', eq = '=') {
  const obj = {}

  for (const tmp of str.split(sep)) {
    if (tmp === '') continue

    let [key, value] = tmp.split(eq)

    key = unescape(key)
    value = unescape(value || '')

    obj[key] = key in obj
      ? [].concat(obj[key], value)
      : value
  }

  return obj
}

exports.stringify = function stringify (obj, sep = '&', eq = '=') {
  const entries = Object.entries(obj)

  return entries.map(([key, value]) => {
    const joinKeyValue = (value) => escape(key) + eq + escape(value)

    return Array.isArray(value) ? value.map(joinKeyValue).join(sep) : joinKeyValue(value)
  }).join(sep)
}

exports.decode = exports.parse
exports.encode = exports.stringify
