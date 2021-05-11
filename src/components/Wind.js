import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Wind = ({windKm, windMi}) => {
    const [isKilometers, setIsKilometers] = useState(true);

    return(
        <div>
            <h5>
                {isKilometers ? windKm : windMi} {isKilometers ? "Km/h" : "Mi/h"}
            </h5>
            <button className="btn btn-outline-primary btn-sm" onClick={() => setIsKilometers(!isKilometers)}> Km/Mi </button>
        </div>
    )
}

export default Wind