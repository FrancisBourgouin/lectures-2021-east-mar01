// 0.45999999999, 2
const roundToDigit = (value, digits) => {
  return Math.round(value * (10 ** digits)) / (10 ** digits)
}

export const kelvinToCelsiusConverter = (tempInK) => {
  if (typeof (tempInK) !== 'string' && typeof (tempInK) !== 'number') {
    return null
  }

  const parsedNumber = Number.parseFloat(tempInK)

  if (Number.isNaN(parsedNumber) || parsedNumber < 0) {
    return null
  }

  return roundToDigit(parsedNumber - 273.15, 1)
}

export const formatWeather = (tempInC) => {
  if (typeof (tempInC) !== 'string' && typeof (tempInC) !== 'number') {
    return null
  }

  const parsedNumber = Number.parseFloat(tempInC)

  if (Number.isNaN(parsedNumber)) {
    return null
  }

  return `${parsedNumber}°C`
}