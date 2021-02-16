import {useState} from 'react';
import './StylesCard.css';

const Wind = ({windKM, windMI}) => {
    const [isKilometers, setIsKilometers] = useState(true);
    return(
        <div>
            <h1>
                {isKilometers ? windKM : windMI} {isKilometers ? "Km/h" : "Mi/h"}
            </h1>
            <button className="button" onClick={() => setIsKilometers(!isKilometers)}>Km / Mi</button>
        </div>
    )
}

export default Wind