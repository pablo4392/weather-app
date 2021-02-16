import './App.css';
import GetData from './Helpers/GetData.js'
import WeatherCard from './components/WeatherCard.js'
import {useEffect, useState} from 'react'
import Degrees from './components/Degrees';

function App() {
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windDir, setWindDir] = useState("");
  const [celsius, setCelsius] = useState("");
  const [farenheit, setFarenheit] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [miles, setMiles] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) =>{
      const lat = pos.coords.latitude
      const long = pos.coords.longitude

      GetData(lat, long).then((res) => {
        console.log(res.data)
        setContinent(res.data.location.tz_id)
        setCountry(res.data.location.country)
        setCity(res.data.location.region)
        setCondition(res.data.current.condition.text)
        setIcon(res.data.current.condition.icon)
        setHumidity(res.data.current.humidity)
        setWindDir(res.data.current.wind_dir)
        setCelsius(res.data.current.temp_c)
        setFarenheit(res.data.current.temp_f)
        setKilometers(res.data.current.wind_kph)
        setMiles(res.data.current.wind_mph)
      })
    })
  }, [])

  return (
    <div className="App">
      <h1 className='title'>Weather App</h1>
      <WeatherCard 
      continent={continent}
      country={country}
      city={city}
      condition={condition}
      icon={icon}
      humidity={humidity}
      windDir={windDir}
      windKm={kilometers}
      windMi={miles}
      celsius={celsius}
      farenheit={farenheit}
      />
    </div>
  );
}

export default App;
