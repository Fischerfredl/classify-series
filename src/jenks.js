export const classifyJenks = (serie, nbClass) => {
  if (serie.length === 0) {
    return []
  }

  serie.sort((a, b) => a - b)

  // define two matrices mat1, mat2
  const height = serie.length + 1
  const width = nbClass + 1
  const mat1 = Array(height)
    .fill()
    .map(() => Array(width).fill(0))
  const mat2 = Array(height)
    .fill()
    .map(() => Array(width).fill(0))

  // initialize mat1, mat2
  for (let y = 1; y < nbClass + 1; y++) {
    mat1[0][y] = 1
    mat2[0][y] = 0
    for (let t = 1; t < serie.length + 1; t++) {
      mat2[t][y] = Infinity
    }
  }

  // fill matrices
  for (let l = 2; l < serie.length + 1; l++) {
    const s1 = 0.0
    const s2 = 0.0
    const w = 0.0
    const v = 0.0
    for (let m = 1; m < l + 1; m++) {
      const i3 = l - m + 1
      const val = parseFloat(serie[i3 - 1])
      s2 += val * val
      s1 += val
      w += 1
      v = s2 - (s1 * s1) / w
      const i4 = i3 - 1
      if (i4 !== 0) {
        for (let p = 2; p < nbClass + 1; p++) {
          if (mat2[l][p] >= v + mat2[i4][p - 1]) {
            mat1[l][p] = i3
            mat2[l][p] = v + mat2[i4][p - 1]
          }
        }
      }
    }
    mat1[l][1] = 1
    mat2[l][1] = v
  }

  const bounds = []
  bounds.push(serie[0])
  for (let i = 2; i <= nbClass; i++) {
    const idx = mat1[serie.length][i] - 2
    bounds.push(serie[idx])
  }
  bounds.push(serie[serie.length - 1])
  return bounds
}
