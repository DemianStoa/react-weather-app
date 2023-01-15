import "./current-weather.css" 

const CurrentWeather = ({data}) => {
  return(
     <div className="weather">
        <div className="top">
            <div>
              <div className="city">{data.city}</div>
              <div className="weather-description">{data.weather[0].description}</div>
            </div>
              <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
        </div>
      
        <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}&#8451;</p>
          <div className="details">
            <div className="parameter-row">
              <span className="Parameter-label">Details</span>
            </div>
            <div className="parameter-row">
              <span className="Parameter-label">Feels like</span>
              <span className="Parameter-value">{data.main.feels_like}&#8451;</span>
            </div>
            <div className="parameter-row">
              <span className="Parameter-label">Wind</span>
              <span className="Parameter-value">{data.wind.speed}m/s</span>
            </div>
            <div className="parameter-row">
              <span className="Parameter-label">Humidity</span>
              <span className="Parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="Parameter-label">Pressure</span>
              <span className="Parameter-value">{data.main.pressure}hPa</span>
            </div>
          </div>
        </div>
     </div>
     )
}

export default CurrentWeather

