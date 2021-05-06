# Dashboard App

## Features

- Current weather
- Notes
- Grocery List

## Components

- App
  - Home
    - Tile
  - Weather
    - CurrentWeather
    - CityForm
  - Notes
    - NoteList
      - Note
    - NoteForm
  - GroceryList
    - ItemList
      - Item
    - ItemForm

## Frontend routing (views)

- /             (Home)
- /weather      (Weather)
- /notes        (Notes)
- /groceries    (GroceryList)

## Hooks

- Fetch data from external API (Weather) -> useWeatherData
- Use a dark mode in the app             -> useDarkMode