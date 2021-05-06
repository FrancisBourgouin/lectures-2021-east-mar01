const rounder = (value, roundiness) => {
  const factor = Math.pow(10, roundiness)

  return Math.round(value * factor) / factor
}

export const kelvinToCelsius = (value) => {
  return rounder((value - 273.15), 1)
}