/**
 * Classify the series in equal intervals from minimum to maximum value.
 * @param {array} serie
 * @param {number} nbClass
 * @param {number} forceMin
 * @param {number} forceMax
 */
export const classifyEqInterval = (serie, nbClass, forceMin, forceMax) => {
  if (serie.length === 0) {
    return []
  }

  const tmpMin = typeof forceMin === 'undefined' ? Math.min(...serie) : forceMin
  const tmpMax = typeof forceMax === 'undefined' ? Math.max(...serie) : forceMax

  const bounds = []
  const interval = (tmpMax - tmpMin) / nbClass
  let val = tmpMin

  for (let i = 0; i <= nbClass; i++) {
    bounds.push(val)
    val += interval
  }

  bounds[nbClass] = tmpMax

  return bounds
}
