import "./ComponentsStyles.css"
import Temperature from "./Temperature";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({country, state, colony, icon, description, celsius, fahrenheit}) => {
    return(
        <div className="weather-card">
            <h1 className="location-color">{country}/{state}</h1>
            <h6 className="location-color">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-weather" />
                {colony}
            </h6>
            <div>
                <img className="icon" src={icon} alt={description} />
                <h6 className="dimension-color">{description}</h6>
                <Temperature tempC={celsius} tempF={fahrenheit} />
            </div>    
        </div>
    )
};

export default WeatherCard;