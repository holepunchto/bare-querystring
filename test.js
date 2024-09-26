const test = require('brittle')
const qs = require('.')

test('decode', (t) => {
  t.alike(qs.decode(''), {})
  t.alike(qs.decode('foo'), { foo: '' })
  t.alike(qs.decode('foo='), { foo: '' })
  t.alike(qs.decode('foo&foo='), { foo: ['', ''] })
  t.alike(qs.decode('foo=bar'), { foo: 'bar' })
  t.alike(qs.decode('foo=1&bar=2'), { foo: '1', bar: '2' })
  t.alike(qs.decode('foo=1&bar='), { foo: '1', bar: '' })
  t.alike(qs.decode('&foo=1&&bar=2&'), { foo: '1', bar: '2' })
  t.alike(qs.decode('foo=1&foo=2'), { foo: ['1', '2'] })
  t.alike(qs.decode('foo=bar%20baz'), { foo: 'bar baz' })
})

test('encode', (t) => {
  t.is(qs.encode({}), '')
  t.is(qs.encode({ foo: 'bar' }), 'foo=bar')
  t.is(qs.encode({ foo: true }), 'foo=true')
  t.is(qs.encode({ foo: 1, bar: 2 }), 'foo=1&bar=2')
  t.is(qs.encode({ foo: [1, 2] }), 'foo=1&foo=2')
  t.is(qs.encode({ foo: '€' }), 'foo=%E2%82%AC')
})
