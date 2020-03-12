export const classifyQuantile = (serie, nbClass) => {
  if (serie.length === 0) {
    return []
  }

  serie.sort((a, b) => a - b)
  const bounds = []

  bounds.push(serie[0])
  const step = serie.length / nbClass
  for (let i = 1; i < nbClass; i++) {
    const qidx = Math.round(i * step + 0.49)
    bounds.push(serie[qidx - 1])
  }
  bounds.push(serie[serie.length - 1])

  return bounds
}
