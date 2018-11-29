import assert from 'assert'
import { it, describe } from 'mocha'

import { classify, getRanges, classIdx } from '../src'

describe('getRanges', function () {
  it('happy path', function () {
    let bounds = classify('eqInterval', [1, 2, 3, 4], 2)
    let ranges = getRanges(bounds)

    assert.strict.deepEqual(ranges, ['1 - 2.5', '2.5 - 4'])
  })

  it('get ranges of empty bounds array', function () {
    let bounds = []
    assert.strict.deepEqual([], getRanges(bounds))
  })
})

describe('classIdx', function () {
  it('happy path', function () {
    const serie = [1, 2, 3, 4]
    let bounds = classify('eqInterval', serie, 2)
    assert.strict.equal(0, classIdx(bounds, serie[0]))
    assert.strict.equal(0, classIdx(bounds, serie[1]))
    assert.strict.equal(1, classIdx(bounds, serie[2]))
    assert.strict.equal(1, classIdx(bounds, serie[3]))
  })

  it('test various in-between values', function () {
    const serie = [1, 2, 3, 4]
    let bounds = classify('eqInterval', serie, 2) // [1, 2.5, 4]
    assert.strict.equal(0, classIdx(bounds, 1))
    assert.strict.equal(0, classIdx(bounds, 1.001))
    assert.strict.equal(0, classIdx(bounds, 1.5))
    assert.strict.equal(0, classIdx(bounds, 2.4))
    assert.strict.equal(0, classIdx(bounds, 2.5))
    assert.strict.equal(1, classIdx(bounds, 2.50001))
    assert.strict.equal(1, classIdx(bounds, 3.5))
    assert.strict.equal(1, classIdx(bounds, 4))
  })

  it('test out of bounds', function () {
    const serie = [1, 2, 3, 4]
    let bounds = classify('eqInterval', serie, 2) // [1, 2.5, 4]
    assert.strict.equal(-1, classIdx(bounds, 0))
    assert.strict.equal(-1, classIdx(bounds, 0.9))
    assert.strict.equal(-1, classIdx(bounds, 0.99999))
    assert.strict.equal(-1, classIdx(bounds, 4.00001))
    assert.strict.equal(-1, classIdx(bounds, 5))
  })

  it('empty bounds array', function () {
    let bounds = []
    assert.strict.equal(-1, classIdx(bounds, 0))
    assert.strict.equal(-1, classIdx(bounds, 1))
    assert.strict.equal(-1, classIdx(bounds, 2))
    assert.strict.equal(-1, classIdx(bounds, -1))
  })

  it('test 0 interval', function () {
    let bounds = [1, 1, 4]
    assert.strict.deepEqual(-1, classIdx(bounds, 0.9))
    assert.strict.deepEqual(0, classIdx(bounds, 1))
    assert.strict.deepEqual(1, classIdx(bounds, 1.1))
  })
})
