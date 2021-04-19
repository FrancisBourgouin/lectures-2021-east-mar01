import { render, fireEvent, screen } from '@testing-library/react'

import Weather from '../Weather'
// - Weather
//   - should show nothing if there is no currentCity
//   - should show a message if the is a currentCity but no weatherData
//   - should show the name of the city, the temperature and condition if the data is valid

describe('Weather component', () => {
  it('should show nothing if there is no currentCity', () => {
    const { queryByText } = render(<Weather />)

    const title = queryByText('Current weather for')
    const temp = queryByText('The temperature is')
    const condition = queryByText('The weather is')

    expect(title).not.toBeInTheDocument()
    expect(temp).not.toBeInTheDocument()
    expect(condition).not.toBeInTheDocument()

  })
  it('should show a message if there is a currentCity but no weatherData', () => {
    const props = { cityName: "Montréal" }
    const { queryByText } = render(<Weather {...props} />)

    const title = queryByText('Current weather for')
    const message = queryByText('No valid weather data for that city')
    const temp = queryByText('The temperature is')
    const condition = queryByText('The weather is')

    expect(title).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(temp).not.toBeInTheDocument()
    expect(condition).not.toBeInTheDocument()
  })
  it('should show the name of the city, the temperature and condition if the data is valid', () => {
    const props = { cityName: "Toronto", parsedTemp: "10°C", condition: "sunny" }
    const { queryByText } = render(<Weather {...props} />)

    const title = queryByText('Current weather for')
    const message = queryByText('No valid weather data for that city')
    const temp = queryByText('The temperature is')
    const condition = queryByText('The weather is')

    expect(title).toBeInTheDocument()
    expect(message).not.toBeInTheDocument()
    expect(temp).toBeInTheDocument()
    expect(condition).toBeInTheDocument()
  })
})