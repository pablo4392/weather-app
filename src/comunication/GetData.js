import axios from "axios";

const API_key = 'bf24c3a6004a4320b9c230753211005';

const GetData = (lat, lon) => {
    const Url = `http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${lat},${lon}`;
    const response = axios.get(Url);

    return response;
}

export default GetData