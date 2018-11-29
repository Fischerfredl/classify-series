import assert from 'assert'
import { it, describe } from 'mocha'

import { classifyStdDeviation } from '../src'

describe('stdDeviation', function () {
  it('happy path', function () {
    let bounds = classifyStdDeviation([1, 2, 3, 4], 2)
    assert.strict.deepEqual(bounds, [1, 2.5, 4])
  })

  it('test empty array', function () {
    let bounds = classifyStdDeviation([], 4)
    assert.strict.deepEqual([], bounds)
  })

  it('serie contains only one value', function () {
    let bounds = classifyStdDeviation([1], 3)
    assert.strict.deepEqual([1, 1, 1, 1], bounds)
  })
})
