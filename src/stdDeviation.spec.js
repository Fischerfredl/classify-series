import { classifyStdDeviation } from '.'

describe('stdDeviation', () => {
  it('happy path', () => {
    let bounds = classifyStdDeviation([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 2.5, 4])
  })

  it('test empty array', () => {
    let bounds = classifyStdDeviation([], 4)
    expect([]).toEqual(bounds)
  })

  it('serie contains only one value', () => {
    let bounds = classifyStdDeviation([1], 3)
    expect(bounds).toEqual([1, 1, 1, 1])
  })
})
