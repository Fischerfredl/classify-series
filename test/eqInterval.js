import assert from 'assert'
import { it, describe } from 'mocha'

import { classifyEqInterval } from '../src'

describe('eqInterval', function () {
  it('happy path', function () {
    let bounds = classifyEqInterval([1, 2, 3, 4], 2)
    assert.strict.deepEqual(bounds, [1, 2.5, 4])
  })

  it('serie is empty', function () {
    let bounds = classifyEqInterval([], 4)
    assert.strict.deepEqual([], bounds)
  })

  it('serie contains only one value', function () {
    let bounds = classifyEqInterval([1], 3)
    assert.strict.deepEqual([1, 1, 1, 1], bounds)
  })
})
