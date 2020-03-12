import { classifyQuantile } from '.'

describe('quantile', () => {
  it('happy path 1', () => {
    let bounds = classifyQuantile([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 2, 4])
  })

  it('happy path 2', () => {
    let bounds = classifyQuantile([1, 1, 3, 4], 2)
    expect(bounds).toEqual([1, 1, 4])
  })

  it('test empty array', () => {
    let bounds = classifyQuantile([], 4)
    expect([]).toEqual(bounds)
  })

  it('serie contains only one value', () => {
    let bounds = classifyQuantile([1], 3)
    expect(bounds).toEqual([1, 1, 1, 1])
  })
})
