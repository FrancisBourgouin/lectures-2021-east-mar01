export const kelvinToCelsiusConverter = (tempInK) => {
  if (typeof (tempInK) !== 'string' && typeof (tempInK) !== 'number') {
    return null
  }

  const parsedNumber = Number.parseFloat(tempInK)

  if (Number.isNaN(parsedNumber) || parsedNumber < 0) {
    return null
  }

  return parsedNumber - 273.15
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