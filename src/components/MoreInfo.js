import "./ComponentsStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloud, faWind, faTint} from '@fortawesome/free-solid-svg-icons'
import Wind from './Wind';

const MoreInfo = ({humidity, clouds, kilometers, miles}) => {

    return(
        <div className="info">
            <div className="info-box">
                <h6 className="info-title">
                    <FontAwesomeIcon icon={faTint} className="icon-weather" />
                    Humidity
                </h6>
                <h3 className="dimension-color">{humidity}%</h3>
            </div>
            <div className="info-box info-box-border">
                <h6 className="info-title">
                    <FontAwesomeIcon icon={faCloud} className="icon-weather" />
                    Clouds
                </h6>
                <h3 className="dimension-color">{clouds}%</h3>
            </div>
            <div className="info-box">
                <h6 className="info-title">
                    <FontAwesomeIcon icon={faWind} className="icon-weather" />
                    Wind
                </h6>
                <Wind windKm={kilometers} windMi={miles} />
            </div>
        </div>
    )
}

export default MoreInfo;