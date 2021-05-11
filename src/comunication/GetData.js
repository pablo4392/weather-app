import axios from "axios";

// const APIKey ="d9ced80eb548188cb6ebb573c0067c0a";
const API_key = 'bf24c3a6004a4320b9c230753211005';

const GetData = async(lat, lon) => {
    const Url = `http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${lat},${lon}`;
    const response = await axios(Url);

    return response;
}

export default GetData