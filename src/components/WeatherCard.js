import "./ComponentsStyles.css"
import Temperature from "./Temperature";

const WeatherCard = ({country, state, continent, icon, description, celsius, fahrenheit}) => {
    return(
        <div className="weather-card">
            <h1 className="title-location">{country}/{state}</h1>
            <h6>{continent}</h6>
            <div>
                <img className="icon" src={icon} alt={description} />
                <h6>{description}</h6>
                <Temperature tempC={celsius} tempF={fahrenheit} />
            </div>    
        </div>
    )
};

export default WeatherCard;