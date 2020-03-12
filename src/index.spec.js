import { classify, getRanges, classIdx } from '.'

describe('getRanges', () => {
  it('happy path', () => {
    const bounds = classify('eqInterval', [1, 2, 3, 4], 2)
    const ranges = getRanges(bounds)

    expect(ranges).toEqual(['1 - 2.5', '2.5 - 4'])
  })

  it('get ranges of empty bounds array', () => {
    const bounds = []
    expect([]).toEqual(getRanges(bounds))
  })
})

describe('classIdx', () => {
  it('happy path', () => {
    const serie = [1, 2, 3, 4]
    const bounds = classify('eqInterval', serie, 2)
    expect(classIdx(bounds, serie[0])).toBe(0)
    expect(classIdx(bounds, serie[1])).toBe(0)
    expect(classIdx(bounds, serie[2])).toBe(1)
    expect(classIdx(bounds, serie[3])).toBe(1)
  })

  it('test various in-between values', () => {
    const serie = [1, 2, 3, 4]
    const bounds = classify('eqInterval', serie, 2) // [1, 2.5, 4]
    expect(classIdx(bounds, 1)).toBe(0)
    expect(classIdx(bounds, 1.001)).toBe(0)
    expect(classIdx(bounds, 1.5)).toBe(0)
    expect(classIdx(bounds, 2.4)).toBe(0)
    expect(classIdx(bounds, 2.5)).toBe(0)
    expect(classIdx(bounds, 2.50001)).toBe(1)
    expect(classIdx(bounds, 3.5)).toBe(1)
    expect(classIdx(bounds, 4)).toBe(1)
  })

  it('test out of bounds', () => {
    const serie = [1, 2, 3, 4]
    const bounds = classify('eqInterval', serie, 2) // [1, 2.5, 4]
    expect(classIdx(bounds, 0)).toBe(-1)
    expect(classIdx(bounds, 0.9)).toBe(-1)
    expect(classIdx(bounds, 0.99999)).toBe(-1)
    expect(classIdx(bounds, 4.00001)).toBe(-1)
    expect(classIdx(bounds, 5)).toBe(-1)
  })

  it('empty bounds array', () => {
    const bounds = []
    expect(classIdx(bounds, 0)).toBe(-1)
    expect(classIdx(bounds, 1)).toBe(-1)
    expect(classIdx(bounds, 2)).toBe(-1)
    expect(classIdx(bounds, -1)).toBe(-1)
  })

  it('test 0 interval', () => {
    const bounds = [1, 1, 4]
    expect(-1).toEqual(classIdx(bounds, 0.9))
    expect(0).toEqual(classIdx(bounds, 1))
    expect(1).toEqual(classIdx(bounds, 1.1))
  })
})
