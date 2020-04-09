import { classifyJenks as classifyJenks1 } from './jenks-geostats.js'
import { classifyJenks as classifyJenks2 } from './jenks-simple-statistics.js'

describe('jenks - geostats', () => {
  it('happy path', () => {
    const bounds = classifyJenks1([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 2, 4])
  })

  it('serie is empty', () => {
    const bounds = classifyJenks1([], 4)
    expect([]).toEqual(bounds)
  })

  it.skip('serie contains only one value', () => {
    const bounds = classifyJenks1([1], 2)
    expect(bounds).toEqual([1, 1, 1, 1])
  })

  it('only one unique value', () => {
    const bounds = classifyJenks1([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5)
    expect(bounds).toEqual([1, 1, 1, 1, 1, 1])
  })
})

describe('jenks - simple-statistics', () => {
  it('happy path', () => {
    const bounds = classifyJenks2([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 3, 4])
  })

  it('serie is empty', () => {
    const bounds = classifyJenks2([], 4)
    expect([]).toEqual(bounds)
  })

  it.skip('serie contains only one value', () => {
    const bounds = classifyJenks2([1], 2)
    expect(bounds).toEqual([1, 1, 1, 1])
  })

  it.skip('only one unique value', () => {
    classifyJenks2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5)
  })
})
