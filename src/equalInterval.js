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

  let tmpMin = typeof forceMin === 'undefined' ? Math.min(...serie) : forceMin
  let tmpMax = typeof forceMax === 'undefined' ? Math.max(...serie) : forceMax

  let bounds = []
  let val = tmpMin
  let interval = (tmpMax - tmpMin) / nbClass

  for (let i = 0; i <= nbClass; i++) {
    bounds.push(val)
    val += interval
  }

  bounds[nbClass] = tmpMax

  return bounds
}
