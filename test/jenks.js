import assert from 'assert'
import { it, describe } from 'mocha'

import { classifyJenks } from '../src'

describe('jenks', function () {
  it('happy path', function () {
    let bounds = classifyJenks([1, 2, 3, 4], 2)
    assert.strict.deepEqual(bounds, [1, 2, 4])
  })

  it('serie is empty', function () {
    let bounds = classifyJenks([], 4)
    assert.strict.deepEqual([], bounds)
  })

  it('serie contains only one value', function () {
    let bounds = classifyJenks([1], 2)
    this.skip()
    assert.strict.deepEqual([1, 1, 1, 1], bounds)
  })
})
