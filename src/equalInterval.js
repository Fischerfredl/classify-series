export const classifyEqInterval = (serie, nbClass, forceMin, forceMax) => {
  if (serie.length === 0) {
    console.warn('serie must not be empty')
    return []
  }

  let tmpMin = (typeof forceMin === 'undefined') ? Math.min(...serie) : forceMin
  let tmpMax = (typeof forceMax === 'undefined') ? Math.max(...serie) : forceMax

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
