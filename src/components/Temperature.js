import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf} from '@fortawesome/free-solid-svg-icons';

const Temperature = ({tempC, tempF}) => {
const [isCelsius, setIsCelsius] = useState(true)

return(
    <div>
        <h1 className="dimension-color">
            <FontAwesomeIcon icon={faThermometerHalf} className="icon-termo" />
            {isCelsius ? tempC : tempF} {isCelsius ? "°C" : "°F"}
        </h1>
        <button className="btn btn-outline-light" onClick={() => setIsCelsius(!isCelsius)}>°C/°F</button>
    </div>
)
}

export default Temperature;

