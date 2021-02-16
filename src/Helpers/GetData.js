import axios from 'axios'

const API_key = '3c8f0a49a3ce49ee95b195656211202'

const getData = (lat, long) => {
    const Url = `http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${lat},${long}`
    const response = axios(Url);

    return response
}

export default getData