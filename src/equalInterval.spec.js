import { classifyEqInterval } from '.'

describe('eqInterval', () => {
  it('happy path', () => {
    const bounds = classifyEqInterval([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 2.5, 4])
  })

  it('serie is empty', () => {
    const bounds = classifyEqInterval([], 4)
    expect(bounds).toEqual([])
  })

  it('serie contains only one value', () => {
    const bounds = classifyEqInterval([1], 3)
    expect(bounds).toEqual([1, 1, 1, 1])
  })
})
