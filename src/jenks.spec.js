import { classifyJenks } from '.'

describe('jenks', () => {
  it('happy path', () => {
    const bounds = classifyJenks([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 2, 4])
  })

  it('serie is empty', () => {
    const bounds = classifyJenks([], 4)
    expect([]).toEqual(bounds)
  })

  it.skip('serie contains only one value', () => {
    const bounds = classifyJenks([1], 2)
    expect(bounds).toEqual([1, 1, 1, 1])
  })
})
