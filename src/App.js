import './App.css';
import {useEffect, useState} from 'react';
import WeatherCard from './components/WeatherCard';
import GetData from './comunication/GetData';
import MoreInfo from './components/MoreInfo';
// import Spinner from './spinner/Spinner';

function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [continent, setContinent] = useState("");
  const [icon, setIcon] = useState("");
  const [iconDescription, setIconDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [windDir, setWindDir] = useState("");
  const [windKilometers, setWindKilometers] = useState("");
  const [windMiles, setWindMiles] = useState("");
  // const [hasData, setHasData] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      
      GetData(lat, long).then(res => {
        console.log(res.data)
        // setHasData(true)
        setCountry(res.data.location.country);
        setState(res.data.location.region);
        setContinent(res.data.location.tz_id)
        setIcon(res.data.current.condition.icon);
        setIconDescription(res.data.current.condition.text);
        setHumidity(res.data.current.humidity);
        setCelsius(res.data.current.temp_c);
        setFahrenheit(res.data.current.temp_f);
        setWindDir(res.data.current.wind_dir);
        setWindKilometers(res.data.current.wind_kph);
        setWindMiles(res.data.current.wind_mph)     ;
      })

    });
  }, []);

  return (
    <div className="App">
      <WeatherCard country={country} state={state} continent={continent} icon={icon} description={iconDescription} celsius={celsius} fahrenheit={fahrenheit} />
      <MoreInfo humidity={humidity} windDirection={windDir} kilometers={windKilometers} miles={windMiles} />
      {/* {hasData ? (
        <>
          <WeatherCard country={country} state={state} icon={icon} description={iconDescription} celsius={celsius} fahrenheit={fahrenheit} />
          <MoreInfo humidity={humidity} windDirection={windDir} kilometers={windKilometers} miles={windMiles} />
        </>
      ) : (
        <Spinner />
      )} */}
    </div>
  );
}

export default App;