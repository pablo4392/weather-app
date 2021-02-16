import './App.css';
import GetData from './Helpers/GetData.js'
import WeatherCard from './components/WeatherCard.js'
import {useEffect, useState} from 'react'

function App() {
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDir, setWindDir] = useState("");

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
        setWindSpeed(res.data.current.wind_kph)
        setWindDir(res.data.current.wind_dir)
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
      windSpeed={windSpeed}
      windDir={windDir}
      />
    </div>
  );
}

export default App;
