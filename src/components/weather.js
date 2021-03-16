import React from 'react';

const Weather = ({weather}) => {
  const getTime = () => {
    // const unixTimeStamp = weather.dt * 1000;
    const date = new Date();
    const time = {
      hour: 'numeric',
      minute: 'numeric',
    };
    const dayMonth = {
      month: 'long',
      day: 'numeric'
    };
    return `${date.toLocaleString("ru", time)}, ${date.toLocaleString("en-US", dayMonth)}`;
  };
  const getSunrise = () => {
    const unixTimeStamp = weather.sys.sunrise * 1000,
      date = new Date(unixTimeStamp);
      const options = {
        hour: 'numeric',
        minute: 'numeric',
      };
      return `${date.toLocaleString("ru", options)}`;
  };
  const getSunset = () => {
    const unixTimeStamp = weather.sys.sunset * 1000,
      date = new Date(unixTimeStamp);
      const options = {
        hour: 'numeric',
        minute: 'numeric',
      };
      return `${date.toLocaleString("ru", options)}`;
  };
 
  const city = weather.name,
    country = weather.sys.country,
    temp = (weather.main.temp - 273.15).toFixed(0),
    descr = weather.weather[0].description,
    weatherDescr = () => {
      return descr.charAt(0).toUpperCase() + descr.slice(1);
    },
    icon = weather.weather[0].icon,
    feels = (weather.main.feels_like - 273.15).toFixed(0),
    humidity = weather.main.humidity,
    windSpeed = weather.wind.speed.toFixed(1),
    pressure = weather.main.pressure;
    
  return (
    <div>
      <p className='date'>{getTime()}</p>
      <p className='location'>{city}, {country}</p>
      <p>{weatherDescr()}</p>
      <div className='temp'>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt=""/>
        <p>{temp}°C</p>
      </div>
      <div className="row">
        <div className='col'>
          <p className="key">sunrise</p>
          <p className="obj">{getSunrise()}</p>
        </div>
        <div className='col'>
          <p className="key">sunset</p>
          <p className="obj">{getSunset()}</p>
        </div>
        <span className="line-short"></span>
        <div className='col'>
          <p className="key">wind</p>
          <p className="obj">{windSpeed} m/s</p>
        </div>
        <div className='col'>
          <p className="key">Feels like</p>
          <p className="obj">{feels}°C</p>
        </div>
        <span className="line-short"></span>
        <div className='col'>
          <p className="key">humidity</p>
          <p className="obj">{humidity}%</p>
        </div>
        <div className='col'>
          <p className="key">pressure</p>
          <p className="obj">{pressure} hPa</p>
        </div>
      </div>   
    </div>
  );
};

export default Weather;