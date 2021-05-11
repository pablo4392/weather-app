import "./ComponentsStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wind from './Wind'

const MoreInfo = ({humidity, windDirection, kilometers, miles}) => {

    return(
        <div className="info">
            <div className="row">
                <div className="col-4 col-sm-12 info-box">
                    <h6>Humidity</h6>
                    <h3>{humidity}%</h3>
                </div>
                <div className="col-4 col-sm-12 info-box">
                    <h6>Wind direction</h6>
                    <h5>{windDirection}</h5>
                </div>
                <div className="col-4 col-sm-12 info-box">
                    <h6>Wind speed</h6>
                    <Wind windKm={kilometers} windMi={miles} />
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;