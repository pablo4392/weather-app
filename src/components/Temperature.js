import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Temperature = ({tempC, tempF}) => {
const [isCelsius, setIsCelsius] = useState(true)

return(
    <div>
        <h1>
            {isCelsius ? tempC : tempF} {isCelsius ? "°C" : "°F"}
        </h1>
        <button className="btn btn-outline-primary" onClick={() => setIsCelsius(!isCelsius)}>Degrees °C/°F</button>
    </div>
)
}

export default Temperature;

