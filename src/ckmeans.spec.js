import { classifyCkmeans } from './ckmeans.js'

describe('jenks', () => {
  it('happy path', () => {
    const bounds = classifyCkmeans([1, 2, 3, 4], 2)
    expect(bounds).toEqual([1, 2, 4])
  })

  it('serie is empty', () => {
    const bounds = classifyCkmeans([], 4)
    expect([]).toEqual(bounds)
  })

  it('extended example', () => {
    const arr = [-1, 2, -1, 2, 4, 5, 6, -1, 2, -1]
    const expected = [-1, -1, 2, 6]
    expect(classifyCkmeans(arr, 3)).toEqual(expected)
  })
})

// [-1, 2, -1, 2, 4, 5, 6, -1, 2, -1], 3);
// The input, clustered into groups of similar numbers.
//= [[-1, -1, -1, -1], [2, 2, 2], [4, 5, 6]]);
