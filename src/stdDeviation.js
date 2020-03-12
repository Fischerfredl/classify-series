const mean = serie => {
  let sum = serie.reduce((sum, val) => sum + val, 0)
  return sum / serie.length
}

const variance = serie => {
  let tmp = 0
  for (let i = 0; i < serie.length; i++) {
    tmp += Math.pow(serie[i] - mean(serie), 2)
  }
  return tmp / serie.length
}

const stddev = serie => {
  return Math.sqrt(variance(serie))
}

export const classifyStdDeviation = (serie, nbClass) => {
  if (serie.length === 0) {
    return []
  }

  let _mean = mean(serie)
  let _stddev = stddev(serie)

  let bounds = []

  // number of classes is odd
  if (nbClass % 2 === 1) {
    // Euclidean division to get the inferior bound
    let infBound = Math.floor(nbClass / 2)
    let supBound = infBound + 1
    // we set the central bounds
    bounds[infBound] = _mean - _stddev / 2
    bounds[supBound] = _mean + _stddev / 2
    // Values < to infBound, except first one
    for (let i = infBound - 1; i > 0; i--) {
      let val = bounds[i + 1] - _stddev
      bounds[i] = val
    }
    // Values > to supBound, except last one
    for (let i = supBound + 1; i < nbClass; i++) {
      let val = bounds[i - 1] + _stddev
      bounds[i] = val
    }

    // number of classes is even
  } else {
    let meanBound = nbClass / 2
    // we get the mean value
    bounds[meanBound] = _mean
    // Values < to the mean, except first one
    for (let i = meanBound - 1; i > 0; i--) {
      let val = bounds[i + 1] - _stddev
      bounds[i] = val
    }
    // Values > to the mean, except last one
    for (let i = meanBound + 1; i < nbClass; i++) {
      let val = bounds[i - 1] + _stddev
      bounds[i] = val
    }
  }
  // set first value
  bounds[0] = Math.min(...serie)
  // set last value
  bounds[nbClass] = Math.max(...serie)

  return bounds
}
