import React from 'react'

const ThreeDayWeather = ({weatherdata}) => {
    return (
        <div>
          <h2>{weatherdata.name}</h2>
          <p>{weatherdata.temp1}</p>
          <p>{weatherdata.temp2}</p>
          <p>{weatherdata.temp3}</p>
        </div>
    )
}

export default ThreeDayWeather
