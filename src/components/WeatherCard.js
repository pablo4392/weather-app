import './WeatherCard.css'
import Degrees from './Degrees.js'
import Wind from './Wind.js'

const WeatherCard = ({
    continent,
    country,
    city,
    condition,
    icon,
    humidity,
    windKm,
    windMi,
    windDir,
    celsius,
    farenheit
}) => {
    return(
        <div className="weather-card">
            <h2 className="title-card">{continent}</h2>
            <h3 className="title-card-secondary">{country}-{city}</h3>
            <div className="subtitle">
                <h4 className="condition">{condition}</h4>
                <img src={icon} className="icon" alt={condition}/>    
            </div>
            <span className="body">
                <div className="temp">
                    <h3 className="title-card-secondary">Temperature</h3>
                    <Degrees tempC={celsius} tempF={farenheit} />
                    <h4>Humidity: {humidity}%</h4>
                </div>
                <div className="wind">
                    <h3 className="title-card-secondary">Wind speed</h3>
                    <Wind windKM={windKm} windMI={windMi}  />
                    <h4>Wind dir: {windDir}</h4>
                </div>
            </span>
        </div>
    )
}

export default WeatherCard