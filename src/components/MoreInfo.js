import "./ComponentsStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wind from './Wind'

const MoreInfo = ({humidity, windDirection, kilometers, miles}) => {

    return(
        <div className="margin-info">
            <div className="row info">
                <div className="col-4 info-box">
                    <h6 className="info-title">Humidity</h6>
                    <h3>{humidity}%</h3>
                </div>
                <div className="col-4 info-box">
                    <h6 className="info-title">Wind direction</h6>
                    <h5>{windDirection}</h5>
                </div>
                <div className="col-4 info-box">
                    <h6 className="info-title">Wind speed</h6>
                    <Wind windKm={kilometers} windMi={miles} />
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;