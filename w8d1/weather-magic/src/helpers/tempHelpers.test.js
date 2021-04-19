import { kelvinToCelsiusConverter, formatWeather } from './tempHelpers'


// - kelvinToCelsiusConverter
//   - should return null if temp is invalid
//   - should return null if temp is under 0
//   - should return 0 if temp is 273.15
//   - should reutrn -10 if temp is 263.15

describe('kelvinToCelsiusConverter', () => {
  it('should return null if temp is invalid', () => {
    const result = kelvinToCelsiusConverter()
    const result1 = kelvinToCelsiusConverter('cold')
    const result2 = kelvinToCelsiusConverter([])

    expect(result).toBeNull()
    expect(result1).toBeNull()
    expect(result2).toBeNull()

  })
  it('should return null if temp is under 0', () => {
    const result = kelvinToCelsiusConverter(-10)

    expect(result).toBeNull()
  })
  it('should return 0 if temp is 273.15', () => {
    const result = kelvinToCelsiusConverter(273.15)

    expect(result).toBe(0)
  })
  it('should return -10 if temp is 263.15', () => {
    const result = kelvinToCelsiusConverter(263.15)

    expect(result).toBe(-10)
  })
})

// - formatWeather
//   - should return null if temp is invalid
//   - should return '0°C' if given 0
//   - should return '-10°C' if given -10


describe('formatWeather', () => {
  it('should return null if temp is invalid', () => {
    const result = formatWeather()
    const result1 = formatWeather("hello")
    const result2 = formatWeather([1, 2, 3])

    expect(result).toBeNull()
    expect(result1).toBeNull()
    expect(result2).toBeNull()
  })
  it('should return \'0°C\' if given 0', () => {
    const result = formatWeather(0)

    expect(result).toBe('0°C')
  })
  it('should return \'-10°C\' if given -10', () => {
    const result = formatWeather(-10)

    expect(result).toBe('-10°C')
  })
  it('should return \'5.5°C\' if given 5.5', () => {
    const result = formatWeather(5.5)

    expect(result).toBe('5.5°C')
  })
})