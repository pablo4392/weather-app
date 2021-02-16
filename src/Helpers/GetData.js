import axios from 'axios'

const API_key = '3c8f0a49a3ce49ee95b195656211202'

const getData = async(lat, long) => {
    // const Url = `http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${lat},${long}`
    const Url = `http://api.weatherapi.com/v1/current.xml?key=${API_key}&q=${lat},${long}`
    const response = await axios(Url);

    return response
}

export default getData