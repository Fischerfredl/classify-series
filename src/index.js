import { classifyEqInterval } from './equalInterval.js'
import { classifyJenks } from './jenks-geostats.js'
import { classifyQuantile } from './quantile.js'
import { classifyStdDeviation } from './stdDeviation.js'
import { classifyCkmeans } from './ckmeans.js'

/**
 * Get a ranges array from a bounds array
 * @param {array} bounds
 * @param {string} separator
 * @param {number} precicion
 */
export const getRanges = (bounds, separator = ' - ', precicion = 2) => {
  const multiplier = Math.pow(10, precicion)
  const ranges = []
  for (let i = 0; i < bounds.length - 1; i++) {
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
 * The index ranges from "0" to "bounds.length - 2" (= nbClass - 1)
 * returns -1 if val not in bounds
 * @param {array} bounds
 * @param {number} val
 */
export const classIdx = (bounds, val) => {
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

/**
 * Returns the corresponding class for a value. The value comes from the
 * provided classes-array. If the value is out of bounds oob is returned.
 * @param {array} bounds
 * @param {number} val
 * @param {array} classes
 * @param {*} oob
 */
export const getClass = (bounds, val, classes, oob) => {
  const idx = classIdx(bounds, val)
  return typeof classes[idx] !== 'undefined' ? classes[idx] : oob
}

/**
 * Wrap up all classification algorithms in one function.
 * @param {('eqInterval'|'jenks'|'quantile'|'stdDev'|'ckmeans')} algorithm
 * @param {array} serie
 * @param {number} nbClass
 */
export const classify = (algorithm, serie, nbClass) => {
  switch (algorithm) {
    case 'eqInterval':
      return classifyEqInterval(serie, nbClass)
    case 'jenks':
      return classifyJenks(serie, nbClass)
    case 'quantile':
      return classifyQuantile(serie, nbClass)
    case 'stdDev':
      return classifyStdDeviation(serie, nbClass)
    case 'ckmeans':
      return classifyCkmeans(serie, nbClass)
    default:
      throw Error(
        'Can not classify series. Algorithm "' + algorithm + '" not known'
      )
  }
}

export {
  classifyEqInterval,
  classifyJenks,
  classifyQuantile,
  classifyStdDeviation,
  classifyCkmeans,
}

export default classify
