import { render, fireEvent, screen } from '@testing-library/react'
import CityButtonListItem from '../CityButtonListItem'


// - CityButtonListItem
//   - should show nothing is there is no city name
//   - should show the name of the city if given a city name
//   - should have a special class if it is selected 
//   - should do an action when clicked


describe('CityButtonListItem component', () => {
  it('should show the name of the city if given a city name', () => {
    const props = { cityName: "Kansas City" }

    const { queryByText, queryByTestId } = render(<CityButtonListItem {...props} />)

    expect(queryByText('Kansas City')).toBeInTheDocument()
    expect(queryByTestId('cityButton')).toBeInTheDocument()

  })
  it('should have a special class if it is selected ', () => {
    const props = { cityName: "Calgary", selected: true }
    const { queryByText, queryByTestId } = render(<CityButtonListItem {...props} />)

    const myButton = queryByTestId('cityButton')

    expect(myButton).toHaveClass('selected')
    expect(myButton).toHaveTextContent('Calgary')
  })

  it('should do an action when clicked', () => {
    const buttonAction = jest.fn()
    const props = { cityName: "Calgary", selected: true, setCurrentCity: buttonAction }
    const { queryByText, queryByTestId } = render(<CityButtonListItem {...props} />)

    const myButton = queryByTestId('cityButton')

    fireEvent.click(myButton)

    expect(buttonAction).toHaveBeenCalled()
  })
})