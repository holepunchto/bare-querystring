const test = require('brittle')
const qs = require('.')

test('decode', (t) => {
  t.alike(qs.decode(''), o({}))
  t.alike(qs.decode('foo'), o({ foo: '' }))
  t.alike(qs.decode('foo='), o({ foo: '' }))
  t.alike(qs.decode('foo&foo='), o({ foo: ['', ''] }))
  t.alike(qs.decode('foo=bar'), o({ foo: 'bar' }))
  t.alike(qs.decode('foo=1&bar=2'), o({ foo: '1', bar: '2' }))
  t.alike(qs.decode('foo=1&bar='), o({ foo: '1', bar: '' }))
  t.alike(qs.decode('&foo=1&&bar=2&'), o({ foo: '1', bar: '2' }))
  t.alike(qs.decode('foo=1&foo=2'), o({ foo: ['1', '2'] }))
  t.alike(qs.decode('foo=bar%20baz'), o({ foo: 'bar baz' }))
})

test('encode', (t) => {
  t.is(qs.encode({}), '')
  t.is(qs.encode({ foo: 'bar' }), 'foo=bar')
  t.is(qs.encode({ foo: true }), 'foo=true')
  t.is(qs.encode({ foo: 1, bar: 2 }), 'foo=1&bar=2')
  t.is(qs.encode({ foo: [1, 2] }), 'foo=1&foo=2')
  t.is(qs.encode({ foo: '€' }), 'foo=%E2%82%AC')
})

function o(obj) {
  return Object.assign(Object.create(null), obj)
}
