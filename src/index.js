export { classifyEqInterval } from './equalInterval.js'
export { classifyJenks } from './jenks.js'
export { classifyQuantile } from './quantile.js'
export { classifyStdDeviation } from './stdDeviation.js'

/**
 * Get a ranges array from a bounds array
 * @param {array} bounds
 * @param {string} separator
 * @param {number} precicion
 */
export const getRanges = (bounds, separator = ' - ', precicion = 2) => {
  let multiplier = Math.pow(10, precicion)
  let ranges = []
  for (let i = 0; i < (bounds.length - 1); i++) {
    ranges.push(
      Math.round(bounds[i] * multiplier) / multiplier +
      separator +
      Math.round(bounds[i + 1] * multiplier) / multiplier
    )
  }
  return ranges
}

/**
 * Get the index of a concrete value in a bounds array
 * returns -1 if val not in bounds
 * @param {array} bounds
 * @param {number} val
 */
export const getBoundsIndex = (bounds, val) => {
  if (val < bounds[0]) {
    return -1
  }
  for (let i = 1; i < bounds.length; i++) {
    if (val <= bounds[i]) {
      return i - 1
    }
  }
  return -1
}

export const classify = (serie, nbClass, algorithm) => {
  switch (algorithm) {
    case 'eqInterval':
      return classifyEqInterval(serie, nbClass)
    case 'jenks':
      return classifyJenks(serie, nbClass)
    case 'quantile':
      return classifyQuantile(serie, nbClass)
    case 'stdDev':
      return classifyStdDeviation(serie, nbClass)
    default:
      throw Error(
        'Can not classify series. Algorithm "' + algorithm + '" not known'
      )
  }
}
