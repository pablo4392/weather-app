import "./ComponentsStyles.css"
import Temperature from "./Temperature";

const WeatherCard = ({country, state, icon, description, celsius, fahrenheit}) => {
    return(
        <div className="weather-card">
            <h1>{country}/{state}</h1>
            <div>
                <img className="icon" src={icon} alt={description} />
                <Temperature tempC={celsius} tempF={fahrenheit} />
            </div>
        </div>
    )
};

export default WeatherCard;