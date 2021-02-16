import {useState} from 'react';
import './StylesCard.css';

const Degrees = ({tempC, tempF}) => {
    const [isCelsius, setIsCelsius] = useState(true);
    return(
        <div>
            <h1>
                {isCelsius ? tempC : tempF} {isCelsius ? "°C" : "°F"}
            </h1>
            <button className="button" onClick={() => setIsCelsius(!isCelsius)}>Degrees °C/°F</button>
        </div>
    )
}

export default Degrees