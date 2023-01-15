import { useState } from 'react'
import './App.css'
import  Search  from './components/search/search'
import  CurrentWeather  from './components/current-weather/current-weather'
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import  Forecast  from './components/forecast/forecast'


function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  let unit = "metric"
  //unit can be metric, standard, and imperial

  const handleOnSearchChange = (searchData) => {
   const [latitude, longitude] = searchData.value.split(" ")
   const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=${unit}`)
   const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=${unit}`) 

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forcastResponse = await response[1].json()
        setCurrentWeather({city: searchData.label, ...weatherResponse})
        setForecast({city: searchData.label, ...forcastResponse})
      })
      .catch(console.log)

  }


  return (
   <div className="container">
    <Search onSearchChange={handleOnSearchChange} />
    {currentWeather && <CurrentWeather data={currentWeather} />}
    { forecast && <Forecast data={forecast} />}

  </div>
  )
}

export default App
