import { classifyEqInterval } from '.'

describe('eqInterval', () => {
  it('happy path', () => {
    let bounds = classifyEqInterval([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 2.5, 4])
  })

  it('serie is empty', () => {
    let bounds = classifyEqInterval([], 4)
    expect(bounds).toEqual([])
  })

  it('serie contains only one value', () => {
    let bounds = classifyEqInterval([1], 3)
    expect(bounds).toEqual([1, 1, 1, 1])
  })
})
