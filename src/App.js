import './App.css';
import {useEffect, useState} from 'react';
import GetData from './comunication/GetData';
import WeatherCard from './components/WeatherCard';
import MoreInfo from './components/MoreInfo';
import Spinner from './spinner/Spinner';

function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [colony, setColony] = useState("");
  const [icon, setIcon] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [clouds, setClouds] = useState("");
  const [windKilometers, setWindKilometers] = useState("");
  const [windMiles, setWindMiles] = useState("");
  const [hasData, setHasData] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      
      GetData(lat, long).then(res => {
        setHasData(true)
        setCountry(res.data.location.country);
        setState(res.data.location.region);
        setColony(res.data.location.name)
        setIcon(res.data.current.condition.icon);
        setWeatherDescription(res.data.current.condition.text);
        setHumidity(res.data.current.humidity);
        setCelsius(res.data.current.temp_c);
        setFahrenheit(res.data.current.temp_f);
        setClouds(res.data.current.cloud);
        setWindKilometers(res.data.current.wind_kph);
        setWindMiles(res.data.current.wind_mph)     ;
      },
      (error) => console.error(error)
      )
    });
  }, []);

  useEffect(()=>{
    switch(weatherDescription) {
      case 'Moderate or heavy rain with thunder': setBackgroundColor("#6e7c7c")
      break;
      case 'Moderate rain': setBackgroundColor("#4b778d")
      break;
      case 'Moderate rain at times': setBackgroundColor("#4b778d")
      break;
      case 'Partly cloudy': setBackgroundColor("#d8e3e7")
      case 'Sunny': setBackgroundColor("#fea82f")
      break;
      default: setBackgroundColor('#fea82f')
    }
  }, [weatherDescription])

  return (
    <div className="App" style={{background: backgroundColor}}>
      {hasData ? (
        <>
          <WeatherCard 
            country={country} 
            state={state} 
            colony={colony} 
            icon={icon} 
            description={weatherDescription} 
            celsius={celsius} 
            fahrenheit={fahrenheit} 
          />
          <MoreInfo 
            humidity={humidity} 
            clouds={clouds}
            kilometers={windKilometers} 
            miles={windMiles} 
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default App;