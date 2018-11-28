export const classifyQuantile = (serie, nbClass) => {
  if (serie.length === 0) {
    console.warn('serie must not be empty')
    return []
  }

  serie.sort((a, b) => a - b)
  let bounds = []

  bounds.push(serie[0])
  var step = serie.length / nbClass
  for (var i = 1; i < nbClass; i++) {
    var qidx = Math.round(i * step + 0.49)
    bounds.push(serie[qidx - 1])
  }
  bounds.push(serie[serie.length - 1])

  return bounds
}
