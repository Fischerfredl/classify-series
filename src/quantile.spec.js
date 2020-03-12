import { classifyQuantile } from '.'

describe('quantile', () => {
  it('happy path 1', () => {
    const bounds = classifyQuantile([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 2, 4])
  })

  it('happy path 2', () => {
    const bounds = classifyQuantile([1, 1, 3, 4], 2)
    expect(bounds).toEqual([1, 1, 4])
  })

  it('test empty array', () => {
    const bounds = classifyQuantile([], 4)
    expect([]).toEqual(bounds)
  })

  it('serie contains only one value', () => {
    const bounds = classifyQuantile([1], 3)
    expect(bounds).toEqual([1, 1, 1, 1])
  })
})
