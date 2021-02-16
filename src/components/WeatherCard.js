import './WeatherCard.css'

const WeatherCard = ({
    continent,
    country,
    city,
    condition,
    icon,
    humidity,
    windSpeed,
    windDir
}) => {
    return(
        <div className="weather-card">
            <h2 className="title-card">{continent}</h2>
            <h3 className="title-card-secondary">{country}-{city}</h3>
            <div className="qwe">
                <h4 className="condition">{condition}</h4>
                <img src={icon} className="icon" alt={condition}/>    
            </div>
            <span className="body">
                <div className="temp">
                    <h3 className="title-card-secondary">Temperature</h3>
                </div>
                <div className="data">
                    <p>Humidity: {humidity}%</p>
                    <p>Wind speed: {windSpeed}Km/h</p>
                    <p>Wind dir: {windDir}</p>
                </div>
            </span>
        </div>
    )
}

export default WeatherCard