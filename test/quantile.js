import assert from 'assert'
import { it, describe } from 'mocha'

import { classifyQuantile } from '../src'

describe('quantile', function () {
  it('happy path 1', function () {
    let bounds = classifyQuantile([1, 2, 3, 4], 2)
    assert.strict.deepEqual(bounds, [1, 2, 4])
  })

  it('happy path 2', function () {
    let bounds = classifyQuantile([1, 1, 3, 4], 2)
    assert.strict.deepEqual(bounds, [1, 1, 4])
  })

  it('test empty array', function () {
    let bounds = classifyQuantile([], 4)
    assert.strict.deepEqual([], bounds)
  })

  it('serie contains only one value', function () {
    let bounds = classifyQuantile([1], 3)
    assert.strict.deepEqual([1, 1, 1, 1], bounds)
  })
})
