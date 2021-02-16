import {button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import getData from '../Helpers/getData.js'

const Degrees = () => {
    const [degrees, setDegrees] = useState(
        {
            main: {
                temp: '',
                temp_max: '',
                temp_min: ''
            }
    })

    useEffect(()=>{
      getData()
      .then(data => {
        setDegrees(data)
      })
    }, [])

    const changeDegrees = () => {
        alert('button')
    }

    return(
        <div className='degrees'>
            <h3>{degrees.main.temp}°C</h3>
            <h5>Max: {degrees.main.temp_max}°C</h5>
            <h5>Min: {degrees.main.temp_min}°C</h5>
            <button className='button' onClick={changeDegrees}>Convert Degrees</button>
        </div>
    )
}

export default Degrees