# classify-series

[![npm](https://img.shields.io/npm/v/classify-series.svg)](https://www.npmjs.com/package/classify-series)
![NpmLicense](https://img.shields.io/npm/l/classify-series.svg)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/classify-series.svg)](https://bundlephobia.com/result?p=classify-series@latest)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/classify-series.svg)](https://bundlephobia.com/result?p=classify-series@latest)
![David](https://img.shields.io/david/Fischerfredl/classify-series.svg)
![David](https://img.shields.io/david/dev/Fischerfredl/classify-series.svg)

Classification algorithms for number-arrays.

- [classify-series](#classify-series)
  - [Description](#description)
  - [docs](#docs)
  - [Inspiration](#inspiration)
  - [Known Issues](#known-issues)

## Description

This package provides pure javascript functions for classification of Number-arrays.

There are 4 different algorithms to choose from. See differences in docs. All algorithms take a number-array and the number of classes as parameters. The output is a bounds-array of length nbClass + 1. This bounds-array includes the minimum and maximum value of the series as well as the breakpoints for classification.

The package also exposes two helper functions to process bounds-arrays: `classIdx(bounds, val)` will take bounds and a concrete value and return the classification index. An index that ranges from 0 to nbClass - 1. You can use this for example to classify by a color-array. `getRanges(bound)` returns an array that represent the classes as strings. It can take a custom separator (default = ' - ') and a precision for rounding the values.

Example (two classes):

```javascript
import { classifyEqInterval, getRanges, classIdx } from 'classify-series'

const serie = [1, 2, 3, 4]
const nbClass = 2

const bounds = classifyEqInterval(serie, nbClass) // [1, 2.5, 4]
const ranges = getRanges(bounds) // ['1 - 2.5', '2.5 - 4']

classIdx(bounds, 1) // 0
classIdx(bounds, 1.5) // 0
classIdx(bounds, 2.5) // 0
classIdx(bounds, 3) // 1
classIdx(bounds, 0) // -1
```

Example (classification by color).

```javascript
// classification by color
const colors = ['#fff', '#000']
colors[classIdx(bounds, 1)] // '#fff'
colors[classIdx(bounds, 0)] // undefined
colors[classIdx(bounds, 0)] || '#888' // '#888' be careful for for falsible values in colors

for (let i = 0; i < ranges.length; i++) {
  console.log(`Class ${i + 1}: ${ranges[i]} | ${colors[i]}`)
  // Class 1: 1 - 2.5 | #fff
  // Class 2: 2.5 - 4 | #000
}
```

If you have falsible values in your classes-array ("null", "0", ...) and want to classify out of bound values this package provides a helper function: `getClass(bounds, val, classes, oob)`. It safely classifies values out of the series range as the provided oob-value.

```javascript
import { getClass } from 'classify-series'

getClass(bounds, 2, colors, '#888') // '#fff'
getClass(bounds, 0, colors, '#888') // '#888'

// it's basically this:
typeof colors[classIdx(bounds, 0)] !== 'undefined'
  ? colors[classIdx(bounds, 0)]
  : '#888' // '#888'
```

## docs

todo...

## Inspiration

Thanks to [simogeo/geostats](https://github.com/simogeo/geostats) for the algorithm implementations. I altered them to use newer javascript syntax and functionality. Also this package provides each algorithm as a pure function. These changes result in a smaller build and make tree-shaking possible.

## Known Issues

- Jenks is behaving strange when number of classes is smaller or equal to series.length.
